import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Minus } from "lucide-react";
type CounterProps = {
  passengerType: string;
  passengerNumber: number;
  passengerKey: string;
  setTravellerValue: Function;
};
const Counter = ({
  passengerType,
  passengerNumber,
  passengerKey,
  setTravellerValue,
}: CounterProps) => {
  const addTraveller = () => {
    setTravellerValue(passengerKey, passengerNumber + 1, {
      shouldValidate: true,
    });
  };
  const removeTraveller = () => {
    if (passengerNumber > 0 && passengerKey !== "adults") {
      setTravellerValue(passengerKey, passengerNumber - 1, {
        shouldValidate: true,
      });
    } else if (passengerNumber > 1 && passengerKey === "adults") {
      setTravellerValue(passengerKey, passengerNumber - 1, {
        shouldValidate: true,
      });
    }
  };
  return (
    <div className="flex justify-between items-center ">
      <Label>{passengerType}</Label>
      <div className="flex gap-5  items-center">
        <Button
          onClick={addTraveller}
          className="flex justify-center items-center border bg-transparent "
          aria-label="plus-button"
        >
          <Plus />
        </Button>
        <Label>{passengerNumber}</Label>
        <Button
          className="flex justify-center items-center border bg-transparent "
          onClick={removeTraveller}
        >
          <Minus />
        </Button>
      </div>
    </div>
  );
};

export default Counter;
