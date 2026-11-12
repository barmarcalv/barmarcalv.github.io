---
title: 'Edit Check & Suggestion Mode'
tagline: 'Helping newcomers make an edit that survives'
org: 'Wikimedia Foundation'
role: 'Senior Product Designer'
years: '2025 — present'
order: 2
summary: 'Edit Check and Suggestion Mode work on guiding new contributors on first edits and giving editors a way to improve their edits before publishing.'
cover: '/img/work/edit-check.webp'
coverAlt: 'The Wikipedia VisualEditor with an Edit Check prompt asking whether pasted content was written by the editor, and the mobile add-a-citation flow'
caseFacts:
  - label: 'Role'
    value: 'Senior Product Designer, Editing team'
  - label: 'Team'
    value: 'TODO — designers, engineers, research, community liaisons'
  - label: 'Surfaces'
    value: 'VisualEditor, desktop and mobile web'
  - label: 'Reach'
    value: 'TODO — wikis and languages it runs on today'
links:
  - label: 'Edit Check'
    href: 'https://www.mediawiki.org/wiki/Help:Edit_check'
  - label: 'Suggestion Mode'
    href: 'https://www.mediawiki.org/wiki/VisualEditor/Suggestion_Mode'
---

### The problem

Someone reads a Wikipedia article, spots something missing, and adds a paragraph. It gets reverted. They never come back.

That is the ordinary way a new contributor is lost, and it is rarely about bad intent. The rules that decide whether an edit survives — cite your source, keep a neutral tone, don't paste someone else's words — are written down, but they live in policy pages nobody reads before their first edit. The editor finds out they broke one after the fact, from a stranger undoing their work.

The team's framing was to move that feedback earlier: say it while the edit is being written, when it still costs nothing to fix.

### What we already knew

The baseline was measured before I joined the team, and it is published:

- New content edits **with** a reference were reverted 6.2% of the time. Without one, 11.5%.
- Newcomers added a reference to 12% of their new content edits. Editors with more than 500 edits did it 26% of the time.
- Seven community conversations held between October 2022 and January 2023 with contributors in Sub-Saharan Africa, where newcomers are concentrated — 15% of the world's population, 1% of active editors.

So the gap was not motivation. It was that nobody tells you, at the moment you are typing, what this place expects.

The first check built on that — Reference Check — was A/B tested across 11 partner wikis in early 2024, on about 21,000 edits. Constructive edits that included a reference went from 19% to 42.4%. On mobile the effect was larger, 4.2×.

It also cost something, and the report says so: edit completion dropped 10% overall and 24.3% on mobile. Roughly half the people shown the check declined it.

That trade-off — more edits that survive, fewer edits finished — is the thing the later work had to deal with.

<!-- IMAGE 1: the baseline problem. A reverted newcomer edit, or the
     research slide with the revert-rate comparison. Save to
     /public/img/work/edit-check/ and uncomment.
<figure>
  <img src="/img/work/edit-check/baseline.webp" alt="TODO" />
  <figcaption>TODO</figcaption>
</figure>
-->

### What I worked on

**TODO — this is the part only you can write.** Two or three paragraphs on what you picked up when you joined in 2025 and what you decided. Concretely: which checks you designed (Paste Check, Tone Check, the multi-check flow), what Suggestion Mode is for, and what the hard calls were.

The questions worth answering here, because they are the ones the reader has:

- When several checks can fire on one edit, what does the person see? All of them, the most important one, one at a time?
- How do you interrupt someone without making them quit? Where did you land between a blocking step and a dismissible hint?
- What do you do when the check is wrong? A false positive on a volunteer's edit is worse than no check at all.
- Suggestion Mode lets someone propose a change instead of publishing it. Who is that for, and what changed in the interface once edits could be provisional?

### What we tried

**TODO — the explorations.** This is where the wireframes and prototypes go, and it is the section recruiters actually read. Three or four options you put on the table and why the others lost.

<!-- IMAGE 2: exploration. The design directions side by side, early
     frames, or the mobile flow. This one matters most — it is the only
     proof of iteration on the page.
<figure>
  <img src="/img/work/edit-check/explorations.webp" alt="TODO" />
  <figcaption>TODO — name the directions and say which one shipped.</figcaption>
</figure>
-->

### What shipped

**TODO.** Which checks are live, on how many wikis, on desktop and mobile. One screenshot of the real thing.

<!-- IMAGE 3: the shipped interface, desktop and mobile. -->

### What happened

**TODO — your beta numbers.** You have them. Say which ones are publishable and I'll write this section around them; otherwise it can point at the published Reference Check report and stop there.

The honest version includes what got worse, not only what got better. The 2024 report does that and it reads as more credible for it, not less.

### What I'd do differently

**TODO — optional, and the strongest thing on the page if you write it.** One short paragraph. The test everyone wants to see passed is whether a designer can say what they got wrong.
