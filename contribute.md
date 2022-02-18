---
layout: base
banner: /assets/images/banners/contribute.webp

breadcrumbs:
- name: Contribute
  path: /contribute/

links:
- name: Time
  image: /assets/images/pages/about/tenure.webp
---

{% capture timecard %}
As an open organization that serves students and faculty in a new and growing space in academia, Open@RIT would love to have you share your input with our team, faculty, and students. There are any number of ways to do this including, but not limited to…

**Come to campus as a speaker** (or join us virtually). Discuss a special topic, propose a panel or join us for an Open@RIT meeting to talk to faculty and staff.

**Provide a guest lecture** in a class in your field on how Open works in your area of expertise.

**Chat with our [LibreCorps][] team**
Talk to them about how SE, UI/UX, documentation, community management or anything else works in your Open Work or Organization.

**Or anything else you think we’ve missed!**

[LibreCorps]: https://opensource-connect.ieee.org/openrit/channels/town-square
{% endcapture %}

{% capture talentcard %}

Want to become a contributor to [Mystic][]? Here’s [our repo][].
It’s hosted on [IEEE SA Open][] and is built around [GrimoireLab][], both great FOSS community projects that could use all kinds of contributors.

Perhaps you know of an Open faculty project and want an introduction to the professor? We’re always happy to help. *We’ll begin publishing a director of Open projects by members of Open@RIT in mid 2022, so check back once in a while or add yourself to our [email list][].*

[Mystic]: https://opensource.com/article/21/9/openrit-mystic
[our repo]: https://opensource.ieee.org/rit/mystic
[IEEE SA Open]: https://standards.ieee.org/initiatives/opensource/
[GrimoireLab]: https://chaoss.github.io/grimoirelab/
[email list]: https://groups.google.com/g/openrit
{% endcapture %}

{% capture treasurecard %}
By working with faculty who are new to Open Worrk, and teaching and training students in the Open Source Way, we're helping to build a more open generation of talent.  Whether it's ten dollars or ten figures, we'd love your contribution to keep our work going.

Just hit the button below.

<a href="http://www.rit.edu/giving/OPENatRIT"><button class="big"> Donate </button></a>
{% endcapture %}

{% include card-tiles.html alt_style=true disable_linking=true big_titles=true
	card1_title = "Time"
	card1_content = timecard
	card1_img = "/assets/images/pages/contribute/time.webp"

	card2_title = "Talent"
	card2_content = talentcard
	card2_img = "/assets/images/pages/contribute/talent.webp"

	card3_title = "Treasure"
	card3_content = treasurecard
	card3_img = "/assets/images/pages/contribute/treasure.webp"
%}
