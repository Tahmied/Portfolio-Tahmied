# Portfolio - Next.js TypeScript

This is a Next.js portfolio website converted from a static HTML/CSS/JS project.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app directory
  - `page.tsx` - Homepage
  - `blog/page.tsx` - Blog page
  - `projects/page.tsx` - Projects page
  - `components/` - Reusable components (Header, Footer)
  - `globals.css` - Global styles
  - `layout.tsx` - Root layout
- `public/media/` - Static assets (images, videos)

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All original HTML/CSS/JS has been converted to Next.js with TypeScript
- The frontend appearance remains exactly the same as the original
- Media files are in the `public/media/` directory
- The project uses Next.js App Router

