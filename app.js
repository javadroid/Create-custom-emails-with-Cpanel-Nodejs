import axios from "axios"
import express from "express";
import dotenv from "dotenv"

dotenv.config();
const cpanelHostUrl =process.env.cpanelHost
const cpanelUsername =process.env.cpanelUsername
const cpanelPassword =process.env.cpanelPassword





const app = express();
app.use(express.json());

app.post("/create-email-cpanel", async (req, res) => {
    const { domain, email, password,cpanelUser,cpanelPass,cpanelHost } = req.body;

    const authPanel = {
        username:cpanelUser||cpanelUsername,
         password:cpanelPass||cpanelPassword
    }
    if (!domain || !email || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const apiEndpoint = `https://${cpanelHost||cpanelHostUrl}:2083/execute/Email/add_pop`;
    const data = {
        domain,
        email,
        password,
        quota: 100,
    };

    try {
        const response = await axios.post(apiEndpoint, data, {
            auth: authPanel,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        if(response.data.status ==1){
            return res.json(response.data);
        }

         return res.status(405).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
