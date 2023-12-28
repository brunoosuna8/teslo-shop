import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}
export default function SingleCategoryPage({ params }: Props) {
  const { id } = params;
  if (id === "kids") {
    notFound();
  }
  return (
    <div>
      <h1>Single Category Page {id}</h1>
    </div>
  );
}
