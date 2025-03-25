# Wedding Assistant App ( simplified idea )

A simple web application to assist in wedding planning and remembering things.

- Phase1: Simple banner and timer, single page, table and phone only.
- Phase2: Optimize to large screen and desktop.
- Phase3: Add authentication.
- Phase4: Add Permissions.
- Phase5: Simple management dashboard.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

For proper operation, you must set the following environment variables:

```bash

LEFT_DISPLAY_NAME = your name
RIGHT_DISPLAY_NAME = your name
CEREMONY_DATE = 2025-03-21 // or 2025-03-21T17:00

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
