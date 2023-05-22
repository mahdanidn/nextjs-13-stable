import React from "react";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <h1>ROOT LAYOUT MARKETING</h1>
      {children}
    </div>
  );
};

export default Layout;
