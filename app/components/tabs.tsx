import { useEffect, useRef, useState } from 'react';
import { ThreeDots } from 'react-bootstrap-icons';

export interface TabItem {
  child: JSX.Element,
  id: string
}

export interface TabsProps {
  active?: number,
  center?: Boolean,
  className?: string,
  id?: string,
  items: Array<TabItem>,
  onActiveChange?: TabsOnActiveChangeCallback,
}

type TabsOnActiveChangeCallback = (newTab: number) => void;

const Tabs: React.FC<TabsProps> = (props: TabsProps) : JSX.Element => {
  let {items, onActiveChange} = props;
  let tabsRef = useRef<HTMLDivElement>(null);
  let [active, setActive] = useState(props.active || 0);
  let [renderMoreButton, setRenderMoreButton] = useState(false);
  let [showMore, setShowMore] = useState(false);

  let center = typeof props.center != 'undefined' ? props.center : true;
  
  function changeTab(destination: number) {
    if (destination < 0 || destination >= items.length) return;

    if (typeof onActiveChange != 'undefined') onActiveChange(destination);
    setActive(destination);
  }

  function checkTabOverflow() {
    setRenderMoreButton(tabsRef.current!.scrollWidth > tabsRef.current!.clientWidth);
  }

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  useEffect(() => {
    checkTabOverflow();
    window.addEventListener('resize', checkTabOverflow, false);
  }, []);

  return (
    <div className={`flex flex-col ${center ? 'items-center' : ''} w-full ${props.className}`} id={props.id}>
      <div className="bg-black/10 border-2 border-current flex flex-row justify-between rounded-full w-full max-w-min overflow-clip">
        <div ref={tabsRef} className="flex flex-row mw-full overflow-x-auto p-2">
          {items.map((tabItem: TabItem, i: number) => (<div key={tabItem.id} id={tabItem.id} className={`${i == active ? 'bg-white drop-shadow-lg text-black' : ''} whitespace-nowrap px-6 py-4 rounded-full`} onClick={(e) => { changeTab(i); }}>{tabItem.child}</div>))}
          <div className={`${renderMoreButton ? 'visible' : 'hidden' } bg-white drop-shadow-lg text-black p-4 right-0 rounded-full sticky`} onClick={toggleShowMore}>
            <ThreeDots aria-hidden={true} className="text-2xl"/>
            <span className="sr-only">More...</span>
          </div>
        </div>
      </div>
      <div className={`${showMore ? 'visible' : 'hidden'} bg-black/50 fixed flex h-full items-center justify-center left-0 top-0 w-full z-30`}>
        <div className="h-full left-0 m-4 max-h-lg max-w-lg"></div>
      </div>
    </div>
  );
}

export default Tabs;
