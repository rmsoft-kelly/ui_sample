"use client";
import React, { useEffect, useRef, useState } from "react";
import { Tree, TreeApi } from "react-arborist";

import TreeNode from "./TreeNode";
import { Button } from "@/components/ui/button";

export interface TreeDataType {
  id: string;
  name: string;
  children?: TreeDataType[];
}

const initialData: TreeDataType[] = [
  {
    id: "root",
    name: "과학유산",
    children: [
      { id: "1", name: "Unread" },
      { id: "2", name: "Threads" },
      {
        id: "3",
        name: "Chat Rooms",
        children: [
          { id: "c1", name: "General" },
          { id: "c2", name: "Random" },
          { id: "c3", name: "Open Source Projects" },
        ],
      },
      {
        id: "4",
        name: "Direct Messages",
        children: [
          { id: "d1", name: "Alice" },
          { id: "d2", name: "Bob" },
          { id: "d3", name: "Charlie" },
        ],
      },
    ],
  },
];

const TreeViewSample = () => {
  const treeRef = useRef<TreeApi<TreeDataType>>();
  const idRef = useRef(0);
  const [treeData, setTreeData] = useState<TreeDataType[]>(initialData);

  const handleFocus = (id: string) => {
    treeRef.current!.openParents(id);
    treeRef.current!.focus(id);
  };

  useEffect(() => {
    treeRef.current?.open("root");
  }, [treeRef]);

  useEffect(() => {
    handleFocus(`i${idRef.current - 1}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRef.current]);
  return (
    <div className="p-2">
      <div className="flex gap-2 m-4">
        <Button
          onClick={() => {
            console.log(treeRef.current!);
          }}
        >
          console tree
        </Button>
        <Button
          onClick={() => {
            treeRef.current!.openAll();
          }}
        >
          open All
        </Button>
        <Button
          onClick={() => {
            treeRef.current!.closeAll();
          }}
        >
          close All
        </Button>
        <Button
          onClick={() => {
            // treeRef.current!.closeAll();
            treeRef.current!.openParents("d1");
            treeRef.current!.focus("d1");
          }}
        >
          Focus on Alice
        </Button>
        <Button
          type="button"
          onClick={() => {
            setTreeData([
              ...treeData,
              {
                id: `n${idRef.current}`,
                name: "newFolder",
                children: [
                  {
                    id: `i${idRef.current}`,
                    name: "newItem",
                  },
                ],
              },
            ]);
            idRef.current = idRef.current + 1;
          }}
        >
          Create New
        </Button>
      </div>
      <Tree
        ref={treeRef}
        data={treeData}
        disableDrag={true}
        disableDrop={true}
        openByDefault={false}
        onSelect={(nodes) => {}}
        padding={16}
        className="border m-4"
        rowClassName="px-4"
      >
        {TreeNode}
      </Tree>
    </div>
  );
};

export default TreeViewSample;
