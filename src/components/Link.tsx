import { ReactNode } from "react";
import useNavigation from "../hooks/use-navigation";

interface LinkProps {
  to: string;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

const Link = ({
  to,
  className = "",
  activeClassName,
  children,
}: LinkProps) => {
  const { currentPath, navigate } = useNavigation();

  const handleClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  if (to[0] === "#") {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    );
  }

  return (
    <a className={className} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
