"use client";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import * as Sentry from "@sentry/nextjs";
const products = initialData.products;

export default function Home() {
  const handleError = () => {
    try {
      throw new Error("Intentional Error has been triggered");
    } catch (error) {
      Sentry.captureException(error);
    }
  };
  return (
    <div>
      <Title title={"Tienda"} subtitle="Todos los productos" className="mb-2" />
      <button onClick={handleError}>Error Button</button>
      <ProductGrid products={products} />
    </div>
  );
}
