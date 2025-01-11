"use client";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";
type PricesFilterProps = {
  minPrice: number;
  maxPrice: number;
};
const PricesFilter = ({ minPrice, maxPrice }: PricesFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramMinPrice = searchParams.get("min_price");
  const paramMaxPrice = searchParams.get("max_price");
  const [isOpen, setIsOpen] = useState("item-1");
  const [range, setRange] = useState<[number, number]>([minPrice, maxPrice]);
  const handleSliderChange = async (values: number[]) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("min_price", values[0].toString());
    params.set("max_price", values[1].toString());
    if (minPrice === values[0] && maxPrice === values[1]) {
      await params.delete("min_price");
      await params.delete("max_price");
      setRange([values[0], values[1]]);
      router.push(`?${params.toString()}`);
    } else {
      setRange([values[0], values[1]]);
      router.push(`?${params.toString()}`);
    }
  };
  useEffect(() => {
    if (paramMaxPrice && paramMinPrice)
      setRange([Number(paramMinPrice), Number(paramMaxPrice)]);
  }, []);
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={isOpen}
        onValueChange={setIsOpen}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline no-underline text-[16px] font-semibold text-mainText h-[40px]">
            Prices
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-5 mt-2">
            <Slider
              value={range}
              max={maxPrice}
              min={minPrice}
              step={1}
              className=" rounded-full h-[7px]"
              onValueChange={handleSliderChange}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${range[0]}</span>
              <span>${range[1]}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PricesFilter;
