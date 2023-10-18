### 🚀 N2PMT Full-Stack Template

#### What's N2PMT?

- **N2PMT** is a Full-Stack Template for developers that want to use NextJs, Next-Auth, Prisma, MongoDB, TailwindCSS, and Redux as their tech stack.

- **N2PMT** is an open-source project that every developer can contribute to making it better.

Have any idea? Contribute!

---

#### How to use it?

1. Firstly, clone this repo to your local device

```sh
git clone https://github.com/vlhsmylv/n2pmt.git
```

2. Go to the directory and run the following command

```sh
npm install
```

3. Wait for all dependencies to be installed

4. Get your **MongoDB** connection string from [MongoDB Atlas](https://www.mongodb.com/atlas/database)

```YAML
DATABASE_URL="MONGODB_DB_CONNECTION_STR"
```

5. Edit your **Prisma** schema and write the following command in your terminal

```sh
npx prisma generate
```

###### It's time to set up Next-Auth!

1. Firstly, go to **.env** file and add required _environment variables_

```YAML
NEXTAUTH_SECRET="YOUR_SECRET_KEY"
NEXTAUTH_URL="YOUR_URL"
```

- `NEXTAUTH_SECRET` - Your Next-Auth secret that needs to be secure. You can generate it by following the command

```sh
openssl rand hex -32
```

If you don't have **openssl** then use online tools as [www.lastpass.com](https://www.lastpass.com/features/password-generator) to get secure password

- `NEXTAUTH_URL` - Your project's local or public URL. If your project is in development mode then use `http://localhost:PORT`, but if your project is in production mode, then add your project's public URL

---

#### How to contribute?

1. Follow steps in *How to use it?*

2. Make changes

3. Push it as a new branch!
