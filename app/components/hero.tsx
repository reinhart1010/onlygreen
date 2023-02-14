import { useEffect, useRef } from "react";
import { ChevronCompactDown } from "react-bootstrap-icons";
import { PostTheme } from "~/models/post";

export interface HeroProps {
  children?: React.ReactNode,
  coverTextColorScheme?: "light" | "dark",
  coverImage?: string,
  coverImageSrcSet?: Array<[string, string]>,
  fullHeight?: boolean,
  hideTitle?: boolean,
  title?: String,
  theme?: PostTheme
}

const Hero = (props: HeroProps) => {
  let {children, coverImage, coverImageSrcSet, coverTextColorScheme, fullHeight, hideTitle, title} = props;
  const heroRef = useRef(null);

  let childrenJSX: Array<React.ReactNode> = [];
  if (typeof title != 'undefined' && !hideTitle) childrenJSX.push(<h1 className="font-serif text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl md:tracking-tight w-full" ref={heroRef}>{title}</h1>);
  if (typeof children != 'undefined') childrenJSX.push(children);

  return (
  <div className="items-center justify-center">
    <div className={`flex flex-col ${fullHeight ? 'screen' : ''} items-center justify-center h-96 p-4 sm:p-8 md:p-12 lg:p-16`}>
      {childrenJSX}
      <ChevronCompactDown className="animate-bounce mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-6xl z-0" />
    </div>
    {(coverImage) ? <picture>
      <source src={coverImage} srcSet={coverImageSrcSet ? (coverImageSrcSet.map((el) => el.join(" ")).join(",\n")) : undefined}/>
      <img src={coverImage} className="w-screen" />
    </picture> : <></>}
  </div>);
}

export default Hero;