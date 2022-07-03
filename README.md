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

This starter project is an adaptation of the original [Flightdeck](https://github.com/flight-deck/Flightdeck-Jekyll) project that leverages [Jekyll](https://jekyllrb.com/) for its static site generation and [Gulp](https://gulpjs.com/) for all compiling and bundling of assets. There is also a version for [ParcelJS](https://github.com/flight-deck/flightdeck-jekyll-parcel), if you're interested in that.

### Inspiration and Folder Structure 🤔

Like other versions of Flightdeck, [Jekyll](https://github.com/flight-deck/Flightdeck-Jekyll/) and [Hugo](https://github.com/flight-deck/Flightdeck-Hugo), each project's objective is to create consistent workflow and reusability from project to project, making the developer experience as frictionless as possible, and for Flightdeck 11ty this is no different. So we have structured this project using the concept and structure described by Jérôme Coupé's article [Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/). Over-time, things will shift as ideas change, but in 2022, we are shamelessly borrowing the concept, structure, and conventions Jérôme Coupé outlines.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Eleventy](https://www.11ty.dev/)
- [Parcel Js](https://parceljs.org/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Sass](https://sass-lang.com/)

<details>
  <summary>see all dependencies</summary>
  <pre>
    ❯ npm list
  flightdeck-11ty@0.0.4 /Users/ed/Projects/oss/flightdeck/fd-11ty
  ├── @11ty/eleventy@1.0.1
  ├── @parcel/transformer-sass@2.6.2
  ├── browserlist@1.0.1
  ├── cross-env@7.0.3
  ├── eleventy-plugin-embed-everything@1.14.0
  ├── html-minifier@4.0.0
  ├── imagemin-cli@7.0.0
  ├── imagemin-webp@7.0.0
  ├── npm-run-all@4.1.5
  ├── parcel@2.6.2
  ├── sass@1.53.0
  └── sharp@0.30.7
  </pre>
</details>
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Flightdeck leverages a Javascript ecosystem using NodeJs. So some very basic knowledge of Node should be had when using Flightdeck as your launchpad.

> In the future, we plan to include Docker and make all Flightdeck starters available as Yeoman and/or NPM packages.

### Prerequisites

We are assuming that you already have Node and NPM installed on your system. Currently there is an [open issue with Parcel v2](https://github.com/parcel-bundler/parcel/issues/5950) that outlines some broken features and a workaround, when using an alternative package manager with Parcel 2.

In future releases, [PNPM](https://pnpm.io/) will be used once Parcel or PNPM squashes the bugs associated with each other, but until this happens NPM will work without any issues

- npm
  ```sh
  npm install npm@latest -g
  ```

If you'd like to use `pnpm` -> checkout the [workaround](https://github.com/parcel-bundler/parcel/issues/5950#issuecomment-789312062), it is a bit hacky but apparently it works.

### Installation

```shell
git clone https://github.com/flight-deck/Flightdeck-11ty.git
```

#### Install Dependencies

> ~~You can swap `pnpm` in favor of `yarn` or `npm` - but I would suggest enabling Node's [corepack](https://nodejs.org/api/corepack.html) this way you do not need to manage or install a separate package manager for Node and all the `pnpm` commands work out-of-the-box~~
>
> `pnpm` brakes `parcel`

Read more about Corepack on Node's documentation site - [Node Docs](https://nodejs.org/api/corepack.html)

###### List all NPM packages

```shell
npm list
flightdeck-11ty@0.0.4 /Users/ed/Projects/oss/flightdeck/fd-11ty
├── @11ty/eleventy@1.0.1
├── @parcel/transformer-sass@2.6.2
├── browserlist@1.0.1
├── cross-env@7.0.3
├── eleventy-plugin-embed-everything@1.14.0
├── html-minifier@4.0.0
├── imagemin-cli@7.0.0
├── imagemin-webp@7.0.0
├── npm-run-all@4.1.5
├── parcel@2.6.2
├── sass@1.53.0
└── sharp@0.30.7
```

```shell
cd flightdeck
npm install
```

#### Available Scripts

**List all NPM Scripts**

```shell
npm run
Lifecycle scripts included in flightdeck-11ty@0.0.4:
  start
    npm-run-all -p dev:11ty dev:parcel

available via `npm run-script`:
  dev:11ty
    eleventy --serve
  dev:parcel
    npm-run-all -p  watch:assets
  watch:assets
    parcel watch './src/assets/images/*' ./src/assets/js/app.js ./src/assets/styles/app.scss --dist-dir ./dist/assets
  build
    npm-run-all -s clean build:parcel build:11ty
  build:11ty
    cross-env ELEVENTY_ENV=production eleventy
  build:parcel
    parcel build './src/assets/images/*' ./src/assets/js/app.js ./src/assets/styles/app.scss --dist-dir ./dist/assets
  clean:node
    (rm -rf node_modules package-lock.json pnpm-lock.yaml || del node_modules package-lock.json pnpm-lock.yaml)
  clean
    (rm -rf dist/ .parcel-cache/ || del dist/ .parcel-cache)
  purge
    npm run clean:node && npm run clean && echo "\033[32m🧹 All Clean ✨""\033[0m Run ""\033[33mnpm install""\033[0m to start fresh 🤩"
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
