import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import LandingPageLayout from "@/components/Layouts/LandingPageLayout";
import Typewriter from "@/components/Texts/typingEffects"
export const metadata: Metadata = {
  title:
    "node.0",
  description: "Operating Manual for Entersprise Carbon Emission Analytics",
};

export default function Home() {
  return (
    <LandingPageLayout>
      <main className="flex flex-1 flex-col items-center justify-center p-6 text-center md:flex-row md:space-x-8 md:text-left">
        <div className="flex max-w-md flex-col gap-8">
          <h1 className="font-title text-4xl md:text-5xl">Measure 10<strong>⤫</strong> the carbon emission in 1/10<sup>th</sup> the time</h1>
          <p className="font-title text-xl text-muted-foreground">Node.0 delivers real-time insights with our ESG Carbon Emission Platform. Track, reduce, and optimize your carbon footprint to stay ahead of regulations and drive sustainable impact.</p>
        </div>
        <img className="mt-8 w-full max-w-lg md:mt-0 md:block hidden" src={"/images/image1.svg"}></img>
      </main>
      <section className="border-t py-4 text-center md:py-8">
        <span><Typewriter /></span>
      </section>
    </LandingPageLayout>
    
  );
}
