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
$app_id     = "580304";
$app_secret = "bdbfd62704653c5041cb70fdd25ead55";
$my_url     = "http://arthurcuvillon.com/musique.php";
 
session_start();
$code = $_REQUEST["code"];
 
if(empty($code)){
	$_SESSION['state'] = md5(uniqid(rand(), TRUE)); //CSRF protection
 
	$dialog_url = "https://connect.deezer.com/oauth/auth.php?app_id=".$app_id
		."&redirect_uri=".urlencode($my_url)."&perms=email,offline_access"
		."&state=". $_SESSION['state'];
 
	header("Location: ".$dialog_url);
	exit;
	}
 var_dump($code);
if($_REQUEST['state'] == $_SESSION['state']) {
	$token_url = "https://connect.deezer.com/oauth/access_token.php?app_id="
	.$app_id."&secret="
	.$app_secret."&code=".$code;
 
	$response  = file_get_contents($token_url);
	$params    = null;
	parse_str($response, $params);
	$api_url   = "https://api.deezer.com/user/me?access_token="
			.$params['access_token'];
 
	$user = json_decode(file_get_contents($api_url));
	echo("Hello " . $user->name);
}else{
	echo("The state does not match. You may be a victim of CSRF.");
}
?>

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


