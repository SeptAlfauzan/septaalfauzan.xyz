// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  CreatedTimePropertyItemObjectResponse,
  FilesPropertyItemObjectResponse,
  RichTextPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { NextApiRequest, NextApiResponse } from "next";
import ProjectsServices from "../../../features/Projects/services/database";

interface Block {
  Name: TitlePropertyItemObjectResponse;
  Thumbnail: FilesPropertyItemObjectResponse;
  Description: RichTextPropertyItemObjectResponse;
  Github: UrlPropertyItemObjectResponse;
  Production: UrlPropertyItemObjectResponse;
  Download: UrlPropertyItemObjectResponse;
  Created: CreatedTimePropertyItemObjectResponse;
}

interface Data {
  data: Block[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await ProjectsServices.getAll();
  res
    .status(200)
    .json(response.results.map((result: any) => result.properties));
}
