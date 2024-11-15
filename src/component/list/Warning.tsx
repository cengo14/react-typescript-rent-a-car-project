import React from "react";

type Props = {
  children: string;
};

const Warning = ({ children }: Props) => {
  return <p className="home__error-container">{children}</p>;
};

export default Warning;
