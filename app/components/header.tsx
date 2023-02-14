import { Boxes, HouseDoor, InfoCircle, RocketTakeoff, Stickies } from "react-bootstrap-icons";
import Tabs from "./tabs";

const Header = () => {
  return (
    <>
      <header className={`fixed backdrop-blur bg-white/75 dark:bg-black/75 flex justify-items-center items-center p-4 top-0 w-full z-30`}>
        {/* <p className="font-medium text-lg">Reinhart Previano Koentjoro</p> */}
        <Tabs center={false} items={[
            {
              id: 'home',
              child: (<p><HouseDoor aria-hidden={true} className="inline mr-2" />Home</p>)
            },
            {
              id: 'products',
              child: (<p><Boxes aria-hidden={true} className="inline mr-2" />Products</p>)
            },
            {
              id: 'missions',
              child: (<p><RocketTakeoff aria-hidden={true} className="inline mr-2" />Missions</p>)
            },
            {
              id: 'updates',
              child: (<p><Stickies aria-hidden={true} className="inline mr-2" />Updates</p>)
            },
            {
              id: 'about',
              child: (<p><InfoCircle aria-hidden={true} className="inline mr-2" />About</p>)
            },
          ]}/>
      </header>
      <div className="h-28 p-3 w-full" />
    </>
  );
};

export default Header;