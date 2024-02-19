// DESAFIO

const btn_menu = document.querySelector("#menu");
const abaLateral = document.querySelector(".abaLat");
const btn_prato1 = document.querySelector("#b1");
const btn_prato2 = document.querySelector("#b2");
const btn_prato3 = document.querySelector("#b3");
const btn_prato4 = document.querySelector("#b4");
const produtos_selecionados = document.querySelector(".prod_sele");
const preco1 = document.querySelector("#p1");
const preco2 = document.querySelector("#p2");
const preco3 = document.querySelector("#p3");
const preco4 = document.querySelector("#p4");


let prod_sele = 0;

btn_menu.addEventListener("click",(evento)=>{
   abaLateral.classList.add("abaLat_exibir");
   evento.stopPropagation();
  }
);

abaLateral.addEventListener("click",(evento)=>{
  evento.stopPropagation()
});

window.addEventListener("click",()=>{
  abaLateral.classList.remove("abaLat_exibir");
  abaLateral.classList.add("abaLat_remover");
});

btn_prato1.addEventListener("click",(evento)=>{ // BOTÃO 01
  prod_sele++;
  produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;

  let pai = evento.target.parentNode;
  pai.style.border = "2px solid red";
  pai.removeChild(btn_prato1);

  let lixeira = document.createElement("div");
  lixeira.setAttribute("class","lixeira");

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
   pai.removeChild(lixeira);
   pai.style.border = "2px solid black";
   pai.appendChild(btn_prato1);

   prod_sele--;
   produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;
  }
 });

 lixeira.addEventListener("click",()=>{
   pai.removeChild(div);
   pai.removeChild(lixeira);
   pai.style.border = "2px solid black";
   pai.appendChild(btn_prato1);

   prod_sele--;
   produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;
 });

 div.appendChild(btn_adicona);
 div.appendChild(btn_retira);
 div.appendChild(num_cont);
 pai.appendChild(lixeira);
 pai.appendChild(div);
});

btn_prato2.addEventListener("click",(evento)=>{ // BOTÃO 02
  prod_sele++;
  produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;

  let pai = evento.target.parentNode;
  pai.style.border = "2px solid red";
  pai.removeChild(btn_prato2);

  let lixeira = document.createElement("div");
  lixeira.setAttribute("class","lixeira2");

  let div = document.createElement("div");
  div.setAttribute("class","contador2");

 let btn_adicona = document.createElement("button");
 btn_adicona.setAttribute("class","cont_adiciona2");
 btn_adicona.innerHTML = "+";

 let btn_retira = document.createElement("button");
 btn_retira.setAttribute("class","cont_retira2");
 btn_retira.innerHTML = "-";

 let num_cont = document.createElement("span");
 num_cont.setAttribute("class", "num_cont2");
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
   pai.removeChild(lixeira);
   pai.style.border = "2px solid black";
   pai.appendChild(btn_prato2);

   prod_sele--;
   produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;
  }
 });

 lixeira.addEventListener("click",()=>{
   pai.removeChild(div);
   pai.removeChild(lixeira);
   pai.style.border = "2px solid black";
   pai.appendChild(btn_prato2);

   prod_sele--;
   produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;
 });

 div.appendChild(btn_adicona);
 div.appendChild(btn_retira);
 div.appendChild(num_cont);
 pai.appendChild(lixeira);
 pai.appendChild(div);
});

btn_prato3.addEventListener("click",(evento)=>{ // BOTÃO 03
  prod_sele++;
  produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;

  let pai = evento.target.parentNode;
  pai.style.border = "2px solid red";
  pai.removeChild(btn_prato3);

  let lixeira = document.createElement("div");
  lixeira.setAttribute("class","lixeira2");

  let div = document.createElement("div");
  div.setAttribute("class","contador2");

 let btn_adicona = document.createElement("button");
 btn_adicona.setAttribute("class","cont_adiciona2");
 btn_adicona.innerHTML = "+";

 let btn_retira = document.createElement("button");
 btn_retira.setAttribute("class","cont_retira2");
 btn_retira.innerHTML = "-";

 let num_cont = document.createElement("span");
 num_cont.setAttribute("class", "num_cont2");
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
   pai.removeChild(lixeira);
   pai.style.border = "2px solid black";
   pai.appendChild(btn_prato3);

   prod_sele--;
   produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;
  }
 });

 lixeira.addEventListener("click",()=>{
   pai.removeChild(div);
   pai.removeChild(lixeira);
   pai.style.border = "2px solid black";
   pai.appendChild(btn_prato3);

   prod_sele--;
   produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;
 });

 div.appendChild(btn_adicona);
 div.appendChild(btn_retira);
 div.appendChild(num_cont);
 pai.appendChild(lixeira);
 pai.appendChild(div);
});

btn_prato4.addEventListener("click",(evento)=>{ // BOTÃO 04
  prod_sele++;
  produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;

  let pai = evento.target.parentNode;
  pai.style.border = "2px solid red";
  pai.removeChild(btn_prato4);

  let lixeira = document.createElement("div");
  lixeira.setAttribute("class","lixeira");

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
   pai.removeChild(lixeira);
   pai.style.border = "2px solid black";
   pai.appendChild(btn_prato4);

   prod_sele--;
   produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;
  }
 });

 lixeira.addEventListener("click",()=>{
   pai.removeChild(div);
   pai.removeChild(lixeira);
   pai.style.border = "2px solid black";
   pai.appendChild(btn_prato4);

   prod_sele--;
   produtos_selecionados.innerHTML= `Produtos selecionados : ${prod_sele}`;
 });

 div.appendChild(btn_adicona);
 div.appendChild(btn_retira);
 div.appendChild(num_cont);
 pai.appendChild(lixeira);
 pai.appendChild(div);
});