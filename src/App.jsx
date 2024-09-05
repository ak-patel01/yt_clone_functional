import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from "./Components/NavBar";
import YouTube from "./Components/YouTube";
import Home from './Components/Home';
import { useContext, useEffect, useState } from 'react';
import { YtContext } from './Context/YtContext';
import SideBar from './Components/SideBar';
import SideBar2 from './Components/SideBar2';
import Video from './Components/Video';
import BtnBar from './Components/BtnBar';

function App() {
  const { fetchData, query, sidebar, video } = useContext(YtContext);

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className='bg-black'>
      <NavBar />
      <div className='flex'>
        {
          sidebar === "active" ? (<SideBar/>) : (<SideBar2 />)
        }
        <Routes>
          <Route index element={
            <div className='mr-12 p-2'>
              <BtnBar />
              <Home />
            </div>} /> 
          <Route path='/video' element={
            video !== null ? <Video video={video}/> : <div className='h-screen w-screen text-center text-white text-2xl'>No Data Found</div>
          } />
        </Routes>
      </div>
      <div className='w-screen h-10'></div>
    </div>
  )
}

export default App
