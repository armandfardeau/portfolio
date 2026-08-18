# Armand Fardeau — portfolio

Static GitHub Pages portfolio for [armandfardeau](https://github.com/armandfardeau).

The site is intentionally dependency-light: semantic HTML, CSS, and vanilla JavaScript. Repository metadata is enhanced from the public GitHub API when available, while the editorial content remains available without JavaScript or an API connection.

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

GitHub Pages deployment is handled by `.github/workflows/deploy.yml` after the repository is pushed to `main` and Pages is configured to use GitHub Actions.
