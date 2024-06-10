export type Steps =
  | "artifact"
  | "subartifact"
  | "excavation"
  | "enroll"
  | "inquiry"
  | "usage"
  | "support"
  | "heritage"
  | "component";

export interface Tabs {
  key: Steps;
  name: string;
  add_button: boolean;
}
