import express from 'express';
import cors from 'cors';
import { GoogleAuth } from 'google-auth-library'; // 引入 google-auth-library
import fetch from 'node-fetch';  // 引入 node-fetch


//設立port號
export const PORT = 5002;


const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// 創建驗證用戶
const auth = new GoogleAuth({
    credentials: {
        type: "service_account",
        project_id: "quick-keel-443904-p3",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCRkjvXkzQy6XvP\nGtICLo24VBqxhPixclv4PSTwfkaEgNATMZnj56zNSeJzWG5JVx2A7QNMtprUd4M5\nwycfLsHoAC77knsDcD7v5AgJhKQVPqGEBJsz2+YeeShVYWHRHtidSXAMB/0yGSyF\nk0vF9naXdqMjoNL8EQx6XT3Pmyekpq1dRmg5kGiYFL8DVxx07jCBcc6LugyRM3h7\n5JNulrj/2CCwuFMoCpS9n1wgVysXP6LQxq1UV8oVZl14DHiFeYjYsJHlIzJuQypy\nb9dZEztBAhYSAGBsctz0fI6wMhtrcXfig4stnHILu+Td3WXTG+rLMZcFFWe24pY5\nCdXb6Ps/AgMBAAECggEAQTRi6LOPqJRr+D83vXFz2pKVqFl6+iTS7FUbFDxDwvtd\n+JL5rxupjATh0a/VKrXCSesgVL7giHYGChwPjIipo41dfiNFRauEDXkzXmwTAU8e\nEt/rUyXXJGQ5vFDT+1NZTM7FySXU9JlRF338bW5x/XNPLNjPWMgcMj1MwA7sCXRQ\nOwpj7I4n54Z+pmQXQ3FPAFPoOUIyoIKh5AoxFlSDrpj3+mvOByp1xIUb+19GKa5n\nUNfsPqRQ6yAWKAEAL6ZMpgfvFgcp74BEDSts/i46pmrKGOJzFWWS0ERGeJoVk3Lp\nPKIzKA6sLgr8fVfDFiwFV43pm0QSwMWtdYe71BRVCQKBgQDLZ1AmUNDqGfQhTxzX\nqJr/LzveRky6oemxGfWVGCuY746PEboL+7WgdwSxyhzn1UehEDu7tFsb+YU9lzJU\nONX8Bv73rp6V9mQCJLJG+zCA9nsOldAF9HWoowIHxoR2J+pqu4nHeBmVvvkFS6sq\nYKFxZ5GkcoPsTkmkXn8KX7FH5wKBgQC3Npk9FS7+JPsp3SN68c9pGg8b+TRf/9Z5\njsQQmTaxKWbRPUnkIfRP6tHuxKfFu4nzrL6l473pl9tgCR04OY3Ef29pUQFBmOiD\np0Rn9ER873vrQTcA0St2HgIlBjLlYvzOHUmaqtEWXVi1G3HKBsyBUekutFZqrea8\nTo95iMPm6QKBgGTX99jHQIyQCYVqH7acFRxnYps0512wYJg5cpRUw2izfE5aT48Z\nYFcKKv2qYuJdz4F+9t588J7R+skqaP1woEavgUFzBZT772FQqEKgzs9hZGk6xUPu\ni1bsWllYhtu9tm7sQ8btOGIRqIyDk30TI3eCDacmT1mdBs3DO+D8yHwJAoGAbE2d\nNkuQdPG9e1jbAXFyL2oVJm8hM+KTkVYAtuMrPnz/5464YGBmANwJ74BWwP+EpAQo\nyv2epTh8mP+qQzNah57haDtXZ8SRJko5mM3/sm8LLN1nO1dqvq8si2Bns8vZL6qG\neSSi5vqVVrH7iPaN66BVHKPENdnI/OXf0HM1gwkCgYBHOhWHsxpbHYOlBvjVGoek\nIrm70oCRLmHFUh6k2zT9QhCAtskQtKiXY+zVOCxwVFxQmk7skY4ziWbmz2xitAdM\n0ifvikWUl/BG2RAFrhyvPOM6tTNFR1jyAO6/+EvVL9vdTpjbofLxsW5b5GvLoILw\nIRiWg2rxtAhOZwiFThUfNQ==\n-----END PRIVATE KEY-----\n",
        client_email: "visionapi@quick-keel-443904-p3.iam.gserviceaccount.com"
    },
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
});

app.post('/api/analyze-image', async (req, res) => {
    try {
        const client = await auth.getClient();
        const token = await client.getAccessToken();

        const response = await fetch('https://vision.googleapis.com/v1/images:annotate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`BioServe is running on port  http://localhost:${PORT}`);
});