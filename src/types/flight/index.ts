interface FlightPlace{
                                            
}
export interface FlightInfoDtails{
    departure_date: number;
    origin: string;
    destination: string;
    origin_place_name: string;
    destination_place_name: string;
}
export interface FlightInfo{
        origin:string;
        destination:string;
        departure_date:string;
          
}
export interface FlightAirlines{
    AirLineCode: string;
    AirLineName: string;
    AirLineLogo: string;
    min_price:number;
    count:number;
}
export interface FlightStops{
'0': number;
'1': number;
'2':number;
}
export interface FlightFilters{
  
        airlines:FlightAirlines[];
        min_price: number,
        max_price: number,
        stops: FlightStops;
      
}