import ProductsContainer from "@/components/products/ProductsContainer";
import WarningBanner from "@/components/products/WarningBanner";

async function ArtPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const { search, layout } = await searchParams;
  const l = layout || "grid";
  const s = search || "";
  return (
    <div className="p-8 mt-12">
      <WarningBanner></WarningBanner>
      <ProductsContainer layout={l} search={s} />
    </div>
  );
}
export default ArtPage;
