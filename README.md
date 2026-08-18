# Armand Fardeau — portfolio

Astro-powered static GitHub Pages portfolio for [armandfardeau](https://github.com/armandfardeau).

The site is statically generated with Astro. Repository metadata is enhanced from the public GitHub API when available, while the editorial content remains available without JavaScript or an API connection.

## Local preview

```sh
npm install
npm run dev
```

Then open the local URL shown by Astro. Create a production build with `npm run build` and preview it with `npm run preview`.

GitHub Pages deployment is handled by `.github/workflows/deploy.yml` after the repository is pushed to `main` and Pages is configured to use GitHub Actions.
