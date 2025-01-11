import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";

type TripTypeProps = {
  setTripType: Function;
  getValues: Function;
  control: any;
};
const TripType = ({ setTripType, getValues, control }: TripTypeProps) => {
  const t = useTranslations("flightSearchResult");

  return (
    <Controller
      name="trip_type"
      control={control}
      defaultValue="two_way" // Set a default value
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger className="border-none outline-none bg-transparent focus:ring-0 shadow-none  text-[14px] max-w-[200px]">
            <SelectValue placeholder={t("twoWayTrip")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="two_way">{t("twoWayTrip")}</SelectItem>
            <SelectItem value="one_way">{t("oneWayTrip")}</SelectItem>
            <SelectItem value="multi_city">{t("roundTrip")}</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default TripType;
