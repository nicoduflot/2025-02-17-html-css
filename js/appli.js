function jsonToTable(data) {
    let table = '<table class="table table-dark table-striped">';
    for (element of data) {
        table = table + '<tr>';
        for (key in element) {
            //console.log(key);
            if (typeof element[key] !== 'object') {
                table = table + `<td datat-${key}="${element[key]}"><b>${key}</b> : <br />${element[key]}</td>`;
            } else {
                const subElement = element[key];
                table = table + `<td><b>${key}</b><br/>`;
                for (subKey in subElement) {
                    if (typeof subElement[subKey] !== 'object') {
                        table = table + `<b>${subKey}</b> : ${subElement[subKey]}</br>`;
                    }
                }
                table = table + '</td>';
            }
        }
        table = table + '</tr>';
    }
    table = table + '</table>';
    return table;
}

jQuery( function($){
    $.ajax({
        url: './bdd.php',
        type: 'GET',
        dataType: 'json'
    })
    .done(function(data){
        $('#resultats').html(jsonToTable(data));
    })
    .fail(function(erreur){
        console.log('erreur', erreur);
        
        $('#resultats').html(erreur.responseText);
    })
    .always(function(){
        console.log('Requête vers la source terminée');
    });
    

});