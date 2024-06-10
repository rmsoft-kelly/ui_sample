"use client";
import React, { useEffect, useRef } from "react";
import { Tree, TreeApi } from "react-arborist";
import { initialTreeData } from "./dummyData";
import TreeNode from "./tree-node";
import { TreeDataType } from "../../types/artifacts";

const ArtifactTreeview = () => {
  const treeRef = useRef<TreeApi<TreeDataType>>();

  useEffect(() => {
    treeRef.current?.open("root");
  }, [treeRef]);

  return (
    <div>
      <Tree
        ref={treeRef}
        data={initialTreeData}
        openByDefault={false}
        onSelect={(nodes) => {}}
        idAccessor={(d) => d.treeIdx}
        childrenAccessor={(d) => d.children}
        padding={16}
        width={360}
        className="border"
        rowClassName="px-4"
      >
        {TreeNode}
      </Tree>
    </div>
  );
};

export default ArtifactTreeview;
