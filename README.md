# Remix Template

A starter template for [bolt.diy](https://github.com/stackblitz-labs/bolt.diy).

## Purpose

This template is designed for use with **<https://github.com/stackblitz-labs/bolt.diy>**. bolt.diy fetches
these files at runtime and imports them into a fresh WebContainer project when you ask for a Remix project,
so everything here needs to install and build with no extra setup.

Modified by [Dustin Loring](https://github.com/Dustinwloring1988) (Dustinwloring1988) in October 2026.

## Stack

| Package | Version |
| --- | --- |
| @remix-run/node | ^2.17.5 |
| @remix-run/react | ^2.17.5 |
| @remix-run/server-runtime | ^2.17.5 |
| @remix-run/dev | ^2.17.5 |
| React | ^18.2.0 |
| React-Dom | ^18.2.0 |
| TypeScript | ~5.9.3 |
| Vite | ^6.4.4 |

Node 20 or newer is required.

## Commands

```bash
npm install   # install dependencies
npm run dev   # remix vite:dev — dev server
npm run build # remix vite:build — production build
npm run typecheck # tsc
```

## About this template

A Remix app with the App Server Renderer (ASR). Uses @remix-run/* packages exclusively (no @vercel/remix).
`@remix-run/dev@2.17.5` provides the router and APIs. React 18 is used intentionally — migrating to
React 19 / React Router 8 was not performed per user request. `engines.node` is set to `^20.0.0 || >=22.0.0`.

## Upgraded to Remix 2.17.5 (October 2026)

This template originally used @remix-run/dev with @vercel/remix as a peer dependency. The @vercel/remix
package was removed because it pins an exact @remix-run/dev@2.16.7 with a critical security advisory.
All @remix-run/* packages were updated to ^2.17.5, which is the latest 2.x release with stable Vite 6.x
integration.

Key changes:
- Removed `@vercel/remix` entirely
- MetaFunction imports switched from `@vercel/remix` to `@remix-run/node` in `app/routes/_index.tsx`
  and `app/routes/edge.tsx`
- Engines field set to `"node": "^20.0.0 || >=22.0.0"`
- `@remix-run/dev@2.17.5` with Vite ^6.4.4 and TypeScript ~5.9.3
- Vulnerability audit reduced from 54 to 32 (mixed: some new deps added, some removed)

TypeScript remains at ~5.9.3 because @remix-run/dev@2.17.5's peer range caps TS at <6.1, and the
ecosystem standard is TS 6.x rather than 7.

## Verification

- `npm install` and `npm run build` pass
- Confirmed dev server starts and the app renders at http://localhost:5173
- `npm run typecheck` runs tsc successfully
- Vulnerability audit: 32 remaining (lower than the original 54)