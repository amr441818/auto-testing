"use client";

import { Button } from "@/components/ui/button";
import CabinClass from "../inputs/cabinClassSelect";
import { useForm } from "react-hook-form";
import { FlightInfoDtails } from "@/types/flight";
import OnewayAndRoundTrip from "../onewayAndRound";
import TripType from "../inputs/tripTypeSelect";
import TravellersDropdown from "../inputs/travellersDropdown";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { addDays } from "date-fns";

type FormValues = {
  trip_type: string;
  ticket_class: string;
  currency: string;
  flights_info: FlightInfoDtails[];
  adults: number;
  childs: number;
  infants: number;
};

type SearchBoxProps = {
  language: string;
  paramsValue: any;
  flightInfo: any[];
};

const FlightSearchBox = ({
  language,
  paramsValue,
  flightInfo,
}: SearchBoxProps) => {
  const today = new Date();
  const startDate = addDays(today, 1);
  const endDate = addDays(today, 7);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      trip_type: "two_way",
      ticket_class: "ECONOMY",
      flights_info: [
        {
          departure_date: startDate.getTime(),
          origin: "",
          destination: "",
          origin_place_name: "",
          destination_place_name: "",
        },
        {
          departure_date: endDate.getTime(),
        },
      ],
      currency: "EGP",
      adults: 1,
      childs: 0,
      infants: 0,
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentParams = new URLSearchParams(searchParams.toString());
  const t = useTranslations();
  const tripType = watch("trip_type");

  const updateParams = (data: FormValues) => {
    if (data.adults > 1) currentParams.set("adults", data.adults.toString());
    if (data.childs > 0) currentParams.set("childs", data.childs.toString());
    if (data.infants > 0) currentParams.set("infants", data.infants.toString());
    if (data.ticket_class !== "ECONOMY")
      currentParams.set("ticket_class", data.ticket_class);
  };

  const handleNavigation = (data: FormValues) => {
    if (tripType === "one_way") {
      router.push(
        `/flight/search/${data.flights_info[0].origin}-${
          data.flights_info[0].destination
        }-${data.flights_info[0].departure_date}?${currentParams.toString()}`
      );
    } else if (tripType === "two_way") {
      router.push(
        `/flight/search/${data.flights_info[0].origin}-${
          data.flights_info[0].destination
        }-${data.flights_info[0].departure_date}/${
          data.flights_info[0].destination
        }-${data.flights_info[0].origin}-${
          data.flights_info[1]?.departure_date
        }?${currentParams.toString()}`
      );
    }
  };

  const onSubmit = (data: FormValues) => {
    updateParams(data);
    handleNavigation(data);
  };
  useEffect(() => {
    if (flightInfo) {
      setValue("flights_info", flightInfo);
    }
  }, [flightInfo]);
  // set query values
  useEffect(() => {
    const updateFormValues = () => {
      if (paramsValue?.adults > 1) setValue("adults", paramsValue?.adults);
      if (paramsValue?.childs > 0) setValue("childs", paramsValue?.childs);
      if (paramsValue?.infants > 0) setValue("infants", paramsValue?.infants);
      if (
        paramsValue?.ticket_class !== "ECONOMY" &&
        paramsValue?.ticket_class !== undefined
      )
        setValue("ticket_class", paramsValue?.ticket_class);
      if (
        paramsValue?.trip_type !== "two_way" &&
        paramsValue?.trip_type !== undefined
      )
        setValue("trip_type", paramsValue?.trip_type);
    };
    updateFormValues();
  }, [paramsValue, setValue]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-1/3 flex gap-5 mb-7">
        <TripType
          setTripType={setValue}
          getValues={getValues}
          control={control}
        />
        <TravellersDropdown
          setTravellerValue={setValue}
          getValues={getValues}
        />
        <CabinClass
          setClassValue={setValue}
          getValues={getValues}
          control={control}
        />
      </div>
      <div className="flex gap-4">
        <OnewayAndRoundTrip
          setInputValue={setValue}
          errors={errors}
          tripType={tripType}
          getValues={getValues}
          language={language}
          control={control}
        />
        <Button type="submit" className="h-[48px] w-[133px] text-initial">
          {t("search")}
        </Button>
      </div>
    </form>
  );
};

export default FlightSearchBox;
