import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <main className="h-full min-h-screen w-full bg-gradient-to-b from-violet-950 to-black p-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <Accordion />
      </div>
    </main>
  );
}
