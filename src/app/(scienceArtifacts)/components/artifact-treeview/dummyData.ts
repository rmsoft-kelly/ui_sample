import { TreeDataType } from "../../types/artifacts";

export const initialTreeData: TreeDataType[] = [
  {
    treeIdx: "root",
    name: "과학유산",
    children: [
      {
        treeIdx: "artifact1",
        name: "측우기",
        type: "artifact",
        children: [
          {
            treeIdx: "sub",
            name: "점",
            children: [
              {
                treeIdx: "sub1",
                type: "subartifact",
                name: "점1",
                children: null,
              },
              {
                treeIdx: "sub2",
                type: "subartifact",
                name: "점2",
                children: null,
              },
            ],
          },
          {
            treeIdx: "excave",
            type: "excavation",
            name: "발굴정보",
            children: null,
          },
          {
            treeIdx: "enroll",
            type: "enroll",
            name: "등록정보",
            children: null,
          },
          {
            treeIdx: "inquiry",
            type: "inquiry",
            name: "조사정보",
            children: null,
          },
          {
            treeIdx: "usage",
            name: "활용정보",
            children: [
              { treeIdx: "use1", type: "usage", name: "정보1", children: null },
              { treeIdx: "use2", type: "usage", name: "정보2", children: null },
            ],
          },
          {
            treeIdx: "support",
            name: "지원정보",
            children: [
              {
                treeIdx: "sup1",
                type: "support",
                name: "정보1",
                children: null,
              },
              {
                treeIdx: "sup2",
                type: "support",
                name: "정보2",
                children: null,
              },
            ],
          },
          {
            treeIdx: "heritage",
            name: "국가유산정보",
            children: [
              {
                treeIdx: "her1",
                name: "아이템1",
                type: "heritage",
                children: [
                  {
                    treeIdx: "com1",
                    type: "component",
                    name: "컴포넌트1",
                    children: null,
                  },
                  {
                    treeIdx: "com2",
                    type: "component",
                    name: "컴포넌트2",
                    children: null,
                  },
                ],
              },
              {
                treeIdx: "her2",
                name: "아이템2",
                type: "heritage",
                children: [
                  {
                    treeIdx: "com1",
                    type: "component",
                    name: "컴포넌트1",
                    children: null,
                  },
                  {
                    treeIdx: "com2",
                    type: "component",
                    name: "컴포넌트2",
                    children: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
