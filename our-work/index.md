---
layout: base
banner: /assets/images/banners/our-work.webp

breadcrumbs:
- name: Our Open Work
  path: /our-work/
- name: Our Work and Projects
  path: /our-work/

subnav:
- name: Our Work and Projects
  link: /our-work
  active: true
  sections:
  - LibreCorps Team
  - Mystic
  - World Around You
  - Conceptual Mismatches
- name: Our Fellows' Projects
  link: /our-work/fellows-projects

links:
- name: LibreCorps >
  href: #
  image: /assets/images/pages/about/tenure.webp
---

## LibreCorps Teams

LibreCorps is our faculty and staff-led, full-time, student-driven initiative that provides support for Open Work around the world and on-campus. Some of our external work includes:

- Mentorship of [UNICEF Ventures][] cohorts on Open infrastructure, pipeline, and practices
- Working with Red Hat and Ralph Bean to build [Fedora Badges][]
- Contributed to [Open APS][], Night Scout, and more

Internally we’ve been focused on our [Open@RIT Fellows][] work supporting over 21 faculty and staff.
*If you have a project that you think can benefit from LibreCorps support, either by contract or as part of a grant, send an email to sj@mail.rit.edu to discuss it.*

[UNICEF Ventures]: https://www.unicef.org/innovation/stories
[Fedora Badges]: https://badges.fedoraproject.org/about
[Open APS]: https://openaps.org/
[Open@RIT Fellows]: {{ "/our-work/fellows-projects" | relative_url }}

## Projects

{% capture way %}
[WAY][] distributes "digital picture books" with multiple signed and textural languages to support the literacy of Deaf children worldwide. The development of the platform was led by Dr. Christopher Kurz with Open@RIT Director Stephen Jacobs as Co-PI in partnership with Second Avenue Learning, Inc. The development has been funded by several grants from the [All Children Reading Grand Challenge][], won the award for [Inclusive Education from the Mobiles in Education Alliance][], and was recently accepted into the prestigious [Zero Project Impact Transfer][] accelerator program.

[read more >](https://deafworldaroundyou.org/Stories)

[WAY]: https://deafworldaroundyou.org/Stories
[All Children Reading Grand Challenge]: https://allchildrenreading.org/
[Inclusive Education from the Mobiles in Education Alliance]: https://meducationalliance.org/10th-anniversary-award-show/
[Zero Project Impact Transfer]: https://zeroproject.org/zero-project-impact-transfer/
{% endcapture way %}
{% include splash-blurb.html name="World Around You" image_url="/assets/images/pages/our-work/way.webp" image_alt="The World Around You logo" content=way %}

{% capture mystic %}
<a id="mystic"></a> <!-- Anchor --> Your hub for open source everything.  Community is central to every open source project, whether it's open source software, open science, or anything else in the open ecosystem.  Mystic is your tool to build that community.  Anyone in the community can submit what they've been working on and immediately have access to a homepage for their project, CHAOSS community/software health metrics, and visibility within the community — letting them do amazing work among a strong community.

[read more >](https://opensource.ieee.org/rit/mystic)
<!--- TODO: Get a better link here -->
{% endcapture %}
{% include left-image.html content=mystic img="/assets/images/projects/mystic.webp" alt="Mystic" scale=0.3%}

<br/>

{% capture conceptual_mismatches %}
[Conceptual Mismatches][], a qualitative study of PyPI, was part of the first Ford and Alfred P. Sloan Foundations’ [Critical Digital Infrastructure][] research cohort. The study was designed by [Mel Chua][] and run by her and Open@RIT Director Stephen Jacobs, and was presented as part of a research colloquium series held by the foundations on August 20th, 2020.

[read more >](https://www.fordfoundation.org/media/5811/rit-ford-sloan-one-pager-final.pdf)

[Conceptual Mismatches]: https://www.fordfoundation.org/media/5811/rit-ford-sloan-one-pager-final.pdf
[Critical Digital Infrastructure]: https://www.fordfoundation.org/campaigns/critical-digital-infrastructure-research/
[Mel Chua]: http://melchua.com/
{% endcapture way %}
{% include splash-blurb.html name="Conceptual Mismatches" image_url="/assets/images/pages/our-work/cm.webp" image_alt="Two students high-five in front of Institute" content=conceptual_mismatches %}
