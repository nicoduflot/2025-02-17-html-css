function jsonToTable(data) {
    let firstPass = true;
    let table = '<table class="table table-dark table-striped">';
    let header = '<thead><tr>';
    let line = '';
    for (element of data) {
        line = line + '<tr>';
        for (key in element) {
            //console.log(key);
            if (typeof element[key] !== 'object') {
                line = line + `<td data-${key}="${element[key]}">${element[key]}</td>`;
                if(firstPass){
                    header = header + `<th>${key}</th>`;
                }
            } else {
                const subElement = element[key];
                for (subKey in subElement) {
                    if (typeof subElement[subKey] !== 'object') {
                        line = line + `<b>${subKey}</b> : ${subElement[subKey]}</br>`;
                    }
                }
                line = line + '</td>';
                if(firstPass){
                    header = header + `<th>${key}</th>`;
                }
            }
        }
        line = line + '</tr>';
        header = header + '</tr></thead><tbody>'
        if(firstPass){
            table = table + header;
            firstPass = false;    
        }
        table = table + line;
        line = '';
    }
    table = table + '</tbody></table>';
    return table;
}

function callBddAjax(path){
    $.ajax({
        url: path,
        type: 'GET',
        dataType: 'json'
    })
    .done(function(data){
        $('#resultats').html('');
        $('#resultats').append('<button class="btn btn-small btn-secondary mb-3" id="resetTable">Tous les résultats</button>');
        $('#resultats').append(jsonToTable(data));
        $('#resultats').append('<button class="btn btn-small btn-secondary" id="resetTable">Tous les résultats</button>');
    })
    .fail(function(erreur){
        console.log('erreur', erreur);
        $('#resultats').html(erreur.responseText);
    })
    .always(function(){
        console.log('Requête vers la source terminée');
    });
}

jQuery( function($){
    /* récupérer les données complètes */
    callBddAjax('./bdd.php');
    $('#resultats').on('click', 'tbody tr', function(event){
        /* cliquer sur une ligne et afficher la ligne sélectionnée */
        const dataLine = event.currentTarget.children;
        event.stopImmediatePropagation();
        for(element of dataLine){
            if(element.dataset.id){
                console.log(element.dataset.id);
                url = `./bdd.php?id=${element.dataset.id}`;
                callBddAjax(url);
            }
        }
    }).on('click', 'button#resetTable', function(event){
        /* réafficher les données complètes */
        event.stopImmediatePropagation();
        $('#resultats').html('');
        callBddAjax('./bdd.php');
    });

    $('#searchGames').on('click', function(){
        console.log($('#recherche input'));
        let url = './bdd.php?'
        let cpt = 1;
        for(element of $('#recherche input')){
            if(element.value !== ''){
                url = url + `${element.name}=${element.value}`;
                url = url + '&';
            }
            cpt = cpt + 1;
        }
        url = url.slice(0, -1);
        console.log(url);
        callBddAjax(url);
    });

});