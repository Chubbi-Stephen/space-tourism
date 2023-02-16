import React from "react";
import logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="flex w-[94%] right-0 justify-center items-center absolute h-[93px] bg-transparent">
      <img src={logo} alt="logo" className="w-[3%] absolute left-0" />
      <div className="w-[30%] absolute bg-[#979797] h-[0.97px] left-24"></div>
      <ul className="w-[560px] relative left-20 pl-20 flex justify-between items-center opacity-1 text-white">
        <li className="mx-2">
          <Link to="/">00 Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/destination">01 Destination</Link>
        </li>
        <li className="mx-4">02 Crew</li>
        <li className="mx-4">03 Technology</li>
      </ul>
      <nav className="w-[800px] h-14 absolute right-0 p-4 px-6 bg-white opacity-[0.04]"></nav>
    </section>
  );
};

export default Navigation;
