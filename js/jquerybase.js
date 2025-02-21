/* comme en JS Vanilla, pour interagir avec la page, il faut qu'elle soit chargée */

/*
jQuery(document).ready(function(){

});

jQuery(function(){
    console.log('Le dom est prêt');
    
});
$(function(){
    console.log('Le dom est prêt');
    
});
*/
/* version simplifié qui évite les conflit avec l'alias $ */
jQuery(function($){
    /*
    $('#firstBlood').click(function(){
        console.log('On a cliqué sur le premier sang !');
    });
    */
    $('#firstBlood').on('click',function(){
        console.log('On a cliqué sur le premier sang !');
    });
    
    /* cibler tous les paragraphes sauf celui avec id="special" de la page et ajouter une action au clique */

    let cptClic = 0;
    let cptClicSpecial = 0;
    $('#reactiveCptClick').on('click', function(){
        $('p:not(.special)').on('click', function(){
            cptClic = cptClic + 1;
            console.log(`cptClic : ${cptClic}`);
        })
        
        $('p.special').on('click', function(){
            cptClicSpecial = cptClicSpecial + 1;
            console.log(`cptClicSpecial : ${cptClicSpecial}`);
        })        
    });


    $('.divLettreCercle').first().on('click', function(){
        console.log('Div A');
    });
    $('.divLettreCercle').eq(2).on('click', function(){
        console.log('Div C');
    });
    $('.divLettreCercle').last().on('click', function(){
        console.log('Div D');
    });

    /* différencier les enfants directs et les autres descendants grâce au sélecteur */
    $('p .lien').css('color', 'red');
    /* //équivalent en js vanilla
    document.querySelectorAll('p .lien').forEach(function(element){
        element.style.color = 'red';
    });
    */
    $('p > .lien').css('color', 'green');

    /* repérer le curseur de saisie dans input Nom */
    $('#nom').on('focus', function(){
        console.log('curseur dans champ Nom');
    });
    /* repérer la saisie dans input Nom */
    $('#nom').on('keyup', function(){
        console.log('on saisie dans champ Nom');
    });
    /* repérer la sortie de input Nom */
    $('#nom').on('blur', function(){
        console.log('on sort du champ Nom');
    });

    /* repérer le curseur de saisie dans le champ prénom ET la saisie dans ce même champ */
    $('#prenom').on('focus keyup', function(){
        console.log('curseur dans champ Nom et saisie');
    });
    /* selon l'événement dans l'élément, des actions différentes */
    $('#email').on(
        {
            focus: function(){
                console.log('focus sur le champ email');
            },
            keyup: function(){
                console.log('saisie dans le champ email');            
            }
        }
    );

    /* le required en jquery */
    $('#formContact').on('submit', function(e){
        if($('#nom').val() === '' || $('#email').val() === ''){
            e.preventDefault();
            console.log('nom ou email vide');            
        }
    });

    /* colorer le paragraphe avec la classe demoThis qui sera cliqué dans tous les paragraphe similaire */
    $('p.demoThis').on('click', function(){
        $(this).css('color', 'red');
        $(this).css('fontWeight', 'bold');
    });

    /* restaurer les paragraphes */
    $('p.resetColors').on('click', function(){
        $('p.demoThis').each( function(){
            $(this).css('color', 'unset');
            $(this).css('fontWeight', 'normal');
        });
    });

    $(document).on('keyup', (touche)=>{
        console.log(touche);
        const codeTouche = touche.which || touche.keyCode;
        console.log(codeTouche);
    });

    $('#clickMeVirtuel').on('click', ()=>{
        console.log('on a cliqué sur clickMeVirtuel');
    });

    $('#clickMeVirtuel').trigger('click');

    $('a.backUp').on('click', (e)=>{
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    });


    $('a.goBottom').on('click', (e)=>{
        e.preventDefault();
        /*
        $('html').scrollTop($(document).height());
        */
        $('html').animate({scrollTop: $(document).height()}, 1000);
    });

    $('#tableGenerate tbody').append('<tr><td class="cl01">Res 01</td><td class="cl02">Res 02</td></tr>');
    /*
    $('#tableGenerate tbody td').on('click', function(event){
        console.log('clic td tbody sans délégation');
        console.log(event);
    });
    const tdClick = $('#tableGenerate tbody td');
    console.log(tdClick);
    */
    $('#activeClickTdDelegue').on('click', function(){
        $('#tableGenerate tbody').on('click', 'td', function(){
            console.log($(this).text());
        });
    });

    $('#nameSpace').on('click.nom', function(){
        console.log('namespace click.nom');
    });
    
    $('#nameSpace').on('click.prenom', function(){
        console.log('namespace click.prenom');
    });

    //$('#nameSpace').trigger('click.prenom');

    $('#nspNom').on('click', function(){
        $('#nameSpace').trigger('click.nom');
    });
    
    $('#nspPrenom').on('click', function(){
        $('#nameSpace').trigger('click.prenom');
    });

    /* annuler un écouteur d'événement */
    $('#annuleCptClick').on('click', function(){
        $('p').off('click');
    });

    $('#reactiveCptClick').trigger('click');
    
    /* annuler un événement délégué */
    $('#annuleClickTdDelegue').on('click', function(){
        $('#tableGenerate tbody').off('click', 'td');
    });
    
    $('#activeClickTdDelegue').trigger('click');

});