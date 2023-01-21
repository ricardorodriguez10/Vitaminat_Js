// alert("Estamos adaptados para atenderle de manera presencial con la máxima seguridad. Además seguimos prestando servicio on-line. No dude ponerse en contacto con nosotros");


// contar numero de caracteres
// var comentarios = prompt ("pon lo que quieras");
// var cuentacomentarios = comentarios.length;
// alert("has escrito " + cuentacomentarios  + "caracteres, tienes " + (140 - cuentacomentarios) + "caracteres restantes")



// submit.onclick = function calculoIMC(peso, altura) {
//   console.log('ddd')
//   var imc = peso/(altura*altura)

//     if (imc <18.5)
//     alert("Tú IMC es de " + imc + " estás bajo peso")
//     if (imc >18.5 && imc <= 24.9) {}
//     alert("Tú IMC es de " + imc + " estás en tu peso ideal")
//     if (imc >24.9)
//     alert("Tú IMC es de " + imc + " estás en sobrepeso u obesidad")
//   return imc;
// }

// Formula de IMC

var submit = document.querySelector("#submitImc");

submit.addEventListener('click', function() {
  var weightInput = Number(document.querySelector("#weight").value)
  var heightInput = Number(document.querySelector("#height").value)

  var imc = weightInput / (heightInput * heightInput);
  var imctofixed = imc.toFixed(1)

  if (imctofixed <18.5) {
    alert(`Tú IMC es de ${imctofixed}, estás bajo peso`)
    return
  }
  if(imctofixed >18.5 && imctofixed <= 24.9) {
    alert(`Tú IMC es de ${imctofixed}, estás en tu peso ideal`)
    return
  }
  else  {
    alert(`Tú IMC es de ${imctofixed}, estás en sobrepeso u obesidad`)
    return
  }
})

console.log(submit)




var mensaje = document.querySelector("#mensaje1");
var contador = document.querySelector("#contador1");

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});


// dietometro

var dietometro = document.querySelector("#submitDietometro")

dietometro.addEventListener ('click', function () {
var notaInput = Number(document.querySelector ("#nota").value)


if(notaInput <5) {
  alert (`Tú fuerza de voluntad de ${notaInput}, puede mejorar`)
  return
}

if( notaInput >6 && dietometro <=8) {
  alert (`Si te lo propones con tu fuerza de voluntad de ${notaInput}, podrías lograr el reto`)
  return
}

else {
  alert (`Es increible tu fuerza de voluntad de ${notaInput}, inscríbete al reto, seguro que lo logras!`)
  return
}

})

// cambiar de color imagen

var asesorNutricionalBox = document.querySelectorAll(".gym").length;

for (var i=0; i<asesorNutricionalBox; i++) {

document.querySelectorAll(".gym")[i].addEventListener("click", function() {


});

}

// GOALS

const text = document.getElementById ("text");
input = document.getElementById ("send");
const list = document.querySelector (".list");

input.addEventListener("click", (event) => {
  const li = document.createElement ("li");
  const createBtn = document.createElement("button");

  if(text.value === "") {
alert ("Put your goal");
  } else {
    createBtn.innerHTML = ""
  const newList = list.appendChild(li);
  newList.append(text.value);
}

  text.value = "";

});

list.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0]==="trash") {
    const completeList = item.parentElement;
    completeList.remove();
  }
});


const deleteBtn = document.querySelector(".deleteAll");
deleteBtn.addEventListener("click", () => {
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
})
