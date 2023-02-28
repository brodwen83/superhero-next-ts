import { ReactNode, useState } from "react";

import { HeroSearchResponse } from "@/components/hero/Hero.types";
import SearchForm, { SearchValue } from "@/components/search/SearchForm";
import { Center, GridItem, SimpleGrid } from "@chakra-ui/react";
import { FormikHelpers, useFormik } from "formik";

type SearchProps = {
  children?: ReactNode;
};

function SearchPage(props: SearchProps) {
  const [heroResponse, setHeroResponse] = useState<HeroSearchResponse>();

  const handleSearch = async (
    values: SearchValue,
    { setSubmitting }: FormikHelpers<SearchValue>
  ) => {
    try {
      const response = await fetch(
        `/api/v1/heroes/search?name=${values.searchKeyword}`
      );
      const data: HeroSearchResponse = await response.json();
      setHeroResponse(data);
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  console.log("heroResponse", heroResponse);

  return (
    <>
      <SearchForm onSearchSubmit={handleSearch} />

      {JSON.stringify(heroResponse)}
    </>
  );
}

export default SearchPage;
