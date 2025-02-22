import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export const createEmailCpanel = async (
  {
    domain,
    email,
    password,
    quota,
  }: { domain: string; email:string; password:string; quota:string },
  auth:{
    password:string,
    username:string,
    cpanelHost:string
  }
) => {
  const apiEndpoint = `https://${auth.cpanelHost}:2083/execute/Email/add_pop`;

  try {
    const response = await axios.post(
      apiEndpoint,
      { domain, email, password, quota: quota || 100 },
      {
        auth,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    return response.data;
  } catch (error:any) {
    throw new Error(error.message);
  }
};
