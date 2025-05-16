"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";

const items = [
  { id: "1", label: "Accept terms and conditions" },
  { id: "2", label: "Accept terms and conditions" },
  { id: "3", label: "Accept terms and conditions" },
  { id: "4", label: "Accept terms and conditions" },
  { id: "5", label: "Accept terms and conditions" },
  { id: "6", label: "Accept terms and conditions" },
  { id: "7", label: "Accept terms and conditions" },
  { id: "8", label: "Accept terms and conditions" },
  { id: "9", label: "Accept terms and conditions" },
  { id: "10", label: "Accept terms and conditions" },
  { id: "11", label: "Accept terms and conditions" },
  { id: "12", label: "Accept terms and conditions" },
  { id: "13", label: "Accept terms and conditions" },
  { id: "14", label: "Accept terms and conditions" },
];

const TodoList = () => {
  const [date, setDate] = React.useState<Date>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon /> {date ? format(date, "ppp") : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
                setDate(date!);
                setOpen(false);
            }}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {items.map(({ id, label }) => (
            <Card className="p-4" key={id}>
              <div className="flex gap-4 items-center">
                <Checkbox id={id} defaultChecked />
                <label htmlFor={id} className="text-sm text-muted-foreground">
                  {label}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
