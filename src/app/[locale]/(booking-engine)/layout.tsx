import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import Header from "@/app/components/shared/header";
import Footer from "@/app/components/shared/footer";
import { ReactNode } from "react";
import Providers from "@/styles/providers";
import { Cairo } from "next/font/google";
// Define the correct type for LayoutProps
interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string | any }>; // Handle both promise and object
}
const cairo = Cairo({
  subsets: ["latin"], // Include specific subsets
  weight: ["400", "700"], // Include weights as needed
});
export default async function Layout({ children, params }: LayoutProps) {
  // If params is a promise, await it to resolve
  const resolvedParams = await (params instanceof Promise
    ? params
    : Promise.resolve(params));
  const { locale } = resolvedParams;

  // Validate the incoming locale against the supported locales
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Return the layout with NextIntlClientProvider
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${cairo.className} bg-bodyColor`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <NextIntlClientProvider locale={locale || "en"} messages={messages}>
          <Providers locale={locale || "en"}>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
