# Introduction

API Server using

- Nest JS

# Getting Started

## Using Semantic versioning

Follow the commit rules for commit message to trigger right version build

https://github.com/semantic-release/semantic-release
https://www.npmjs.com/package/commitizen

The table below shows which commit message gets you which release type when `semantic-release` runs (using the default configuration):

| Commit message                                                                                                                                                                                   | Release type                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | ~~Patch~~ Fix Release                                                                                           |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release                                                                                       |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer of the commit) |

## Using the Commitizen

### If your repo is [Commitizen friendly](#making-your-repo-commitizen-friendly):

Simply use `git cz` or just `cz` instead of `git commit` when committing. You can also use `git-cz`, which is an alias for `cz`.

_Alternatively_, if you are using **npm 5.2+** you can [use `npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) instead of installing globally:

```sh
npx cz
```

or as an npm script:

```json
  ...
  "scripts": {
    "commit": "cz"
  }
```

When you're working in a Commitizen-friendly repository, you'll be prompted to fill in any required fields, and your commit messages will be formatted according to the standards defined by project maintainers.

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

### If your repo is NOT Commitizen friendly:

If you're **not** working in a Commitizen-friendly repository, then `git cz` will work just the same as `git commit`, but `npx cz` will use the [streamich/git-cz](https://github.com/streamich/git-cz) adapter. To fix this, you need to first [make your repo Commitizen friendly](#making-your-repo-commitizen-friendly)
