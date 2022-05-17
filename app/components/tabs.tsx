import { FC } from "react"

interface TabsProps {
  active: number,
  items: Array<TabItem>
}

interface TabItem {
  child: JSX.Element,
  id: string
}

const Tabs: React.FC<TabsProps> = (props: TabsProps) : JSX.Element => {
  let {active, items} = props, i: number;
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="bg-black/5 dark:bg-white/5 border-2 border-black dark:border-white flex flex-row p-2 rounded-full">
        {items.map((tabItem: TabItem, i: number) => (<div id={tabItem.id} className={`${i == active ? 'bg-white drop-shadow-lg text-black' : ''} px-6 py-4 rounded-full`}>{tabItem.child}</div>))}
      </div>
    </div>
  );
}

export default Tabs;