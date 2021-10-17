# Grayscale CSS

> CSS For Minimalists

Grayscale is a tiny-dynamic-classless css stylesheet designed for rapid prototyping. Use AS-IS or... 

**CHANGE A SINGLE COLOR** and **REDEFINE YOUR ENTIRE THEME**, complete with *light* and *dark* modes.

It *may* be `classless`, but it *oozes* with an [extendable](src/extras) style that just rocks!! 

All in **2kb gzipped!**

### Features

- Tiny, 2kb
- Classless 
- Dynamic, 15 Custom CSS Vars
- Pure CSS Theme Generation
- Includes Light and Dark Themes

> WARNING: ever-green browsers need only apply ;)


## Check it Out

- [Theme Builder](https://n2geoff.github.io/grayscale/theme/)
- [Documentation](https://n2geoff.github.io/grayscale)

While **Grayscale CSS** can generate a dynamic theme based on A SINGLE COLOR, it defaults to a beautiful theme is based on `steelblue` , and of course that comes in both `light` and `dark` variants

---

<div style="display: flex">
  <img src="https://n2geoff.github.io/grayscale/img/steelblue-dark.png" width="400">
  <img src="https://n2geoff.github.io/grayscale/img/steelblue-light.png" width="400">
</div>

---

Add `data-theme="dark"` to the `html` tag for a taste of the dark side


## LICENSE

- [MIT](LICENSE)


## TODO

While many of the core ideas are here to keep it as small as possible, there are plenty of tweaks and extras to build to hit that perfect sweat spot

- some theme colors need sat/light `clamp`ed so colors dont clobber eachother

- theme designs for normally uncustomizable parts:checkbox, radio button, range sliders ect...

- Im a fan of `details` & `summary`, needs to be included

- toggleable accent color (defaults to theme)

- documentation around how various layout and designs can be created with just regualar html tags; like `main` , `article`, `section`, or the absence of them
