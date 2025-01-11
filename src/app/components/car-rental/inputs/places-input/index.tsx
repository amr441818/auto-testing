// "use client";

// import * as React from "react";
// import { Check, ChevronsUpDown } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { useQuery } from "@tanstack/react-query";
// import apiServiceCall from "@/utils/api/shared/apiServiceCall";

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ];

// export default function PlacesInput() {
//   const [open, setOpen] = React.useState(false);
//   const [inputValue, setInputValue] = React.useState("");

//   const queryKey = ["placesData", inputValue];
//   const {
//     data: placesData,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey,
//     queryFn: () =>
//       apiServiceCall({
//         url: `/flights/airports?keyword=${inputValue}`, // Use dynamic input
//         method: "GET",
//       }),
//     enabled: inputValue.trim().length > 2, // Fetch only when inputValue is valid
//   });
// const ordredData=placesData?.data?.map((item:any)=>{
//   return{

//   }
// })
//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <Command>
//         <PopoverTrigger asChild>
//           <CommandInput
//             onValueChange={(val) => {
//               setInputValue(val);
//             }}
//             placeholder="Search places..."
//             role="combobox"
//             aria-expanded={open}
//             className="w-full justify-between bg-initialBg h-14"
//             value={inputValue}
//           />
//         </PopoverTrigger>
//         <PopoverContent
//           className="p-0 "
//           onOpenAutoFocus={(event) => {
//             event.preventDefault();
//           }}
//           onCloseAutoFocus={(event) => {
//             event.preventDefault();
//           }}
//         >
//           <CommandList>
//             <CommandEmpty>No place found.</CommandEmpty>
//             <CommandGroup>
//               {frameworks.map((place: any) => (
//                 <CommandItem
//                   key={place?.value}
//                   value={place?.value}
//                   onSelect={(currentValue) => {
//                     setInputValue(
//                       currentValue === inputValue ? "" : currentValue
//                     );
//                     setOpen(false);
//                   }}
//                 >
//                   {place?.label}
//                   <Check
//                     className={cn(
//                       "ml-auto",
//                       inputValue === place?.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </PopoverContent>
//       </Command>
//     </Popover>
//   );
// }
