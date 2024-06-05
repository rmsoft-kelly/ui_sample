import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1290px] grid grid-cols-[360px_930px] grid-rows-[40px_1fr] gap-4">
      <div className="col-span-2 bg-pink-100">tabs</div>
      <div className="bg-yellow-100 h-[560px]">forder</div>
      <div className="border">{children}</div>
    </div>
  );
};

export default Layout;
