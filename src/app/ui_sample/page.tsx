"use client";
import React, { useState } from "react";
import Colors from "./Colors";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormTest from "./FormTest";
import Buttons from "./Buttons";
import AlertModal from "./AlertModal";

const UiSamplePage = () => {
  const [dates, setDates] = useState<DateRange | undefined>({
    from: new Date(),
  });

  const [alertopen, setAlertOpen] = useState(false);
  return (
    <div className="w-[960px] mx-auto my-10">
      <h1 className="font-bold mt-8 text-xl">Color chips</h1>
      <Card className="flex gap-4 p-2">
        <Colors />
      </Card>
      <h1 className="font-bold mt-8 text-xl">Buttons</h1>
      <Card className="flex p-2 flex-col">
        <Buttons />
      </Card>
      <h1 className="font-bold mt-8 text-xl">Inputs</h1>
      <p>input에 isError 속성을 추가할 수 있습니다.</p>
      <Card className="p-2">
        <div className="flex gap-4">
          <Input placeholder="<Input />" />
          <Input placeholder="<Input isError={true} /> " isError={true} />
          <Input placeholder="<Input disabled />" disabled />
        </div>

        <h1 className="font-bold mt-8 text-xl">Error test</h1>
        <FormTest />
      </Card>
      <h1 className="font-bold mt-8 text-xl">Calendars</h1>
      <Card className="flex gap-4 p-2">
        <Calendar
          mode="range"
          selected={dates}
          onSelect={setDates}
          className="rounded-md border"
        />
      </Card>
      <h1 className="font-bold mt-8 text-xl">Selects</h1>
      <Card className="flex gap-4 p-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </Card>
      <h1 className="font-bold mt-8 text-xl">Modal</h1>
      <Card className="flex flex-col gap-4 p-2">
        <Button onClick={() => setAlertOpen(true)}>modal open</Button>
        <AlertModal open={alertopen} setOpen={setAlertOpen} title={"title"} />
      </Card>

      {/* template */}
      <h1 className="font-bold mt-8 text-xl">-</h1>
      <Card className="flex flex-col gap-4 p-2"></Card>
    </div>
  );
};

export default UiSamplePage;
