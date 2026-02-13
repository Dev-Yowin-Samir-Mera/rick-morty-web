"use client";

import { useCharacters } from "@/hooks/useCharacters";
import CardCharacter from "./cardCharacter";

export default function CharacterSection() {
  const { data, loading, error } = useCharacters();
  return (
    <section className="h-full" >
      <CardCharacter {...data[7]} />
    </section>
  );
}