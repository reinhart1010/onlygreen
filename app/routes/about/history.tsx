import Header from "~/components/header";
import Hero from "~/components/hero";
import Tabs from "~/components/tabs";

export default function History() {
  return (
    <>
      <Header isFloating={true} />
      <Hero title="Once upon a unix timestamp..."/>
      <Tabs active={1} items={[
        {
          id: '1',
          child: (<p>Bank SulutGo</p>)
        },
        {
          id: '2',
          child: (<p>Kawasan Industri Makasar</p>)
        },
        {
          id: '3',
          child: (<p>Taraindo Energi Perkasa</p>)
        }
      ]}/>
    </>
  );
}
