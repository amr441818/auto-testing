import Image from "next/image";
import HomeTabs from "@/app/components/shared/home-tabs";
import Test from "@/app/components/Test";
interface LayoutProps {
  params: Promise<{ locale: string | any }>; // Handle both promise and object
}
export default async function HomePage({ params }: LayoutProps) {
  return (
    <div className="min-h-[438px] w-full relative">
      <Test/>
      <Image
        src="/cover.jpg"
        alt="banner"
        height={410}
        width={1200}
        priority
        className="w-full h-full absolute z-0 object-cover"
      />
      <div className="absolute w-full h-full z-10 top-0">
        <div>
          <HomeTabs language={(await params).locale} />
        </div>
      </div>
    </div>
  );
}
