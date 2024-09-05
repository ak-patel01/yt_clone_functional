import Spinner from "./Spinner";
import { YtContext } from "../Context/YtContext.jsx";
import { useContext, useEffect } from "react";
import "./NavBar.css";
import { SlDislike, SlLike } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { YtLiveContext } from "../Context/LiveContext.jsx";
import Live from "./Live.jsx";

export default function Video({ video }){

  const { liveData } = useContext(YtLiveContext);

  useEffect(() => {
    const interval = setInterval(() => {
      liveData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { loading } = useContext(YtContext);
  const imageUrl = video?.snippet?.thumbnails?.maxres?.url 
                    ? video.snippet.thumbnails.maxres.url 
                    : video?.snippet?.thumbnails?.high?.url;

  return(
    <div className="flex mr-5">
      <div className="text-white max-w-4xl h-88 p-3">
        {
          loading ? (<Spinner/>) : (
            <div>
              <div className="max-w-4xl h-84">
                <img className="h-full w-full " src={imageUrl}  />
              </div>

              <div className="h-7 text-xl font-bold truncate mt-2">
                <p>{video.snippet.title}</p>
              </div>

              <div className="mt-3 h-11 flex justify-between">
                <div className="flex gap-2">
                  <div className="h-10 w-10">
                    <img className="h-full w-full rounded-full" src={imageUrl}  />
                  </div>
                  <div className="mr-6">
                    <div className="text-base font-semibold"><h5>{video.snippet.channelTitle}</h5></div>
                    <div className="text-[12px] text-zinc-400">{video.statistics.viewCount} subscribers</div>
                  </div>
                  <div className="">
                    <button className="button-17" role="button">Subscribe</button>
                  </div>
                </div>
                <div className="flex gap-1 font-semibold text-sm">
                  <div className="flex ">
                    <button className=" rounded-l-2xl flex items-center justify-between h-9 w-24 text-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 cursor-pointer border-r border-gray-500">
                    <SlLike size={20} />
                    <p>{video.statistics.likeCount}</p>
                    </button>
                    <button className="rounded-r-2xl h-9 w-14 px-4 py-1 bg-zinc-800 hover:bg-zinc-700 cursor-pointer"><SlDislike size={20}/></button>
                  </div>
                  <button className="rounded-2xl h-9 w-24 text-center px-2 py-1 bg-zinc-800 hover:bg-zinc-700 cursor-pointer">Share</button>
                  <button className="rounded-2xl h-9 w-28 px-2 py-1 bg-zinc-800 hover:bg-zinc-700 cursor-pointer">Download</button>
                  <button className="rounded-full h-9 w-9 px-2 py-1 bg-zinc-800 hover:bg-zinc-700 cursor-pointer"><BsThreeDotsVertical size={20} /></button>
                </div>
              </div>
          </div>
          )
        }
      </div>

      <div className="mt-20 ml-5">
        <Live />
      </div>
    </div>
  )
}