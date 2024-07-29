---
title: Flightdeck Shortcodes
eleventyNavigation:
  key: Shortcodes
  order: 4
---
This page is a showcase of the shortcodes that are available in Flightdeck. You can find the full list of shortcodes in the [Flightdeck Shortcodes](https://github.com/edheltzel/flightdeck/blob/main/src/_flightdeck/shortcodes.js) file.

---

{% link url="https://github.com/edheltzel/flightdeck/blog/main/src/_flightdeck/shortcodes.js", text="View on GitHub", target="_blank", role="button", classes="outline contrast" %}
## Buttons and Links

{% raw %}
```jinja2
{# Link shortcode - uses role="button" de defaults to button#}
{% link url="https://github.com/edheltzel/flightdeck", text="View on GitHub", target="_blank", role="button", classes="secondary" %}
```
{% endraw %}
{% link url="https://github.com/edheltzel/flightdeck/blog/main/src/_flightdeck/shortcodes.js", text="View on GitHub", target="_blank", role="button", classes="secondary" %}

{% raw %}
```jinja2
{# Button shortcode - uses button #}
{% button type="submit", text="Submit to nowhere", classes="outline primary" %}`
```
{% endraw %}

{% button type="submit", text="Submit to nowhere", classes="outline primary" %}
