# Minecraft Portfolio

A simple, editable portfolio website for your Minecraft builds.

## How to view it

Just double-click `index.html` (or open it in any browser). No install needed.

## How to add your own builds

1. Drop your screenshots into the `images/builds/` folder
2. Open `index.html` in a text editor (Notepad works)
3. Find the `<!-- HOW TO ADD A BUILD -->` comment in the Gallery section
4. Copy one of the `<figure>` blocks, paste it at the end of the list, and edit it:

```html
<figure class="build" data-category="house">
  <img src="images/builds/your-image.png" alt="My house">
  <figcaption>My House - Description of the build</figcaption>
</figure>
```

- `src` = the name of your image file
- `data-category` = which filter it shows under (`house`, `castle`, `landscape`, or `redstone`)
- `figcaption` = the title/description shown under the image

## What to edit in index.html

| What | Where |
|------|-------|
| Your name | Hero section, `About Me`, and the navbar logo |
| Gallery images | Gallery section (see above) |
| Experience | `Experience` list in the About section |
| Stats (years, projects) | `About Me` section, the `<li>` items |
| Contact links | Contact section (Discord, email, Planet Minecraft) |
| Page title | `<title>` tag at the top of the file |

## Colors & style

All colors are defined at the top of `css/style.css` under `:root` - change any of them to re-theme the whole site.

## Structure

```
mc-portfolio/
  index.html          <- the whole page (edit this)
  css/style.css       <- colors and layout
  js/main.js          <- gallery filters + lightbox
  images/builds/      <- put your screenshots here
```