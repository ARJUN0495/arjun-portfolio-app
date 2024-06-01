import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
  const theme = props.theme;
  return (
    <div>
      <Header theme={theme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <TopButton theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default Home;
