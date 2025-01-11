import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTranslations } from "next-intl";
import Counter from "./components/counter";
import { ChevronDown } from "lucide-react";
type TravellersDropdownProps = {
  setTravellerValue: Function;
  getValues: Function;
};
export default function TravellersDropdown({
  setTravellerValue,
  getValues,
}: TravellersDropdownProps) {
  const t = useTranslations("passengers");
  const adultNumber = getValues("adults");
  const childrenNumber = getValues("childs");
  const babiesNumber = getValues("infants");
  return (
    <Popover>
      <PopoverTrigger asChild className="bg-transparent shadow-none">
        <Button>
          {t("adults")} {adultNumber} , {t("children")} {childrenNumber},{" "}
          {t("babies")} {babiesNumber}
          <ChevronDown className="h-4 w-4 opacity-50" />{" "}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 flex flex-col gap-5">
        <Counter
          setTravellerValue={setTravellerValue}
          passengerType={t("adults")}
          passengerNumber={adultNumber}
          passengerKey="adults"
        />
        <Counter
          setTravellerValue={setTravellerValue}
          passengerType={t("children")}
          passengerNumber={childrenNumber}
          passengerKey="childs"
        />
        <Counter
          setTravellerValue={setTravellerValue}
          passengerType={t("babies")}
          passengerNumber={babiesNumber}
          passengerKey="infants"
        />
      </PopoverContent>
    </Popover>
  );
}
