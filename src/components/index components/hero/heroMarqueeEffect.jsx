import {
  Css,
  Javascript,
  Java,
  NpmIcon,
  Nodejs,
  _React,
  GithubIcon,
  Github,
  Vite,
  Postgresql,
} from "@dev.icons/react";
import { Html5 } from "@dev.icons/react/mono";
import "../../../css/marquee.css";
// import Marquee from "react-fast-marquee";

function HeroMarqueeEffect() {
  return (
    <>
      <div className="marquee my-7">
        <div className="marquee-track gap-12">
          <Html5 size={50} />
          <Css size={50} />
          <Javascript size={50} />
          <Java size={50} />
          <Nodejs size={50} />
          <_React size={50} />
          <GithubIcon size={50} />
          <NpmIcon size={50} />
          <Vite size={50} />
          <Postgresql size={50} />

          <Html5 size={50} />
          <Css size={50} />
          <Javascript size={50} />
          <Java size={50} />
          <Nodejs size={50} />
          <_React size={50} />
          <Github size={50} />
          <NpmIcon size={50} />
        </div>
      </div>
    </>
  );
}

export default HeroMarqueeEffect;
