import React, { useEffect, useState } from "react";
import { NodeApi, NodeRendererProps } from "react-arborist";
import { TreeDataType } from "./page";
import { Minus } from "lucide-react";

const TreeNode = ({
  node,
  style,
  dragHandle,
  tree,
}: NodeRendererProps<TreeDataType>) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    tree.openParents("d1");
    const selectedNode = tree.get("d1");

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

    if (selectedNode) {
      const activeNodeIds = getParentIds(selectedNode, []);
      setIsActive(activeNodeIds.includes(node.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tree]);
  return (
    <div className="node-container" style={style} ref={dragHandle}>
      <div
        className="node-content flex items-center"
        onClick={() => {
          node.isInternal && node.toggle();
        }}
      >
        <span className="flex justify-center items-center w-4 h-4 border">
          <Minus />
        </span>
        {/* isOpen : 하위 요소 노출 여부 */}
        {/* isInternal : 하위 요소가 존재할 때 true */}
        {/* isLeaf : 하위 요소 존재할 때 false */}
        {node.isLeaf ? "📄" : node.isOpen ? "📂" : "📁"}

        <span
          className={`node-text ${isActive ? "text-primary" : ""}
          ${node.id === "root" ? " text-primary font-semibold" : ""}
          ${node.isFocused ? " font-bold" : ""}
          `}
        >
          <span>{node.data.name}</span>
        </span>
      </div>
    </div>
  );
};

export default TreeNode;
