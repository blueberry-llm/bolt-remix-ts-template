# Remix

This directory is a brief example of a [Remix](https://remix.run/docs) site.

To get started, run the Remix cli with this template

```sh
npx create-remix@latest --template remix-run/remix/templates/remix
```

## Deployment

This template builds for the standard Node.js server runtime and does not include a
deployment adapter. To deploy, add the adapter for your platform, for example
[`@vercel/remix`](https://www.npmjs.com/package/@vercel/remix) or
[`@remix-run/serve`](https://www.npmjs.com/package/@remix-run/serve).

Note that `@vercel/remix` pins an exact `@remix-run/dev` version, so it may need to be
matched to the Remix version in use here.

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:5173](http://localhost:5173) and you should be ready to go!

## Build and typecheck

```sh
npm run build
npm run typecheck
```