import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";

const products = initialData.products;
export default function Home() {
  return (
    <div>
      <Title title={"Tienda"} subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
    </div>
  );
}
