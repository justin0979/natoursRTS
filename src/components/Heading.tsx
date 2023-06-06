import { ReactNode } from "react";

interface HeadingProps {
  primary?: boolean;
  children?: ReactNode;
}

const Heading = ({ primary, children }: HeadingProps) => {
  if (primary) {
    const text = children && children.toString().split(" ");
    return (
      <h1 className="heading-primary">
        <span className="heading-primary--main">
          {text && text.shift()}
        </span>
        <span className="heading-primary--sub">
          {text && text.join(" ")}
        </span>
      </h1>
    );
  }
  return <div className="">{children}</div>;
};

export default Heading;
