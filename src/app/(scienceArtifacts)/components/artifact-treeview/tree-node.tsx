"use client";
import React from "react";
import { NodeApi, NodeRendererProps } from "react-arborist";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { TreeDataType } from "../../types/artifacts";

{
  /* node.isOpen : 하위 요소 노출 여부 
    node.isLeaf : 하위 요소 존재할 때 false
    node.isInternal : 하위 요소가 존재할 때 true 
*/
}

const singleFolderTypes = ["excavation", "enroll", "inquiry"];

const TreeNode = ({ node, style, tree }: NodeRendererProps<TreeDataType>) => {
  const router = useRouter();

  // const [isActive, setIsActive] = useState(false);

  const handleClickNode = () => {
    const nodeType = node.data.type;
    if (!nodeType) return node.toggle();

    const nodeIdx = node.data.treeIdx;
    const parentsId = getParentIds(node);

    if (nodeType === "artifact") {
      router.push(`/artifact/${nodeIdx}`);
      return;
    }

    if (nodeType === "component") {
      const heritage = node.parent;
      router.push(
        `/artifact/${parentsId[1]}/heritage/${heritage?.data.treeIdx}?componentId=${nodeIdx}`
      );
      return;
    }
    if (singleFolderTypes.includes(nodeType)) {
      router.push(`/artifact/${parentsId[1]}/${nodeType}`);
      return;
    }
    router.push(`/artifact/${parentsId[1]}/${nodeType}/${nodeIdx}`);
  };

  function getParentIds(
    lastChildNode: NodeApi<TreeDataType>,
    parentIds: string[] = []
  ): string[] {
    const parent = lastChildNode.parent;

    if (parent) {
      return getParentIds(parent, [lastChildNode.id, ...parentIds]);
    } else {
      return [...parentIds];
    }
  }

  // useEffect(() => {
  //   // store(현재 위치)
  //   tree.openParents("sub2");
  //   const selectedNode = tree.get("sub2");

  //   if (selectedNode) {
  //     const activeNodeIds = getParentIds(selectedNode, []);
  //     setIsActive(activeNodeIds.includes(node.id));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [tree]);
  return (
    <div style={style}>
      <div className="flex items-center">
        {node.isInternal ? (
          <span
            className="flex justify-center items-center w-4 h-4 border cursor-pointer"
            onClick={() => {
              node.isInternal && node.toggle();
            }}
          >
            {node.isOpen ? <Minus strokeWidth={1} /> : <Plus strokeWidth={1} />}
          </span>
        ) : (
          <div className="w-4"></div>
        )}
        <div className="cursor-default" onClick={handleClickNode}>
          {node.isLeaf ? "📄" : node.isOpen ? "📂" : "📁"}

          {/* ${isActive ? "text-primary" : ""} */}
          <span
            className={`node-text 
          ${node.id === "root" ? " text-primary font-semibold" : ""}
          `}
          >
            <span>{node.data.name}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TreeNode;
