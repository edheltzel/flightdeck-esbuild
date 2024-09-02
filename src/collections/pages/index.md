---
title: flightdeck
permalink: /
eleventyNavigation:
  key: Home
  order: 1
---

<article>
{% blockquote text="That's one small step for man, one giant leap for mankind", source="Neil Armstrong" %}
</article>

``` html
<!-- AlpineJS -->
<div x-data="{ search: '', placeholder: 'Start typing...' }">
  Searching for: <span x-text="search"></span>
  <input type="text" x-model="search" :placeholder="placeholder" />

</div>
```
