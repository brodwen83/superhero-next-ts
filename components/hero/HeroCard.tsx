import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Hero } from "./Hero.types";

type HeroCardProps = {
  hero: Hero;
};

export default function HeroCard(props: HeroCardProps) {
  const { hero } = props;

  return (
    <Box
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={hero?.image?.url}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
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

      <Stack mt={8} direction={"row"} spacing={4}>
        <NextLink href={`profile/${hero.id}`} passHref legacyBehavior>
          <Button
            as={Link}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            View
          </Button>
        </NextLink>
      </Stack>
    </Box>
  );
}
