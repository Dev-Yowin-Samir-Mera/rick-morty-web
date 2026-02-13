import { Character } from "@/types/rickAndMorty";
import { getStatusColor } from "@/utils/getColorStatus";

export default function CardCharacter(character: Character) {
  return (
    <article className="bg-[#272B33] w-[450px] h-[200px] rounded-lg m-2 flex">
      <div className="w-1/3 overflow-hidden">
        <img
          className="rounded-tl-lg rounded-bl-lg object-cover w-full h-full"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col">
        <div>
          <h2 className="text-white text-xl font-bold">{character.name}</h2>
          <p className="text-white text-sm flex items-center gap-2">
            <span
              style={{ backgroundColor: getStatusColor(character.status) }}
              className="h-2 w-2 rounded-full"
            ></span>
            {character.status} - {character.species}
          </p>
        </div>

        <div className="mt-auto">
          <p className="text-gray-400 text-sm">Origin:</p>
          <p className="text-white text-sm">{character.origin.name}</p>
        </div>

        <div className="mt-auto">
          <p className="text-gray-400 text-sm">Last known location:</p>
          <p className="text-white text-sm">{character.location.name}</p>
        </div>
      </div>
    </article>
  );
}
