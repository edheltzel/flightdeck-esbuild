<div id="top" align="center">
<!-- PROJECT LOGO -->
  <a href="https://github.com/edheltzel"><img src="https://rdm.sfo2.digitaloceanspaces.com/flightdeck/v3-flightdeck__logo--purple-haze-600x528.png" alt="Flightdeck Logo" width="400"></a>
  <h1>Flightdeck</h1>
  <h4 style="padding-bottom: .5em">An opinionated starter project for <a href="https://www.11ty.dev/">Eleventy 🎈</a>.</h4>
<!-- PROJECT SHIELDS -->

[![release](https://img.shields.io/github/release/edheltzel/flightdeck-for-11ty.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/edheltzel/flightdeck-for-11ty/releases/latest) [![eleventy](https://img.shields.io/badge/Eleventy-v1.0.0+-373277.svg?style=for-the-badge&logo=eleventy&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/11ty/eleventy/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/edheltzel/flightdeck-for-11ty/blob/master/LICENSE)

</div>

<!-- TABLE OF CONTENTS -->

<details open>
  <summary>📔 Table of Contents</summary>
  <ol>
    <li>
      <a href="#tldr">TL;DR</a>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#inspiration">Inspiration</a></li>
        <ul><li><a href="#dependencies">Dependencies</a></li></ul>
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
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#autopilot-system">Autopilot System</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- Too Long Didn’t Read -->

## [🥱 TL;DR](#tldr)

```shell
    git clone git@github.com:edheltzel/flightdeck-for-11ty-esbuild.git flightdeck && cd flightdeck && pnpm install && pnpm start
```

**Build your project**

```shell
    pnpm run build
```

<!-- ABOUT THE PROJECT -->

## [ 🌟 About The Project ](#about-the-project)

The Flightdeck objective is to provide a unified starting point for all your Jamstack websites, by leveraging popular static-site-generators _(SSG)_.

This flavor of Flightdeck uses [Eleventy](https://www.11ty.dev/) with an opinionated workflow, keeping Eleventy in control of the entire development and build processes.

### [ 💡 Inspiration ](#inspiration)

Like other versions of Flightdeck, this is just an adaptation of the original [Flightdeck](https://github.com/edheltzel/flightdeck-for-jekyll) project that uses [Jekyll](https://jekyllrb.com/) for its static site generation and [Gulp](https://gulpjs.com/) for all assets bundling. ►►► 🫠 For other versions of Flightdeck, [👉 look here](https://github.com/edheltzel?tab=repositories&q=flightdeck)

Jérôme Coupé's post [Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/) served as inspiration for how this project is structured and over-time, things will shift as ideas change, but in 2022, we are shamelessly adopting the concept Jérôme Coupé outlines.

<p align="right">(<a href="#top">back to top</a>)</p>

### [ 👾 Tech Stack ](#built-with)

- [Eleventy](https://www.11ty.dev/)
- [ESBuild](https://esbuild.github.io/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Sass](https://sass-lang.com/)
- ~~[Jampack](https://jampack.divriots.com/)~~
- [Biome](https://biomejs.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## [ 🧰 Getting Started ](#getting-started)

All version of Flightdeck use NodeJS. So a very minimal and basic knowledge of Node and Git should be had when using Flightdeck as your launchpad.

> In the future, we plan to include Docker and make all Flightdeck starters available as a Yeoman and/or NPM package.

### [🧯 Prerequisites ](#prerequisites)

We are assuming that you already have Node with NPM and Git installed on your system – it is also ideal that you have the latest [LTS](https://nodejs.org/en/download/) release of Node.
**As of this writing the current LTS release is `18.16.0`**

#### [ 🤖 Dependencies ](#dependencies)

##### [ Package Managers ](#package-managers)

**Package managers are like dotfiles, everyone has their own preference.**

We have shifted to using [PNPM](https://pnpm.io/) as our primary package manager, but we are considering Bun as a replacement, that is why you will see a `bun.lockb` file in the project.

But, you can swap `pnpm` in favor of your preferences 👉 [NPM](https://www.npmjs.com/) , [Yarn](https://yarnpkg.com/), and and [Bun](https://bun.sh/docs). Use whatever you want 👍

~~If you do choose to use Bun, you might run into some issues with the `build` command. This is because of the `sharp` dependency that is used by `jampack`. 👀 see [issue 35](https://github.com/edheltzel/flightdeck-for-11ty/issues/35).~~

>**Thanks to [ottodevs](https://github.com/edheltzel/flightdeck-for-11ty/issues/35#issuecomment-1741819809) - we have a workaround for this issue with Bun.**


We recommend using PNPM for building your project `pnpm run build`.

It's highly recommended that you enable Node's [corepack](https://nodejs.org/api/corepack.html), this Yarn and PNPM are included in your toolbox without the need to install them separately.

> Please be aware that this certainly won't be the most recent version of PNPM/Yarn.

- pnpm

  ```sh
  corepack enable

  corepack prepare pnpm@latest --activate
  ```

### ⚙[ Installation ](#installation)

```shell
git clone https://github.com/edheltzel/flightdeck-for-11ty.git
```

```shell
cd flightdeck-for-11ty
pnpm install
```

<details>
  <summary>see all dependencies</summary>
  <pre>
    pn list
Legend: production dependency, optional only, dev only

flightdeck-for-eleventy@0.4.3 /Users/ed/Developer/oss/flightdeck/for-11ty-esbuild

dependencies:
@alpinejs/persist 3.13.3
alpinejs 3.13.3

devDependencies:
@11ty/eleventy 2.0.1                         browserslist 4.22.2                          markdown-it 14.0.0
@11ty/eleventy-img 3.1.8                     cross-env 7.0.3                              markdown-it-attrs 4.1.6
@11ty/eleventy-plugin-syntaxhighlight 5.0.0  eleventy-plugin-embed-everything 1.17.0      npm-run-all 4.1.5
@biomejs/biome 1.4.1                         eleventy-sass 2.2.4                          postcss 8.4.32
@divriots/jampack 0.23.1                     esbuild 0.19.10                              sass 1.69.5
autoprefixer 10.4.16                         fast-glob 3.3.2
  </pre>
</details>
<p align="right">(<a href="#top">back to top</a>)</p>

### [🏃‍♂️ Run Locally ](#run-locally)

There are just a few npm-:150
available, but the `start` command is where all the magic 🪄 happens – it will spin up the development server from Eleventy.

Again, the focus here is to keep Eleventy in control of the entire development and build processes, to keep things simple.

```shell
pnpm start
```

<details>
  <summary>Available Run Commands</summary>
  <pre>Lifecycle scripts:
  start
    eleventy --serve

Commands available via "pnpm run":
  build
    run-s clean build:11ty
  build:11ty
    cross-env ENV=production eleventy
  preview
    npx http-server dist -p 4000
  check
   biome check
  format
   biome format
  lint
    biome lint
  clean
    ./.scrub.sh site
  purge
    ./.scrub.sh purge</pre>
</details>

- `build` command - executes the production build of your site with Eleventy, includes HTML minification, compressed Sass, optimized images, and bundled javascript.
  - for our workflow, Cloudflare handles the DNS while Cloudflare Pages does the building and hosting - Cloudflare's Auto Minify minifies the HTML, CSS, and JS. You can easily add minification to the build process by adding a plugin to Eleventy.
- `preview` command - spins up a local server to preview the production build.
- `check` command - runs biome lint and format at the same time JS/TS, see `biome.json`.
- `format` command - uses biome to format JS/TS, see `biome.json`.
- `lint` command - uses biome to lint JS/TS, see `biome.json`.
- `clean` command - scrubs/removes the `dist/` and `.cache` directories
- `purge` command - scrubs/removes the `dist/`, `.cache`, `node_modules`, and any lock files from npm, yarn, pnpm or bun. - 🧼 A fresh install.
  - **👀 NOTE: Both `clean` and `purge` are executed from a bash script**

<p align="right">(<a href="#top">back to top</a>)</p>

### [ ‍🚀 Deployments ](#deployments)

Deployments for this project are completely up to you and your needs, we are fans of Cloudflare Pages but we do provide a `netlify.toml` file that will work out-of-the-box with Netlify. Some other popular options include GitHub Pages, Vercel and Render. **Your call on what you use.**

##### Note - Environment Variables

Don't forget to create your own `.env` with whatever environment variables you need for your project.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- File Structure -->

### [📁 File Structure ](#file-structure)

Flightdeck is a very opinionated starter kit, so the file structure is very specific to our needs. All the Eleventy configuration is done in the `.eleventy.js` file, but it is broken down into sections for easier navigation and maintain. All Eleventy configuration options are available, see the [Eleventy Docs](https://www.11ty.dev/docs/config/) for more information.

<details>
  <summary>File Structure</summary>
  <pre>.
├── _flightdeck
│  ├── components
│  ├── filters
│  ├── shortcodes
│  └── transforms
└── src
   ├── _includes
   │  ├── components
   │  ├── data
   │  ├── layouts
   │  ├── macros
   │  ├── partials
   │  └── utilities
   ├── _static
   ├── assets
   │  ├── fonts
   │  ├── images
   │  │  └── spacex [optional]
   │  ├── js
   │  │  └── modules
   │  │     ├── alpineModules
   │  │     └── visualGuidanceSystem
   │  └── styles
   │     ├── components
   │     ├── content
   │     ├── layout
   │     ├── themes
   │     │  └── default
   │     ├── utilities
   │     └── vendors
   └── collections
      ├── blog
      └── pages
</pre>
</details>

<!-- USAGE -->

### [ 👀 Usage ](#usage)

The core concept of Flightdeck to keep 11ty in charge of all the DX so you can focus on creating content.

Flightdeck makes a lot of assumptions and is very opinionated - but having a good idea of how Eleventy's [data cascade](https://www.11ty.dev/docs/data-cascade/) works is always nice, as well as having some understanding on [template inherence](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) in Nunjucks will go a long way. **But is not needed**

For making changes to the way Flightdeck pilots Eleventy, you will want to reference the `./_flightdeck` directory. This is where all the Eleventy configuration is done, but it is broken down into sections for easier navigation and maintainability.

Inside the `./_flightdeck` directory, you will find the following directories:

- `./_flightdeck/components` - where all the Flightdeck UI components are defined. See `_flightdeck/components/__info.md` for more information.
- `./_flightdeck/filters` - where all Universal filters are added to Eleventy templates. Currently we use Nunjucks for our templates, so all filters are added to the Nunjucks environment, but are easily adapted to other template engines, like Liquid.
- `./_flightdeck/shortcodes` - where all shortcodes are added to extend the functionality of the content you are creating. We consider shortcodes content altering and not UI focused. The idea is to create shortcodes that make writing content easier and more enjoyable.
- `./_flightdeck/transforms` - where all transforms are added to templates, javascript, styles, and images.

All the directories have a corresponding file that is used to import all the files in the directory. Each of these files are imported into `.eleventy.js` as modules.
- `./_flightdeck/components.js`
- `./_flightdeck/filters.js`
- `./_flightdeck/shortcodes.js`
- `./_flightdeck/transforms.js`
- `./_flightdeck/workflow.js` - this file controls the development server provided by Eleventy.

Flightdeck comes with a custom image transform plugin that watches for changes in the `./src/assets/images` directory and then optimizes any new or changes images copies it to the `./dist/assets/images` directory. Since we are using the the [Eleventy Image Plugin](https://www.11ty.dev/docs/plugins/image) which is smart enough to know if an image has already been optimized, we don't need to worry about that. **Just set it and forget it.**

> **PLEASE NOTE:** This feature does add a little overhead to the initial build process.

If you would rather not include this feature just set `useImageTransform: false`  in `.eleventy.js` and you're good to go.


All Eleventy configuration options are available, see the [Eleventy Docs](https://www.11ty.dev/docs/config/) for more information.

If you're looking to extend or further configure your project with other NPM modules, Eleventy plugins, or ESBuild Plugins, just reference the appropriate documentation.

- [Eleventy Docs](https://11ty.dev)
- [Nunjucks Docs](https://mozilla.github.io/nunjucks/templating.html)
- [Sass Docs](https://sass-lang.com/documentation/)
- [ESBuild Docs](https://esbuild.github.io/plugins/)
- [Biome Docs](https://docs.biomejs.dev/)
- [NPM Package Docs](https://docs.npmjs.com/using-npm-packages-in-your-projects)

#### [ 👨‍🚀 Autopilot System](#autopilot-system)

**WIP** The Autopilot System, is a modular classless CSS system that uses a modified version of the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern). We combined a couple of concepts regarding naming conventions that fit our workflow. **Documentation coming soon**

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->

## [ 🧭 Roadmap ](#roadmap)

- [x] Improve documentation
- [ ] Create a theme using Airframe - A classless CSS system
- [ ] Add Dockerfile
- [ ] Add Yeoman generator/npm package
- [ ] Add our Eleventy plugins

See the [open issues](https://github.com/edheltzel/flightdeck-for-11ty/issues) for a full list of proposed features (and known bugs/issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## [ 👋 Contributing ](#contributing)

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## [ ⚠️ License ](#license)

Distributed under the WTFPL License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
