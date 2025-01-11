"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DirectionProvider } from "@radix-ui/react-direction";
const Providers = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  const queryClient = new QueryClient();
  return (
    <DirectionProvider dir={locale === "ar" ? "rtl" : "ltr"}>
      <QueryClientProvider client={queryClient}>
        {children}{" "}
      </QueryClientProvider>
    </DirectionProvider>
  );
};

export default Providers;
