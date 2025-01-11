import { useTranslations } from "next-intl";
import Container from "../container";
import { NavbarMenueItem } from "@/types/shared";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Language from "./components/language";

const Header = () => {
  const t = useTranslations("Header");
  const menuItems: NavbarMenueItem[] = [
    { value: t("homeLink"), path: "/" },
    { value: t("aboutUs"), path: "/about-us" },
    { value: t("services"), path: "/services" },
    { value: t("news"), path: "/news" },
    { value: t("contactUs"), path: "/contact-us" },
    // { value: t("profile"), path: "/profile" },
    // { value: t("myAccount"), path: "/my-account" },
  ];

  return (
    <div className="bg-initialBg py-4 max-h-[90px] shadow-md border-b ">
      <Container>
        <nav className="flex items-center justify-between ">
          <div className="flex  items-center gap-[20px]">
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              alt={"logo"}
              className="h-[67px] w-[77px]"
              priority
            />
            <ul className="flex  gap-6 items-center ">
              {menuItems?.map((item: NavbarMenueItem) => (
                <li key={item?.value}>
                  <Link href={item.path}>{item.value}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <Language />
            <Button className="bg-initialBg px-10 text-primary h-[44px] border border-primary">
              {t("register")}
            </Button>
            <Button className="bg-primaryBg px-10 text-initial h-[44px]">
              {t("login")}
            </Button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
