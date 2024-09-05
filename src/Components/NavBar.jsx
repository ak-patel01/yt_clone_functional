import { FaYoutube } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { PiMicrophoneFill } from "react-icons/pi";
import { RiVideoAddLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import "./NavBar.css";
import { useContext } from "react";
import { YtContext } from "../Context/YtContext.jsx";
import { useNavigate } from "react-router";

export default function(){

    const { search, changeHandler, clickHandler, sideHandler } = useContext(YtContext);
    const navigate = useNavigate();
    return (
        <div className="flex w-screen fixed justify-between items-center h-[60px] bg-black text-white mx-auto">
            <div className="flex relative">
                <span onClick={sideHandler} className="mx-5 cursor-pointer p-[8px] rounded-full hover:bg-zinc-800"><HiOutlineBars3 color="white" size={25}/></span>
                <div onClick={() => navigate("/")} className="flex items-center cursor-pointer">
                    <span ><FaYoutube color="red" size={30}/></span>
                    <span className="text-lg font-bold">YouTube</span>
                    <span className="text-xs ml-1 mb-4">IN</span>
                </div>
            </div>
            <div className="flex item-center h-[36px]">
                <input className="h-full xs:w-[70px] sm:w-[220px] md:w-[300px] lg:w-[360px] xl:w-[420px] 2xl:w-[500px] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-black p-3 text-sm rounded-l-full" 
                        type="text"
                        placeholder="Search"
                        onChange={changeHandler} 
                        value={search}/>
                <button className="h-full border border-zinc-800 bg-zinc-800 w-12 py-1 pl-3 rounded-r-full cursor-pointer ">
                    <CiSearch size={25}
                        onClick={clickHandler}
                    /></button>
                <div className="bg-zinc-800 ml-3 p-[10px] rounded-full hover:bg-zinc-700 cursor-pointer">
                    <PiMicrophoneFill size={18}/>
                </div>
            </div>
            <div className="flex gap-5 h-full items-center">
                <span className="p-[8px] rounded-full hover:bg-zinc-800 cursor-pointer"><RiVideoAddLine size={30}/></span>
                <span className="p-[8px] rounded-full hover:bg-zinc-800 cursor-pointer"><CiBellOn size={25}/></span>
                <div className="h-[35px] w-[35px] mr-8 cursor-pointer"><img className="rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/002/206/015/small/developer-working-icon-free-vector.jpg" alt="image" /></div>
            </div>
        </div>
    )
}