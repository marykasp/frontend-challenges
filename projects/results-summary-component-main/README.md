# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./design/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS data attribute selectors
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Custom CSS variables not in `:root`. Locally scoping properties for the summary card colors. This allows the svg icons on each card to inherit the correct stroke color from the background color parent `div`.

```css
.summary-card {
  background-color: hsl(var(--item-color), 0.2);
}

.summary-card[data-item-type="accent 1"] {
  --item-color: var(--clr-accent-1);
}
```

## Author

- Website - [Mary Kasparian](https://www.marykasparian.com)
- Frontend Mentor - [@marykasp](https://www.frontendmentor.io/profile/marykasp)
