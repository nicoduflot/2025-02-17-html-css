window.addEventListener('DOMContentLoaded', function(){
    /* Écrire le script a exécuter après le chargement de la page */
    /* js de gestion lecteur audio */
    /*const play = document.querySelector('#playAudio');*/
    const play = document.getElementById('playAudio');
    const pause = document.getElementById('plauseAudio');
    /*console.log(play, pause.dataset);*/
    play.addEventListener('click', function(){
        document.getElementById(play.dataset.target).play();
    });
    pause.addEventListener('click', function(){
        document.getElementById(pause.dataset.target).pause();
    });

    const formSub = document.querySelector('form#coordonnees button[type="submit');
});