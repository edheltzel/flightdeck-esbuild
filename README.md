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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## 🌟 About The Project

The Flightdeck objective is to provide a unified starting point for all your Jamstack websites, by leveraging popular static-site-generators _(SSG)_.

This flavor of Flightdeck uses [Eleventy](https://www.11ty.dev/) with an opinionated workflow, keeping Eleventy in control of the entire development and build processes.

### 💡 Inspiration

Like other versions of Flightdeck, this is just an adaptation of the original [Flightdeck](https://github.com/edheltzel/flightdeck-for-jekyll) project that uses [Jekyll](https://jekyllrb.com/) for its static site generation and [Gulp](https://gulpjs.com/) for all assets bundling. ►►► 🫠 For other versions of Flightdeck, [👉 look here](https://github.com/edheltzel?tab=repositories&q=flightdeck)

Jérôme Coupé's post [Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/) served as inspiration for how this project is structured and over-time, things will shift as ideas change, but in 2022, we are shamelessly adopting the concept Jérôme Coupé outlines.

<p align="right">(<a href="#top">back to top</a>)</p>

### 👾 Tech Stack

- [Eleventy](https://www.11ty.dev/)
- [ESBuild](https://esbuild.github.io/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Sass](https://sass-lang.com/)
- [Jampack](https://jampack.divriots.com/)
- [Rome](https://rome.tools/)

<details>
  <summary>see all dependencies</summary>
  <pre>
    ❯ npm list
flightdeck-for-eleventy@0.2.7
├── @11ty/eleventy-plugin-syntaxhighlight@5.0.0 -> ./node_modules/.pnpm/@11ty+eleventy-plugin-syntaxhighlight@5.0.0/node_modules/@11ty/eleventy-plugin-syntaxhighlight
├── @11ty/eleventy@2.0.1 -> ./node_modules/.pnpm/@11ty+eleventy@2.0.1/node_modules/@11ty/eleventy
├── @divriots/jampack@0.13.0 -> ./node_modules/.pnpm/@divriots+jampack@0.13.0/node_modules/@divriots/jampack
├── browserlist@1.0.1 -> ./node_modules/.pnpm/browserlist@1.0.1/node_modules/browserlist
├── cross-env@7.0.3 -> ./node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env
├── eleventy-plugin-embed-everything@1.16.0 -> ./node_modules/.pnpm/eleventy-plugin-embed-everything@1.16.0/node_modules/eleventy-plugin-embed-everything
├── esbuild-sass-plugin@2.13.0 -> ./node_modules/.pnpm/esbuild-sass-plugin@2.13.0_esbuild@0.19.2/node_modules/esbuild-sass-plugin
├── esbuild@0.19.2 -> ./node_modules/.pnpm/esbuild@0.19.2/node_modules/esbuild
├── markdown-it-attrs@4.1.6 -> ./node_modules/.pnpm/markdown-it-attrs@4.1.6_markdown-it@13.0.1/node_modules/markdown-it-attrs
├── markdown-it@13.0.1 -> ./node_modules/.pnpm/markdown-it@13.0.1/node_modules/markdown-it
├── npm-run-all@4.1.5 -> ./node_modules/.pnpm/npm-run-all@4.1.5/node_modules/npm-run-all
├── rome@12.1.3 -> ./node_modules/.pnpm/rome@12.1.3/node_modules/rome
└── sass@1.66.1 -> ./node_modules/.pnpm/sass@1.66.1/node_modules/sass
  </pre>
</details>
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 🧰 Getting Started

All version of Flightdeck use NodeJS. So a very minimal and basic knowledge of Node and Git should be had when using Flightdeck as your launchpad.

> In the future, we plan to include Docker and make all Flightdeck starters available as a Yeoman and/or NPM package.

### 🧯 Prerequisites

We are assuming that you already have Node with NPM and Git installed on your system – it is also ideal that you have the latest [LTS](https://nodejs.org/en/download/) release of Node.
**As of this writing the current LTS release is `18.16.0`**

#### 🤖 Dependencies

`pnpm` is our package manager of choice – we highly recommend you enable Node's [corepack](https://nodejs.org/api/corepack.html), this way all the `pnpm` commands are work out-of-the-box.

> Please be aware that this certainly won't be the most recent version of PNPM and as of this writing, PNPM is at version [7.5.0](https://github.com/pnpm/pnpm/releases).

Also, You can swap `pnpm` in favor of `yarn` or `npm` without any friction.

- pnpm

  ```sh
  corepack enable

  corepack prepare pnpm@7.12.2 --activate
  ```

### ⚙️ Installation

```shell
git clone https://github.com/edheltzel/flightdeck-for-11ty.git
```

```shell
cd flightdeck-for-11ty
pnpm install
```

<details>
	<summary>See all NPM packages</summary>
  <pre>pnpm list
  Legend: production dependency, optional only, dev only

flightdeck-for-11ty@0.1.0 flightdeck/for-11ty-with-esbuild

devDependencies:
@11ty/eleventy 2.0.1                         browserlist 1.0.1                            esbuild 0.19.2                               markdown-it-attrs 4.1.6                      sass 1.66.0
@11ty/eleventy-plugin-syntaxhighlight 5.0.0  cross-env 7.0.3                              esbuild-sass-plugin 2.12.0                   npm-run-all 4.1.5
@divriots/jampack 0.13.0                     eleventy-plugin-embed-everything 1.16.0      markdown-it 13.0.1                           rome 12.1.3   </pre>
</details>
<p align="right">(<a href="#top">back to top</a>)</p>

### 🏃‍♂️ Run Locally

There are just a few npm-:150
available, but the `start` command is where all the magic 🪄 happens – it will spin up the development server from Eleventy.

Again, the focus here is to keep Eleventy in control of the entire development and build processes, to keep things simple.

```shell
pnpm start
```

<details>
  <summary>Available Run Commands</summary>
  <pre>pnpm run

Lifecycle scripts:
  start
    eleventy --serve

Commands available via "pnpm run":
  build
    run-s clean build:11ty
  build:11ty
    cross-env ENV=production eleventy
  preview
    npx http-server dist -p 4000
  format
    rome format .
  lint
    rome check .
  clean
    ./.scrub.sh site
  purge
    ./.scrub.sh purge</pre>
</details>

- `build` command - executes the production build of your site with Eleventy, includes HTML minification, compressed Sass, optimized images, and bundled javascript.
  - for our workflow, Cloudflare handles the DNS while Netlify does the building and hosting - Cloudflare's Auto Minify minifies the HTML, CSS, and JS. You can easily add minification to the build process by adding a plugin to Eleventy.
- `preview` command - spins up a local server to preview the production build.
- `format`, `lint` commands - use Rome for JS/TS/JSON formatting and linting.
  - > **👀 NOTE: Both `format` and `lint` require an INPUT to be passed.** ie: `rome format .` 👈 this will find all JS/TS/JSON format issues for the entire project but will not fix them.
  - > Any arguments passed to these commands will be passed to Rome. ie: `rome format src/assets/js --write` 👈 this will find all JS format issues and fix them in the `./src/assets/js/` only.
  - > For more info: `pnpm run lint --help` – [Rome Lint Docs](https://docs.rome.tools/linter/#use-the-linter-via-cli) or `pnpm run format --help` – [Rome Format Docs](https://docs.rome.tools/formatter/#use-the-formatter-with-the-cli)
- `clean` command - scrubs/removes the `dist/` and `.cache` directories
- `purge` command - scrubs/removes the `dist/`, `.cache`, `node_modules`, and any lock files from npm, yarn, or pnpm. - A fresh install.
  - **👀 NOTE: Both `clean` and `purge` are executed from a bash script**

<p align="right">(<a href="#top">back to top</a>)</p>

### ‍🚀 Deployments

Deployments for this project are completely up to you and your needs, but we do provide a `netlify.toml` file that will work out-of-the-box with Netlify.

##### Note - Environment Variables

Don't forget to create your own `.env` with whatever environment variables you need for your project.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- File Structure -->

### 📁 File Structure

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
   ├── assets
   │  ├── fonts
   │  ├── images
   │  ├── js
   │  ├── seo
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
      └── pages</pre>
</details>

<!-- USAGE -->

### 👀 Usage

Flightdeck makes a lot of assumptions and is very opinionated - but having a good idea of how Eleventy's [data cascade](https://www.11ty.dev/docs/data-cascade/) works is always nice, as well as having some understanding on [template inherence](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) in Nunjucks will go a long way. **But is not needed**

**WIP** The Airframe CSS System uses a modified version of the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern), but we combined a couple of concepts regarding naming conventions that fit our workflow. **Documentation coming soon**

If you're looking to extend or further configure your project with other NPM modules, Eleventy plugins, or ESBuild Plugins, just reference the appropriate documentation.

- [Eleventy Docs](https://11ty.dev)
- [Nunjucks Docs](https://mozilla.github.io/nunjucks/templating.html)
- [Sass Docs](https://sass-lang.com/documentation/)
- [ESBuild Docs](https://esbuild.github.io/plugins/)
- [Rome Docs](https://docs.rome.tools/)
- [NPM Package Docs](https://docs.npmjs.com/using-npm-packages-in-your-projects)
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## 🧭 Roadmap

- [ ] Create a theme using Airframe - A classless CSS system
- [x] Improve documentation
- [ ] Add Dockerfile
- [ ] Add Yeoman generator/npm package
- [ ] Add our Eleventy plugins

See the [open issues](https://github.com/edheltzel/flightdeck-for-11ty/issues) for a full list of proposed features (and known bugs/issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 👋 Contributing

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

## ⚠️ License

Distributed under the WTFPL License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
