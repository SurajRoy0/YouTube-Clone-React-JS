import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/VideoLength";

const SuggestionVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-3">
        <div className="relative h-full w-full md:h-24 lg:h-20 xl:h-24 md:w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] md:rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt={video?.title}
          />
          {video.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm font-bold mt-2 md:mt-0 text-white line-clamp-2">
            {video?.title}
          </span>
          <div className="flex flex-row md:flex-col align-middle">
            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1 lg:text-[10px] xl:text-[12px]" />
              )}
            </span>
            <span className="md:hidden text-[12px] mr-1 ml-1 text-white/[0.7] mt-2">
              .
            </span>
            <span className="text-[12px] mt-2 md:mt-0 lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7]  truncate overflow-hidden">{`${abbreviateNumber(
              video?.stats?.views,
              2
            )} views . ${video?.publishedTimeText}`}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionVideoCard;
