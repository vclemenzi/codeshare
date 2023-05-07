# codeshare

Share your code, fast and easy. The following project is not online because the creator doesn't have enough money to pay for a database and a domain

# selfhost

To self-host the project, you need to follow these steps.

First, clone the repo
```bash
git clone https://github.com/athebigbot/codeshare
cd codeshare
```

Second, install the required modules with `yarn`
```bash
yarn
```

Third, create a new Vercel KV Database, and copy the .env.local file content given by Vercel to a new .env.local file in the root of the project
```bash
KV_URL="redis://*********@premium-quagga-33772.kv.vercel-storage.com:33772"
KV_REST_API_URL="https://premium-quagga-33772.kv.vercel-storage.com"
KV_REST_API_TOKEN="*********"
KV_REST_API_READ_ONLY_TOKEN="*********"
```