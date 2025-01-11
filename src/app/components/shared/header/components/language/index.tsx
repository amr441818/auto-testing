"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Languge = () => {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const changeLanguage = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(en|ar)/, "")}`; // Adjust based on locales
    router.push(newPath);
  };
  return (
    <>
      {" "}
      <Select onValueChange={changeLanguage}>
        <SelectTrigger className="border-none outline-none bg-transparent focus:ring-0 shadow-none">
          <SelectValue
            placeholder={
              pathname.split("/")[1] === "en" ? t("english") : t("arabic")
            }
          />
        </SelectTrigger>
        <SelectContent>
          {" "}
          <SelectItem value="en">{t("english")}</SelectItem>
          <SelectItem value="ar">{t("arabic")}</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default Languge;
