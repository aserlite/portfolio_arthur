<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="assets\img\ac.png">
    <link rel="stylesheet" href="assets\css\style.css">

    <!-- Primary Meta Tags -->
    <title>Portfolio Arthur CUVILLON</title>
    <meta name="title" content="Portfolio Arthur CUVILLON">
    <meta name="description" content="Portfolio d'Arthur CUVILLON">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://arthurcuvillon.com/">
    <meta property="og:title" content="Portfolio Arthur CUVILLON">
    <meta property="og:description" content="Portfolio d'Arthur CUVILLON">
    <meta property="og:image" content="https://arthurcuvillon.com/assets/img/MazdaVimy.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://arthurcuvillon.com/">
    <meta property="twitter:title" content="Portfolio Arthur CUVILLON">
    <meta property="twitter:description" content="Portfolio d'Arthur CUVILLON">
    <meta property="twitter:image" content="https://arthurcuvillon.com/assets/img/MazdaVimy.jpg">
</head>
<body >
    <div class="cursor"></div>
    <div class="cursor2"></div>
    <header>
      <img src="assets\trait.svg" class="svg"/>
        <div class="accButton">Arthur CUVILLON</div>    
        <div class="menu">
            <a class="Macc" href="index.php">Accueil</a>
            <a class="Mprojets" id="active" href="projects.php">Mes projets</a>
            <a class="Mcontact" href="contact.php">Contacts</a>
        </div>
        <div class="logos_contacts">
            <a href="https://github.com/aserlite" target="_blank"><img src="assets\img\github.png" alt="Github"></a>
            <a href="https://www.linkedin.com/in/arthur-cuvillon/" target="_blank"><img src="assets\img\linkedin.png" alt="Linkedin"></a>
        </div>
    </header>
    <div class="selectBtn">
        <ul class="ks-cboxtags">
          <li><input onclick="web()" type="checkbox" id="checkboxOne" value="Web" checked><label for="checkboxOne">Web</label></li>
          <li><input onclick="infographie()" type="checkbox" id="checkboxTwo" value="Infographie" ><label for="checkboxTwo">Infographie</label></li>
          <li><input onclick="photo()" type="checkbox" id="checkboxThree" value="Photo"><label for="checkboxThree">Photo</label></li>
          <li><input onclick="com()" type="checkbox" id="checkboxFour" value="Photo"><label for="checkboxFour">Communication</label></li>
        </ul>
      </div>

    <ul class="cards" id="cards">

      </ul>
</body>
<script type="text/javascript" src="assets\projects.js"></script>
<script src="assets\js\main.js"></script>

</html>