import { format } from "date-fns";
import { PlaneIcon } from "@/app/components/icons";
import { Fragment } from "react";
import { arSA, enUS } from "date-fns/locale";
import Image from "next/image";
type ResultCardProps = {
  leg: any;
  language: string;
};
const ResultCard = ({ leg, language }: ResultCardProps) => {
  const lang = language === "ar" ? arSA : enUS;
  return (
    <>
      <div className="w-full mx-auto p-4 border  rounded-lg shadow-md bg-initialBg hover:border-2 hover:border-primary cursor-pointer">
        {leg?.flights?.map((flight: any, index: number) => (
          <Fragment key={index}>
            {/* Flight Details */}
            <div className="flex justify-between items-center">
              {/* Airline Information */}
              <div className="flex justify-center items-center mt-4">
                <div className="px-10 flex  flex-col items-center">
                  <Image
                    src={flight?.airline?.AirLineLogo} // Replace with your airline logo path
                    alt="Egypt Air"
                    className="w-10 h-10 mb-2"
                    height={50}
                    width={50}
                  />
                  <p className="text-sm text-gray-800">
                    {flight?.airline?.AirLineName}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-800">
                  {format(flight?.departure?.date_time, "hh:mm a", {
                    locale: lang,
                  })}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {flight?.departure?.airport}
                </p>
              </div>

              <div className="flex-1 mx-4 py-2">
                <div className="flex items-center justify-center ">
                  <div className="w-full">
                    <p className="text-center mb-2">
                      Stop{" "}
                      {
                        leg?.flight_offer?.itineraries[0]?.segments[0]
                          ?.numberOfStops
                      }
                    </p>{" "}
                    <div className="flex items-center justify-center w-full">
                      <span className="border border-dashed h-px border-gray-300 w-full -mb-5" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <PlaneIcon
                    className={` mx-2 -mt-[6px] text-fontColor ${
                      language === "ar" ? "rotate-180" : ""
                    }`}
                    height="2em"
                    width="2em"
                  />
                </div>
                <p className="text-center text-sm text-mainText mt-6">
                  {flight?.duration}
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-gray-800">
                  {" "}
                  {format(flight?.arrival?.date_time, "hh:mm a", {
                    locale: lang,
                  })}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {flight?.arrival?.airport}
                </p>
              </div>
            </div>
          </Fragment>
        ))}
        {/* Price */}
        <div className="mt-4 border-t pt-2">
          <p className="text-lg font-bold text-primary rtl:text-left ltr:text-right py-2">
            {leg?.price?.total} {leg?.price?.currency}
          </p>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
