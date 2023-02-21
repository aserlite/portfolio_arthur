let heure;
let searchbar = document.getElementById('searchinput');
let searchlist = document.getElementById('searchbar');
let parachoix = document.getElementById('parachoix');
let fuseau_actuel = document.getElementById('fuseau_actuel');
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let digital = document.getElementById('digits');
searchbar.addEventListener("focus", function () {
    searchlist.classList.add('visible');
    parachoix.innerHTML = 'Close';
})
parachoix.addEventListener("click", function () {
    searchlist.classList.remove('visible');
    parachoix.innerHTML = '';
})

function get_time() {
    let url = 'https://worldtimeapi.org/api/timezone/';
    let get_url = window.location.href;
    let tmp;
    if (get_url.includes("?")) {
        tmp = get_url.substring(get_url.indexOf('?') + 1);
    } else {
        tmp = "Europe/Paris";
    }
    url = url + tmp;
    fuseau_actuel.innerHTML="Fuseau actuel : " + tmp;
    fetch(url)
        .then((response) => response.json())
        .then((data) => set_clock(data));
}

function clock_render(h) {
    digital.innerHTML = h.hour + ":" + h.min + ":" + h.sec;
    h = {
        hour:parseInt(h.hour),
        min:parseInt(h.min),
        sec:parseInt(h.sec),
    }
    const transform = {
        hour: (h.hour+(h.min*100/60)*0.01)* 360 / 12,
        min: (h.min+(h.sec*100/60)*0.01) * 360 / 60,
        sec: h.sec * 360 / 60,
    }

    hour.style.transform = ('rotate(' + transform.hour + 'deg)');
    min.style.transform = ('rotate(' + transform.min + 'deg)');
    sec.style.transform = ('rotate(' + transform.sec + 'deg)');
}

function set_clock(json) {
    heure = json.datetime;
    heure = heure.slice(11, 19);
    heure = {
        hour: heure.slice(0, 2),
        min: heure.slice(3, 5),
        sec: heure.slice(6, 8),
    }
    clock_render(heure);
}

get_time()

function update_clock() {
    if (heure.sec < 59) {
        heure.sec++;
    } else if (heure.sec >= 59 && heure.min < 59) {
        heure.sec = 0;
        heure.min++;
    } else if (heure.sec >= 59 && heure.min >= 59 && heure.hour < 24) {
        heure.sec = 0;
        heure.min = 0;
        heure.hour++;
    } else if (heure.sec >= 59 && heure.min >= 59 && heure.hour>=24){
        heure.sec = 0;
        heure.min = 0;
        heure.hour = 0;
    }

    heure={
        hour:checkN(heure.hour),
        min:checkN(heure.min),
        sec:checkN(heure.sec),
    }
    clock_render(heure);
}
function checkN(n) {
    n = n.toString();
    if (n.length < 2) {
        return "0" + n;
    }
    return n;
}

searchbar.addEventListener("keypress", function () {
    let input, filter, ul, li, a, i, txtValue;
    filter = searchbar.value.toUpperCase();
    ul = document.getElementById("searchbar");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
})


setInterval(update_clock, 1000);