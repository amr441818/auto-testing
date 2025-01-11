"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { FlightStops } from "@/types/flight";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

type StopsFilterProps = {
  stopsData: FlightStops;
};

const StopsFilter = ({ stopsData }: StopsFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState("item-1");

  const updateSearchParams = (key: number, add: boolean | any) => {
    const params = new URLSearchParams(searchParams?.toString());
    const stops = searchParams.get("stops")?.split(",") || [];

    if (add) {
      if (!stops.includes(key.toString())) {
        stops.push(key.toString());
      }
    } else {
      const index = stops.indexOf(key.toString());
      if (index > -1) {
        stops.splice(index, 1);
      }
    }

    if (stops.length) {
      params.set("stops", stops.join(","));
    } else {
      params.delete("stops");
    }

    router.push(`?${params.toString()}`);
  };

  const renderCheckbox = (key: number, label: string) => (
    <div className="flex gap-2 items-center">
      <Checkbox
        defaultChecked={searchParams.get("stops")?.includes(key.toString())}
        onCheckedChange={(value) => updateSearchParams(key, value)}
        id={`transit${key}`}
        className="h-6 w-6 border border-fontColor data-[state=checked]:bg-primary data-[state=checked]:text-initial"
      />
      <label
        htmlFor={`transit${key}`}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-fontColor"
      >
        {label} {(stopsData as any)[key]}
      </label>
    </div>
  );

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={isOpen}
        onValueChange={setIsOpen}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline no-underline text-[16px] font-semibold text-mainText">
            Transit
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-5">
            {stopsData["0"] && renderCheckbox(0, "Direct")}
            {stopsData["1"] && renderCheckbox(1, "1 Transit")}
            {stopsData["2"] && renderCheckbox(2, "+2 Transit")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default StopsFilter;
