import { NavigationMenuComponent } from "@/components/Navbar";
import { SpotterIdentifierSection } from "@/components/SpotterIndetifierSection";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-100 h-screen w-screen bg-neutral-100/50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <NavigationMenuComponent />

      <SpotterIdentifierSection />
    </>
  );
}
