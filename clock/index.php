<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="/assets\img\ac.png">
    <title>clock</title>
    <link rel="stylesheet" href="/clock/main.css">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
<div class="content">
    <div class="cursor"></div>
    <div class="cursor2"></div>
    <?php
    $fuseaux_json = file_get_contents('http://worldtimeapi.org/api/timezone');
    $fuseaux = json_decode($fuseaux_json, true);
    ?>
    <div class="search">
        <p id="fuseau_actuel"></p>
        <div class="choix">
            <input type="text" id="searchinput">
            <p id="parachoix"></p>
        </div>
        <ul id="searchbar">
            <?php foreach ($fuseaux as $f): ?>
                <li><a href="/clock?<?php echo $f ?>"><?php echo $f ?></a></li>
            <?php endforeach; ?>
        </ul>
    </div>
    <div class="heures">
        <div class="clock">
            <div class="wrap">
                <div class="trait t0h"></div>
                <div class="trait t3h"></div>
                <div class="trait t6h"></div>
                <div class="trait t9h"></div>
                <div class="p"></div>
                <div class="hour"></div>
                <div class="min"></div>
                <div class="sec"></div>
            </div>
        </div>

        <div class="digital_clock">
            <p id="digits">
                HH:MM:SS
            </p>
        </div>
    </div>
</div>
</body>

<script src="../assets/js/main.js"></script>
<script src="/clock/main.js"></script>
</html>