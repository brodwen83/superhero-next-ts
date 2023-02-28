import { HeroSearchResponse } from "@/components/hero/Hero.types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: HeroSearchResponse;
};

export default async function heroSearchProxyHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;

  const response = await fetch(
    `https://www.superheroapi.com/api/6506451199374118/search/${query?.name}`
  );
  const data = await response.json();

  res.status(200).json(data);
}
