import React from "react";
import HomeFinal from "./HomeFinal";
import HomeFirst from "./HomeFirst";
import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";
import "./styles/Home.scss";
function Home() {
  return (
    <div>
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
      <HomeFinal />
    </div>
  );
}

export default Home;
