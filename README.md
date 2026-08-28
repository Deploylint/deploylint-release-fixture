# DeployLint release fixture

Public, non-production fixture for the supported DeployLint journey:

1. inspect one root npm project and one authoritative Workers config;
2. preview exact generated files;
3. open and review an isolated setup pull request;
4. observe the generated workflow after merge;
5. verify deployment only through a protected `production` environment.

This repository contains no credentials or production data. Its default branch is protected, GitHub Actions has read-only default permissions, and the `production` environment requires review.

## Current release gate

The fixture intentionally has no deployment CLI dependency yet. DeployLint generator v3 must fail with `Missing locked Cloudflare deployment tool` instead of downloading Wrangler at runtime. Add a lockfile-installed Wrangler version only after that exact package version passes the mandatory trust review.
