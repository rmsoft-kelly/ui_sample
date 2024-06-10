import { Steps } from "./steps";

export interface TreeDataType {
  treeIdx: string;
  name: string;
  type?: Steps;
  children: TreeDataType[] | null;
}
