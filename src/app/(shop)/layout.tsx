import SideBar from "@/components/ui/side-bar/SideBar";
import TopMenu from "@/components/ui/top-menu/topMenu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-500 ">
      <TopMenu />

      <SideBar />
      <div className="px-0 sm:px-10">{children}</div>
    </main>
  );
}
