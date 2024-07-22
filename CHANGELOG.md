## Changelog 📝

All notable changes to Flightdeck for 11ty will be documented in this file.

<small>The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).</small>

## [0.5.3] - 2024-07-22

- reverts back to `bun` as package manager - sorry
- adds `markdown-it-bracketed-spans` to the project
- refactors JSDoc annotations for better type checking and adds `// @ts-check` to the top of all JS files for Flightdeck and project
- misc cleanup

## [0.5.2-b] - 2024-07-07

- Adds `pnpm` as package manager
  - `bun` has some issues with upgrading packages and `pnpm` seems to be more stable. `¯\_(ツ)_/¯`

## [0.5.2-a] - 2024-07-05

- Fixes rods-from-god css

## [0.5.2] - 2024-07-05

Scaffold updated:

- Moves `_flightdeck` dir into `src` to keep the root directory clean
- esbuild v0.23

**Full Changelog**: <https://github.com/edheltzel/Flightdeck/compare/v0.5.1-f...v0.5.2>

## [0.5.1-f] - 2024-06-30

Adds Scss back into the mix. Includes: `eleventy-sass` plugin, `sass`, `postcss` with `autoprefixer`, and `@picocss/pico` (for theming).

## [0.5.1-d] & [0.5.1-e] - 2024-05-31

Chore: Package updates - stylelint

## [0.5.1-c] - 2024-05-26

Chore: package updates

## [0.5.1-b] - 2024-05-07

## What's Changed

* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/60>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/61>

**Full Changelog**: <https://github.com/edheltzel/Flightdeck/compare/v0.5.1-a...v0.5.1-b>

## [0.5.1-a] - 2024-04-26

## What's Changed

* package updates

```shell
  + @biomejs/biome@1.7.1
  + stylelint@16.4.0
  + @alpinejs/persist@3.13.10
  + alpinejs@3.13.10
```

## [0.5.1] - 2024-04-22

## What's Changed

* 01 11 ui cleanup by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/48>
* 01 11 ui cleanup by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/49>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/50>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/51>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/52>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/53>
* removing todo comment by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/54>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/55>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/56>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/57>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/58>
* dev by @edheltzel in <https://github.com/edheltzel/Flightdeck/pull/59>

**Full Changelog**: <https://github.com/edheltzel/Flightdeck/compare/v...v0.5.1>

## [0.5.0] - 2024-04-08

## What's Changed

* removes pnpm in favor of Bun v1.1.2 release
* package updates to latest versions
* Update npm scripts to use bun instead of pnpm
* drops sass for lightningcss
* Add lightningcss-cli package to package.json
* adds stylelint
* Add stylelint and stylelint-config-standard packages
* adds `scrub.sh` back to the mix since Bun shell supports bash on Windows
* Refactor `scrub.sh` script for better readability and maintainability
* package update cleanup
* Update themeToggle button to use the correct path for the eclipse.svg icon
* Refactor file structure in styles directory
* Remove unused component macro and update layouts
* check-in empty directory to git
* Refactor README.md: Add "To Do" section and update Autopilot theme description

**Full Changelog**: <https://github.com/edheltzel/flightdeck-for-11ty-esbuild/compare/v0.4.6...v0.5.0>

## [0.4.6] - 2024-03-04

## What's Changed

