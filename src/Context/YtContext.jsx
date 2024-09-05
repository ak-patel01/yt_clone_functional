import { createContext, useState } from "react";
import { ytSearch1, ytSearch2, ytUrl, ytUrl2, videoDetail } from "../data.js";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/HomeSlice.jsx";
import { useNavigate } from "react-router";

// Step1
export const YtContext = createContext();

function YtContextProvider({ children }) {    // children -> App component id=7ghhRHRP6t4

    const search = useSelector(state => state.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ loading, setLoading ] = useState(false);
    const [items, setitems] = useState([]);
    const [query, setQuery ] = useState("All");
    const [sidebar, setSidebar ] = useState("inactive");
    const [videoID, setVideoID ] = useState('');
    const [video, setVideo] = useState(null);

    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${ytSearch1}q=${query}&${ytSearch2}`,
          {
            method: "GET",
            headers: {
              'x-rapidapi-key': 'd268f36ee6msh2f2b00e18179707p1a6c1ajsnc45256680bf9',
              'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
          }
        );
        const data = await res.json();
        // console.log(data);
        setitems(data.items);
    
      } catch (error) {
        console.log(error);
        console.log("there is error");
      }
      setLoading(false);
    }

    const fetchVideo = async (videoID) => {
      setLoading(true);
      try {
        const res = await fetch(`${videoDetail}&id=${videoID}`,
          {
            method: "GET",
            headers: {
              'x-rapidapi-key': 'd268f36ee6msh2f2b00e18179707p1a6c1ajsnc45256680bf9',
              'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
          }
        );
        const data = await res.json();
        // console.log(data.items[0]);
        setVideo(data.items[0]);
    
      } catch (error) {
        console.log(error);
        console.log("there is error");
      }
      setLoading(false);
    }
    
    function changeHandler(event){
      dispatch(add(event.target.value));
    }

    function clickHandler(){
      setQuery(search);
      dispatch(add(""))
    }

    function sideHandler(){
      if(sidebar == "active"){
        setSidebar("inactive");
      }else{
        setSidebar("active");
      }
    }

    function btnsHandler(ytButton){
      setQuery(ytButton);
    }

    function viewVideo(videoID){
      setVideoID(videoID);
      fetchVideo(videoID);
      navigate("/video");
    }
    
    const value = {
        loading,
        setLoading,
        items,
        setitems,
        query,
        setQuery,
        search,
        sidebar,
        setSidebar,
        video,
        setVideo,
        videoID,
        setVideoID,
        viewVideo,
        fetchVideo,
        sideHandler,
        changeHandler,
        clickHandler,
        btnsHandler,
        fetchData,
    }

    return <YtContext.Provider value={value}>
        {children}
    </YtContext.Provider>
}

export default YtContextProvider;