import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { Appearance, Biography, Connections, Hero, Work } from "./Hero.types";

type HeroProfileProps = {
  hero: Hero;
};

export default function HeroProfile({ hero }: HeroProfileProps) {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "6xl" }}
        // height={{ sm: "476px", md: "100vh" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={hero?.image?.url} />
        </Flex>
        {/* <VStack flex={1} alignItems="flex-start" p={1} pt={2}>
          <Heading as="h2" fontSize={"2xl"} fontFamily={"body"}>
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
        </VStack> */}

        <VStack flex={1} alignItems="flex-start" p={1} pt={2}>
          <Biography bio={hero?.biography} />
          <Appearance appearance={hero?.appearance} />
          <Work work={hero?.work} />
          <Connections conn={hero?.connections} />
        </VStack>
      </Stack>
    </Center>
  );
}

function TitleDetail(props: { title: string; detail: string }) {
  const { title, detail } = props;
  return (
    <HStack mb={4}>
      <Text fontWeight={700} color={"gray.600"}>
        {title}:
      </Text>
      <Text>{detail}</Text>
    </HStack>
  );
}

function Badges(props: { heading: string; arrBadges: string[] }) {
  const { heading, arrBadges } = props;
  return (
    <VStack align={"flex-start"}>
      <Text color={"gray.600"} fontWeight={600}>
        {heading}
      </Text>
      <Wrap>
        {arrBadges?.map((badge, indx) => (
          <Badge
            key={`al-${indx}`}
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #{badge}
          </Badge>
        ))}
      </Wrap>
    </VStack>
  );
}

function Biography(props: { bio: Biography }) {
  const { bio } = props;
  return (
    <VStack alignItems="flex-start" p={1} pt={2} spacing={2} width="full">
      <Heading as="h2" fontSize={"2xl"} fontFamily={"body"}>
        {bio["full-name"]}
      </Heading>

      <TitleDetail title="Alter Egos" detail={bio?.["alter-egos"]} />
      <Badges heading="Aliases" arrBadges={bio?.aliases} />
      <TitleDetail title="Place of Birth" detail={bio?.["place-of-birth"]} />
      <TitleDetail
        title="First Appearance"
        detail={bio?.["first-appearance"]}
      />
      <TitleDetail title="Publisher" detail={bio?.publisher} />
      <TitleDetail title="Alignment" detail={bio?.alignment} />
    </VStack>
  );
}

function Appearance(props: { appearance: Appearance }) {
  const { appearance } = props;
  return (
    <VStack alignItems="flex-start" p={1} pt={2} spacing={2} width="full">
      <Heading as="h2" fontSize={"1xl"} fontFamily={"body"}>
        Appearance
      </Heading>

      <TitleDetail title="Gender" detail={appearance?.gender} />
      <TitleDetail title="Race" detail={appearance?.race} />
      <TitleDetail title="Eye Color" detail={appearance?.["eye-color"]} />
      <TitleDetail title="Hair Color" detail={appearance?.["hair-color"]} />
      <TitleDetail
        title="Height"
        detail={`${appearance?.height?.[0]} | ${appearance?.height?.[1]}`}
      />
      <TitleDetail
        title="Weight"
        detail={`${appearance?.weight?.[0]} | ${appearance?.weight?.[1]}`}
      />
    </VStack>
  );
}

function Work(props: { work: Work }) {
  const { work } = props;
  return (
    <VStack alignItems="flex-start" p={1} pt={2} spacing={2} width="full">
      <Heading as="h2" fontSize={"1xl"} fontFamily={"body"}>
        Work
      </Heading>
      <TitleDetail title="Occupation" detail={work?.occupation} />
      <TitleDetail title="Base" detail={work?.base} />
    </VStack>
  );
}

function Connections(props: { conn: Connections }) {
  const { conn } = props;
  return (
    <VStack alignItems="flex-start" p={1} pt={2} spacing={2} width="full">
      <Heading as="h2" fontSize={"1xl"} fontFamily={"body"}>
        Connections
      </Heading>
      <TitleDetail
        title="Group Affiliations"
        detail={conn?.["group-affiliation"]}
      />
      <TitleDetail title="Relatives" detail={conn?.relatives} />
    </VStack>
  );
}
