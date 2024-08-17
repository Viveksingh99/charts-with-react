import Charts from "@/components/Charts";
import ResposiveChart from "@/components/ResposiveChart";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-red-700">Show Charts</h1>
      <Charts />
      <ResposiveChart/>
    </>
  );
}
