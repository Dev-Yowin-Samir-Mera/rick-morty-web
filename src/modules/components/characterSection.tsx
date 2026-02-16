"use client";

import { useCharacters } from "@/hooks/useCharacters";
import CardCharacter from "./cardCharacter";

export default function CharacterSection() {
  const { data, loading, error } = useCharacters();
  return (
    <section className="flex flex-wrap justify-center h-full" >
      {data?.map((character) => (
        <CardCharacter key={character.id} {...character} />
      ))}
    </section>
  );
}