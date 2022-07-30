// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ContactServices from "../../../features/Contact/services/api";

interface Data {
  data: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await ContactServices.send(req);
  res.status(200).json(response);
}
