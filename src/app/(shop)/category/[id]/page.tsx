"use client";
import { captureException } from "@sentry/nextjs";
import { notFound } from "next/navigation";
interface Props {
  params: {
    id: string;
  };
}
export default function SingleCategoryPage({ params }: Props) {
  const handleError = () => {
    throw new Error("intentional error without capture");
    // try {
    //   throw new Error(`intentional error on ${id} category`);
    // } catch (error) {
    //   captureException(error);
    // }
  };
  const { id } = params;
  if (id === "kids") {
    notFound();
  }
  return (
    <div>
      <h1>Single Category Page {id}</h1>
      <button onClick={handleError}>Error Button on {id}</button>
    </div>
  );
}
