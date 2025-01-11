import ResultSearchBox from "@/app/components/flight/result-page/search-box";
import { FlightInfo } from "@/types/flight";
import { format } from "date-fns";
import { ReactNode } from "react";
type LayoutResultProps = {
  children: ReactNode;
  params: Promise<{ locale: string; searchData: string[] }>; // Ensure searchData is an array
};
const parseFlightInfo = (searchData: string[]): FlightInfo[] => {
  return searchData.map((item) => {
    const [origin, destination, departureTimestamp] = item.split("-");
    return {
      origin,
      destination,
      departure_date: format(
        new Date(Number(departureTimestamp)),
        "yyyy-MM-dd"
      ),
    };
  });
};
const getTripType = (
  flightCount: number
): "one_way" | "two_way" | "multi_city" => {
  if (flightCount === 1) return "one_way";
  if (flightCount === 2) return "two_way";
  return "multi_city";
};
const Layout = async ({ params, children }: LayoutResultProps) => {
  const { searchData, locale: language } = await params;
  const flightInfo = parseFlightInfo(searchData);
  const tripType = getTripType(flightInfo?.length);

  return (
    <div>
      <ResultSearchBox
        flightInfo={flightInfo}
        language={language}
        tripType={tripType}
      />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
