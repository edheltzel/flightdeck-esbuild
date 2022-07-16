---
title: Latest Posts
tagline: "These are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before."
permalink: "/blog/"
---

<hr>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem earum esse pariatur perferendis magnam natus sed reiciendis impedit. Quae deserunt adipisci aut, aperiam unde minima fugit quisquam eaque praesentium!

{% for post in collections.blog | limit(4) %}

<article>
  <a href="{{ post.url }}">
    <img class="featured__image" src="{{ post.data.featured_image | default('/assets/images/testing.jpg', true) }}" alt="{{ post.data.title }} post featured_image">
  </a>
  <h2>{{ post.data.title }}</h2>
  <p>{% if post.data.description %}
      {{ post.data.description }}
      {% else %}{{ post.templateContent | excerpt }}{% endif %}</p>
  <footer>
    <a href="{{ post.url }}" role="button" aria-label="Read More about {{ post.data.title }}">Read More‍ 👉</a>
  </footer>
</article>
{% endfor %}
