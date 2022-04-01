import React from "react";

export default function BottomBar() {
  return (
    <div>
      {/* <main>content</main> */}
      <footer>
        <div className="container__footer">
          <div className="box__footer">
            <h2>DARKOWLS</h2>
            <a href="#">Sobre nosotros</a>
            <a href="#">Nuestra marca</a>
            <a href="#">Redes Sociales</a>
            <a href="#">otros</a>
            <a href="#">otros</a>
          </div>

          <div className="box__footer">
            <h2>SOPORTE</h2>
            <a href="#">Pago y envios</a>
            <a href="#">FAQS</a>
            <a href="#">otros</a>
            <a href="#">otros</a>
            <a href="#">otros</a>
          </div>

          <div className="box__footer">
            <h2>ATENCION AL CLIENTE</h2>
            <h3>Para contactar con nosotros:</h3>
            <a href="#">email@darkowls</a>
            <h2>SUGERENCIAS</h2>
            <h3>Cualquier sugerencia:</h3>
            <a href="#">email@darkowls</a>
          </div>
        </div>
        <div className="box__copyright">
          <p>
            Todos los derechos reservados © 2021
            <b>DARKOWLS</b>
          </p>
        </div>
      </footer>
    </div>
  );
}
