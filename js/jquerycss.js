jQuery(function ($) {
    $('#getPropValue').on('click', function () {
        $('#resGetPropValue').html($('#getPropValue').css('color'));
        /*
        $('p').html("<b>toto</b>");
        équivalent
        document.querySelectorAll('p').forEach(function(element){
            element.innerHTML = '<b>toto</b>';
        });
        */
    });

    $('#setPropValueRed').on('click', function () {
        $('#resSetPropValue').css('color', 'red');
    });

    $('#setPropValueBlack').on('click', function () {
        $('#resSetPropValue').css('color', 'black');
    });

    /* animation transformation de bloc */
    $('#animation01').on('click', function () {
        /* bloc swing */
        $('#blocAnimate01').animate({
            /* propriété(s) css a changer */
            width: '250px',
            fontSize: '1.5rem'
        },
            /* vitesse */
            'slow',
            /* type d'animation */
            'swing',
            () => {
                console.log('animation bloc swing terminée');

            }
        );

        /* bloc linear */
        $('#blocAnimate02').animate({
            /* propriété(s) css a changer */
            width: '250px',
            fontSize: '1.5rem'
        },
            /* vitesse */
            'slow',
            /* type d'animation */
            'linear',
            () => {
                console.log('animation bloc linear terminée');

            }
        );
    });

    /* animation proiétés show, hide et toggle */
    $('#show01').on('click', function(){
        $('#threeStates').animate({width: 'show'})
    });

    $('#hide01').on('click', function(){
        $('#threeStates').animate({width: 'hide'})
    });

    $('#toggle01').on('click', function(){
        $('#threeStates').animate({width: 'toggle'})
    });

});