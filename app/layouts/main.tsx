import Header, { HeaderProps } from "~/components/header";
import Hero, { HeroProps } from "~/components/hero";

class MainLayoutProps {
  children?: React.ReactNode;
  header: HeaderProps = {
    isFloating: false
  };
  hero: HeroProps = {};
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Header {...props.header} />
      <Hero {...props.hero} />
      {props.children}
    </>
  );
}

export default MainLayout;