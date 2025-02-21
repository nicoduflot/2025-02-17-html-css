function searchJsonToTable(data, term = '') {
    let table = '<table class="dark striped">';
    let line = '';
    let termFound = (term === '') ? true : false;
    for (element of data) {
        line + '<tr>';
        for (key in element) {
            //console.log(key);
            if (typeof element[key] !== 'object') {
                line = line + `<td><b>${key}</b> : <br />`;
                if ((element[key].toString().toLocaleLowerCase().indexOf(term) >= 0) && term !== '') {
                    termFound = true;
                    line = line + '<mark>';
                }
                line = line + `${element[key]}`;
                if ((element[key].toString().toLocaleLowerCase().indexOf(term) >= 0) && term !== '') {
                    line = line + '</mark>';
                }
                line = line + '</td>';
            } else {
                const subElement = element[key];
                line = line + `<td><b>${key}</b><br/>`;
                for (subKey in subElement) {
                    if (typeof subElement[subKey] !== 'object') {
                        line = line + `<b>${subKey}</b> : </br>`;
                        if ((subElement[subKey].toString().toLocaleLowerCase().indexOf(term) >= 0) && term !== '') {
                            termFound = true;
                            line = line + '<mark>';
                        }
                        line = line + `${subElement[subKey]}`;
                        if ((subElement[subKey].toString().toLocaleLowerCase().indexOf(term) >= 0) && term !== '') {
                            line = line + '</mark>';
                        }
                        line = line + `<br />`;
                    }
                }
                line = line + '</td>';
            }
        }
        line = line + '</tr>';
        if (termFound) {
            table = table + line;
            termFound = false;
        }
        line = '';
        termFound = (term === '') ? true : false;
    }
    table = table + '</table>';
    return table;
}

jQuery( function($){
    $('#showAllPosts').on('click', function(){
        /* utilisation de $.ajax() */
        $.ajax({
            /* la clef url indique l'adresse de la ressource de données */
            url: './bdd.php',
            /* type : indique si on récupère 'GET' ou envoie 'POST' des données à la source */
            type: 'GET',
            /* dataType : sous quelle forme on récupère ou envoie les données de la source */
            dataType: 'json'
        })
        .done(function(data){
            /*console.log('connexion établie, réception des données');*/
            /*console.log(data);*/
            $('#allPosts').html(searchJsonToTable(data));
        })
        .fail(function(erreur){
            console.log('erreur', erreur);
            
            $('#allPosts').html(erreur.responseText);
        })
        .always(function(){
            console.log('Requête vers la source terminée');
        });
    });
    
    $('#showARSS').on('click', function(){
        console.log('clic rss');
        $.ajax({
            url: 'https://rss.nytimes.com/services/xml/rss/nyt/Books/Review.xml',
            dataType: 'html',
            type: 'GET',
            success: function(data){
                /*
                console.log('connexion établie, réception des données');
                */
                $('#RSS').text(data);
            }
        })
        .fail(function(erreur){
            $('#RSS').html('Problème avec le flux RSS');
        })
        .always(function(){
            console.log('Requête vers la source terminée');
        });
    });

    /* utilisation de .get() */
    $('#showAllUsers').on('click', function(){
        $.get(
            './ressources/users.json',
            'json',
            function(data){
                $('#allUsers').html(searchJsonToTable(data));
            }
        )
        .fail(function(erreur){
            $('#allUsers').html(erreur.responseText);
        })
        .always(function(){
            console.log('reuête terminée');
        });
    });

    $('#getRss').on('click', function(){
        $.get(
            'https://rss.nytimes.com/services/xml/rss/nyt/Books/Review.xml',
            function(data){
                $('#showRss').text(data);
            },
            'html',
        )
        .fail(function(erreur){
            $('#showRss').html(erreur.responseText);
        })
        .always(function(){
            console.log('reuête terminée');
        });
    });


});