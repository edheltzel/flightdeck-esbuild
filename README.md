<div id="top" align="center">
<!-- PROJECT LOGO -->
  <a href="https://github.com/edheltzel"><img src="https://rdm.sfo2.digitaloceanspaces.com/flightdeck/v3-flightdeck__logo--purple-haze-600x528.png" alt="Flightdeck Logo" width="400"></a>
  <h1>Flightdeck</h1>
  <h4 style="padding-bottom: .5em">An opinionated starter project for <a href="https://www.11ty.dev/">Eleventy 🎈</a>.</h4>
<!-- PROJECT SHIELDS -->

[![release](https://img.shields.io/github/release/edheltzel/flightdeck.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/edheltzel/flightdeck/releases/latest) [![eleventy](https://img.shields.io/badge/Eleventy-v1.0.0+-373277.svg?style=for-the-badge&logo=eleventy&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/11ty/eleventy/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/edheltzel/flightdeck/blob/master/LICENSE)

</div>

<!-- #region TABLE OF CONTENTS -->

<details>
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
        <li><a href="#autopilot">Autopilot</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    li><a href="#to-do">To Do</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<!-- #endregion TABLE OF CONTENTS -->

<!-- #region Too Long Didn’t Read -->

## [🥱 TL;DR](#tldr)

An starter project for Eleventy with an opinionated workflow – Keeping Eleventy in control of the entire development and build processes.

```shell
    gh repo clone edheltzel/flightdeck flightdeck && cd flightdeck && bun install && bun start
```

**Build your project**

```shell
   bun run build
```

<!-- #endregion Too Long Didn’t Read -->
<!-- ABOUT THE PROJECT -->

## [ 🌟 About The Project ](#about-the-project)

The Flightdeck objective is to provide a unified starting point for all your Jamstack websites, by leveraging popular static-site-generators _(SSG)_.

This flavor of Flightdeck uses [Eleventy](https://www.11ty.dev/) with an opinionated workflow without the support additional tools like Webpack, Parcel, or Gulp. This is to keep things simple and to **keep Eleventy in control of the entire development and build processes**.

### [ 💡 Inspiration ](#inspiration)

Like other versions of Flightdeck, this is just an adaptation of the original [Flightdeck](https://github.com/edheltzel/flightdeck-for-jekyll) project that uses [Jekyll](https://jekyllrb.com/) for its static site generation and [Gulp](https://gulpjs.com/) for all assets bundling. ►►► 🫠 For other versions of Flightdeck, [👉 look here](https://github.com/edheltzel?tab=repositories&q=flightdeck)

Jérôme Coupé's post [Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/) served as inspiration for how this project is structured and over-time, things will shift as ideas change, but in 2022, we are shamelessly adopting the concept Jérôme Coupé outlines.

<p align="right">(<a href="#top">back to top</a>)</p>

### [ 👾 Tech Stack ](#built-with)

- [Eleventy](https://www.11ty.dev/)
- [ESBuild](https://esbuild.github.io/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Biome](https://biomejs.dev/)
- [LightningCSS](https://lightningcss.dev/)
- ~~[Jampack](https://jampack.divriots.com/)~~
- ~~[Sass](https://sass-lang.com/)~~

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## [ 🧰 Getting Started ](#getting-started)

All version of Flightdeck use NodeJS. So a very minimal and basic knowledge of Node and Git should be had when using Flightdeck as your launchpad.

> In the future, we plan to include Docker and make all Flightdeck starters available as a Yeoman and/or NPM package.

### [🧯 Prerequisites ](#prerequisites)

We are assuming that you already have Node with NPM (or another package manger, like Bun/Pnpm/Yarn) and Git installed on your system – it is also ideal that you have the latest [LTS](https://nodejs.org/en/download/) release of Node. **As of this writing the current LTS release is `20.12.2`**

#### [ 🤖 Dependencies ](#dependencies)

##### [ Package Managers ](#package-managers)

**Package managers are like dotfiles, everyone has their own preference.**

We have shifted to using [Bun](https://bun.sh/) as our primary package manager.

But, you can swap `bun` in favor of your preferences 👉 [NPM](https://www.npmjs.com/) , [Yarn](https://yarnpkg.com/), and and [Pnpm](https://pnpm.io). Use whatever you want 👍 just be sure to update the `preview` script in `package.json` with what ever flavor you choose to use.

It's highly recommended that you enable Node's [corepack](https://nodejs.org/api/corepack.html), this way Yarn and PNPM are included in your toolbox without the need to install them separately.

> Please be aware that this certainly won't be the most recent version of PNPM/Yarn.

- pnpm and yarn

  ```sh
  corepack enable

  corepack prepare pnpm@latest --activate
  corepack prepare yarn@latest --activate
  ```

### ⚙[ Installation ](#installation)

Using `git` in the terminal:
```shell
git clone https://github.com/edheltzel/flightdeck.git
```

```shell
cd flightdeck
bun install
```

Using `gh` in the terminal:
```shell
gh repo clone edheltzel/flightdeck
```

```shell
cd flightdeck
bun install
```

<details>
  <summary>see all dependencies</summary>
  <pre>
    bun pm ls
/Users/ed/Developer/personal/flightdeck/for-11ty-esbuild node_modules (583)
├── @11ty/eleventy@2.0.1
├── @11ty/eleventy-img@4.0.2
├── @11ty/eleventy-navigation@0.3.5
├── @11ty/eleventy-plugin-syntaxhighlight@5.0.0
├── @alpinejs/persist@3.13.8
├── @biomejs/biome@1.6.4
├── alpinejs@3.13.8
├── browserslist@4.23.0
├── eleventy-plugin-embed-everything@1.18.2
├── esbuild@0.20.2
├── fast-glob@3.3.2
├── html-minifier@4.0.0
├── lightningcss@1.24.1
├── lightningcss-cli@1.24.1
├── markdown-it@14.1.0
├── markdown-it-attrs@4.1.6
├── stylelint@16.3.1
└── stylelint-config-standard@36.0.0

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
  <pre>package.json scripts (11 found):

  $ bun run start
    eleventy --serve

  $ bun run build
    pnpm run clean && pnpm run build:11ty

  $ bun run build:11ty
    cross-env ENV=production eleventy

  $ bun run debug
    DEBUG=Eleventy* eleventy

  $ bun run preview
    bunx http-server dist -p 4000

  $ bun run check
    biome check

  $ bun run format
    biome format

  $ bun run lint
    biome lint

  $ bun run lint:css
    stylelint \"src/**/*.css\" --fix

  $ bun run clean
    ./.scrub.sh site

  $ bun run purge
    ./.scrub.sh purge</pre>
</details>

- `build` command - executes the production build of your site with Eleventy, includes HTML minification, compressed Sass, optimized images, and bundled javascript.
  - for our workflow, Cloudflare handles the DNS while Cloudflare Pages does the building and hosting - Cloudflare's Auto Minify minifies the HTML, CSS, and JS. You can easily add minification to the build process by adding a plugin to Eleventy.
- `preview` command - spins up a local server to preview the production build.
- `check` command - runs biome lint and format at the same time JS/TS, see `biome.json`.
  - ie: `bun run check ./src/assets/js/app.js`
- `format` command - uses biome to format JS/TS, see `biome.json`.
  - ie: `bun run format ./src/assets/js/app.js`
- `lint` command - uses biome to lint JS/TS, see `biome.json`.
  - ie: `bun run lint ./src/assets/js/app.js`
- `lint:css` command - uses stylelint to find issues in your css.
- `clean` command - scrubs/removes the `dist/` and `.cache` directories
- `purge` command - scrubs/removes the `dist/`, `.cache`, `node_modules`, and any lock files from npm, yarn, pnpm or bun. - 🧼 A fresh install.
  - **👀 NOTE: Both `clean` and `purge` are executed from a bash script**
- `upgrade` command - uses `bunx npm-check-updates -ui` to upgrade dependencies to their latest versions and updates the `package.json` - this is a work around for `bun upgrade` not working as expected or how other package managers work.

<p align="right">(<a href="#top">back to top</a>)</p>

### [ ‍🚀 Deployments ](#deployments)

Deployments for this project are completely up to you and your needs, we are fans of [Cloudflare Pages](https://pages.cloudflare.com/), which is why you'll find a `.node-version` file, [Cloudflare Pages currently supports Node v18.17.1](https://developers.cloudflare.com/pages/configuration/language-support-and-tools/#supported-languages-and-tools). Some other really good and popular options are GitHub Pages, Vercel, Netlify, and Render. **Your call on what you use.**


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
   │     ├── _autopilot
   │     │  └── _base
   │     │  └── _components
   │     │  └── _layouts
   │     │  └── _utilities
   │     │  └── _vendors
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

- `./_flightdeck/filters` - where all Universal filters are added to Eleventy templates. Currently we use Nunjucks for our templates, so all filters are added to the Nunjucks environment, but are easily adapted to other template engines, like Liquid.
- `./_flightdeck/shortcodes` - where all shortcodes are added to extend the functionality of the content you are creating. We consider shortcodes content altering and not UI focused. The idea is to create shortcodes that make writing content easier and more enjoyable.
- `./_flightdeck/transforms` - where all transforms are added to templates, javascript, styles, and images.

All the directories have a corresponding file that is used to import all the files in the directory. Each of these files are imported into `.eleventy.js` as modules.
- `./_flightdeck/filters.js`
- `./_flightdeck/plugins.js` - this file controls Eleventy plugins that modify content.
- `./_flightdeck/shortcodes.js`
- `./_flightdeck/transforms.js`
- `./_flightdeck/workflow.js` - this file controls the Eleventy dev server.

Flightdeck comes with a custom image transform plugin that watches for changes in the `./src/assets/images` directory and then optimizes any new or changed images, copies it to the output destination directory `./dist/assets/images`. Since we are using the the [Eleventy Image Plugin](https://www.11ty.dev/docs/plugins/image) under-the-hood, it is smart enough to know if an image has already been optimized, we don't need to worry about that. **Just set it and forget it.**

> **PLEASE NOTE:** This feature does add a little overhead to the initial build process, which is why it is disabled by default.

If you would like the enable this feature just set `useImageDirTransform: true`  in `.eleventy.js` and you're good to go.

All Eleventy configuration options are available, see the [Eleventy Docs](https://www.11ty.dev/docs/config/) for more information.

If you're looking to extend or further configure your project with other NPM modules, Eleventy plugins, or ESBuild Plugins, just reference the appropriate documentation.

- [Eleventy Docs](https://11ty.dev)
- [Nunjucks Docs](https://mozilla.github.io/nunjucks/templating.html)
- [ESBuild Docs](https://esbuild.github.io/plugins/)
- [Biome Docs](https://docs.biomejs.dev/)
- [LightningCSS Docs](https://lightningcss.dev/)
- [Sass Docs](https://sass-lang.com/documentation/)
- [NPM Package Docs](https://docs.npmjs.com/using-npm-packages-in-your-projects)

##### Using Sass/Scss

If you'd rather write scss, please install `sass` and `eleventy-plugin-sass` and update the `transform.js` file to use the module. You'll need to remove the lightingcss module and update the `styles` directory to your scss files.

```shell
bun install sass eleventy-plugin-sass
```


<!-- #region Autopilot -->
#### [ 👨‍🚀 Autopilot Theme](#autopilot)

**WIP** Autopilot, is a custom minimal css framework for semantic HTML.

The goal of Autopilot, is to provide a simple, yet powerful, set of default styles to help build your UI components.

<!-- #endregion Autopilot -->

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->

## [ 🧭 Roadmap ](#roadmap)

- [x] Improve documentation
- [x] Create a theme using Autopilot UI Components
- [ ] Add Dockerfile
- [ ] Add Yeoman generator/npm package
- [ ] Add our Eleventy plugins

### [ 📝 To Do ](#to-do)
- [ ] create layout with new grid system
- [ ] improve nunjucks layouts and partials
- [ ] document the new grid system
- [x] review lightncingcss for more performance options
- [x] replace scss with lightncingcss
- [x] combine autopilot and declarative scaffold
- [x] update naming convention to be consistent
- [x] update layouts to use sematic markup for containers
- [x] add utility classes for grid correctly
- [x] update the style guide to use the grid utility classes

See the [open issues](https://github.com/edheltzel/flightdeck/issues) for a full list of proposed features (and known bugs/issues).

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
