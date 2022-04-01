import Link from "next/link";
import React, { useState } from "react";
import { ICharacterList } from "../../types/application"

const CharacterList: React.FC<ICharacterList> = ({ list }) => {
  const [charNum, setCharNum] = useState(3);
  const handleClick = () =>
    setCharNum((prevcharNum) => {
      return prevcharNum + 3;
    });

  return (
    <div>
      {list?.slice(0, charNum).map((character: any, index: number) => (
        <Link
          key={index}
          href={{ pathname: "/detail", query: { characterId: index + 1 } }}
        >
          {character?.name}
        </Link>
      ))}
      <button onClick={handleClick}>Load More</button>
    </div>
  );
};

export default CharacterList;
