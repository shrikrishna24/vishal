import React from "react";
import { useLocation } from 'react-router-dom';
import Routing from "../routing/routing";
import Sidebar from "../components/sidebar/sidebar";
import "./content.css";

export default function Content() {

  const Outside = ['/login', '/signup', '/resetpsw', '/forgetpsw'];
  const Location = useLocation();
  const isOutside = Outside.some((path) => Location.pathname.includes(path)) || Location.pathname === '/';

  return (
    <div className="container">

      {!isOutside ? <Sidebar /> : ''}

      <div style={isOutside ? { borderRadius: '0' } : { borderRadius: '40px 0px 0px 40px' }} className="content">
        <Routing />
      </div>

    </div>
  );
}
