let board = document.getElementById('board');
let score = document.getElementById('score');
let j1 = "x";
let j2 = "o";
let trait = j1;
let nb_cases = 9;
let wins = {
    x: 0,
    o: 0,
}

function gen_board() {
    board.innerHTML = null;
    let cmp = 1;
    let lin = 1;
    for (let i = 1; i <= nb_cases; i++) {
        let actcase = document.createElement("div");
        board.append(actcase);
        actcase.setAttribute('id', "case" + i);
        actcase.setAttribute('onclick', "play(" + i + ")");
        actcase.setAttribute('col', cmp);
        actcase.setAttribute('lin', lin);
        if (i == 1 || i == 5 || i == 9) {
            actcase.setAttribute('diag1', "1");
        }
        if (i == 3 || i == 5 || i == 7) {
            actcase.setAttribute("diag2", "1");
        }
        cmp++
        if (cmp >= 4) {
            cmp = 1;
            lin++;
        }
    }
}

function play(actcase) {
    actcase = document.getElementById("case" + actcase);
    actcase.innerHTML = trait;
    if (check_win() == true) {
        wins[trait]++;
        score.innerHTML = "X : " + wins.x + " | o : " + wins.o;
        gen_board();
    }
    if (trait == j1) {
        trait = j2;
    } else {
        trait = j1;
    }
    actcase.removeAttribute("onclick");
}

function check_win() {
    let diag1 = document.querySelectorAll('[diag1="1"]');
    diag1 = get_content(diag1);
    diag1 = equaltab(diag1)
    if (diag1 == true) {
        return true
    }
    let diag2 = document.querySelectorAll('[diag2="1"]');
    diag2 = get_content(diag2);
    diag2 = equaltab(diag2)
    if (diag2 == true) {
        return true
    }
    for (let i = 1; i <= 3; i++) {
        let tmp = '"' + i.toString() + '"'
        let actl = document.querySelectorAll('[lin=' + tmp + '  ]');
        actl = get_content(actl);
        if (equaltab(actl) == true) {
            return true
        }
    }
    for (let i = 1; i <= 3; i++) {
        let tmp = '"' + i.toString() + '"'
        let actc = document.querySelectorAll('[col=' + tmp + '  ]');
        actc = get_content(actc);
        if (equaltab(actc) == true) {
            return true
        }
    }
}

function get_content(tab) {
    let response = new Array();
    tab.forEach(elt => {
        response.push(elt.innerHTML);
    })
    return response
}

function equaltab(array) {
    var first = array[0];
    if (first) {
        return array.every(function (element) {
            return element === first;
        });
    }
    return false
}

function sleep(m) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < m);
}

gen_board()