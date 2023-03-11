document.getElementById('convert').addEventListener('submit', function(e){
    e.preventDefault();

    var distance = parseFloat(document.getElementById('distance').value);
    var answer = document.getElementById('answer');
    var conversion = (distance * 1.689344).toFixed(3);
    

    if(distance){

        
        answer.innerHTML=`<h2> ${distance} in miles converts ${conversion} kil</h2>`;

    }

    else{
        answer.innerHTML='<h2> error</h2>';

    }

});