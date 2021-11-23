import React, { FC } from "react";
import Header from "./Header";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ display: "flex" }}>{children}</main>
    </>
  );
};

export default Layout;
