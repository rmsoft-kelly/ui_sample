"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const HeritageEditor = () => {
  const searchParams = useSearchParams();
  const componentId = searchParams.get("componentId");
  return (
    <div>
      {componentId ? (
        <div>HERITAGE / COMPONENT {componentId}</div>
      ) : (
        <div>HeritageEditor</div>
      )}
    </div>
  );
};

export default HeritageEditor;
