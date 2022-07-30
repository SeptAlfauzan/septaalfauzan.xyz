import { Client } from "@notionhq/client";
import { NextApiRequest } from "next";

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

interface Mail {
  name: string;
  message: string;
  email: string;
}

class ContactServices {
  static send = async (req: NextApiRequest) => {
    const data: Mail = req.body;

    const response = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: `${process.env.NOTION_MAIL_DATABASE}`,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: data.message,
              },
            },
          ],
        },
        Email: {
          email: data.email,
        },
      },
    });
    return response;
  };
}

export default ContactServices;
