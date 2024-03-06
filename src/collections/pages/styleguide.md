---
title: Style Guide 💅 🎨
tagline: Semantic HTML with very minimal use of classes
---

<!-- Preview -->
<section id="preview">

  ## Preview

  Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien Nulla iaculis eros a elit pharetra egestas.

  <form>
    <div class="grid">
      <input
        type="text"
        name="firstname"
        placeholder="First name"
        aria-label="First name"
        required/>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        aria-label="Email address"
        autocomplete="email"
        required/>
      <button type="submit">Subscribe</button>
    </div>
    <fieldset>
      <label for="terms">
        <input type="checkbox" role="switch" id="terms" name="terms"/>
        I agree to the
        <a href="#" onclick="event.preventDefault()">Privacy Policy</a>
      </label>
    </fieldset>
  </form>
</section>
<!-- ./ Preview -->

<hr>

<!-- Typography-->
<section id="typography">

  ## Typography {.h1}

  Adding classes to markdown `{: h1}` is possible through the use of the `markdown-it-attrs` package.

  Aliquam lobortis vitae nibh nec rhoncus. Morbi mattis neque eget efficitur feugiat. Vivamus porta nunc a erat mattis, mattis feugiat turpis pretium. Quisque sed tristique felis.

  <!-- Blockquote-->
  Support for both HTML and Markdown blockquotes is available. Along with a custom shortcode to create a blockquote with a citation.

  > This is a blockquote in **markdown**.

  {% blockquote "This is a blockquote using a <strong>shortcode</strong>.<br> It supports custom HTML also", 'A tweet from <a href="https://twitter.com/jeromecoupe/status/1419726998881062915">jeromecoupe</a>' %}


  <!-- Lists-->
  ### Lists

  - Aliquam lobortis lacus eu libero ornare facilisis
  - Nam et magna at libero scelerisque egestas
  - Suspendisse id nisl ut leo finibus vehicula quis eu ex
  - Proin ultricies turpis et volutpat vehicula

  1. Aliquam lobortis lacus eu libero ornare facilisis
  2. Nam et magna at libero scelerisque egestas
  3. Suspendisse id nisl ut leo finibus vehicula quis eu ex
  4. Proin ultricies turpis et volutpat vehicula

  <!-- Inline text elements-->
  ### Inline text elements

  <div class="grid">

    [Primary link](#)

    [Secondary link](#){.secondary}

    [Contrast link](#){.contrast}

  </div>
  <div class="grid">

    **Bold**

    _Italic_

    <u>Underline</u>

  </div>
  <div class="grid">

    <del>Deleted</del>

    <ins>Inserted</ins>

    ~~Strikethrough~~

  </div>
  <div class="grid">

    <small>Small </small>

    Text <sub>Sub</sub>

    Text <sup>Sup</sup>

  </div>
  <div class="grid">

    <abbr title="Abbreviation" data-tooltip="Abbreviation">Abbr.</abbr>

    <kbd>Kbd</kbd>

    <mark>Highlighted</mark>

  </div>

  <!-- Headings-->
  ### Heading 3

  Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis ipsum, at efficitur
    sem scelerisque vel. Aliquam auctor diam ut purus cursus fringilla. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

  #### Heading 4

  Cras fermentum velit vitae auctor aliquet. Nunc non congue urna, at blandit nibh. Donec ac
    fermentum felis. Vivamus tincidunt arcu ut lacus hendrerit, eget mattis dui finibus.

  ##### Heading 5

  Donec nec egestas nulla. Sed varius placerat felis eu suscipit. Mauris maximus ante in
    consequat luctus. Morbi euismod sagittis efficitur. Aenean non eros orci. Vivamus ut diam
    sem.

  ###### Heading 6

  Ut sed quam non mauris placerat consequat vitae id risus. Vestibulum tincidunt nulla ut
    tortor posuere, vitae malesuada tortor molestie. Sed nec interdum dolor. Vestibulum id
    auctor nisi, a efficitur sem. Aliquam sollicitudin efficitur turpis, sollicitudin
    hendrerit ligula semper id. Nunc risus felis, egestas eu tristique eget, convallis in
    velit.

  <!-- Medias-->
  <figure>
    {% Image "/assets/images/flightdeck.jpeg",
    "A picture of the a flightdeck" %}
    <figcaption>

    Image from [unsplash.com](https://unsplash.com/photos/black-and-gray-audio-mixer-lq1KA7HAdH0)

    </figcaption>
  </figure>
</section>
<!-- ./ Typography-->

<!-- Buttons-->
<section id="buttons">

  ## Buttons

  <p class="grid">
    <button>Primary</button>
    <button class="secondary">Secondary</button>
    <button class="contrast">Contrast</button>
  </p>

  <p class="grid">
    <button class="outline">Primary outline</button>
    <button class="outline secondary">Secondary outline</button>
    <button class="outline contrast">Contrast outline</button>
  </p>
</section>
<!-- ./ Buttons -->

<!-- Form elements-->
<section id="form">
  <form>
    <h2>Form elements</h2>

    <!-- Search -->
    <label for="search">Search</label>
    <input type="search" id="search" name="search" placeholder="Search"/>

    <!-- Text -->
    <label for="text">Text</label>
    <input type="text" id="text" name="text" placeholder="Text"/>
    <small>Curabitur consequat lacus at lacus porta finibus.</small>

    <!-- Select -->
    <label for="select">Select</label>
    <select id="select" name="select" required>
      <option value="" selected>Select…</option>
      <option>…</option>
    </select>

    <!-- File browser -->
    <label for="file">File browser
      <input type="file" id="file" name="file"/>
    </label>

    <!-- Range slider control -->
    <label for="range">Range slider
      <input type="range" min="0" max="100" value="50" id="range" name="range"/>
    </label>

    <!-- States -->
    <div class="grid">
      <label for="valid">
    Valid
    <input type="text" id="valid" name="valid" placeholder="Valid" aria-invalid="false"/>
      </label>
      <label for="invalid">
    Invalid
        <input
        type="text"
        id="invalid"
        name="invalid"
        placeholder="Invalid"
        aria-invalid="true"/>
      </label>
      <label for="disabled">
    Disabled
    <input type="text" id="disabled" name="disabled" placeholder="Disabled" disabled/>
      </label>
    </div>

    <div class="grid">
      <!-- Date-->
      <label for="date"
    >Date
    <input type="date" id="date" name="date"/>
      </label>

      <!-- Time-->
      <label for="time"
    >Time
    <input type="time" id="time" name="time"/>
      </label>

      <!-- Color-->
      <label for="color"
    >Color
    <input type="color" id="color" name="color" value="#0eaaaa"/>
      </label>
    </div>

    <div class="grid">
      <!-- Checkboxes -->
      <fieldset>
        <legend>
          <strong>Checkboxes</strong>
        </legend>
        <label for="checkbox-1">
          <input type="checkbox" id="checkbox-1" name="checkbox-1" checked/>
    Checkbox
    </label>
        <label for="checkbox-2">
          <input type="checkbox" id="checkbox-2" name="checkbox-2"/>
    Checkbox
    </label>
      </fieldset>

      <!-- Radio buttons -->
      <fieldset>
        <legend>
          <strong>Radio buttons</strong>
        </legend>
        <label for="radio-1">
          <input type="radio" id="radio-1" name="radio" value="radio-1" checked/>
    Radio button
    </label>
        <label for="radio-2">
          <input type="radio" id="radio-2" name="radio" value="radio-2"/>
    Radio button
    </label>
      </fieldset>

      <!-- Switch -->
      <fieldset>
        <legend>
          <strong>Switches</strong>
        </legend>
        <label for="switch-1">
          <input type="checkbox" id="switch-1" name="switch-1" role="switch" checked/>
    Switch
    </label>
        <label for="switch-2">
          <input type="checkbox" id="switch-2" name="switch-2" role="switch"/>
    Switch
    </label>
      </fieldset>
    </div>

    <!-- Buttons -->
    <input type="reset" value="Reset" onclick="event.preventDefault()"/>
    <input type="submit" value="Submit" onclick="event.preventDefault()"/>
  </form>
</section>
<!-- ./ Form elements-->

<!-- Tables -->
<section id="tables">

   ## Tables

  <div class="overflow-auto">
    <table class="striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<!-- ./ Tables -->
<!-- Modal example with AlpineJS -->
<modal x-data="{ dialogOpen: false }">
  <dialog x-bind:open="dialogOpen" @close="dialogOpen = false" @keydown.window.escape="dialogOpen = false">
    <article>
      <header>
        <button aria-label="Close" rel="prev" @click="dialogOpen = false"></button>
        <h3>Confirm your action!</h3>
      </header>
      <p>
        This modal uses at custom HTML tag <code>modal</code> Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue finibuspellentesque. Nullam finibus risus non semper euismod.
      </p>
      <footer>
        <button role="button" class="secondary" @click="dialogOpen = false">Cancel</button>
        <button autofocus @click="dialogOpen = false">Confirm</button>
      </footer>
    </article>
  </dialog>
  <!-- ./ Modal example -->
  <!-- Modal Button -->
  <section id="modal">
    <h2>Modal</h2>
    <button class="contrast" @click="dialogOpen = !dialogOpen">Open Demo Modal</button>
  </section>
  <!-- ./ Modal Button -->
</modal>
<!-- Accordions -->
<section id="accordions">

  ## Accordions

  <details>
    <summary>Accordion 1</summary>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam,
    tincidunt nec porta sed, auctor id velit. Etiam venenatis nisl ut orci consequat, vitae
    tempus quam commodo. Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis
    lectus rutrum quam hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar
    mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta turpis sit
    amet, congue turpis.
    </p>
  </details>
  <details open>
    <summary>Accordion 2</summary>
      This is just an html <code>details</code> tag
    <ul>
      <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
      <li>Quisque sed eros non eros ornare elementum.</li>
      <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
    </ul>
  </details>
</section>
<!-- ./ Accordions -->

<hr>
<!-- Article-->
<article id="article">

  ## Article

  Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed ultricies dolor non
    ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit
    pharetra egestas. Nunc placerat facilisis cursus. Sed vestibulum metus eget dolor pharetra
    rutrum.

  <footer>
    <small>Duis nec elit placerat, suscipit nibh quis, finibus neque.</small>
  </footer>
</article>
<!-- ./ Article-->

<!-- Group -->
<section id="group">

  ## Group

  <form>
    <fieldset role="group">
      <input name="email" type="email" placeholder="Enter your email" autocomplete="email"/>
      <input type="submit" value="Subscribe"/>
    </fieldset>
  </form>
</section>
<!-- ./ Group -->

<!-- Progress -->
<section id="progress">

  ## Progress bar

  <progress id="progress-1" value="25" max="100"></progress>
  <progress id="progress-2"></progress>
</section>
<!-- ./ Progress -->

<!-- Loading -->
<section id="loading">

  ## Loading

  <article aria-busy="true"></article>
  <button aria-busy="true">Please wait…</button>
</section>
<!-- ./ Loading -->
