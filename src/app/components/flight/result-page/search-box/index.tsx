"use client";
import Container from "@/app/components/shared/container";
import { Button } from "@/components/ui/button";
import { FlightInfo } from "@/types/flight";
import { format } from "date-fns";
import { useState } from "react";
import { enUS, arSA } from "date-fns/locale";
import { useTranslations } from "next-intl";
import FlightSearchBox from "../../flight-search-box";
import { useSearchParams } from "next/navigation";

type ResultSearchBoxProps = {
  flightInfo: FlightInfo[];
  language: any;
  tripType: string;
};
const ResultSearchBox = ({
  flightInfo,
  language,
  tripType,
}: ResultSearchBoxProps) => {
  const searchParams = useSearchParams();
  // Safely extract and default values
  const adults = Number(searchParams.get("adults") || 1);
  const childs = Number(searchParams.get("childs") || 0);
  const infants = Number(searchParams.get("infants") || 0);
  const ticketClass = searchParams.get("ticket_class") || "ECONOMY";
  const t = useTranslations("passengers");
  const [isEditing, setEditing] = useState(false);
  const dateLanguage = language === "en" ? enUS : arSA;
  return (
    <div>
      <div className="bg-initialBg py-6 ">
        <Container>
          <div className="border mx-8 p-6 rounded-md  shadow-md bg-initialBg flex  justify-between items-center">
            <div>
              <p className="text-base font-semibold">
                {flightInfo[0]?.origin} to {flightInfo[0]?.destination}
              </p>
              <p className="mt-[16px]">
                <span className="text-base text-secondary font-semibold">
                  {format(
                    new Date(flightInfo[0]?.departure_date),
                    "EEEE, MMMM",
                    { locale: dateLanguage }
                  )}
                  {flightInfo?.length > 1
                    ? ` - ${format(
                        new Date(flightInfo[1]?.departure_date),
                        "EEEE, MMMM",
                        { locale: dateLanguage }
                      )}`
                    : ""}
                </span>
                <span className="text-sm  font-semibold">
                  {` . ${adults} ${t("adults")} . ${childs} ${t(
                    "children"
                  )} . ${infants} ${t("babies")} . ${ticketClass}`}
                </span>
              </p>
            </div>
            <Button
              onClick={() => setEditing(!isEditing)}
              className="text-initial bg-primary h-[44px] w-[150px]"
            >
              Edit
            </Button>
          </div>
          <div
            className={
              isEditing
                ? "transition-all duration-700 ease-in-out mx-8 my-6 bg-thirdBg p-6 rounded-md "
                : "transition-all duration-700 ease-in-out mx-0 my-0 p-0 h-0 overflow-hidden"
            }
          >
            <FlightSearchBox
              flightInfo={flightInfo}
              language={language}
              paramsValue={{
                adults: adults,
                childs: childs,
                infants: infants,
                ticket_class: ticketClass,
                trip_type: tripType,
              }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ResultSearchBox;
