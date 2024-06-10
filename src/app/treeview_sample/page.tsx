"use client";
import React, { useEffect, useRef, useState } from "react";
import { Tree, TreeApi } from "react-arborist";

import TreeNode from "./TreeNode";
import { Button } from "@/components/ui/button";

export interface TreeDataType {
  treeIdx: string;
  name: string;
  children: TreeDataType[] | null;
}

const initialData: TreeDataType[] = [
  {
    treeIdx: "root",
    name: "과학유산",
    children: [
      {
        treeIdx: "artifact1",
        name: "측우기",
        children: [
          {
            treeIdx: "sub",
            name: "점",
            children: [
              { treeIdx: "sub1", name: "점1", children: null },
              { treeIdx: "sub2", name: "점2", children: null },
            ],
          },
          { treeIdx: "excave", name: "발굴정보", children: null },
          { treeIdx: "enroll", name: "등록정보", children: null },
          { treeIdx: "inquiry", name: "조사정보", children: null },
          {
            treeIdx: "usage",
            name: "활용정보",
            children: [
              { treeIdx: "use1", name: "정보1", children: null },
              { treeIdx: "use2", name: "정보2", children: null },
            ],
          },
          {
            treeIdx: "support",
            name: "지원정보",
            children: [
              { treeIdx: "sup1", name: "정보1", children: null },
              { treeIdx: "sup2", name: "정보2", children: null },
            ],
          },
          {
            treeIdx: "heritage",
            name: "국가유산정보",
            children: [
              {
                treeIdx: "her1",
                name: "아이템1",
                children: [
                  { treeIdx: "com1", name: "컴포넌트1", children: null },
                  { treeIdx: "com2", name: "컴포넌트2", children: null },
                ],
              },
              {
                treeIdx: "her2",
                name: "아이템2",
                children: [
                  { treeIdx: "com1", name: "컴포넌트1", children: null },
                  { treeIdx: "com2", name: "컴포넌트2", children: null },
                ],
              },
            ],
          },
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
                treeIdx: `n${idRef.current}`,
                name: "newFolder",
                children: null,
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
        idAccessor={(d) => d.treeIdx}
        childrenAccessor={(d) => d.children}
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
