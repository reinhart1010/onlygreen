import Header from "~/components/header";
import Hero from "~/components/hero";
import Tabs from "~/components/tabs";

export default function Index() {
  return (
    <>
      <Header isFloating={true} />
      <Hero />
      <Tabs active={1} items={[
        {
          id: '1',
          child: (<p>Hello</p>)
        },
        {
          id: '2',
          child: (<p>World</p>)
        }
      ]}/>
    </>
  );
}
