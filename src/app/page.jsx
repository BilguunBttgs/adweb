import Catalog from "@/components/Catalog";
import CategorySwiperCards from "@/components/cards/CategorySwiperCards";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full flex-center-col">
        <div className="w-full flex-center-row py-10 bg-gray-100">
          <section className="main-section-wrapper flex-center-col">
            <h2 className="text-4xl font-medium text-center">БҮХ ЗАР</h2>
            <div className="max-w-[900px] w-full">
              <CategorySwiperCards />
            </div>
          </section>
        </div>
        <Catalog />
      </main>
    </>
  );
}
