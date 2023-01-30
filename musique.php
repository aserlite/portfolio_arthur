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
<body class="music_body">
<div class="cursor"></div>
    <div class="cursor2"></div>
    <div class='music_header'>
        <h1>Mes musiques préférées du moment</h1>
        <p>Données récupérées via mon api deezer</p>
        <a href="index.php">Retourner a l'accueil</a>
    </div>
    <div class="music_list">
<?php
$music_list = file_get_contents('https://api.deezer.com/user/3928705522/charts');
$music_list = json_decode($music_list, true);
$music_list = $music_list['data'];
foreach ($music_list as $music): ?>
<div class="music">
    <img src="<?php echo $music['album']['cover_medium']; ?>" />
    <div class="text">
        <p class='title'><?php echo mb_strimwidth($music['title'], 0, 25, "..."); ?></p>
        <p class='name_author'><?php echo mb_strimwidth($music['artist']['name'], 0, 25, "..."); ?></p>
    </div>
    <figure>
    <audio controls src="<?php echo $music['preview']; ?>">

            <a href="<?php echo $music['preview']; ?>">
                Download audio
            </a>
    </audio>
    </figure>

</div>


<?php endforeach;
?>
</div>
</body>
<script src="assets\js\main.js"></script>
</html>


