import type { GetServerSideProps, NextPage } from "next";
import CharacterList from "./components/characterList";
import { ICharacterList } from "./types/application";

const Page: NextPage<ICharacterList> = ({ list }) => {
  return <CharacterList list={list} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const { results } = await response.json();
    return {
      props: {
        list: results,
      },
    };
  } catch (e: any) {
    return {
      props: {
        notFound: true,
      },
    };
  }
};

export default Page;
