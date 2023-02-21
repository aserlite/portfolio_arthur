let alphabet = "ABCDEFGH";
let coups = [
    {piece: "coup"},
]
let trait = true;

function create_board() {
    let board = document.getElementById("board");
    for (let i = 8; i >= 1; i--) {
        let actrow = document.createElement("tr");
        board.appendChild(actrow);
        actrow.setAttribute("id", "ligne" + i);
        for (let x = 1; x <= 8; x++) {
            let actcase = document.createElement("td");
            actrow.appendChild(actcase);
            actcase.setAttribute("id", "" + i + x);
            actcase.setAttribute("case", alphabet[x - 1] + i);
            if ((x + i) % 2 == 0) {
                actcase.setAttribute("class", "green");
            } else {
                actcase.setAttribute('class', 'white');
            }
        }
    }
    import_pieces();
}

function import_pieces() {
    let board_map = {
        11: "whiteRook",
        12: "whiteKnight",
        13: "whiteBishop",
        14: "whiteQueen",
        15: "whiteKing",
        16: "whiteBishop",
        17: "whiteKnight",
        18: "whiteRook",
        21: "whitePawn",
        22: "whitePawn",
        23: "whitePawn",
        24: "whitePawn",
        25: "whitePawn",
        26: "whitePawn",
        27: "whitePawn",
        28: "whitePawn",

        81: "blackRook",
        82: "blackKnight",
        83: "blackBishop",
        84: "blackQueen",
        85: "blackKing",
        86: "blackBishop",
        87: "blackKnight",
        88: "blackRook",
        71: "blackPawn",
        72: "blackPawn",
        73: "blackPawn",
        74: "blackPawn",
        75: "blackPawn",
        76: "blackPawn",
        77: "blackPawn",
        78: "blackPawn",
    }
    for (let key in board_map) {
        let image = document.createElement('img');
        image.setAttribute("src", "img/" + board_map[key] + ".png");
        image.setAttribute("imgplace", key);
        let actcase = document.getElementById(key);
        actcase.appendChild(image);
        let piece = board_map[key].slice(5);
        let color = board_map[key].slice(0, 5);
        actcase.setAttribute('piece', piece);
        actcase.setAttribute('PieceColor', color);
        actcase.setAttribute('pieceID', piece + "_" + color[0] + "_" + actcase.id[1]);
        actcase.setAttribute('onclick', piece + "(" + actcase.getAttribute("id") + ",'" + actcase.getAttribute("piececolor") + "')");
    }
}

create_board();

let cases = document.querySelector(".board td");

function clearSelected() {
    let selected = document.querySelectorAll(".possible");
    selected.forEach(elt => {
        elt.classList.remove("possible");
        elt.removeAttribute("onclick")
    })
}

function Rook(place, color) {
    clearSelected();
    let possible = new Array();
    let pieceId = document.getElementById(place).attributes.pieceId.nodeValue;
    place = place.toString();
    for (let i = 1; i <= 8; i++) {
        let intcase = "" + i + place[1];
        console.log(place)
        possible.push(intcase);
    }
    for (let i = 1; i <= 8; i++) {
        let intcase = "" + place[0] + i;
        console.log(place)
        possible.push(intcase);
    }

    console.log(possible);
    possible.forEach(elt => {
        let actcase = document.getElementById(elt);
        actcase.classList.add("possible")
    })
}

function Pawn(place, color) {
    if ((trait == true && color == "white") || (trait == false && color == "black")) {
    } else {
        return false
    }
    clearSelected();
    let possible = new Array();
    let portee = 2;
    let pieceId = document.getElementById(place).attributes.pieceId.nodeValue;
    for (let i = 0; i < coups.length; i++) {
        let key = Object.keys(coups[i]);
        if (key == pieceId) {
            portee = 1;
            break
        }
    }

    for (let i = 1; i <= portee; i++) {
        let id;
        if (color == "black") {
            id = place - i * 10;
            possible.push(id);
        } else if (color == "white") {
            id = place + i * 10;
            possible.push(id);
        }
    }
    possible.forEach(elt => {
        let actcase = document.getElementById(elt);
        actcase.classList.add("possible");
        let args = [
            "'" + "Pawn" + "'",
            "'" + color + "'",
            place,
            actcase.getAttribute("id"),
            "'" + pieceId + "'"
        ]
        actcase.setAttribute('onclick', "movepiece" + "(" + args + ")");
    });
}

function movepiece(piece, color, depart, arrivee, pieceid) {
    if (!check_trait(color) == true) {
        return false;
    }
    clearSelected()
    let newcase = document.getElementById(arrivee);
    newcase.setAttribute('piece', piece);
    newcase.setAttribute('piececolor', color);
    newcase.setAttribute('pieceId', pieceid);
    newcase.setAttribute('onclick', piece + "(" + arrivee + ",'" + color + "')");
    let image = document.createElement('img');
    image.setAttribute("src", "img/" + color + piece + ".png");
    image.setAttribute("imgplace", arrivee);

    newcase.appendChild(image);

    let oldcase = document.getElementById(depart);
    oldcase.removeAttribute("piece");
    oldcase.removeAttribute("piececolor");
    oldcase.removeAttribute("pieceid");
    oldcase.removeAttribute("onclick");
    let img = document.querySelector("[imgplace='" + depart + "']");
    oldcase.removeChild(img);

    let coup = {[pieceid]: depart + " -> " + arrivee};
    coups.push(coup);

}

function check_trait(color) {
    if (color == "white" && trait == true) {
        trait = false;
        return true
    } else if (color == 'black' && trait == false) {
        trait = true;
        return true;
    } else {
        return false;
    }
}

function check_position(piece,possibles,color){
    let liste_coups=new Array();
    possibles.forEach(elt=>{
        let actcase = document.getElementById(elt);

    })
}