import { Button, Flex, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <NextLink href={"/search"} passHref legacyBehavior>
            <Button as={Link} colorScheme={"facebook"} padding={8}>
              Search
            </Button>
          </NextLink>
        </Flex>
      </main>
    </>
  );
}
