import React from "react";
import StepsTab from "./components/steps-tab";
import ArtifactTreeview from "./components/artifact-treeview/artifact-treeview";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[360px_1fr] grid-rows-[40px_1fr] gap-4">
      <StepsTab />
      <ArtifactTreeview />
      <div className="border">{children}</div>
    </div>
  );
};

export default Layout;
