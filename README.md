# Angels Makuwerere

Personal homepage for [Angels Makuwerere](https://github.com/angelsplato), a software engineer in Johannesburg. The layout is a quiet, typographic page in the spirit of [gregbrockman.com](https://gregbrockman.com/): a gray field, a white sheet, serif type, and lists of links.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43147](http://127.0.0.1:43147).

```bash
npm run build
npm start
```

## Edit the page

The homepage is `app/page.tsx`. Contact, projects, and the reading list live there as ordinary HTML. The email address is assembled in the browser in `app/email-link.tsx` so it is a little less obvious to scrapers.

Replace `public/portrait.png` to change the photo.
