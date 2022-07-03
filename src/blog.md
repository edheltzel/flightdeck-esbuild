---
layout: layouts/default.njk
title: The Blog
---

## Latest Posts

Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem earum esse pariatur perferendis magnam natus sed reiciendis impedit. Quae deserunt adipisci aut, aperiam unde minima fugit quisquam eaque praesentium!

<ul class="featured__posts">
{% for post in collections.blog | limit(4) %}
<li>
  <figure>
    <a href="{{ post.url }}">
    <img class="featured__image" src="{{ post.data.featured_image | default('/assets/images/testing.jpg', true) }}" alt="{{ post.data.title }} post featured_image">
    <figcaption>
        <h2>{{ post.data.title }}</h2>
        <p>{% if post.data.description %}
          {{ post.data.description }}
          {% else %}{{ post.templateContent | excerpt }}{% endif %}</p>
      </figcaption>
    </a>
    </figure>
  </li>
{% endfor %}
</ul>
