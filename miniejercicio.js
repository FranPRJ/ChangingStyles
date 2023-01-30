function set(){

   //Guarda las opciones para cambiar el estilo en la variable
   //'elementos'. 
    let elementos = document.getElementsByName('cssProperty');
    
    //ciclo que recorre las opciones
    for (let i=0; i< elementos.length; i++){
        
        //guarda la propiedad CSS a modificar (para ello, se 
        // nombre el id correspondiente (ej, background))
        let cssProperty = elementos[i].getAttribute('id');

        //Guarda el valor de c elemento, ej: blue
        let cssValue = elementos[i].value;

        console.log(cssProperty, cssValue);

        //Se llama al div modify que tiene las propiedades
        //del cuadro azul para ser modificadas.
        let div = document.getElementById('modify');

        //la variable div modifica el estilo llamando a la
        //propiedad style e iguala la propiedad con el valor 
        //coreespondiente
        div.style[cssProperty] = cssValue;


    }

};

document.getElementById('set').addEventListener('click', set);

