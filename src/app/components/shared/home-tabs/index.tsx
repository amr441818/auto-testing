import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import Container from "../container";
import CarsSearchBox from "../../car-rental/cars-search-box";
import FlightSearchBox from "../../flight/flight-search-box";
type HomeTabsProps = { language: string };
const HomeTabs = ({ language }: HomeTabsProps) => {
  const t = useTranslations("tabs");

  return (
    <div className="w-full h-full relative">
      <Tabs defaultValue="flights" className="w-full h-full ">
        <Container>
          <TabsList className="mx-auto bg-initialBg rounded-full h-[46px] w-full md:w-[470px] px-10 mt-10 flex justify-center items-center  gap-5">
            <TabsTrigger
              value="flights"
              className="text-[16px] rounded-full h-[34px] data-[state=active]:bg-primaryBg data-[state=active]:text-initial data-[state=active]:px-5 shadow-none"
            >
              {t("flights")}
            </TabsTrigger>
            <TabsTrigger
              value="cars"
              className="text-[16px] rounded-full h-[34px] data-[state=active]:bg-primaryBg data-[state=active]:text-initial data-[state=active]:px-5 shadow-none"
            >
              {t("cars")}
            </TabsTrigger>
          </TabsList>
        </Container>

        <TabsContent value="cars">
          <div className="h-[125px] flex justify-center items-center">
            <Container>
              <h1 className="text-5xl font-bold text-center text-initial">
                {" "}
                here your best best trip
              </h1>
            </Container>
          </div>
          <div className="min-h-[192px] bg-tabsBg w-full ">
            <Container>
              <CarsSearchBox />
            </Container>
          </div>
        </TabsContent>
        <TabsContent value="flights">
          {" "}
          <div className="min-h-[125px] flex justify-center items-center">
            <Container>
              <h1 className="text-5xl font-bold text-center text-initial">
                {" "}
                here your best Fligts trip
              </h1>
            </Container>
          </div>
          <div className="min-h-[192px] bg-tabsBg w-full flex justify-center items-center ">
            <Container>
              <FlightSearchBox language={language} />
            </Container>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomeTabs;
