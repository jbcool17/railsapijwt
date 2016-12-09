---
layout: development
title: /-Development
permalink: /development/
main_menu: false
---

<div class="dev">
	{% for my_page in site.pages %}
	      {% if my_page.developments %}
	      <h2><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a></h2>
	      <p>{{my_page.content}}</p>
	      {% endif %}
	{% endfor %}
</div>