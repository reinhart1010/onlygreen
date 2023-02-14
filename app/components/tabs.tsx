import { useEffect, useRef, useState } from 'react';
import { ThreeDots, XCircle } from 'react-bootstrap-icons';
import * as RadixDialog from '@radix-ui/react-dialog';
import * as RadixTabs from '@radix-ui/react-tabs';

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
    <div>
      <RadixTabs.Root className={`flex flex-col ${center ? 'items-center' : ''} w-full ${props.className}`} id={props.id}>
        <div className="bg-black/10 border-2 border-current flex flex-row justify-between rounded-full w-full max-w-min overflow-clip">
          <RadixTabs.List ref={tabsRef} className="flex flex-row mw-full overflow-x-auto p-2">
            {items.map((tabItem: TabItem, i: number) => (<RadixTabs.Trigger value={tabItem.id} key={tabItem.id} id={tabItem.id} className={`${i == active ? 'bg-white drop-shadow-lg text-black' : 'hover:bg-white/30 focus:bg-white/30'} mr-1 px-6 py-4 rounded-full whitespace-nowrap`} onClick={(e) => { changeTab(i); }}>{tabItem.child}</RadixTabs.Trigger>))}
            <RadixTabs.Trigger value="$more" className={`${renderMoreButton ? 'visible' : 'hidden' } bg-white drop-shadow-lg p-4 right-0 rounded-full sticky text-black`} onClick={toggleShowMore}>
              <ThreeDots aria-hidden={true} className="text-2xl"/>
              <span className="sr-only">More...</span>
            </RadixTabs.Trigger>
          </RadixTabs.List>
        </div>
      </RadixTabs.Root>

      <RadixDialog.Root open={showMore}>
        <RadixDialog.Portal>
          <RadixDialog.Overlay className="bg-black/50 fixed flex h-full items-center justify-center left-0 top-0 w-full z-30"/>
          <RadixDialog.Content className="fixed flex h-full items-center justify-center left-0 top-0 w-full z-40">
            <div className="bg-white dark:bg-black max-w-xl p-6 rounded-xl text-black dark:text-white w-full">
              <RadixTabs.Root>
                <RadixTabs.List className="flex flex-row flex-wrap gap-1 items-center mw-full p-2">
                  <RadixTabs.Trigger value="$close" className="bg-white drop-shadow-lg p-4 rounded-full text-black" onClick={toggleShowMore}>
                    <XCircle aria-hidden={true} className="text-2xl"/>
                    <span className="sr-only">Close...</span>
                  </RadixTabs.Trigger>
                  <div className="bg-white h-8 mx-2" style={{width: "1px"}}/>
                  {items.map((tabItem: TabItem, i: number) => (<RadixTabs.Trigger value={tabItem.id} key={tabItem.id} id={tabItem.id} className={`${i == active ? 'bg-white drop-shadow-lg text-black' : 'hover:bg-white/30 focus:bg-white/30'} mr-1 px-6 py-4 rounded-full whitespace-nowrap`} onClick={(e) => { changeTab(i); }}>{tabItem.child}</RadixTabs.Trigger>))}
                </RadixTabs.List>
              </RadixTabs.Root>
            </div>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  );
}

export default Tabs;
