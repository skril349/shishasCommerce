import React from 'react';

export default function BottomBar() {
  return (
    <div>
      <main>
        content
      </main>
      <footer>
        <div className="container__footer"> {/* <!--escric .container__footer i enter--> */}
            {/* <!--<div class="box__footer">--> */}
                {/* <!--<div class="logo">
                    <img src="" alt="">
                </div>--> */}
                {/* <!--<div class="terms">
                    <p>parrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoarrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoarrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafoparrafo</p>
                </div>
            </div>--> */}
        
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
                <a href="#">Preguntas frequentes</a>
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
            {/* <!--No pongo iconos de redes sociales de momento-- */}
        </div>
        <div className="box__copyright">
            {/* <hr> */}
            <p>Todos los derechos reservados © 2021
                <b>DARKOWLS</b>
            </p>
        </div>
    </footer>
    </div>
    
    /*<footer className="footer">
        <div className="footer-left">
        {/*<img src="logo.png" alt="">*//*}
        <p>parrafoparrafoparrafoparrafoparrafoparrafo</p>
          <div className="socials">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
         </div>
        </div>
        <ul class="footer-right">
          <li>
            <h2>Product</h2>

            <ul className="box">
              <li> <a href="#">Theme</a></li>
              <li> <a href="#">Plugin</a></li>
              <li> <a href="#">Wordpress</a></li>
              <li> <a href="#">rrrrrr</a></li>
            </ul>
          </li>



          <li className="features">
            <h2>Usefull links</h2>

            <ul className="box">
              <li> <a href="#">Theme</a></li>
              <li> <a href="#">Plugin</a></li>
              <li> <a href="#">Wordpress</a></li>
              <li> <a href="#">rrrrrr</a></li>
            </ul>
          </li>



          <li>
            <h2>Address</h2>

            <ul className="box">
              <li> <a href="#">Theme</a></li>
              <li> <a href="#">Plugin</a></li>
              <li> <a href="#">Wordpress</a></li>
              <li> <a href="#">rrrrrr</a></li>
            </ul>
          </li>
        </ul>


        <div className="footer-bottom">
          <p>All Rights reserved by &copy;conceptial 2020</p>
        </div>
      </footer>*/
    
    /*<div className="footer">
        <footer className="footer">
          <div class="grupo1">
            <div class="box">
              <figure>
                <a href="#">
                  <img src=img/logotipo-sleedw.svg
 alt ="Logo de SLee Dw">                </a>
              </figure>
            </div>
            <div class="box">
              <h2>SOBRE NOSOTROS</h2>
              <P>parrafo parrafo parrafo</P>
              <P>parrafo parrafo parrafo</P>
              <P>parrafo parrafo parrafo</P>
              <P>parrafo parrafo parrafo</P>
              <P>parrafo parrafo parrafo</P>
            </div>
            <div class="box"></div>
            <h2>SIGUENOS</h2>
            <div className="red-social">
              <a href="#" className="fb"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
        </footer>

        
  </div>*/
  )
}


///*
//return (
    //<SemanticMenu className="ui secondary menu">
      //<Link href="/">
        //<SemanticMenu.Item as="a">HOME</SemanticMenu.Item>
      //</Link>
      //<Link href="/about">
       // <SemanticMenu.Item as="a">ABOUT US</SemanticMenu.Item>
     // </Link>

      //<Link href="/createHookah">
      //  <SemanticMenu.Item as="a">CREATE HOOKAH</SemanticMenu.Item>
     // </Link>
     // {auth ? (
     //   <>
        //  {user !== null && (
         //   <Link href="/edit/me">
          //    <SemanticMenu.Item as="a">
          //      {user.name.toUpperCase()} {user.lastname.toUpperCase()}
           //   </SemanticMenu.Item>
          //  </Link>
        //  )}
         // <SemanticMenu.Item onClick={logout}>
         //   <Icon name="power off" color="white" />
         // </SemanticMenu.Item>
      //  </>
    //  ) : (
   //     <Link href="/register">
   //       <SemanticMenu.Item as="a">REGISTER</SemanticMenu.Item>
    //    </Link>
   //   )}
   //</SemanticMenu>
  //);*/
