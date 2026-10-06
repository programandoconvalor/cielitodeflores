import Catalog from "@/components/Catalog";
import HeroCarouselModal from "@/components/HeroCarouselModal";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function CatalogPage() {
  return (
    <main className="-mt-[106px] bg-white md:-mt-20">
      <HeroCarouselModal />
      <Catalog visible={true} />
      <ScrollToTopButton />
    </main>
  );
}
