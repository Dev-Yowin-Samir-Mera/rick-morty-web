"use client";
import { useCharacters } from "@/hooks/useCharacters";
import CardCharacter from "./cardCharacter";
import { useCharactersByName } from "@/hooks/useCharactersByName";

export default function CharacterSection() {
  const { data, loading, error } = useCharacters();
  return (
    <section className="flex flex-wrap justify-center h-full">
      <div className="w-full flex justify-center p-6">
        <div className="w-1/2 flex items-center rounded-lg border border-[#272B33] px-3">
          <input
            type="text"
            id="characterSearch"
            placeholder="Character search..."
            autoFocus
            className="flex-1 py-2 text-(--primary-color) font-bold border-none outline-none bg-transparent"
          />
          <img
            src="/icons/iconSearch.svg"
            alt="icon search"
            className="w-6 h-6"
          />
        </div>
      </div>
      {data?.map((character) => (
        <CardCharacter key={character.id} {...character} />
      ))}
    </section>
  );
}
