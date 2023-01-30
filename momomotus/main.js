function exec(cat,ncat) {
  let mot = cat[Math.floor(Math.random() * cat.length)];

  let menu = document.getElementById("menu");
  menu.classList.add("pula");
  let tailleMot = mot.length;
  let grille = document.getElementById("grille");
  let titre = document.getElementById("titre");
  titre.innerHTML=ncat;
  let resultats = document.getElementById("resultats");
  let essais = 5;
  function creationgrille() {
    for (let i = 0; i < essais; i++) {
      if (i == 0) {
        var tr = document.createElement("tr");
        grille.appendChild(tr);
        tr.setAttribute("id", "ligne" + i);
        for (let j = 0; j < tailleMot; j++) {
          var td = document.createElement("td");
          tr.appendChild(td);
          td.setAttribute("id", "ligne" + i + "col" + j);
          if (j == 0) {
            var tdText = document.createTextNode(mot[0]);
            td.appendChild(tdText);
          } else {
            var tdText = document.createTextNode(".");
            td.appendChild(tdText);
          }
        }
      } else {
        var tr = document.createElement("tr");
        grille.appendChild(tr);
        tr.setAttribute("id", "ligne" + i);
        for (let j = 0; j < tailleMot; j++) {
          var td = document.createElement("td");
          tr.appendChild(td);
          td.setAttribute("id", "ligne" + i + "col" + j);
          var tdText = document.createTextNode(".");
          td.appendChild(tdText);
        }
      }
    }
  }

  let actrow = 0;
  let actcol = 1;
  let fini = false;
  let inputtxt = document.getElementById("txtInput");
  inputtxt.addEventListener("keyup", function (e) {
    if (fini == false) {
      const key = e.key;
      if (
        actcol + 1 <= tailleMot &&
        key != "²" &&
        key != " " &&
        key != "Enter" &&
        key != "Backspace" &&
        key != "Meta" &&
        key != "Control" &&
        key != "Alt" &&
        key != "Shift" &&
        key != "AltGraph" &&
        key != "Tab" &&
        key != "ContextMenu" &&
        key != "CapsLock" &&
        key != "ArrowUp" &&
        key != "ArrowDown" &&
        key != "ArrowRight" &&
        key != "ArrowLeft" &&
        key != "Insert" &&
        key != "Delete" &&
        key != "End" &&
        key != "PageUp" &&
        key != "PageDown" &&
        key != "ScrollLock" &&
        key != "Pause" &&
        key != "Escape" &&
        key != "NumLock"
      ) {
        const actcase = document.getElementById(
          "ligne" + actrow + "col" + actcol
        );
        actcase.innerHTML = key;
        actcol++;
      }
      if (actcol == tailleMot && key == "Enter" && actrow < essais) {
        let test = true;
        let guess = "";
        let motb = mot;
        for (let i = 0; i < tailleMot; i++) {
          let lettre = document.getElementById(
            "ligne" + actrow + "col" + i
          ).innerHTML;
          guess = guess.concat("", lettre);
        }
        if (cat.includes(guess)) {
          for (let i = 0; i < tailleMot; i++) {
            let lettre = document.getElementById(
              "ligne" + actrow + "col" + i
            ).innerHTML;
            let caseact = document.getElementById("ligne" + actrow + "col" + i);
            if (lettre == mot[i]) {
              motb = motb.replace(lettre, "");
              caseact.classList.add("goodletter");
            } else if (motb.indexOf(lettre) !== -1) {
            } else {
              test = false;
            }
          }

          for (let i = 0; i < tailleMot; i++) {
            let lettre = document.getElementById(
              "ligne" + actrow + "col" + i
            ).innerHTML;
            let caseact = document.getElementById("ligne" + actrow + "col" + i);
            if (motb.indexOf(lettre) !== -1) {
              motb = motb.replace(lettre, "");
              test = false;
              caseact.classList.add("inletter");
            }
          }
          actrow++;
        } else {
          for (let i = 0; i < tailleMot; i++) {
            let caseact = document.getElementById("ligne" + actrow + "col" + i);
            caseact.innerHTML = ".";
          }
          test = false;
        }
        if (test == true) {
          grille.classList.add("pula");
          resultats.innerHTML += "Le mot était : " + mot + "<br/>";
          resultats.innerHTML += "Trouvé en " + actrow + " essai";
          fini = true;
        }

        if (actrow >= essais && fini == false) {
          perdu();
        }
        document.getElementById("ligne" + actrow + "col" + 0).innerHTML =
          mot[0];
        actcol = 1;
      }
      if (key == "Backspace" && actcol > 1) {
        actcol--;
        document.getElementById("ligne" + actrow + "col" + actcol).innerHTML =
          ".";
      }
    }
  });

  function perdu() {
    grille.classList.add("pula");
    resultats.innerHTML += "Le mot était : " + mot + "<br/>";
    resultats.innerHTML += "Tu n'as pas trouvé, dommage #loser";
    fini = true;
  }

  creationgrille();

  console.log(mot);
}

exec();
