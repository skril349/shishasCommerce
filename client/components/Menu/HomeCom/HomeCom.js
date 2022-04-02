import React, { useEffect, useState } from "react";
/* import Layout from "../../../layout/Layout"; */



export default function HomeCom() {
  const animacionHome = () => {
    let animacion = document.getElementById('animadoH2');
    let animacion2 = document.getElementById('animadoP');
    let posicionObj1=animacion.getBoundingClientRect().top
    let posicionObj2=animacion2.getBoundingClientRect().top;
    console.log(posicionObj1); /*imprime posicion del scroll*/
    console.log(posicionObj2);
    let tamañoDePantalla = window.innerHeight/2;
    /* this.alert(window.innerHeight); */
  
    if(posicionObj1 > tamañoDePantalla){
        animacion.style.animation = 'animacion 2s ease-out'
    }
    if(posicionObj2 >  window.innerHeight/3){
        animacion2.style.animation = 'animacion 4s ease-out'/* ease out?? */
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
      {/* <Layout> (fora el div)
      Estamos en home
      <div fluid className="home">Estamos en home</div> {/*canviar about-us per home * /}
      
    </Layout> */}
      <div>
        <h1>TÍTOLTÍTOLTÍTOLTÍTOL</h1>
        <div class="two-columns">
           <h2 id="animadoH2">SubtítolSubtítolSubtítolSubtítolSubtítol</h2>
            <p id="animadoP">
                texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            </p>
        </div>
      </div>
      <div>
        <h1>TÍTOLTÍTOLTÍTOLTÍTOL</h1>
        <div class="two-columns">
           <h2 class="inline-block" id="animadoh2">SubtítolSubtítolSubtítolSubtítolSubtítol</h2>
        <p class="inline-block" id="animadop"> texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
        </p>
        </div>
      </div>
    <div>
        <h1>TÍTOLTÍTOLTÍTOLTÍTOL</h1>
        <div class="two-columns">
           <h2 class="inline-block" id="animadoh2">SubtítolSubtítolSubtítolSubtítolSubtítol</h2>
        <p class="inline-block" id="animadop"> texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
        </p>
        </div>
    </div>
    <div>
        <h1>TÍTOLTÍTOLTÍTOLTÍTOL</h1>
        <div class="two-columns">
           <h2 class="inline-block" id="animadoh2">SubtítolSubtítolSubtítolSubtítolSubtítol</h2>
        <p class="inline-block" id="animadop"> texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
        </p>
        </div>
    </div>
    <div>
        <h1>TÍTOLTÍTOLTÍTOLTÍTOL</h1>
        <div class="two-columns">
           <h2 class="inline-block" id="animadoh2">SubtítolSubtítolSubtítolSubtítolSubtítol</h2>
        <p class="inline-block" id="animadop"> texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
        </p>
        </div>
      </div>
    
    </div>

  );
}

