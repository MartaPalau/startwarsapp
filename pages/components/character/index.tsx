import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { ICharacter } from "../../types/application";
import { Wrapper, Header, Card, LoadMore, ListItem } from "./styles";

const Character: NextPage<ICharacter> = ({ data }) => {
  return (
    <Wrapper>
      <Header>
        <h2>{data?.name}</h2>
      </Header>

      <Card></Card>

      <Link href={"/"}>
        <LoadMore>Back to Home</LoadMore>
      </Link>
    </Wrapper>
  );
};

export default Character;
