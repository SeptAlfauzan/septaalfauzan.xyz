// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Projects from "../../../features/Projects/services/database";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await Projects.getAll();
  //   console.log(response);
  res
    .status(200)
    .json(response.results.map((result: any) => result.properties));
}
