import { ChevronCompactDown } from "react-bootstrap-icons";

export class HeroProps {
  children?: React.ReactNode;
  hideTitle?: boolean = false;
  title?: String;
}

const Hero = (props: HeroProps) => {
  let {children, hideTitle, title} = props;

  let childrenJSX: Array<React.ReactNode> = [];
  if (typeof title != 'undefined' && !hideTitle) childrenJSX.push(<h1 className="font-serif text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl md:tracking-tight w-full">{title}</h1>);
  if (typeof children != 'undefined') childrenJSX.push(children);

  return (<div className="flex flex-col h-screen items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16" style={{
    // backgroundImage: "url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')"
  }}>
    {childrenJSX}
    <ChevronCompactDown className="animate-bounce mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-6xl " />
  </div>);
}

export default Hero;