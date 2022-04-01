import type { GetServerSideProps, NextPage } from "next";
import { ICharacter } from "./types/application";
import Character from "./components/character";

const Detail: NextPage<ICharacter> = ({ data }) => {
  return <Character data={data} />
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/${context.query.characterId}`
    );
    const character = await response.json();
    return {
      props: {
        data: character,
      },
    };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
};

export default Detail;
