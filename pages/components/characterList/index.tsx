import Link from "next/link";
import React, { useState } from "react";
import { ICharacterList } from "../../types/application";
import { Wrapper, Header, List, LoadMore, ListItem } from "./styles";

const CharacterList: React.FC<ICharacterList> = ({ list }) => {
  const [charNum, setCharNum] = useState(3);
  const handleClick = () =>
    setCharNum((prevcharNum) => {
      return prevcharNum + 3;
    });

  return (
    <Wrapper>
      <Header>
        <h2>Star Wars Characters</h2>
      </Header>
      <List>
        {list?.slice(0, charNum).map((character: any, index: number) => (
          <Link
            key={index}
            href={{ pathname: "/detail", query: { characterId: index + 1 } }}
          >
            <ListItem>
              <h3>{character?.name}</h3>
              ...
            </ListItem>
          </Link>
        ))}
      </List>
      <LoadMore onClick={handleClick}>Load More</LoadMore>
    </Wrapper>
  );
};

export default CharacterList;
