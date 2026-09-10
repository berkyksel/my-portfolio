# Berk Yüksel Portfolio

Next.js portfolio site with a Prisma/PostgreSQL-backed contact form.

## Local development

```bash
npm install
copy .env.example .env
npx prisma generate
npx prisma migrate dev
npm run dev
```

Set `DATABASE_URL` in `.env` to a PostgreSQL database before running migrations or testing the contact form.

## Production deployment

1. Import the `frontend` directory into Vercel (or deploy it as the project root).
2. Add `DATABASE_URL` to the production environment variables.
3. Run `npx prisma migrate deploy` against the production database.
4. Deploy with `npm run build`; Vercel uses `npm run build` automatically.

The contact form requires a reachable PostgreSQL database in production. The site itself can build without submitting a form, but the form will return an error until `DATABASE_URL` and the migrations are configured.
