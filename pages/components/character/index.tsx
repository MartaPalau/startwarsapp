import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { ICharacter } from "../../types/application";

const Character: NextPage<ICharacter> = ({ data }) => {
  return <div>
    <Link href={"/"}>Back to Home</Link>
    <div>{data?.name}</div>
    </div>;
};

export default Character;
