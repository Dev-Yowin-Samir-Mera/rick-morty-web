import CharacterSection from "@/modules/components/characterSection";

export default function Home() {
  return (
    <main className="w-full">
      <section className="h-[40vh] flex flex-col items-center justify-start pt-10">
        <h1 className="font-title text-6xl text-center">
          <span className="block">Rick and Morty</span>
          <span className="block mt-8">Wiki</span>
        </h1>
      </section>
      <CharacterSection />
    </main>
  );
}
