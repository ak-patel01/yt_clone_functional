import { useDispatch, useSelector } from "react-redux";
import { liveRemove } from "../redux/HomeSlice.jsx";

export default function Live(){

  const live = useSelector((state) => state.live);
  const dispatch = useDispatch();

  // if(live.length > 15){
  //   dispatch(liveRemove());
  // }
  
  return (
    <div className="p-2 scrollBar bg-black text-white border-2 border-gray-400"style={{display:'flex', height:'500px',width:'400px', overflowY:'scroll', flexDirection:'column-reverse' }}>
      <div className="h-fit w-fit">
        {
          live.length > 0 == 0 ? (<p>Live Chat Off</p>) : (
            live.map((comm, index) => {
              return <p key={index} className="h-fit w-full pl-2 py-1 border border-gray-800 text-sm font-semibold">{comm}</p>
            })
          )
        }
      </div>
    </div>
  )
}