import { Button } from "@/components/ui/button";
import FlightPlacesInput from "../inputs/searchInput";
import { ArrowLeftRight } from "lucide-react";
import CalendarComponent from "../../shared/calendar";
import { useTranslations } from "next-intl";

type Props = {
  setInputValue: Function;
  errors: any;
  tripType: string;
  getValues: (key: string) => string;
  language: string;
  control: any;
};

const OnewayAndRoundTrip = ({
  setInputValue,
  errors,
  tripType,
  language,
  getValues,
  control,
}: Props) => {
  const t = useTranslations("flightSearchResult");

  // form keys vlues
  const originKey = `flights_info.${0}.origin`;
  const destinationKey = `flights_info.${0}.destination`;
  const originNameKey = `flights_info.${0}.origin_place_name`;
  const destinationNameKey = `flights_info.${0}.destination_place_name`;
  const startDateKey = `flights_info.${0}.departure_date`;
  const endDateKey = `flights_info.${1}.departure_date`;
  // form values
  const originValue = getValues(originKey);
  const destinationValue = getValues(destinationKey);
  const originName = getValues(originNameKey);
  const destinationName = getValues(destinationNameKey);
  const startDate = getValues(startDateKey);
  const endDate = getValues(endDateKey);
  // start reservation date and end reservation date
  const today = new Date();
  const minDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ); // January 1st of this year
  const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), 25);
  const switchPlacesValues = () => {
    setInputValue(originKey, destinationValue, { shouldValidate: true });
    setInputValue(destinationKey, originValue, { shouldValidate: true });
    setInputValue(originNameKey, destinationName, { shouldValidate: true });
    setInputValue(destinationNameKey, originName, { shouldValidate: true });
  };
  return (
    <div className="flex justify-start items-center h-full gap-4 w-full">
      <FlightPlacesInput
        inputName="origin"
        setPlaceValue={setInputValue}
        errors={errors}
        tripType={tripType}
        placeValue={originValue}
        placeholder={t("from")}
        language={language}
        control={control}
      />
      <Button
        aria-label="switch-button"
        className="bg-transparent shadow-none p-0"
        onClick={(e) => {
          e.preventDefault();
          switchPlacesValues();
        }}
      >
        <ArrowLeftRight size={48} />
      </Button>
      <FlightPlacesInput
        placeholder={t("to")}
        inputName="destination"
        setPlaceValue={setInputValue}
        errors={errors}
        tripType={tripType}
        placeValue={destinationValue}
        language={language}
        control={control}
      />
      <CalendarComponent
        dateValue={startDate}
        dataKey={startDateKey}
        placeholder={t("departureDate")}
        minDate={minDate}
        maxDate={maxDate}
        control={control}
      />
      <CalendarComponent
        dateValue={endDate}
        dataKey={endDateKey}
        placeholder={t("ReturnDate")}
        minDate={minDate}
        maxDate={maxDate}
        control={control}
        isDisabled={tripType === "one_way" ? true : false}
      />
    </div>
  );
};

export default OnewayAndRoundTrip;
