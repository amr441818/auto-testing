"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQuery } from "@tanstack/react-query";
import apiServiceCall from "@/utils/api/shared/apiServiceCall";
import { Input } from "@/components/ui/input";
import { Plane } from "lucide-react";
import Places from "./components/places";
import { LoadingIcon } from "@/app/components/icons";
import { Controller } from "react-hook-form";
type FlightPlacesInputProps = {
  inputName: string;
  setPlaceValue: Function;
  errors: any;
  tripType: string;
  placeValue?: string;
  placeholder?: string;
  language?: string;
  control: any;
} & React.HTMLAttributes<HTMLDivElement>;
export default function FlightPlacesInput({
  inputName,
  setPlaceValue,
  errors,
  tripType,
  placeValue,
  placeholder,
  language,
  control,
}: FlightPlacesInputProps) {
  const triggerRef: any = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const isInputLengh = inputValue?.trim()?.length > 2;
  const queryKey = ["placesData", inputValue];
  const {
    data: placesData,
    isLoading,
    error,
  } = useQuery({
    queryKey,
    queryFn: () =>
      apiServiceCall({
        url: `/flights/airports?keyword=${inputValue}`, // Use dynamic input
        method: "GET",
        headers: {
          "Accept-Language": language,
        },
      }),
    enabled: isInputLengh, // Fetch only when inputValue is valid
  });

  // get places using iata code
  React.useEffect(() => {
    if (placeValue) {
      setInputValue(placeValue);
    }
  }, [placeValue]);
  // then set place name after fetching places
  React.useEffect(() => {
    const newPlaceValue = placesData?.data?.find(
      (item: any) => item?.iataCode === placeValue
    );
    if (newPlaceValue) {
      setInputValue(newPlaceValue?.name.toLowerCase());
    }
  }, [placesData]);
  return (
    <Popover
      open={isInputLengh ? open : false}
      onOpenChange={(open) => {
        if (!open) {
          setOpen(false);
        }
      }}
    >
      <PopoverTrigger
        className={`w-full flex bg-initialBg px-4 rounded-md items-center ${
          errors?.flights_info?.[0][inputName] ? "border-red-500 border" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!open) setOpen(true); // Allow manual open
        }}
        ref={triggerRef}
      >
        <Plane className="text-gray-500 -mr-2" />
        <Controller
          name={`flights_info[0].${inputName}`}
          rules={{
            required: "This field is required", // Validation rule with a custom error message
          }}
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              onChange={(e) => {
                setInputValue(e.target.value);
                field.onChange(e.target.value);
              }}
              value={inputValue}
              placeholder={placeholder}
              aria-expanded={open}
              className={`capitalize w-full justify-between bg-transparent h-[48px] focus:outline-none focus-visible:ring-0 shadow-none rounded-none border-0 `}
              autoComplete="off"
            />
          )}
        />
      </PopoverTrigger>
      <PopoverContent
        style={{
          width: triggerRef?.current
            ? `${triggerRef?.current?.offsetWidth}px`
            : "auto",
        }}
        className="p-5 max-h-[350px] overflow-y-auto min-w-[300px] "
        onOpenAutoFocus={(event) => {
          event.preventDefault();
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
        }}
      >
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-full">
            <span className="">
              <LoadingIcon
                height="2em"
                width="2em"
                className="text-paragraph"
              />
            </span>
          </div>
        ) : (
          <Places
            setOpen={setOpen}
            placesData={placesData}
            setPlaceValue={setPlaceValue}
            setInputValue={setInputValue}
            inputName={inputName}
            tripType={tripType}
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
5;
