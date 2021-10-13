///////////////////////////////////////////////
// Tweak Example Settings
///////////////////////////////////////////////

const $ = document.querySelector.bind(document);

function HEXToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function RGBToHSL(r,g,b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta == 0)
        h = 0;
    // Red is max
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(0);
    l = +(l * 100).toFixed(0);

    return {
        h,s,l
    };
}

function update() {
    const form = $('#settings');

    const rgb = HEXToRGB(form.elements['theme'].value);
    const hsl = RGBToHSL(rgb.r, rgb.g, rgb.b);

    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --theme-h: ${hsl.h};
            --theme-s: ${hsl.s}%;
            --theme-l: ${hsl.l}%;
            --font-family: ${form.elements['font'].value};
            --font-size: ${form.elements['size'].value}px;
            --spacing: ${form.elements['spacing'].value}rem;
            --line-height: ${form.elements['line'].value};
            --border-radius: ${form.elements['radius'].value}rem;
        }
    `;

    $('head').appendChild(style);
}

$('input[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();

    alert('Nothing Here Yet!');
});

$('#mode').addEventListener('click', () => {
    const attr = $('html').getAttribute('data-theme');

    if(attr && attr === 'dark') {
        $('html').setAttribute('data-theme', 'light');
    } else {
        $('html').setAttribute('data-theme', 'dark');
    }
});

$('#radius').addEventListener('click', update);
$('#font').addEventListener('click', update);
$('#size').addEventListener('click', update);
$('#spacing').addEventListener('click', update);
$('#line').addEventListener('click', update);
$('#theme').addEventListener('change', update);
