let infotext = false;

function meow() {
    document.getElementById('meow').innerHTML = "🧶 meow"

    document.getElementById('js-teszt').innerHTML = "🤖 js teszt"

    document.getElementById('js').innerHTML = "js:"
}

function polokalap() {
    console.log("Akarsz több infot.");
    if (infotext == false) {
        document.getElementById('informacio').innerHTML = "Polokalap vagyok, azaz Varga Dávid. Nagyan rosz vagyok jsben, bocsi emiatt a rosz megoldás miatt, de most ezt tudtam csak. Diák vagyok, és nagyon szeretem a macskákat. Hobbim a programozás. Nagyon szeretek sorozatokat nézni, (Murder Drones, Internecion Cube) és ja am kicsit értelmetlen az életem =D. Kedvenc játékaim a Portal, Portal 2, és a Minecraft. 2024 07 25 -én kileakeltünk egy Minecraft Plugint ami privát volt. Ránéztem a kódra, és kb az első reakcióm az volt, hogy ezt 10 perc alatt megírom jobbra. Aztán elkezdtem pluginírást tanulni. Egyes embereknek nem tetszik, hogy a kotlint preferálom, de ez engem nem nagyon érdekel, miven ez csak <i>preferencia</i>. Amúgy ha tudsz nekem jsben segítani akkor írj egy emailt xD Polokalap@autizm.us. Mesélek egy kicsit az életemről idk. 2 Macskával élek, mind a 2 nagyon aranyos. Most egy infos suliba felvettek, és remélem csinálunk valami érdekeset xd Eredetileg egy Murder Drones V Cat Plüssöt akartam venni, és ezért kezdtem el írni plugint, aztán rájöttem, hogy nem tudok semmit, úgyhogy ez már csak egy hobbi. A modrinthomon fent van am minden, nézd meg ha akarod xD";
        infotext = true;
    }
    else {
        document.getElementById('informacio').innerHTML = "";
        infotext = false;
    }
}