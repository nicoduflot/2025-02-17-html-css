<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Formation HTML5 CSS3 - Javascript - JQUERY" />
    <title>Formation HTML5 CSS3 - Javascript - JQUERY</title>
    <!-- Partie des liens vers le CSS et les fichiers scripts js ou jquery  -->
    <link rel="stylesheet" href="./css/style.css" />
    <script src="./js/script.js"></script>
</head>

<body>
    <header>
        <div class="container">
            <h1>Formation HTML5 CSS3 - Javascript - JQUERY</h1>
        </div>
    </header>
    <nav role="navigation">
        <div class="container">
            <ul>
                <li><a href="./index.html">Introduction</a></li>
                <li><a href="./formulaire.html">Formulaire</a></li>
                <li><a href="./cssgrid.html">Grilles CSS</a></li>
                <li><a href="./jsbase.html">JS bases</a></li>
                <li><a href="./jsajax.html">JS Ajax</a></li>
                <li><a href="./jquerybase.html">JQuery bases</a></li>
                <li><a href="./jquerycss.html">JQuery CSS</a></li>
                <li><a href="./jqueryajax.html">Jquery Ajax</a></li>
            </ul>
        </div>
    </nav>
    <main class="container">
        <section>
            <article>
                <h2>Données du formulaire</h2>
                <pre>
                <?php
                var_dump($_POST);
                ?>
                </pre>
            </article>
        </section>
    </main>
    <footer>
        <div class="container">
            <p>&copy; DAWAN - Feb 2025</p>
        </div>
    </footer>
</body>

</html>