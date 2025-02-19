window.addEventListener('DOMContentLoaded', function(){
    const formCoord = document.getElementById('coordonnees');
    const formSub = document.querySelector('form#coordonnees button[type="submit');
    formSub.addEventListener('click', function(event){
        let formOK = true;
        event.preventDefault();

        if(document.getElementById('nom').value === ''){
            formOK = false;
            document.getElementById('nom').classList.add('alert-danger');
            document.getElementById('info-nom').classList.add('alert-danger');
        }
        
        if(document.getElementById('email').value === ''){
            formOK = false;
            document.getElementById('email').classList.add('alert-danger');
            document.getElementById('info-email').classList.add('alert-danger');
        }

        if(formOK){
            formCoord.submit();
        }
        
    });

    /* Etat du formulaire */
    document.getElementById('nom').addEventListener('change', function(){
        if(document.getElementById('nom').value !== ''){
            document.getElementById('nom').classList.remove('alert-danger');
            document.getElementById('info-nom').classList.remove('alert-danger');
        }else{
            document.getElementById('nom').classList.add('alert-danger');
            document.getElementById('info-nom').classList.add('alert-danger');
        }
    });

    document.getElementById('nom').addEventListener('blur', function(){
        console.log('blur');
        
        if(document.getElementById('nom').value === ''){
            document.getElementById('nom').classList.add('alert-danger');
            document.getElementById('info-nom').classList.add('alert-danger');
        }
    });
    
    document.getElementById('email').addEventListener('change', function(){
        if(document.getElementById('email').value !== ''){
            document.getElementById('email').classList.remove('alert-danger');
            document.getElementById('info-email').classList.remove('alert-danger');
        }else{
            document.getElementById('email').classList.add('alert-danger');
            document.getElementById('info-email').classList.add('alert-danger');
        }
    });

    document.getElementById('email').addEventListener('blur', function(){
        console.log('blur');
        
        if(document.getElementById('email').value === ''){
            document.getElementById('email').classList.add('alert-danger');
            document.getElementById('info-email').classList.add('alert-danger');
        }
    });
    
});