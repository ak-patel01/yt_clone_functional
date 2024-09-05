import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { liveUrl } from "../data.js";
import { liveAdd } from "../redux/HomeSlice.jsx";

export const YtLiveContext = createContext();

function LiveContext({ children }) {

  const dispatch = useDispatch();

  function getRandomEmoji() {
    const emojis = ["😊", "🚀", "👍", "😂", "🎉", "🔥", "❤️", "🙌", "🎈", "😎", "💡", "🤔", "👏", "🎁", "😄"];

    return emojis[Math.floor(Math.random() * emojis.length)];
  }

  const [ loading, setLoading ] = useState(false);
  
  const liveData = async () => {
    const num = Math.floor((Math.random() * 340) + 1);
    setLoading(true)
    try {
      const res = await fetch(`${liveUrl}${num}`);
      const data = await res.json();
      // console.log(data);

      let comment = data.user.fullName.concat("   ", data.body, getRandomEmoji());
      console.log(comment);
      dispatch(liveAdd(comment));
  
    } catch (error) {
      console.log(error);
      console.log("there is error");
    }
    setLoading(false);
  }

  const liveValue = {
    liveData,
  }

  return <YtLiveContext.Provider value={liveValue}>
        {children}
    </YtLiveContext.Provider>
}

export default LiveContext;