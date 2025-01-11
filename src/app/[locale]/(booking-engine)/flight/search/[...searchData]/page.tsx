import Filters from "@/app/components/flight/result-page/filters";
import ResultCard from "@/app/components/flight/result-page/resultCards";
import Container from "@/app/components/shared/container";
import { FlightInfo } from "@/types/flight";
import apiServiceCall from "@/utils/api/shared/apiServiceCall";
import { format } from "date-fns";
import { getTranslations } from "next-intl/server";

type SearchResultProps = {
  params: Promise<{ locale: string; searchData: string[] }>; // Ensure searchData is an array
  searchParams: {
    adults?: string;
    childs?: string;
    infants?: string;
    ticket_class?: string;
    stops?: string;
  };
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

const SearchResult = async ({ params, searchParams }: SearchResultProps) => {
  const { searchData, locale: language } = await params;
  const searchParam = await searchParams;
  const { adults, childs, infants, ticket_class, ...filters } = searchParam;
  const t = await getTranslations({ locale: language });
  const adultsData = Number(adults || 1);
  const childsData = Number(childs || 0);
  const infantsData = Number(infants || 0);
  const ticketClass = ticket_class || "ECONOMY";
  const flightInfo = parseFlightInfo(searchData);
  const tripType = getTripType(flightInfo?.length);

  const requestBody = {
    trip_type: tripType,
    currency: "EGP",
    flights_info: flightInfo,
    ticket_class: ticketClass,
    adults: adultsData,
    childs: childsData,
    infants: infantsData,
  };
  const filterData = Object.entries(filters)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  try {
    const resultData = await apiServiceCall({
      url: `/flights/search-results?${filterData}`,
      method: "POST",
      headers: {
        "Accept-Language": language,
        Accept: "application/json",
      },
      body: requestBody,
    });
    const flights = resultData?.data?.flights || [];
    const isLoading = !resultData?.data;
    const flightCount = resultData?.data?.meta?.total_count;
    const filtersData = resultData?.data?.filters;
    return (
      <div>
        <Container>
          <div className="mx-8 grid grid-cols-3 gap-4 my-4">
            <div className="bg-initialBg rounded-md">
              {" "}
              <Filters filtersData={filtersData} />
            </div>
            <div className="col-span-2">
              <div className="mb-4 flex justify-between items-center">
                <span>عدد الرحلات: {flightCount}</span>
                <div>filter</div>
              </div>
              <div className="w-full bg-initialBg rounded-md">
                <div className="bg-primaryBg text-initial flex justify-between items-center p-4 h-[53px] rounded-t-md">
                  <span>
                    {tripType === "two_way"
                      ? `${t("flightSearchResult.twoWayTrip")}`
                      : tripType === "multi_city"
                      ? `${t("flightSearchResult.roundTrip")}`
                      : `${t("flightSearchResult.oneWayTrip")}`}
                  </span>
                  <span>آخر تحديث: الآن</span>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  {isLoading && <div>Loading...</div>}
                  {!isLoading && flights.length === 0 && (
                    <div>No data available</div>
                  )}
                  {flights.map((flight: any, index: number) => (
                    <ResultCard
                      key={`${index}-${flight?.flight_id}`}
                      leg={flight}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  } catch (error: any) {
    console.log("error", error.message);
    return (
      <div className="flex justify-center items-center w-full min-h-96 bg-initialBg">
        <h1>{error?.message}</h1>
      </div>
    );
  }
};

export default SearchResult;
