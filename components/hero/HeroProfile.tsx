import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { Hero } from "./Hero.types";

type HeroProfileProps = {
  hero: Hero;
};

export default function HeroProfile({ hero }: HeroProfileProps) {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={hero?.image?.url} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {hero?.biography?.["full-name"]}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            {hero?.name}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {hero?.work.occupation}
          </Text>
          <Wrap>
            {hero?.biography?.aliases?.map((al, indx) => (
              <Badge
                key={`al-${indx}`}
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #{al}
              </Badge>
            ))}
          </Wrap>
        </Stack>
      </Stack>
    </Center>
  );
}
