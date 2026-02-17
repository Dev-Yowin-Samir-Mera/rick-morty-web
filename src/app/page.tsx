"use client";
import { useState } from "react";
import CharacterSection from "@/modules/components/characterSection";
import SearchBar from "@/modules/components/searchBar";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

export default function Home() {
  const [searchValue, setsearchValue] = useState("");
  const debouncedSearch = useDebouncedValue(searchValue.trim(), 500);

  return (
    <main className="w-full">
      <section className="h-[40vh] flex flex-col items-center justify-start pt-10">
        <h1 className="font-title text-6xl text-center">
          <span className="block">Rick and Morty</span>
          <span className="block mt-8">Wiki</span>
        </h1>
      </section>

      <SearchBar
        value={searchValue}
        onChange={setsearchValue}
        onSubmit={() => setsearchValue((value) => value.trim())}
      />

      <CharacterSection searchValue={debouncedSearch} />
    </main>
  );
}
