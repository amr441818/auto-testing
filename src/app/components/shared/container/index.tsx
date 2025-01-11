import React from "react";
type Props = {
  className?: string;
  children: React.ReactNode;
};
const Container = ({ className, children }: Props) => {
  return (
    <div className={`container mx-auto md:px-10 ${className} `}>{children}</div>
  );
};

export default Container;
