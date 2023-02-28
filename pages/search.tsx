import { ReactNode, useState } from "react";

import { HeroSearchResponse } from "@/components/hero/Hero.types";
import HeroCard from "@/components/hero/HeroCard";
import SearchForm, { SearchValue } from "@/components/search/SearchForm";
import { Center, GridItem, SimpleGrid, useToast } from "@chakra-ui/react";
import { FormikHelpers, useFormik } from "formik";
import Head from "next/head";

function SearchPage() {
  const [heroResponse, setHeroResponse] = useState<HeroSearchResponse>();
  const toast = useToast();

  const handleSearch = async (
    values: SearchValue,
    { setSubmitting }: FormikHelpers<SearchValue>
  ) => {
    try {
      const response = await fetch(
        `/api/v1/heroes/search?name=${values.searchKeyword}`
      );
      const data: HeroSearchResponse = await response.json();
      console.log("🚀 ~ file: search.tsx:22 ~ SearchPage ~ data:", data);

      if (data.response === "error") {
        throw new Error(data.error);
      } else {
        toast({
          title: "Success!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setHeroResponse(data);
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast({
          title: "Error.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else
        toast({
          title: "Error.",
          description: "Search failed.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
    }

    setSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Hero Search</title>
        <meta name="description" content="Search page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <SearchForm onSearchSubmit={handleSearch} />
      </header>

      <main>
        <Center>
          <SimpleGrid columns={{ base: 1, md: 3 }} mt={8} spacing={2}>
            {heroResponse?.results?.map((hero) => {
              return <HeroCard key={hero.id} hero={hero} />;
            })}
          </SimpleGrid>
        </Center>
      </main>
    </>
  );
}

export default SearchPage;
