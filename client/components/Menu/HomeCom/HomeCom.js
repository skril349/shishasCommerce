import React, { useEffect, useState } from "react";
/* import Layout from "../../../layout/Layout"; */



export default function HomeCom() {
  const animacionHome = () => {
    let animacion = document.getElementById('animadoH2');
    let animacion2 = document.getElementById('animadoP');
    let animacion3 = document.getElementById('animadoH1');
    let animacion4 = document.getElementById('2AnimadoH2');
    let animacion5 = document.getElementById('2AnimadoP');
    let animacion6 = document.getElementById('2AnimadoH1');
    let posicionObj1=animacion.getBoundingClientRect().top
    let posicionObj2=animacion2.getBoundingClientRect().top;
    let posicionObj3=animacion3.getBoundingClientRect().top;
    let posicionObj4=animacion4.getBoundingClientRect().top;
    let posicionObj5=animacion5.getBoundingClientRect().top;
    let posicionObj6=animacion6.getBoundingClientRect().top;
    console.log(posicionObj1); /*imprime posicion del scroll*/
    console.log(posicionObj2);
    console.log(posicionObj3);
    console.log(posicionObj4);
    console.log(posicionObj5);
    console.log(posicionObj6);
    let tamañoDePantalla = window.innerHeight/2;
    /* this.alert(window.innerHeight); */
  
    if(posicionObj1 > tamañoDePantalla){
        animacion.style.animation = 'animacion 2s ease-out'
    }
    if(posicionObj2 >  window.innerHeight/3){
        animacion2.style.animation = 'animacion 4s ease-out'/* ease out?? */
    }
    if(posicionObj3 >  window.innerHeight/3){
      animacion3.style.animation = 'animacion 2s ease-out'
  }
   if(posicionObj4 >  window.innerHeight/3){
    animacion4.style.animation = 'animacion 2s ease-out'
}
if(posicionObj5 >  window.innerHeight/3){
  animacion5.style.animation = 'animacion 2s ease-out'
}
if(posicionObj6 >  window.innerHeight/3){
  animacion6.style.animation = 'animaciontitulo 2s ease-out'
}
  }
  
  useEffect(()=> {
     /* animacionHome(); */
    window.addEventListener('scroll', animacionHome);
    return()=>window.removeEventListener('scroll', animacionHome);
  },[]);
  useEffect(()=> {
    /* animacionHome(); */
    window.addEventListener('load',animacionHome);
    return()=>window.removeEventListener('load', animacionHome);
  },[]);
  return (
    
    <div>
      <div className="homeLight">
        <h1 id="animadoH1" className="tituloHomeLight">titulo titulo titulo titulo</h1>
        <div class="two-columns-light">
           <h2 id="animadoH2" className="subtituloHomeLight">subtitulo subtitulo subtitulo subtitulo subtitulo </h2>
            <p id="animadoP" className="parrafoHomeLight">
                text text text text text text text text text text text text text text text text text text text text text text text text
            </p>
        </div>
      </div>
      <div className="homeDark">
      <h1 id="2AnimadoH1" className="tituloHomeDark">titulo titulo titulo titulo</h1>
        <div class="two-columns-dark">
           <h2 id="2AnimadoH2" className="subtituloHomeDark">subtitulo subtitulo subtitulo subtitulo subtitulo </h2>
            <p id="2AnimadoP" className="parrafoHomeDark">
                text text text text text text text text text text text text text text text text text text text text text text text text
            </p>
        </div>
      </div>
    </div>

  );
}
