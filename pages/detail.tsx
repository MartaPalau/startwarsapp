import type { GetServerSideProps, NextPage } from "next";
import { ICharacter } from "./types/application";
import Character from "./components/character";

const Detail: NextPage<ICharacter> = ({ data, films }) => {
  return <Character data={data} films={films} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const dataRes = await fetch(
      `https://swapi.dev/api/people/${context.query.characterId}`
    );
    const data = await dataRes.json();

    let filmsArray = await Promise.all(
      data?.films.map(async (filmUrl: any) => {
        let filmResponse = await fetch(filmUrl)
        return filmResponse.json()
      })
    )

    return { props: { data, films: filmsArray } };

  } catch (e) {
    console.error(e);
    return { notFound: true };
  }
};

export default Detail;
