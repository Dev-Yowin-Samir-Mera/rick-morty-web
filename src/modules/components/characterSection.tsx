"use client";
import { useCharacters } from "@/hooks/useCharacters";
import CardCharacter from "./cardCharacter";

type CharacterSectionProps = {
  searchValue: string;
};

export default function CharacterSection({ searchValue }: CharacterSectionProps) {
  const { data, loading, error } = useCharacters(searchValue);
  return (
    <section className="flex flex-wrap justify-center h-full gap-2 px-4 pb-10">
      {loading && (
        <p className="text-white text-lg font-semibold py-10">
          Loading...
        </p>
      )}

      {error && !loading && (
        <p className="text-red-400 text-lg font-semibold py-10">{error}</p>
      )}

      {!loading && !error && data.length === 0 && (
        <p className="text-gray-300 text-lg font-semibold py-10">
          No characters found
        </p>
      )}

      {!loading &&
        !error &&
        data.map((character) => (
          <CardCharacter key={character.id} {...character} />
        ))}
    </section>
  );
}
