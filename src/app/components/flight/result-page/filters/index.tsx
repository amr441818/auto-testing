import { FlightFilters } from "@/types/flight";
import StopsFilter from "./stops-filter";
import PricesFilter from "./prices-filter";
type FiltersProps = {
  filtersData: FlightFilters;
};
const Filters = ({ filtersData }: FiltersProps) => {
  return (
    <div className="p-5">
      <StopsFilter stopsData={filtersData?.stops} />
      <PricesFilter
        minPrice={filtersData?.min_price}
        maxPrice={filtersData?.max_price}
      />
    </div>
  );
};

export default Filters;
