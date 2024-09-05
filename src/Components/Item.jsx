import { HiOutlineDotsVertical } from "react-icons/hi";
import { YtContext } from "../Context/YtContext";
import { useContext } from "react";

export default function Item({ item }){
  const publishTime = new Date(item.snippet.publishTime);
  const now = new Date();
  const timeDifference = now - publishTime;
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  const { viewVideo } = useContext(YtContext);
  const imageUrl = ('high' in item.snippet.thumbnails) ? item.snippet.thumbnails.high.url : item.snippet.thumbnails.default.url;

  return(
    <div onClick={() => {viewVideo(item.id.videoId)}} className="flex flex-col items-center h-full w-full m-3 rounded-md text-white mb-auto hover:bg-gray-800 hover:shadow-inner hover:shadow-gray-800 p-2">
      <div className="w-full h-full">
        <img className="w-full h-full max-h-72 rounded-lg overflow-hidden cursor-pointer" src={imageUrl} />
      </div>
      <div className="flex gap-3 mt-2 w-full cursor-pointer mx-auto min-h-[100px]">
        <div className=" h-[40px] w-[40px]"><img className="rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/002/206/015/small/developer-working-icon-free-vector.jpg" alt="image" /></div>
        <div className="w-full">
          <div className="line-clamp-2 font-bold">
            <h4>{item.snippet.title}</h4>
          </div>
          <div className="text-neutral-400 hover:text-white text-sm">
            <p>{item.snippet.channelTitle}</p>
          </div>
          <div className="text-neutral-400 text-sm">
            {
              hours > 1 ? (<p>12.1M views - {hours} hours ago</p>) : (<p>800K views - {minutes} minutes ago</p>) 
            }
          </div>
        </div>
        <div className="h-[24px] w-[24px] m-[1px]">
        <HiOutlineDotsVertical size={24} />
        </div>
      </div>
    </div>
  )
}


// {
//   item.snippet.liveBroadcastContent === "none" ? (
//     <img className="w-full h-full max-h-72 rounded-lg overflow-hidden cursor-pointer" src={item.snippet.thumbnails.high.url} />
//   ) : (
//     <img className="w-full h-full max-h-72 rounded-lg overflow-hidden cursor-pointer" src={item.snippet.thumbnails.default.url} />
//   )
// }