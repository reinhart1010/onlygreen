import { ChevronCompactDown } from "react-bootstrap-icons";

export default function Hero() {
  return (<div className="flex flex-col h-screen items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
    <h1 className="font-serif text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl md:tracking-tight w-full">Interface in<br/>Polymorphism&trade;</h1>
    <ChevronCompactDown className="animate-bounce mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-6xl " />
  </div>);
}