import { Button } from "@/components/ui/button";
import React from "react";

const Buttons = () => {
  return (
    <>
      <h2 className="font-bold text-lg">variants</h2>
      <div className="flex gap-2">
        <Button variant={"default"}>default</Button>

        <Button variant={"blue"}>blue</Button>

        <Button variant={"default_outline"}>default_outline</Button>

        <Button variant={"blue_outline"}>blue_outline</Button>

        <Button variant={"outline"}>outline</Button>

        <Button variant={"secondary"}>secondary</Button>

        <Button variant={"ghost"}>ghost</Button>

        <Button variant={"link"}>link</Button>

        <Button variant={"destructive"}>destructive</Button>
      </div>
      <h2 className="font-bold text-lg mt-2">sizes</h2>
      <div className="flex gap-2">
        default :<Button>button</Button>
        lg :<Button size={"lg"}>button</Button>
        sm :<Button size={"sm"}>button</Button>
        icon :<Button size={"icon"}>icon</Button>
      </div>
    </>
  );
};

export default Buttons;
