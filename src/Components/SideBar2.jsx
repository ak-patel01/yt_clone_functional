import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { SiYoutubeshorts } from "react-icons/si";
import { useNavigate } from "react-router";

export default function SideBar2(){
  const navigate = useNavigate();
  return(
    <div className="w-18 h-screen flex flex-col text-gray-200 p-1 items-center cursor-pointer mt-16">
      <div onClick={() => navigate("/")}
          className="text-[10px] w-16 h-18 text-center py-4 flex flex-col justify-center rounded-lg hover:bg-gray-700">
         <span className="px-5 pb-1"><GoHomeFill color="white" size={24}/></span>
         <p>Home</p>
        </div>

        <div className="text-[10px] w-16 h-18 text-center py-4 flex flex-col justify-center rounded-lg hover:bg-gray-700">
         <span className="px-5 pb-1"><SiYoutubeshorts color="white" size={24}/></span>
         <p>Shorts</p>
        </div>

        <div className="text-[10px] w-16 h-18 text-center py-4 flex flex-col justify-center rounded-lg hover:bg-gray-700">
         <span className="px-5 pb-1"><MdOutlineSubscriptions color="white" size={24}/></span>
         <p>Subscriptions</p>
        </div>

        <div className="text-[10px] w-16 h-18 text-center py-4 flex flex-col justify-center rounded-lg hover:bg-gray-700">
         <span className="px-5 pb-1"><PiVideo color="white" size={24}/></span>
         <p >You</p>
        </div>
    </div>
  )
}