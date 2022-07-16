---
layout: "layouts/blog"
title: Latest Posts
tagline: "These are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before."
permalink: "/blog/"
---

{% from "macros/component.njk" import component %}
This is new - Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem earum esse pariatur perferendis magnam natus sed reiciendis impedit. Quae deserunt adipisci aut, aperiam unde minima fugit quisquam eaque praesentium!

{{ component('blockquote', {
  text:'blah blah blah blah',
  source: 'mr blah blah'
}) }}
