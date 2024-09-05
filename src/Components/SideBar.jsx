import "./SideBar.css";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { PiFilmSlateDuotone, PiPlaylistDuotone } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMusicalNoteOutline, IoNewspaperOutline } from "react-icons/io5";
import { CgLivePhoto } from "react-icons/cg";
import { FcSportsMode } from "react-icons/fc";
import { useNavigate } from "react-router";

export default function SideBar(){
  const navigate = useNavigate();
  return(
    <div className="h-screen w-60 font-sans font-semibold mt-16">
      <div className="w-60 h-[370px] p-3">
        <div onClick={() => navigate("/")}
          className="sidecomp bg-gray-700">
         <GoHomeFill color="white" size={36}/>
         <p className="w-full">Home</p>
        </div>

        <div className="sidecomp">
         <SiYoutubeshorts color="white" size={36}/>
         <p className="w-full">Shorts</p>
        </div>

        <div className="sidecomp">
         <MdOutlineSubscriptions color="white" size={36}/>
         <p className="w-full">Subscriptions</p>
        </div>

        <div className="mt-3 border-t border-gray-500"></div>

        <div className="py-3">
          <div className="sidecomp gap-0">
          <p className="text-base">You</p>
          <MdOutlineChevronRight color="white" size={24}/>
          </div>

          <div className="sidecomp">
          <GoHistory color="white" size={36}/>
          <p className="w-full">History</p>
          </div>

          <div className="sidecomp">
          <PiPlaylistDuotone color="white" size={36}/>
          <p className="w-full">Playlist</p>
          </div>
          
          <div className="sidecomp">
          <MdOutlineWatchLater color="white" size={36}/>
          <p className="w-full">Watch Later</p>
          </div>

          <div className="sidecomp">
          <BiLike color="white" size={36}/>
          <p className="w-full">Liked Videos</p>
          </div>

        </div>
      </div>
      <div className="mt-3 border-t border-gray-500"></div>

      <div className="p-3">
        <div className="sidecomp">
        <p className="text-base">Explore</p>
        </div>

        <div className="sidecomp">
        <SiTrendmicro color="white" size={36}/>
        <p className="w-full">Trending</p>
        </div>

        <div className="sidecomp">
        <HiOutlineShoppingBag color="white" size={36}/>
        <p className="w-full">Shopping</p>
        </div>
        
        <div className="sidecomp">
        <IoMusicalNoteOutline color="white" size={36}/>
        <p className="w-full">Music</p>
        </div>

        <div className="sidecomp">
        <PiFilmSlateDuotone color="white" size={36}/>
        <p className="w-full">Films</p>
        </div>

        <div className="sidecomp">
        <CgLivePhoto color="white" size={36}/>
        <p className="w-full">Live</p>
        </div>

        <div className="sidecomp">
        <SiYoutubegaming color="white" size={36}/>
        <p className="w-full">Gaming</p>
        </div>
        
        <div className="sidecomp">
        <IoNewspaperOutline color="white" size={36}/>
        <p className="w-full">News</p>
        </div>

        <div className="sidecomp">
        <FcSportsMode color="white" size={36}/>
        <p className="w-full">Sport</p>
        </div>
      
      <div className="mt-3 border-t border-gray-500"></div>
      </div>
    </div>
  )
}