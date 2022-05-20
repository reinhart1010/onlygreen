import { Children } from "react";

export interface ContentContainerProps {
  id?: string,
  className?: string,
  children?: React.ReactNode,
  forceFull?: Boolean
  noPadding?: Boolean
}

const ContentContainer = (props: ContentContainerProps) => {
  let forceFull = props.forceFull || false;
  let noPadding = props.noPadding || false;
  return (
    <div {...props}>
      <div className={`w-full m-auto ${forceFull ? '' : 'max-w-4xl'} ${noPadding ? 'p-0' : 'p-4'}`}>
        {props.children}
      </div>
    </div>
  );
};

export default ContentContainer;