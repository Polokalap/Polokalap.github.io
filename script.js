let infotext = false;

const body = document.querySelector('.meno');
const infotextcss = document.querySelector('.info');

function meow() {
    document.getElementById('meow').innerHTML = "🧶 meow"

    document.getElementById('homokozo').innerHTML = "🤖 homokozó"

    document.getElementById('js').innerHTML = "js:"
}

function polokalap() {
    window.open('about/index.html');
}

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

function mode() {
    css(body, {
        'background-color': '#c4c4c4',
        'color': '#000000'
    });
}