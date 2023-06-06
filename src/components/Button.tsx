import { useState, ReactNode } from "react";
import Link from "./Link";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  to?: string;
}

const Button = ({ className, children, to }: ButtonProps) => {
  const [currentPath, setCurrentPath] = useState("/");

  return (
    <Link className={className} to={to || ""}>
      {children}
    </Link>
  );
};

export default Button;
