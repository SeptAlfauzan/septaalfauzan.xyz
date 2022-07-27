import axios from "axios";

class Projects {
  static getAll = async () => {
    const headers = {
      Authorization: `Bearer ${process.env.NOTION_SECRET_KEY}`,
      "Notion-Version": "2021-05-11",
      "Content-Type": "application/json",
    };
    const test = await axios.request({
      url: `https://api.notion.com/v1/databases/${process.env.NOTION_PROJECTS_DATABASE}/query`,
      method: "POST",
      headers,
    });
    return test.data;
  };
}
export default Projects;