* 01 11 ui cleanup by @edheltzel in <https://github.com/edheltzel/flightdeck-for-11ty-esbuild/pull/48>
* 01 11 ui cleanup by @edheltzel in <https://github.com/edheltzel/flightdeck-for-11ty-esbuild/pull/49>
* dev by @edheltzel in <https://github.com/edheltzel/flightdeck-for-11ty-esbuild/pull/50>
* removes unused files by @edheltzel in `_flightdeck/transforms`
* phasing out Scss in favor of [lightningcss](https://lightningcss.com)
  * Scss is still available in the project, but the focus is on regular CSS with lightningcss
* custom styling
* adds more vgs elements

**Full Changelog**: <https://github.com/edheltzel/flightdeck-for-11ty-esbuild/compare/v0.4.5...v0.4.6>

## [0.4.5-a] - 2024-01-08

### Adds

* updates PicoCSS to include modules to include only the items as needed.

### Chore

* 🧹 Package updates:
  * biome to 1.4.1
  * pico to 2.0.0-rc2

## [0.4.5] - 2024-01-06

### Adds

* uses PicoCSS for a minimal CSS framework
* adds AutoPilot theme
  * includes a modified version of the 7-1 pattern for Sass
* `scss.js` includes `loadPaths` for PicoCSS

### Chore

* 🧹 Package updates:
  * @divriots/jampack to 0.23.2
  * eleventy-plugin-embed-everything to 1.18.1
  * postcss to 8.4.33
  * sass to 1.69.6

## [0.4.4] - 2023-12-31

### Adds

Includes a conditional `useImageDirTransform`

### Chore

* 🧹 Package updates:
  * Updates esbuild to v0.19.11
  * Updates sass to v1.69.6

## [0.4.3] - 2023-12-27

### Adds

* `{% image 'src' 'alt text' 'sizes: optional' %}` shortcode for responsive images
  * shortcode uses the eleventy-img plugin to generate responsive images
  * see `_flightdeck/shortcodes/image.js` for usage
* Filters update
  * adds stripFileExtension.js
  * adds postLimit.js
  * removes limit.js
* Adds `_flightdeck/transforms/images.js` for image processing that live inside of `./src/assets/images`
  * uses the eleventy-img plugin to optimize images
  * see `_flightdeck/transforms/images.js` for usage

### Changed

* `_flightdeck/transforms/images.js` now uses the eleventy-img plugin for image optimization
* `_flightdeck/filters/limit.js` is removed in favor of `postLimit.js` and `stripFileExtension.js`

### Chore

* 🧹 Package updates:
  * removes unused packages
  * Updates esbuild to v0.19.10

## [0.4.2] - 2023-12-22

Attempting to improve performance of image processing.

### Adds

* chalk usage is better for logging in the console

### Changed

`src/__flightdeck/transforms/images.js`
* globbing for images is now more specific to the `src/assets/images` directory and specific file types
* using fast-glob in place of glob-promise

## [0.4.1] - 2023-12-15

### Adds

* adds options to reduce verbose output of image processing

### Changed

* `scrub.sh` to include `.cache/images.json` when running `npm run clean`

## [0.4.0] - 2023-12-14

### Adds

* Adds custom plugin for image processing using the sharp library

## [0.3.10] - 2023-12-11

### Adds

* Remove Alpine.js passthrough copy and import Alpine.js in app.js

### Chore

* 🧹 Package updates:
  * esbuild
  * markdown-it

## [0.3.9] - 2023-12-01

### Adds

* Adds NPM Scripts for Biome:
  * `npm run check` - runs `biome check` which does both `format` and `lint`
  * `npm run format` - runs `biome format`
  * `npm run lint` - runs `biome lint`
see [Biome docs](https://biomejs.dev/reference/cli/#_top) to see the options for each command.
ref: `biome.json`

## [0.3.8] - 2023-12-01

### Chore

* 🧹 Package updates:
  * biome v1.4.1

## [0.3.7] - 2023-11-30

### Chore

* 🧹 Package updates:
  * eleventy-sass v2.2.4
  * esbuild v0.19.8
  * biome

### Adds

* adds biome to the project as dev dependency

## [0.3.6] - 2023-11-05

### Chore

* 🧹 Package updates:
  * sass v1.69.5

## [0.3.4] - 2023-10-06

### Chore

* 🧹 Package updates:
  * jampack v0.21.1
  * sass v1.69.0

## [0.3.3] - 2023-10-03

### Removes

* flightdeck manifest file removed.

### Chore

* chore: jampack upgrade - includes support for adding custom cache directory

## [0.3.2] - 2023-10-02

Bun officially works with Flightdeck for 11ty 🎉

### Fixed

* [issue 35](https://github.com/edheltzel/flightdeck-for-11ty/issues/35) thanks to [ottodevs](https://github.com/edheltzel/flightdeck-for-11ty/issues/35#issuecomment-1741819809) workaround.

## [0.3.1] - 2023-09-20

### Adds

* adds `.src/assets/_statics` for root level files: ie: `robots.txt`, `favicon.ico`, `humans.txt`, etc.

### Removes

* removes `robots.njk` from pages collection

## [0.3.0] - 2023-09-16

### Fixed

* build command breaks when using bun - migrate back to pnpm
  * this is due to jampack and the sharp dependency
  * its a known issue with [Bun Issue #4549](https://github.com/oven-sh/bun/issues/4549)
* background images work inside of scss files - this was a bug with esbuild-sass-plugin not correctly using the `loader` from esbuild.
* resolved [issue #37](https://github.com/edheltzel/flightdeck-for-11ty/issues/37#issue-1900828922)

### Removes

* Removes esbuild-sass-plugin
* Removes esbuild console output
* removes theme switcher
* removes `bun.lock` from the project

### Adds

* adds `eleventy-sass` see `src/__flightdeck/transforms/scss.js` for configuration
* postcss and autoprefixer are added back into the project via `eleventy-sass`

## [0.2.9] - 2023-09-15

### Changed

* Removes Biome from the project - the core concept of this project is to quickly get started with 11ty. Adding Biome should be optional.

## [0.2.8] - 2023-09-15

### Changed

* Readme update - covers [Bun](https://www.bun.sh) usage as package manager
* `purge` script with now remove `bun.lockb`
* `preview` script uses bunx in place of `npx`
* `jampack` updated to `v0.20.2`

### Removes

* lock files are not apart of the initial project.
* pnpm-lock.yaml gone with a fresh install using bun

## [0.2.7] - 2023-08-24

### Changed

* Readme update
  * all Rome converted to Biome
* Package.json update
  * format and lint scripts updated to biome

### Removes

* Rome is removed from the project - Rome has been sunsetted
  * Biome is now the default format and linting tool

### Adds

* Biome is added to the project

### Removes

* Removed layout includes for Nunjucks `extends` and `blocks`

### Fixed

* Readme now has better getting started section
* Scss inheritance for vendor styles - ie: prismJS template for codeblocks

## [0.1.0] - 2022-07-03

A good first release of Flightdeck for Eleventy (workflow only - theme is coming soon)

> Migration to a new repository - trying to merge into the previous `Flightdeck-11ty` repository was painful 🤷‍♂️

This brought focus back to using Eleventy as the "single-source-of-truth", to simplify the developer experience.

### Adds

* Image optimization is now handled by 11ty
* adds `optimizt` by spawning shell command via buildImages.js
* adds environment variable for images during development to passthrough copy
* adds image npm script if you want to optimize images ahead of time

### Removes

* removes imagemin-cli and imagemin-webp
* removes npm scripts with image min
* removes cross-env
  * is now built into 11ty via NodeJS `process.env`

### Changed

* updates transforms.js to multiple files for easier management
* content changes images back to `jpg` for testing

## [0.0.4] - 2022-06-30

### Adds

* **Re-adds Parcel2 as the primary asset bundler**
* Sharp handles image compression through parcel

### Removes

* esbuild and esbuild-sass-plugin are removed - now use Parcel20o

### Changed

* Scss no lives at `assets/styles`

## [0.0.3] - 2022-06-22

### Adds

* adds better support for postcss using esbuild-sass-plugin
* adds transforms and workflow
  * workflows are items related to development and eleventy specific settings
    * ie: `addPassthroughCopy`
* shortcodes
  * adds codepen shortcode see `/src/__flightdeck/shortcodes/codepen.js` for usage
  * adds `.vscode/shortcode.code-snippets` to list out all available shortcodes for the project.
* plugins
  * adds [eleventy-plugin-embed-everything](https://github.com/gfscott/eleventy-plugin-embed-everything) plugin - instead of creating shortcodes for media embeds - use the URL instead
* filters
  * (ref: [11ty.rocks](https://11ty.rocks))

### Removes

* parcel2 is on a feature branch
* removed most npm scripts - plan to re-add based on esbuild workflow
* removes un-used files left over from Parcel2

### Changed

* project scaffold moves everything under `src` - in better attempts to keep the project root clean
* config is now working under `src/__flightdeck`

### Deprecated

* all browsersync options will be removed once eleventy's server plugin is released under eleventy `v2.0`

## [0.0.2] - 2022-05-17

### Adds

* organized project scaffolded based on [webstoemp- Structuring Eleventy projects](https://www.webstoemp.com/blog/eleventy-projects-structure/)
* adds esbuild for javascript and sass bundling/processing
* - adds "common" shortcodes
  * (ref: [11ty.rocks](https://11ty.rocks))

### Removes

* parcel2 is on a feature branch
* removed most npm scripts - plan to re-add based on esbuild workflow
* removes `youtube.js` under shortcodes in favor of `eleventy-plugin-embed-everything`

### Changed

* eleventy config is broken up into multiple files, that live under `__flightdeck`

### Deprecated

* all browsersync options will be removed once eleventy's server plugin is released under eleventy `v2.0`

## [0.0.2] - 2022-02-20

Checkout branch `feature/parcel2`

### Added

* includes Parcel2
* adds parcel sass transformer
  * adds sass, postcss, autoprefixer for added support for styles during dev and prod
* includes npm-run-all for better npm scripts
  * run `pnpm run` to see a full list
* includes `flightdeck.manifest.js` for project configuration
  * to prevent the `.eleventy.js` from getting too long

### Removes

* drops `yarn` in favor of `pnpm`

## [0.0.1] - 2020-10-24

### Init

* this is an init and left empty intentionally

Attempting keep a minimal configuration for 11ty while keeping the tools similar to [Flightdeck for Jekyll](https://github.com/edheltzel/Flightdeck-for-Jekyll) and [Flightdeck for Hugo](https://github.com/edheltzel/Flightdeck-for-Hugo)
