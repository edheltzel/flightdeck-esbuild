---
title: Flightdeck Shortcodes
eleventyNavigation:
  key: Shortcodes
  order: 4
---
This page is a showcase of the shortcodes that are available in Flightdeck. You can find the full list of shortcodes in the [Flightdeck Shortcodes](https://github.com/edheltzel/flightdeck/blob/main/src/_flightdeck/shortcodes.js) file – {% link url="https://github.com/edheltzel/flightdeck/blog/main/src/_flightdeck/shortcodes.js", text="View on GitHub", target="_blank", role="link", classes="outline contrast" %}

---

## Buttons & Links{id=buttons}

{% raw %}
```jinja2
{# Link shortcode - uses role="button" de defaults to button#}
{% link url="https://github.com/edheltzel/flightdeck", text="View on GitHub", target="_blank", role="button", classes="secondary" %}
```
{% endraw%}

{% link url="https://github.com/edheltzel/flightdeck/blog/main/src/_flightdeck/shortcodes.js", text="View on GitHub", target="_blank", role="button", classes="secondary" %}

{% raw %}
```jinja2
{# Button shortcode - uses button #}
{% button type="submit", text="Submit to nowhere", classes="outline primary" %}`
```
{% endraw %}

{% button type="submit", text="Submit to nowhere", classes="outline primary" %}

---

## Blockquotes{id=blockquotes}

{% blockquote
text="This is a blockquote using a <strong>shortcode</strong>.<br> It supports custom HTML also",
source='A tweet from <a href="https://tinyurl.com/24372n3q">jeromecoupe</a>',
classes="contrast"
%}

{% raw %}
```jinja2
{# Blockquote with citation and custom html #}
{% blockquote
classes="contrast",
text="This is a blockquote using a <strong>shortcode</strong>.<br> It supports custom HTML also",
source='A tweet from <a href="https://tinyurl.com/24372n3q">jeromecoupe</a>'
%}
```
{% endraw %}

---

## Codepen Embedding{id=codepen}

{% codepen "https://codepen.io/jacobberglund/pen/bwrGvx", 455, "html,result", "default" %}

{% raw %}
```jinja2
{# Codepen Embedding #}
{% codepen penUrl="https://codepen.io/jacobberglund/pen/bwrGvx", height=900, tabs="css,result", theme="178" %}
```
{% endraw %}
