import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { ICharacter } from "../../types/application";
import { Wrapper, Header, Card, Bottom, CardHeader, Cards, InnerCards } from "./styles";

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
    <Wrapper>
      <Header>
        <h2>{name}</h2>
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
              <Image src="/fighter.svg" height={20} width={20} />
              <h4>{films?.length} Films</h4>
            </CardHeader>
            {films?.map((film) => (
              <h4>{film?.title}</h4>
            ))}
          </Card>
        </InnerCards>
      </Cards>

      <Link href={"/"}>
        <Bottom>
          <h4>Back to Home</h4>
        </Bottom>
      </Link>
    </Wrapper>
  );
};

export default Character;
