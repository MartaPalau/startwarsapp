import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = ({ characters }: any) => {
  const [ postNum, setPostNum] = useState(3);
  const handleClick = () => setPostNum(prevPostNum => prevPostNum + 3);
  console.log('postNum:', postNum)
  
  return (
    <div>
      {characters.slice(0, postNum).map((character: any, index: number) => (
        <Link key={index} href={{ pathname: "/character", query: { characterId: index + 1 } }}>
          {character.name}
        </Link>
      ))}

      <button onClick={handleClick}>Load More</button>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  const response = await fetch("https://swapi.dev/api/people");
  if (response.ok) {
    const { results } = await response.json();
    return { characters: results };
  }

  return [];
};

export default Home;
