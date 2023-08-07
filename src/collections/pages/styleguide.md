---
title: Style Guide 💅 🎨
tagline: Semantic HTML with very minimal use of classes
---
<!-- Typography-->

## Typography {.h1}

Aliquam lobortis vitae nibh nec rhoncus. Morbi mattis neque eget efficitur feugiat. Vivamus porta nunc a erat mattis, mattis feugiat turpis pretium. Quisque sed tristique felis.

<!-- Blockquote -->

> This is a blockquote in **markdown**

{% blockquote "This is a blockquote using a <strong>shortcode</strong>.<br> It support custom HTML also", 'A tweet from <a href="https://twitter.com/jeromecoupe/status/1419726998881062915">jeromecoupe</a>' %}


<details>
  <summary>See Code Examples</summary>

```jinja2
{% raw %}{# Using just Markdown #}
  > This is a blockquote in **markdown**

{# Using a 11ty Shortcode #}
{% blockquote  "This is a blockquote using a <strong>shortcode</strong>", "This is a citation" %}{% endraw %}
```
</details>

<!-- Code & Pre -->
### Code

```js
// function expression
let x = function(x, y) {
   return x * y;
}

// function expression using arrow function
let x = (x, y) => x * y;
```
`const x = 1;`

```markdown
<!-- using classes in markdown -->
## Typography {.h1}

```





<!-- Lists-->

### Lists

- Aliquam lobortis lacus eu libero ornare facilisis.
- Nam et magna at libero scelerisque egestas.
- Suspendisse id nisl ut leo finibus vehicula quis eu ex.
- Proin ultricies turpis et volutpat vehicula.

  <!-- Inline text elements-->

### Inline text elements

  <section class="grid">
    <p><a href="#" onclick="event.preventDefault()">Primary link</a></p>
    <p><a href="#" class="secondary" onclick="event.preventDefault()">Secondary link</a></p>
    <p><a href="#" class="contrast" onclick="event.preventDefault()">Contrast link</a></p>
  </section>
  <section class="grid">
    <p><strong>Bold</strong></p>
    <p><em>Italic</em></p>
    <p><u>Underline</u></p>
  </section>
  <section class="grid">
    <p><del>Deleted</del></p>
    <p><ins>Inserted</ins></p>
    <p><s>Strike through</s></p>
  </section>
  <section class="grid">
    <p><small>Small </small></p>
    <p>Text <sub>Sub</sub></p>
    <p>Text <sup>Sup</sup></p>
  </section>
  <section class="grid">
    <p><abbr title="Abbreviation" data-tooltip="Abbreviation">Abbr.</abbr></p>
    <p><kbd>Kbd</kbd></p>
    <p><mark>Highlighted</mark></p>
  </section>

  <!-- Headings-->

### Heading 3

Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis ipsum, at efficitur sem scelerisque vel. Aliquam auctor diam ut purus cursus fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

#### Heading 4

Cras fermentum velit vitae auctor aliquet. Nunc non congue urna, at blandit nibh. Donec ac fermentum felis. Vivamus tincidunt arcu ut lacus hendrerit, eget mattis dui finibus.

##### Heading 5

Donec nec egestas nulla. Sed varius placerat felis eu suscipit. Mauris maximus ante in consequat luctus. Morbi euismod sagittis efficitur. Aenean non eros orci. Vivamus ut diam sem.

###### Heading 6

Ut sed quam non mauris placerat consequat vitae id risus. Vestibulum tincidunt nulla ut tortor posuere, vitae malesuada tortor molestie. Sed nec interdum dolor. Vestibulum id auctor nisi, a efficitur sem. Aliquam sollicitudin efficitur turpis, sollicitudin hendrerit ligula semper id. Nunc risus felis, egestas eu tristique eget, convallis in velit.

  <!-- Media-->

