import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import LayoutApp from "./LayoutApp";
import Home from "../pages/home/Home";
import Friends from "../pages/friend/Friends";
import Videos from "../pages/video/Videos";
import Posts from "../pages/posts/Posts";
import Profile from "../pages/profile/Profile";
import InscriptionApp from "./InscriptionApp";
import App from "../App";

const MainApp = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<LayoutApp />}>
            <Route path='' element={<Home />} />
            <Route path='video' element={<Videos />} />
            <Route path='freiend' element={<Friends />} />
            <Route path='post' element={<Posts />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default MainApp;
