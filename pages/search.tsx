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
    console.log("values", values);
    setSubmitting(false);
  };

  return (
    <>
      <SearchForm onSearchSubmit={handleSearch} />

      {JSON.stringify(heroResponse)}
    </>
  );
}

export default SearchPage;
