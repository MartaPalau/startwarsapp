import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { ICharacter } from "../../types/application";
import {
  Wrapper,
  Header,
  Card,
  Bottom,
  CardHeader,
  Cards,
  InnerCards,
  CardItem
} from "./styles";

const Character: NextPage<ICharacter> = ({ data, films }) => {
  const {
    name,
    height,
    gender,
    mass,
    hair_color,
    eye_color,
    skin_color,
    birth_year,
  } = data || {};
  return (
    <Wrapper test-id="character-detail">
      <Header>
        <Image src="/misc.svg" alt="header" height={20} width={20} />
        <h2>Star Wars Characters</h2>
        <h4>{name}</h4>
      </Header>
      <Cards>
        <InnerCards>
          <Card>
            <h4>Height: {height}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Mass: {mass}</h4>
            <h4>Hair color: {hair_color}</h4>
            <h4>Eye color: {eye_color}</h4>
            <h4>Skin color: {skin_color}</h4>
            <h4>Birth Year: {birth_year}</h4>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="/fighter.svg"
                alt="films_header"
                height={20}
                width={20}
              />
              <h4>{films?.length} Films</h4>
            </CardHeader>
            {films?.map((film) => (
              <CardItem key={film?.episode_id}>
                <Image
                  src="/deathStar.svg"
                  alt="film_item"
                  height={15}
                  width={15}
                />
                <h4>{film?.title}</h4>
              </CardItem>
            ))}
          </Card>
        </InnerCards>
      </Cards>

      <Link href={"/"} passHref>
        <Bottom>
          <h4>Back to Home</h4>
        </Bottom>
      </Link>
    </Wrapper>
  );
};

export default Character;
