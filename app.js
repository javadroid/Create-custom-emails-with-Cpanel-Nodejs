import axios from "axios";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const cpanelHost = process.env.cpanelHost;
const cpanelUsername = process.env.cpanelUsername;
const cpanelPassword = process.env.cpanelPassword;

const app = express();
app.use(express.json());

export const createEmailCpanel = async ({ domain, email, password }, auth) => {
  const apiEndpoint = `https://${cpanelHost}:2083/execute/Email/add_pop`;

  try {
    const response = await axios.post(
      apiEndpoint,
      { domain, email, password, quota: 100 },
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

app.post("/create-email-cpanel", async (req, res) => {
  const { domain, email, password, cpanelUser, cpanelPass } = req.body;

  const authPanel = {
    username: cpanelUser || cpanelUsername,
    password: cpanelPass || cpanelPassword,
  };
  if (!domain || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const data = {
    domain,
    email,
    password,
    quota: 100,
  };

  try {
    const response = await createEmailCpanel(data, authPanel);
    if (response?.status == 1) {
      return res.json(response);
    }
    return res.status(405).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
