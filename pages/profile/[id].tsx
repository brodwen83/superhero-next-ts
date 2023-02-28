import { Hero } from "@/components/hero/Hero.types";
import HeroProfile from "@/components/hero/HeroProfile";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ProfilePageProps = {
  hero: Hero;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;

  const response = await fetch(
    `https://www.superheroapi.com/api/6506451199374118/${params?.id}`
  );
  const data = await response.json();

  return {
    props: {
      hero: data,
    },
    revalidate: 15,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const heroIds: string[] = ["1", "2"];

  const paths = heroIds.map((id) => {
    return {
      params: { id },
    };
  });

  return { paths, fallback: true };
};

function ProfilePage(props: ProfilePageProps) {
  const { hero } = props;
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Hero Profile</title>
        <meta name="description" content="Hero details page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <HeroProfile hero={hero} />
      </main>
    </>
  );
}

export default ProfilePage;
