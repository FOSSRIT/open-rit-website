---
layout: base
banner: /assets/images/banners/students.webp

breadcrumbs:
- name: Students
  path: /students/

subnav:
- name: Students
  link: /students
  active: true
  sections:
  - Undergraduate Courses
  - Immersion & Minor
  - Co-ops & Part Time Work
  - FOSS@Magic

links:
- name: LibreCorps >
  href: https://fossrit.github.io/librecorps/
  image: /assets/images/pages/students/librecorps.webp
---

## Undergraduate Courses

Open@RIT is proud to support these introductory courses offered by the School of Interactive Games and Media and the Department of English. These courses are open to all students.

{% capture hfoss %}
### [IGME-582 Humanitarian Free and Open Source Software Development][1]

Open Source has proven to be a key piece of the puzzle in modern humanitarian efforts. The *Humanitarian Free and Open Source Software Development* course introduces students to the tools and processes critical to Open Source development. By the end of the course, students will be contributing to humanitarian software, game and interactive media communities. Students will also document their projects on HFOSS community hubs, fully immersing them in Open Source.

[1]: https://www.rit.edu/study/free-and-open-source-software-and-free-culture-minor
{% endcapture %}

{% capture foss_culture %}
### [ENGL-450 Free &<br/>Open Source Culture][2]

A lot has changed in the relationship between authorship and cultural production. That’s what the Free & Open Source Culture Course is all about. Students will utilize factors such as commerce, culture, law, and technology to analyze how the cultural norms surrounding authorship transformed over the past three centuries, and use those transformations to see the roles software and the latest media technologies can play in facilitating Free and Open cultures.

[2]: https://www.rit.edu/study/free-and-open-source-software-and-free-culture-minor
{% endcapture %}

{% include two-column.html column_1=hfoss column_2=foss_culture %}

## Immersion & Minor

### [Free Culture and Free and Open Source Computing Immersion][3]

Each student at RIT is required to take a three-course themed sequence of courses outside of their required major courses.  This new multidisciplinary immersion is open to all students. Students who complete the immersion will be well-positioned to continue on with the minor. The two courses above are required for the immersion and students can choose one of nine elective courses from the departments of Communications, English, Science, Technology, and Society or the School of Information to complete the Immersion.

### [Minor in Free and Open Source Software and Free Culture][4]

For students who wish to have a deeper understanding of, and gain greater experience in Open work, they’re in luck! The two courses above are required for our minor in Free and Open Source Software and Free Culture through the School of Interactive Games and Media. This multidisciplinary minor is the first of its kind and is open to all students. Not only is this a great way for students to make an immediate splash in Open Work, but major corporations often target open-source communities when recruiting for new talent.

***Note:  The minor is currently under modification to bring it in line with the new immersion and students will be able to register for “minor 2.0” in the Fall semester of 2022***

[3]: https://www.rit.edu/study/free-culture-and-free-and-open-source-computing-immersion
[4]: https://www.rit.edu/study/free-and-open-source-software-and-free-culture-minor

{% capture coops %}
## Co-Ops & Part Time Work

LibreCorps is an initiative of Open@RIT that connects RIT students with opportunities that use Open Source in a humanitarian and/or civic entity. It also supports the projects of the Open@RIT Fellows Program.

***When openings are available, they’ll be listed here:***
{% endcapture %}

{% capture librecorp %}
{% include link_grid.html links=page.links big=true %}
{% endcapture %}

{% include spacer.html %}
{% include two-column.html column_1=coops column_2=librecorp %}

{% include spacer.html %}
<div class="big-text">

Some organizations students have worked with include:

{% capture col1 %}
[Unicef Innovation & Innovation Fund](https://www.unicefinnovationfund.org/home)

[Night Scout](https://www.nightscout.info/)

[OCP](https://www.opencompute.org/)
{% endcapture %}

{% capture col2 %}
[Open APS](https://openaps.org/)

[Sugar Labs](https://www.sugarlabs.org/)
{% endcapture %}

{% include two-column.html column_1=col1 column_2=col2 %}

</div>
{% include spacer.html %}

{% capture foss_at_magic %}
FOSS@MAGIC is RIT’s Free and Open Source Software (FOSS) student group based in the RIT MAGIC Center. Students in the organization actively engage with the open source community and/or start their own and show their work annually at Imagine RIT and Maker Faire Rochester

[read more >](https://fossrit.github.io/)
{% endcapture %}

{% include splash-blurb.html name="FOSS@Magic" image_url="/assets/images/pages/faculty/open-work/act.webp" image_alt="Several dudes gather around a table crowded with laptops and notebooks" content=foss_at_magic %}
