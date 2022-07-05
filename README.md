<div id="top" align="center">
<style type="text/css">html {scroll-behavior: smooth;}</style>
<!-- PROJECT LOGO -->
  <a href="https://github.com/flight-deck"><img src="https://rdm.sfo2.digitaloceanspaces.com/flightdeck/v3-flightdeck__logo--purple-haze-600x528.png" alt="Flightdeck Logo" width="400"></a>
  <h1>Flightdeck</h1>
  <h3 style="padding-bottom: .5em">A starter project for <a href="https://www.11ty.dev/">Eleventy</a> using a minimal and opinionated frontend workflow.</h3>

<!-- PROJECT SHIELDS -->

[![release](https://img.shields.io/github/release/flight-deck/Flightdeck-11ty.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/flight-deck/Flightdeck-11ty/releases/latest) [![eleventy](https://img.shields.io/badge/Eleventy-v1.0.0+-373277.svg?style=for-the-badge&logo=eleventy&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/11ty/eleventy/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/flight-deck/Flightdeck/blob/master/LICENSE)

</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#inspiration">Inspiration</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The basic objective of Flightdeck has always been to leverage popular static-site-generators _(SSG)_, in an attempt to deliver unified starting point for all your Jamstack websites.

This flavor of Flightdeck uses [Eleventy](https://www.11ty.dev/) with an opinionated workflow, keeping Eleventy in control of the entire development and build processes.

### Inspiration

Like other versions of Flightdeck, this is just an adaptation of the original [Flightdeck](https://github.com/flight-deck/Flightdeck-Jekyll) project that leverages [Jekyll](https://jekyllrb.com/) for its static site generation and uses [Gulp](https://gulpjs.com/) as its single-source-of-truth. ([Hugo](https://github.com/flight-deck/Flightdeck-Hugo) version, that uses Hugo's asset pipeline.)

Jérôme Coupé's post[Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/) served as the sole inspiration for our folder arrangement. Over-time, things will shift as ideas change, but in 2022, we are shamelessly adopting the concept Jérôme Coupé outlines.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Eleventy](https://www.11ty.dev/)
- [esbuild](https://esbuild.github.io/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Sass](https://sass-lang.com/)
- [Optimizt](https://github.com/funbox/optimizt)

<details>
  <summary>see all dependencies</summary>
  <pre>
    ❯ npm list
    flightdeck-for-eleventy@0.1.0
    ├── @11ty/eleventy@1.0.1
    ├── @funboxteam/optimizt@4.0.0
    ├── autoprefixer@10.4.7
    ├── browserlist@1.0.1
    ├── eleventy-plugin-embed-everything@1.14.0
    ├── esbuild-sass-plugin@2.2.6
    ├── esbuild@0.14.48
    ├── html-minifier@4.0.0
    ├── npm-run-all@4.1.5
    ├── postcss-preset-env@7.7.2
    ├── postcss@8.4.14
    └── sass@1.53.0
  </pre>
</details>
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

All version of Flightdeck use a NodeJS ecosystem. So a very minimal and basic knowledge of Node should be had when using Flightdeck as your launchpad.

> In the future, we plan to include Docker and make all Flightdeck starters available as Yeoman and/or NPM packages.

### Prerequisites

We are assuming that you already have Node and NPM installed on your system.

#### Install Dependencies

I would It is highly suggested you enable Node's [corepack](https://nodejs.org/api/corepack.html) – this way you do not need to install or manage separate package managers for Node and all the `pnpm` commands work out-of-the-box.

Read more about Corepack on Node's documentation site - [Node Docs](https://nodejs.org/api/corepack.html).

> Please note this most likely will not be at the latest version – At the time of this writing PNPM is at [v7.5.0](https://github.com/pnpm/pnpm/releases).

Also, You can swap `pnpm` in favor of `yarn` or `npm` - just make sure you edit the `package.json` to suite your needs.

- pnpm

  ```sh
  corepack enable

  corepack prepare pnpm@7.5.0 --activate
  ```

### Installation

```shell
git clone https://github.com/flight-deck/flightdeck-for-eleventy.git flightdeck
```

```shell
cd flightdeck
pnpm install
```

#### List all NPM packages with PNPM

```shell
pnpm list
Legend: production dependency, optional only, dev only

flightdeck-for-eleventy@0.1.0 /Users/ed/Projects/oss/flightdeck/flightdeck-for-eleventy

devDependencies:
@11ty/eleventy 1.0.1                     browserlist 1.0.1                        esbuild-sass-plugin 2.2.6                postcss 8.4.14
@funboxteam/optimizt 4.0.0               eleventy-plugin-embed-everything 1.14.0  html-minifier 4.0.0                      postcss-preset-env 7.7.2
autoprefixer 10.4.7                      esbuild 0.14.48                          npm-run-all 4.1.5                        sass 1.53.0
```

#### Available Scripts

```shell
pnpm run

Lifecycle scripts:
  start
    ENVIRONMENT=dev eleventy --serve

Commands available via "pnpm run":
  build
    run-s clean ENVIRONMENT=prod eleventy
  images
    optimizt src/assets/images
  clean
    (rm -rf dist/ .cache/ || del dist/ .cache/)
  clean:node
    (rm -rf node_modules package-lock.json pnpm-lock.yaml || del node_modules package-lock.json pnpm-lock.yaml)
  purge
    npm run clean:node && npm run clean && echo "\033[32m🧹 All Clean ✨""\033[0m Run ""\033[33mpnpm install""\033[0m to start fresh 🤩"
```

The `start` command executes npm scripts that include file watching, browser synchronisation, module hot reloading, CSS injecting etc.

```shell
npm start
```

#### Build

```shell
npm run build
```

#### Image and SVG processing

Lossless image compression is provided by [Parcel - Reference the docs](https://parceljs.org/recipes/image/)
