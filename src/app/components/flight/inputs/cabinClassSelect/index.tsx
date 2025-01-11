import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";

type CabinClassProps = {
  setClassValue: Function;
  getValues: Function;
  control: any;
};
const CabinClass = ({ setClassValue, getValues, control }: CabinClassProps) => {
  const t = useTranslations("cabinClass");
  return (
    <Controller
      name="ticket_class"
      control={control}
      defaultValue="ECONOMY" // Set a default value
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger className="border-none outline-none bg-transparent focus:ring-0 shadow-none text-[14px] max-w-[200px]">
            <SelectValue placeholder={t("economy")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ECONOMY">{t("economy")}</SelectItem>
            <SelectItem value="PREMIUM">{t("premiumEconomy")}</SelectItem>
            <SelectItem value="BUSINESS">{t("business")}</SelectItem>
            <SelectItem value="FIRSTCLASS">{t("firstClass")}</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default CabinClass;