![SpaceX Launch](https://source.unsplash.com/TV2gg2kZD1o)
A reference to the [image](#image).

<figure>
 <img src="https://source.unsplash.com/TV2gg2kZD1o" alt="Space X Launch">
  <figcaption>Image from <a href="https://unsplash.com">unsplash.com</a></figcaption>
</figure>

</section><!-- End Typography-->

<!-- Buttons-->
<section id="buttons">
  <h2>Buttons</h2>
  <div class="grid" style="margin-top: 1rem">
    <button>Primary</button>
    <button class="secondary">Secondary</button>
    <button class="contrast">Contrast</button>
  </div>
  <div class="grid">
    <button class="outline">Primary outline</button>
    <button class="outline secondary">Secondary outline</button>
    <button class="outline contrast">Contrast outline</button>
  </div>
  <h4>Button Links</h4>
  <div class="grid">
    {% button "#", "Link Button" %}
    {% button "https://google.com", "Go To Google.com 👉" %}
  </div>
</section><!-- End Buttons -->

</section><!-- End Buttons -->

<!-- Form elements-->
<section id="form">
  <form>
    <h2>Form elements</h2>

  <!-- Search -->

<label for="search">Search</label>
<input type="search" id="search" name="search" placeholder="Search">

  <!-- Text -->

<label for="text">Text</label>
<input type="text" id="text" name="text" placeholder="Text">
<small>Curabitur consequat lacus at lacus porta finibus.</small>

  <!-- Select -->

<label for="select">Select</label>
<select id="select" name="select" required>

<option value="" selected>Select…</option>
<option>…</option>
</select>

  <!-- File browser -->

<label for="file">File browser
<input type="file" id="file" name="file">
</label>

  <!-- Range slider control -->

<label for="range">Range slider
<input type="range" min="0" max="100" value="50" id="range" name="range">
</label>

  <!-- States -->
  <div class="grid">
    <label for="valid">
      Valid
      <input type="text" id="valid" name="valid" placeholder="Valid" aria-invalid="false">
    </label>
    <label for="invalid">
      Invalid
      <input type="text" id="invalid" name="invalid" placeholder="Invalid" aria-invalid="true">
    </label>
      <label for="disabled">
        Disabled
        <input type="text" id="disabled" name="disabled" placeholder="Disabled" disabled>
      </label>
    </div>

  <div class="grid">

  <!-- Date-->

<label for="date">Date
<input type="date" id="date" name="date">
</label>

  <!-- Time-->

<label for="time">Time
<input type="time" id="time" name="time">
</label>

  <!-- Color-->

<label for="color">Color
<input type="color" id="color" name="color" value="#0eaaaa">
</label>

  </div>

  <div class="grid">

  <!-- Checkboxes -->
  <fieldset>
    <legend><strong>Checkboxes</strong></legend>
    <label for="checkbox-1">
      <input type="checkbox" id="checkbox-1" name="checkbox-1" checked>
      Checkbox
    </label>
    <label for="checkbox-2">
      <input type="checkbox" id="checkbox-2" name="checkbox-2">
      Checkbox
    </label>
  </fieldset>

  <!-- Radio buttons -->
  <fieldset>
    <legend><strong>Radio buttons</strong></legend>
    <label for="radio-1">
      <input type="radio" id="radio-1" name="radio" value="radio-1" checked>
      Radio button
    </label>
    <label for="radio-2">
      <input type="radio" id="radio-2" name="radio" value="radio-2">
      Radio button
    </label>
  </fieldset>

  <!-- Switch -->
  <fieldset>
    <legend><strong>Switches</strong></legend>
    <label for="switch-1">
      <input type="checkbox" id="switch-1" name="switch-1" role="switch" checked>
      Switch
    </label>
    <label for="switch-2">
      <input type="checkbox" id="switch-2" name="switch-2" role="switch">
      Switch
    </label>
  </fieldset>

  </div>

  <!-- Buttons -->
  <input type="reset" value="Reset" onclick="event.preventDefault()">
  <input type="submit" value="Submit" onclick="event.preventDefault()">

  </form>

  </section><!-- End Form elements-->

  <!-- Tables -->
  <section id="tables">
    <h2>Tables</h2>
    <figure>
      <table role="grid">
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
    </figure>
  </section><!-- End Tables -->

  <!-- Modal -->
  <section id="modal">
    <h2>Modal</h2>
    <button class="contrast" data-target="modal-example" onclick="toggleModal(event)">Launch demo modal</button>
  </section><!-- End Modal -->

  <!-- Accordions -->
  <section id="accordions">
    <h2>Accordions</h2>
    <details>
      <summary>Accordion 1</summary>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam, tincidunt nec porta sed, auctor id velit. Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis lectus rutrum quam hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta turpis sit amet, congue turpis.</p>
    </details>
    <details open>
      <summary>Accordion 2</summary>
      <ul>
        <li>Vestibulum id elit quis massa interdum sodales.</li>
        <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
        <li>Quisque sed eros non eros ornare elementum.</li>
        <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
      </ul>
    </details>
  </section><!-- End Accordions -->

  <!-- Article-->
  <article id="article">
    <h2>Article</h2>
    <p>Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas. Nunc placerat facilisis cursus. Sed vestibulum metus eget dolor pharetra rutrum.</p>
    <footer><small>Duis nec elit placerat, suscipit nibh quis, finibus neque.</small></footer>
  </article><!-- End Article-->

  <!-- Progress -->
  <section id="progress">
    <h2>Progress bar</h2>
    <progress id="progress-1" value="25" max="100"></progress>
    <progress id="progress-2"></progress>
  </section><!-- End Progress -->

  <!-- Loading -->
  <section id="loading">
    <h2>Loading</h2>
    <article aria-busy="true"></article>
    <button aria-busy="true">Please wait…</button>
  </section><!-- End Loading -->
