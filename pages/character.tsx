import type { NextPage } from "next";
import Link from "next/link";

const Character: NextPage = ({ character }:any) => {
  return (
    <div>
      {character.name}
    </div>
  );
};

Character.getInitialProps = async (ctx) => {
  const response = await fetch(`https://swapi.dev/api/people/${ctx.query.characterId}`);
  if (response.ok) {
    const character = await response.json();
    return { character };
  }

  return [];
};


export default Character;
