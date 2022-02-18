---
layout: base
title: Open@RIT
banner: /assets/images/banners/landing.webp
load_scripts:
- /events.js
links:
- name: LibreCorps
  href: /librecorp
  image: /assets/images/pages/landing/librecorp.webp
- name: Fellowship
  href: /fellowship
  image: /assets/images/pages/landing/fellowship.webp
- name: Mystic
  href: /mystic
  image: /assets/images/pages/landing/mystic.webp
- name: Best Practices
  href: /best-practices
  image: /assets/images/pages/landing/best-practices.webp
news:
- title: Project Name
  subtitle: Professor Name
  date: Spring 2021
  content: >
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
    nascetur.Lorem ipsum dolor sit amet,nascetur.Lorem ipsum dolor sit .
  image:
    href: /assets/images/pages/landing/lg1.webp
    alt: A placeholder image, for now
- title: Project Name
  subtitle: Professor Name
  date: Spring 2021
  content: >
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
    nascetur.Lorem ipsum dolor sit amet,nascetur.Lorem ipsum dolor sit .
  image:
    href: /assets/images/pages/landing/lg2.webp
    alt: A placeholder image, for now
events:
- title: Project Name
  subtitle: Professor Name
  date: Spring 2021
  content: >
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
    nascetur.Lorem ipsum dolor sit amet,nascetur.Lorem ipsum dolor sit .
  image:
    href: /assets/images/pages/landing/lg3.webp
    alt: A placeholder image, for now
- title: Project Name
  subtitle: Professor Name
  date: Spring 2021
  content: >
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
    nascetur.Lorem ipsum dolor sit amet,nascetur.Lorem ipsum dolor sit .
  image:
    href: /assets/images/pages/landing/lg2.webp
    alt: A placeholder image, for now
---

Open@RIT is part of the Office of the Vice President of Research and a Key Research Center of the University and serves as the Open Programs Office for the University.

{% capture staff %}

We offer support for:
- Educational Resources
- Contributing to Open Projects
- Disseminating Open Work
- Representing Open Work in Evaluation, Tenure, and Promotion
- Grant Writing for Open Scholarship Dissemination and Community Development

{% endcapture %}

{% capture students %}
We support Formal Classes along side an Immersion and a Minor.

We also provide support to Student groups interested in Open Work, Co-Ops, and part time work when funds allow.
{% endcapture %}

{% capture best_practices %}
Our recommended best practices surrounding contributing and disseminating Open Work.
{% endcapture %}

{% include card-tiles.html
	card1_title = "Faculty & Staff"
	card1_content = staff
	card1_img = "/assets/images/pages/landing/lg1.webp"
	card1_url = "/faculty"

	card2_title = "Students"
	card2_content = students
	card2_img = "/assets/images/pages/landing/lg2.webp"
	card2_url = "/students"

	card3_title = "Best Practices"
	card3_content = best_practices
	card3_img = "/assets/images/pages/landing/lg3.webp"
	card3_url = "/best-practices"
%}

<!--
## Latest News

<div class="news-error"></div>

{% capture news %}

	{% for event in page.news %}

		{% include event.html data=event %}

	{% endfor %}

{% endcapture %}
{% include horizontal-row.html content=news element_count=2 %}
-->
