"use client";

import { format, getTime, parseISO } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";

type Props = {
  placeholder: string;
  dateValue: any | null;
  dataKey: string;
  minDate: any;
  maxDate: any;
  control: any;
  isDisabled?: boolean;
};

export default function CalendarComponent({
  placeholder,
  dateValue,
  dataKey,
  minDate,
  maxDate,
  control,
  isDisabled = false,
}: Props) {
  const [myDate, setMyDate] = useState<number | null>(dateValue);
  useEffect(() => {
    if (dateValue) setMyDate(dateValue);
  }, [dateValue]);
  return (
    <Popover>
      <PopoverTrigger asChild disabled={isDisabled}>
        <Button
          variant="outline"
          className={cn(
            "w-full pl-3 flex justify-between items-center font-normal h-[48px] bg-initialBg"
          )}
        >
          <span>{myDate ? format(myDate, "PPP") : placeholder}</span>
          <CalendarIcon className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Controller
          name={dataKey}
          control={control}
          rules={{
            required: "This field is required", // Validation rule with a custom error message
          }}
          render={({ field }) => (
            <Calendar
              mode="single"
              selected={field.value ? new Date(field.value) : undefined}
              onSelect={(date) => {
                if (date) {
                  const dateObject = parseISO(date.toISOString());
                  const timestamp = getTime(dateObject);
                  setMyDate(timestamp);
                  field.onChange(timestamp);
                }
              }}
              disabled={(date) => date < minDate || date > maxDate}
              initialFocus
            />
          )}
        />
      </PopoverContent>
    </Popover>
  );
}
