import { Button } from "@/components/ui/button";
import React from "react";

const Buttons = () => {
  return (
    <>
      <Button variant={"default"}>default</Button>

      <Button variant={"blue"}>blue</Button>

      <Button variant={"default_outline"}>default_outline</Button>

      <Button variant={"blue_outline"}>blue_outline</Button>

      <Button variant={"outline"}>outline</Button>

      <Button variant={"secondary"}>secondary</Button>

      <Button variant={"ghost"}>ghost</Button>

      <Button variant={"link"}>link</Button>

      <Button variant={"destructive"}>destructive</Button>
    </>
  );
};

export default Buttons;
