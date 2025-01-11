import { Button } from "@/components/ui/button";
import { Plane, University } from "lucide-react";
type PlacesProps = {
  placesData: any;
  setPlaceValue: Function;
  inputName: string;
  setOpen: Function;
  setInputValue: Function;
  tripType: string;
};
const Places = ({
  placesData,
  setPlaceValue,
  inputName,
  setOpen,
  setInputValue,
  tripType,
}: PlacesProps) => {
  const onSelectPlace = (place: any) => {
    const placeName = place?.name?.toLowerCase();
    setInputValue(placeName);
    setOpen(false);
    setPlaceValue(`flights_info.${0}.${inputName}`, place?.iataCode, {
      shouldValidate: true,
    });
    setPlaceValue(`flights_info.${0}.${inputName}_place_name`, placeName, {
      shouldValidate: true,
    });
  };
  return (
    <>
      {placesData?.data?.map((place: any, index: number) => (
        <div
          key={index}
          className="py-2 cursor-pointer flex hover:bg-bodyColor "
        >
          {place?.subType === "AIRPORT" ? (
            <Plane className="text-gray-500 mx-2" />
          ) : (
            <University className="text-gray-500 mx-2" />
          )}

          <Button
            onClick={onSelectPlace.bind(null, place)}
            className="py-5  w-full bg-transparent bottom-0 outline-none text-start shadow-none leading-none px-0 flex flex-col items-start"
          >
            <span className="font-semibold text-[14px] text-start capitalize ">
              {place?.name?.toLowerCase()}
            </span>
            <span className="text-xs text-paragraph capitalize text-start font-sans font-thin">
              {` ( ${place?.subType?.toLowerCase()}${" , "}
          ${place?.address?.cityName?.toLowerCase()})`}
            </span>
          </Button>
        </div>
      ))}
    </>
  );
};

export default Places;
