# Project Template

Fill in sections below. Delete any you don't need. Add slides by duplicating entries.

---

## Meta

- **title:** Project Name
- **page-file:** project2.html
- **image-folder:** img_project/20/

---

## Overview

- **project-title:** Project Name — short tagline describing the project
- **image:** 1.jpg

### About
_(text for the About layer in overview)_

### My Role
_(text for the My Role layer)_

### Impact
_(text for the Impact layer)_

---

## Sections

Each section starts with a divider page, then has slides under it.

---

### Section: Context
- **divider-desc:** Why this matters

#### Slide: Context
- **type:** split (text left, image right)
- **title:** Context
- **text:** Your context text here with **bold** for emphasis
- **image:** 2.jpg

---

### Section: Discover Problems
- **divider-desc:** What we found

#### Slide: Insights
- **type:** split
- **label:** Insights
- **text:** Main insight text with **bold emphasis**
- **image:** 3.jpg

#### Slide: User Problems
- **type:** split
- **label:** User Problems
- **text:** Description of user problems
- **image:** 4.jpg
- **desc:** Optional small description below label

#### Slide: User Problems (2nd page)
- **type:** split
- **label:** User Problems
- **text:** More details
- **image-carousel:** 5.jpg, 6.jpg
- **carousel-autoplay:** 4000
- **desc:** Caption for carousel
- **nav-shared:** discover-user _(shares nav highlight with previous slide)_

#### Slide: Monetization Gaps
- **type:** single-col
- **label:** Gaps for Monetization
- **text:** Description of gaps
- **custom-content:** _(describe any code-built diagram here)_

---

### Section: Clarify Ambiguity
- **divider-desc:** Mapping the unknown

#### Slide: Gap of Understanding
- **type:** split
- **title:** Gap of Understanding
- **text:** What was unclear
- **custom-content:** _(describe diagram if needed)_
- **desc:** Key unknowns listed

#### Slide: Workstream
- **type:** split
- **label:** Workstream
- **text:** How you drove the work
- **image:** 7.jpg
- **desc:** Optional note

#### Slide: Key Findings
- **type:** split
- **label:** Key Findings
- **text:** What you found with **bold emphasis**
- **custom-content:** _(describe interactive diagram if needed)_

---

### Section: Shape Concepts
- **divider-desc:** Exploring directions

#### Slide: Structure
- **type:** split
- **title:** Structure
- **text:** How you shaped the direction
- **image:** 8.jpg

#### Slide: Experiences
- **type:** split
- **label:** Experiences
- **text:** Key experience change
- **custom-content:** _(describe wireframe/diagram if code-built)_

#### Slide: Placement
- **type:** split
- **label:** Placement
- **text:** Where it lives
- **image:** 9.jpg

#### Slide: Placement (2nd page)
- **type:** single-col
- **label:** Placement
- **text:** Decision made
- **custom-content:** _(comparison table, etc.)_
- **nav-shared:** shape-placement

#### Slide: Navigation
- **type:** split
- **label:** Navigation
- **text:** How users get there
- **image:** 10.jpg

---

### Section: Explored MVP
- **divider-desc:** Building the first version

#### Slide: Tasks & Sequence
- **type:** split
- **title:** Tasks & Sequence
- **text:** Task journey description
- **image:** 11.jpg

#### Slide: Layout
- **type:** split
- **label:** Layout
- **text:** Layout decisions
- **image:** 12.jpg

#### Slide: Grouping
- **type:** split
- **label:** Task Grouping
- **text:** How tasks are grouped
- **image:** 13.jpg

#### Slide: Options
- **type:** split
- **label:** Task Options
- **image:** 14.jpg

---

### Section: Launch
- **divider-desc:** Shipping to the world

#### Slide: MVP Experience
- **type:** click-swap
- **image-a:** partner.jpg
- **image-b:** mvp-1.jpg

#### Slide: Future
- **type:** click-swap
- **image-a:** partner.jpg
- **image-b:** future-1.jpg

---

### Section: Impact
- **divider-desc:** Results and reflections

#### Slide: Product
- **type:** single-col
- **label:** Product
- **text:** Achievement summary with **bold emphasis**
- **custom-content:** stats + quotes grid
- **stats:**
  - 40% — stat label
  - 7-9% — stat label
  - $43M-$107M — stat label
- **quotes:**
  - "Quote text" — Author, Title
  - "Quote text" — Author, Title
  - "Quote text" — Author, Title

#### Slide: Collaboration
- **type:** split
- **label:** Collaboration
- **text:** Collaboration impact
- **image:** 15.jpg

#### Slide: Collaboration (2nd page)
- **type:** split
- **label:** Collaboration
- **text:** Key takeaway
- **image:** 16.jpg
- **nav-shared:** impact-alignment

---

## Slide Types Reference

| Type | Description |
|------|-------------|
| **split** | Text left + image/content right (2-col) |
| **single-col** | Full-width, text on top + content below |
| **click-swap** | Two images, click to crossfade between them |
| **video** | Autoplay looping video, no background |
| **carousel** | Multiple images auto-rotating with dots |

## Field Reference

| Field | Description |
|-------|-------------|
| **title** | Large section title (used for first slide in a section) |
| **label** | Small uppercase label (content-h2, used for sub-slides) |
| **text** | Main paragraph. Use **bold** for emphasis |
| **desc** | Small description text below label |
| **image** | Single image filename |
| **image-carousel** | Comma-separated image filenames |
| **image-a / image-b** | Click-swap before/after images |
| **video** | Video filename (.mov) |
| **nav-shared** | ID of nav item this slide shares highlight with |
| **custom-content** | Describe any code-built diagram/component |
