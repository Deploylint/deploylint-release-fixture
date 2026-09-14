# DeployLint release fixture

Public, non-production fixture for the supported DeployLint journey:

1. inspect one root npm project and one authoritative Workers config;
2. preview exact generated files;
3. open and review an isolated setup pull request;
4. observe the generated workflow after merge;
5. verify deployment only through a protected `production` environment.

This repository contains no credentials or production data. Its default branch is protected, GitHub Actions has read-only default permissions, and the `production` environment requires review.

## Current release gate

Generator v5 was verified to fail with `Missing locked Cloudflare deployment tool` before the deployment CLI was installed. Wrangler 4.131.1 is now pinned in devDependencies and the npm lockfile. Its dependency audit, fixture test, build, and deployment dry run passed. Deployment credentials belong only in the reviewed production environment; temporary acceptance credentials are revoked after the run.
