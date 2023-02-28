import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";

type SearchFormProps = {
  onSearchSubmit: (
    values: SearchValue,
    helpers: FormikHelpers<SearchValue>
  ) => void;
};

export type SearchValue = {
  searchKeyword: string;
};

const initialValues = {
  searchKeyword: "",
};
const searchKeywordSchema = yup.object().shape({
  searchKeyword: yup.string().required("Search field is required."),
});

function SearchForm({ onSearchSubmit }: SearchFormProps) {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: searchKeywordSchema,
    onSubmit: onSearchSubmit,
  });

  return (
    <Flex justify={"center"} align={"center"}>
      <Box
        p={4}
        border="1px solid"
        width={"4xl"}
        borderColor="#ccc"
        mt={4}
        rounded="md"
      >
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <FormControl
              isRequired
              isInvalid={
                !!(formik.errors.searchKeyword && formik.touched.searchKeyword)
              }
              isDisabled={formik?.isSubmitting}
              aria-label="Username"
            >
              <FormLabel>Search Super Hero</FormLabel>
              <InputGroup size="md">
                <Input
                  type="text"
                  placeholder="batman"
                  name="searchKeyword"
                  value={formik.values.searchKeyword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoFocus
                />
                <InputRightElement width="8.5rem">
                  <Button
                    type="submit"
                    width="8.5rem"
                    size="sm"
                    loadingText="Searching..."
                    isLoading={formik.isSubmitting}
                    variant="solid"
                    colorScheme="facebook"
                    mr={2}
                  >
                    Search
                  </Button>
                </InputRightElement>
              </InputGroup>
              {formik.errors.searchKeyword && formik.touched.searchKeyword ? (
                <FormErrorMessage fontSize="xs">
                  {formik.errors.searchKeyword}
                </FormErrorMessage>
              ) : (
                <FormHelperText fontSize="xs">
                  Search superhero name.
                </FormHelperText>
              )}
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}

export default SearchForm;
