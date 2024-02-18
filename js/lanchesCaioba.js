// DESAFIO

const btn_menu = document.querySelector("#menu");
const abaLateral = document.querySelector(".abaLat");
const btn_prato1 = document.querySelector("#b1");
const btn_prato2 = document.querySelector("#b2");
const btn_prato3 = document.querySelector("#b3");
const btn_prato4 = document.querySelector("#b4");

btn_menu.addEventListener("click",(evento)=>{
   abaLateral.classList.add("abaLat_exibir");
   evento.stopPropagation();
   console.log("clicou");
  }
);

abaLateral.addEventListener("click",(evento)=>{
  evento.stopPropagation()
});

window.addEventListener("click",()=>{
  abaLateral.classList.remove("abaLat_exibir");
  abaLateral.classList.add("abaLat_remover");
});

btn_prato1.addEventListener("click",(evento)=>{
   let pai = evento.target.parentNode;
   pai.removeChild(btn_prato1);

   let div = document.createElement("div");
   div.setAttribute("class","contador");

  let btn_adicona = document.createElement("button");
  btn_adicona.setAttribute("class","cont_adiciona");
  btn_adicona.innerHTML = "+";

  let btn_retira = document.createElement("button");
  btn_retira.setAttribute("class","cont_retira");
  btn_retira.innerHTML = "-";

  let num_cont = document.createElement("span");
  num_cont.setAttribute("class", "num_cont");
  num_cont.value = 1;
  let numero = num_cont.value;
  num_cont.innerHTML = numero;

  btn_adicona.addEventListener("click",()=>{
     numero++;
     num_cont.innerHTML = numero;
  });

  btn_retira.addEventListener("click",()=>{
    numero--
    num_cont.innerHTML = numero;
   if(numero == 0){
    pai.removeChild(div);
    pai.appendChild(btn_prato1);
   }
  });

  div.appendChild(btn_adicona);
  div.appendChild(btn_retira);
  div.appendChild(num_cont);
  pai.appendChild(div);
});







