import { defineConfig } from 'astro/config';

/*
  The address is detected automatically on GitHub Actions:
  - repo "<login>.github.io"  -> https://<login>.github.io/
  - any other repo name, e.g. "portfolio" or "portfolio.github.io" -> https://<login>.github.io/<repo>/
  With a custom domain, set CUSTOM_DOMAIN below (e.g. 'vitalinaplichko.com').
*/
const CUSTOM_DOMAIN = '';

const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
// Only a repo named exactly "<login>.github.io" is served from the root.
const isUserSite = !repo || repo.toLowerCase() === `${(owner || '').toLowerCase()}.github.io`;

export default defineConfig({
  site: CUSTOM_DOMAIN ? `https://${CUSTOM_DOMAIN}` : owner ? `https://${owner.toLowerCase()}.github.io` : 'http://localhost:4321',
  base: CUSTOM_DOMAIN || isUserSite ? '/' : `/${repo}`,
  trailingSlash: 'ignore',
});
