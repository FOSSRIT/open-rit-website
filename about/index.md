---
layout: base
banner: /assets/images/banners/about.webp

breadcrumbs:
- name: About Us
  path: /about
- name: What We Do
  path: /about

subnav:
- name: What We Do
  link: /about/
  active: true
  sections:
  - History
  - Organizations We Work With
- name: People
  link: /about/people
  sections:
  - Staff
  - Present LibreCorps Members
  - Past LibreCorps Members
  - Advisory Board
- name: Dissemination
  link: /about/dissemination
  sections:
  - Our Playbook

link_grid:
- name: Contributing to open projects
  href: /best-practices/
  image: /assets/images/pages/about/open.webp
- name: Disseminating your open work
  href: /best-practices/disseminating
  image: /assets/images/pages/about/share.webp
- name: Representing your open work in evaluation, tenure, & promotion
  href: /best-practices/evaluation
  image: /assets/images/pages/about/represent.webp
---

## Why Open Work?

As the Open Programs Office for RIT, our mission is to support RIT projects, scholarship and research. Primarily we work with them to increase their impact and translation by using Open Work best practices and infrastructure around their dissemination. We can also work with faculty to support development around these projects. We provide these services to all members of the RIT community and their new or ongoing scholarly and/or creative work. Some of what we do is modeled around the industry construct of an [Open Source Programs Office][OSPO].

[OSPO]: https://opensource.com/article/20/5/open-source-program-office

## We offer support in:

{% include link_grid.html links=page.link_grid columns=1 big=true row_height="141px" %}

## History

Open@RIT’s roots go back to 2009 with our first honors course in developing educational games for the One Laptop Per Child program. From that, we added more courses, an affinity group, a co-op program now called LibreCorps in 2012, and the first academic minor in Free and Open Source Software and Free Culture in 2014. In 2019 we introduced the idea of Open@RIT to our administration as an office and research center to support Open Work across the RIT campus and community. We were approved and officially opened our doors in August of 2020. For a much more detailed description, with lots of links to articles and documents that cover some of the milestone moments, you can read the piece [Birth of an Academic OSPO][Academic OSPO] that we wrote with the Linux Foundation.


[Academic OSPO]: https://www.linux.com/featured/openrit-the-birth-of-an-academic-ospo/

## Organizations We Work With

{% capture column1 %}
[Linux Foundation](https://www.linuxfoundation.org/)
[IEEE SA Open Working Group](https://saopen.ieee.org/)
[Sustain University Education Working Group](https://discourse.sustainoss.org/tags/c/working-groups/17/universities)
[TODO Group](https://todogroup.org/#)
{% endcapture %}

{% capture column2 %}
[CHAOSS Value Working Group](https://github.com/chaoss/wg-value)
[International Game Developers Association (IGDA)](https://igda.org/)
[OSPO++](https://ospoplusplus.com/)
{% endcapture %}

{% include two-column.html column_1=column1 column_2=column2 %}
