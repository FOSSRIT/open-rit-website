---
layout: base
banner: /assets/images/banners/about.webp

breadcrumbs:
- name: About Us
  path: /about
- name: People
  path: /about/people

subnav:
- name: What We Do
  link: /about/
  sections:
  - History
  - Organizations We Work With
- name: People
  link: /about/people
  active: true
  sections:
  - Staff
  - Present LibreCorps Members
  - Past LibreCorps Members
  - Advisory Board
- name: Dissemination
  link: /about/dissemination
  sections:
  - Our Playbook

present_members:
- name: Emi Simpson
  role: Full Stack Developer
  headshot: /assets/images/pages/about/people/emi-simpson.webp
- name: Django Skorupa
  role: UI/UX Designer
  headshot: /assets/images/pages/about/people/django-skorupa.webp
- name: Chris Ference
  role: UI/UX Designer
  headshot: /assets/images/pages/about/people/chris-ference.webp
- name: Peter Hogya
  role: Product Manager
  headshot: /assets/images/pages/about/people/peter-hogya.webp
past_members:
- name: Urvashi Kokate
  role: UI/UX Designer
  headshot: /assets/images/pages/about/people/urvashi-kokate.webp
- name: Quinn Foster
  role: Writer
  headshot: /assets/images/pages/about/people/quinn-foster.webp
- name: Rahul Jaiswal
  role: User Experience Designer
  headshot: /assets/images/pages/about/people/rahul-jaiswal.webp
- name: Julia Hawley
  role: UX Designer
  headshot: /assets/images/pages/about/people/julia-hawley.webp
- name: Shanée Gordon
  role: Writer
  headshot: /assets/images/pages/about/people/shanee-gordon.webp
- name: Suhas CV
  role: Full Stack Developer
  headshot: /assets/images/pages/about/people/suhas-cv.webp
advisory_board:
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
- name: Matthew Bernius
  role: Principle User Researcher
  org: Code for America
  degree: BS New Media Publishing, RIT ‘96
  headshot: /assets/images/pages/about/people/mike-nolan.webp
---

## People

{% capture col1 %}

{% include profile.html
	name="Stephen Jacobs"
	title="Director"
	position="**Professor**\n*School of Interactive Games & Media\nGCCIS*"
	email="sj@magic.rit.edu"
	link="https://www.rit.edu/directory/sxjics-stephen-jacobs"
	headshot="/assets/images/pages/about/people/sj.webp" %}

Stephen Jacobs is a professor with the School of Interactive Games and Media and an interdisciplinary scholar who works in several different areas that often overlap including Free and Open Source Software and Free Culture. Digital Humanities, Game Design and History and Interactive Narrative. He also holds the position of Visiting Scholar at The Strong National Museum of Play. His Open Work has been funded by The Ford Foundation, UNICEF Innovation, Red Hat Inc, Northern Telecom and AT&T. Professor Jacobs received the Provost’s Award for Excellence in Faculty Mentoring for 2019-2020.

{% endcapture %}
{% capture col2 %}

{% include profile.html
	name="Michael Nolan"
	title="Asst. Director"
	position="**Staff**\n*Open@RIT\nResearch*\n&nbsp;"
	email="mpnopen@rit.edu"
	link="https://www.rit.edu/directory/mpnopen-michael-nolan"
	headshot="/assets/images/pages/about/people/mike-nolan.webp" %}

Mike Nolan serves as the Assistant Director of Open@RIT. A former RIT alum, he went on to work in the tech industry at companies such as GIPHY and Mozilla. He then proceeded to work in the humanitarian aid sector abroad (Jordan & UK) for organizations such as the International Rescue Committee and UNICEF. He continues to pursue his mission of technology and social good by helping lead RIT's open programs center.

{% endcapture %}

{% include two-column.html column_1=col1 column_2=col2 wrap_at=1337 %}

### Present LibreCorps Members

{% include member-grid.html members=page.present_members %}

### Past LibreCorps Members

{% include member-grid.html members=page.past_members %}

### Advisory Board

{% include mini-member-grid.html members=page.advisory_board %}
