import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { AppContext } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";
import { useCallback } from "react";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const { searchQuery } = useParams();
  const { setLoading } = useContext(AppContext);

  const fetchSearchResults = useCallback(async () => {
    setLoading(true);
    const res = await fetchDataFromApi(`search/?q=${searchQuery}`);
    setResult(res.contents);
    setLoading(false);
  }, [setLoading, searchQuery]);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery, fetchSearchResults]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[clac(100%-240px)] h-full customScroll overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            return (
              <SearchResultVideoCard
                key={item?.video?.videoId}
                video={item?.video}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
