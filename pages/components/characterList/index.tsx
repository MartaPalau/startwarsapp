import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { ICharacterList } from "../../types/application";
import {
  Wrapper,
  Header,
  List,
  Bottom,
  ListItem,
  ListItemInfo,
  ListItemHeader,
  BottomLink,
} from "./styles";

const CharacterList: React.FC<ICharacterList> = ({ list }) => {
  const [charNum, setCharNum] = useState(3);
  const handleClick = () =>
    setCharNum((prevcharNum) => {
      return prevcharNum + 3;
    });

  return (
    <Wrapper>
      <Header>
        <Image src="/misc.svg" height={20} width={20} />
        <h2>Star Wars Characters</h2>
      </Header>
      <List>
        {list?.slice(0, charNum).map((character: any, index: number) => (
          <Link
            key={index}
            href={{ pathname: "/detail", query: { characterId: index + 1 } }}
          >
            <ListItem>
              <ListItemHeader>
                <h3>{character?.name}</h3>
                <Image src="/blaster.svg" height={20} width={20} />
              </ListItemHeader>
              <ListItemInfo>
                <h5>{character?.films.length} films</h5>
                <h5>birth year: {character?.birth_year}</h5>
              </ListItemInfo>
            </ListItem>
          </Link>
        ))}
      </List>
      <Bottom>
        {list.length >= charNum ? (
          <BottomLink onClick={handleClick}>Load More</BottomLink>
        ) : (
          <h4>No more items</h4>
        )}
      </Bottom>
    </Wrapper>
  );
};

export default CharacterList;
