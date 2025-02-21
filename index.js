import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const cpanelHost = process.env.cpanelHost;
const cpanelUsername = process.env.cpanelUsername;
const cpanelPassword = process.env.cpanelPassword;


export const createEmailCpanel = async ({ domain, email, password,quota }, auth) => {
  const apiEndpoint = `https://${auth.cpanelHost}:2083/execute/Email/add_pop`;

  try {
    const response = await axios.post(
      apiEndpoint,
      { domain, email, password, quota: quota||100 },
      {
        auth,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};


