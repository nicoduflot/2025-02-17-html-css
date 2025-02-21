function jsonToTable(data) {
    let table = '<table class="dark striped">';
    for (element of data) {
        table = table + '<tr>';
        for (key in element) {
            //console.log(key);
            if (typeof element[key] !== 'object') {
                table = table + `<td><b>${key}</b> : <br />${element[key]}</td>`;
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

function errorFetch(message) {
    return `
    <table>
        <tr>
            <td>
                <div class="alert alert-danger">
                    ${message}
                </div>
            </td>
        </tr>
    </table>
    `;
}

/**
 * permet de faire un fetch vers une ressource et de lancer la fonction de traitement directement dans l'appel de la fonction
 * @param {string} url 
 * @param {*} callbackData 
 */
function getJSon(url, callbackData) {
    fetch(url)
        .then(reponse => reponse.json())
        .then(data => {
            callbackData(data);
        }).catch(erreur => {
            console.error(erreur);
        }).finally(() => {
            console.log('fin de la transaction');
        });
}

window.addEventListener('DOMContentLoaded', function () {
    /* lire les ressources json affichage tableau */
    const readButtons = document.querySelectorAll('button.read');
    readButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const url = button.dataset.url;
            console.log(url);
            fetch(url)
                .then(function (reponse) {
                    return reponse.json();
                })
                .then(function (data) {
                    document.getElementById('result').innerHTML = searchJsonToTable(data);
                })
                .catch(function (erreur) {
                    document.getElementById('result').innerHTML = errorFetch(erreur);
                })
                .finally(function () {
                    console.log('requête api terminée');
                });
        });
    })

    /* on lance le fetch à partir de 3 caractères dans l'input */
    const searchInput = document.querySelector('input[name="search"]');
    searchInput.addEventListener('keyup', function () {
        if (searchInput.value.length > 2) {
            fetch('./bdd.php')
                .then(function (reponse) {
                    return reponse.json();
                })
                .then(function (data) {
                    document.getElementById('result').innerHTML = searchJsonToTable(data, searchInput.value);
                })
                .catch(function (erreur) {
                    document.getElementById('result').innerHTML = errorFetch(erreur);
                })
                .finally(function () {
                    console.log('requête api terminée');
                });
        }
    });

    const result = document.getElementById('result');
    result.addEventListener('click', function (event) {
        console.log(event.target.parentNode);

    });

    /* créer un élément dans le DOM */
    const buttonText = document.createElement('button');
    const textNode = this.document.createTextNode('toto');
    buttonText.append(textNode);
    this.document.getElementById('toto').append(buttonText);

    function addJson(data) {
        const affData = document.querySelector('#myJson');
        let dataText = '';
        data.forEach(element => {
            for (key in element) {
                dataText = dataText + `${key} : ${element[key]}, `;
            }
            dataText = dataText + '\n';
        });
        affData.innerText = dataText;
    }

    /*getJSon('./bdd.php', addJson);*/
});