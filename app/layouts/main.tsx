import Header from "~/components/header";
import Hero, { HeroProps } from "~/components/hero";

class MainLayoutProps {
  children?: React.ReactNode;
  hero?: HeroProps = {};
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Hero {...props.hero} />
      {props.children}
    </>
  );
}

export default MainLayout;