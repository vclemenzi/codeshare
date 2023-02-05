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

Third, create a MongoDB database following the following information

- db_name: codeshare
- db_collection: documents

Now, create the .env file and insert the following string.
```
MONGO_URI=<db_conn_url>/codeshare?retryWrites=true&w=majority
```

Have fun!

```bash
yarn dev
```