import './App.css';
import { useRef } from 'react';
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";
import Logo from './imagenes/logo.png';
import Diapositiva from './componentes/diapositivas';
import DImg1 from './diapositivas/diapositiva1/1.jpeg';
import DImg2 from './diapositivas/diapositiva1/2.jpeg';
import DImg3 from './diapositivas/diapositiva1/3.jpeg';
import DImg4 from './diapositivas/diapositiva1/4.jpeg';
import DImg5 from './diapositivas/diapositiva1/5.jpeg';
import DImg6 from './diapositivas/diapositiva1/6.jpeg';
import DImg7 from './diapositivas/diapositiva1/7.jpeg';
import DImg8 from './diapositivas/diapositiva1/8.jpeg';
import DImg9 from './diapositivas/diapositiva1/9.jpeg';
import DImg10 from './diapositivas/diapositiva1/10.jpeg';
import DImg11 from './diapositivas/diapositiva1/11.jpeg';
import DImg12 from './diapositivas/diapositiva1/12.jpeg';
import DImg13 from './diapositivas/diapositiva1/13.jpeg';
import DImg14 from './diapositivas/diapositiva1/14.jpeg';
import DImg15 from './diapositivas/diapositiva1/15.jpeg';
import D2Img1 from './diapositivas/diapositiva2/1.jpeg';
import D2Img2 from './diapositivas/diapositiva2/2.jpeg';
import D2Img3 from './diapositivas/diapositiva2/3.jpeg';
import D2Img4 from './diapositivas/diapositiva2/4.jpeg';
import D2Img5 from './diapositivas/diapositiva2/5.jpeg';
import D2Img6 from './diapositivas/diapositiva2/6.jpeg';
import D2Img7 from './diapositivas/diapositiva2/7.jpeg';
import D2Img8 from './diapositivas/diapositiva2/8.jpeg';
import D2Img9 from './diapositivas/diapositiva2/9.jpeg';
import D2Img10 from './diapositivas/diapositiva2/10.jpeg';
import D2Img11 from './diapositivas/diapositiva2/11.jpeg';
import D2Img12 from './diapositivas/diapositiva2/12.jpeg';
import D3Img1 from './diapositivas/diapositiva3/1.jpeg';
import D3Img2 from './diapositivas/diapositiva3/2.jpeg';
import D3Img3 from './diapositivas/diapositiva3/3.jpeg';
import D3Img4 from './diapositivas/diapositiva3/4.jpeg';
import D3Img5 from './diapositivas/diapositiva3/5.jpeg';
import D3Img6 from './diapositivas/diapositiva3/6.jpeg';
import D3Img7 from './diapositivas/diapositiva3/7.jpeg';
import D3Img8 from './diapositivas/diapositiva3/8.jpeg';
import D3Img9 from './diapositivas/diapositiva3/9.jpeg';
import D3Img10 from './diapositivas/diapositiva3/10.jpeg';
import D3Img11 from './diapositivas/diapositiva3/11.jpeg';
import D3Img12 from './diapositivas/diapositiva3/12.jpeg';
import D3Img13 from './diapositivas/diapositiva3/13.jpeg';
import D3Img14 from './diapositivas/diapositiva3/14.jpeg';
import D3Img15 from './diapositivas/diapositiva3/15.jpeg';
import D3Img16 from './diapositivas/diapositiva3/16.jpeg';
import D3Img17 from './diapositivas/diapositiva3/17.jpeg';
import D3Img18 from './diapositivas/diapositiva3/18.jpeg';
import D3Img19 from './diapositivas/diapositiva3/19.jpeg';
import D3Img20 from './diapositivas/diapositiva3/20.jpeg';
import D3Img21 from './diapositivas/diapositiva3/21.jpeg';
import D3Img22 from './diapositivas/diapositiva3/22.jpeg';
import D3Img23 from './diapositivas/diapositiva3/23.jpeg';
import D3Img24 from './diapositivas/diapositiva3/24.jpeg';
import D3Img25 from './diapositivas/diapositiva3/25.jpeg';
import D3Img26 from './diapositivas/diapositiva3/26.jpeg';
import D3Img27 from './diapositivas/diapositiva3/27.jpeg';
import D3Img28 from './diapositivas/diapositiva3/28.jpeg';
import D3Img29 from './diapositivas/diapositiva3/29.jpeg';
import D3Img30 from './diapositivas/diapositiva3/30.jpeg';
import D3Img31 from './diapositivas/diapositiva3/31.jpeg';
import D3Img32 from './diapositivas/diapositiva3/32.jpeg';
import D3Img33 from './diapositivas/diapositiva3/33.jpeg';
import D3Img34 from './diapositivas/diapositiva3/34.jpeg';
import D4Img1 from './diapositivas/diapositiva4/1.jpeg';
import D4Img2 from './diapositivas/diapositiva4/2.jpeg';
import D4Img3 from './diapositivas/diapositiva4/3.jpeg';
import D4Img4 from './diapositivas/diapositiva4/4.jpeg';
import D4Img5 from './diapositivas/diapositiva4/5.jpeg';
import D4Img6 from './diapositivas/diapositiva4/6.jpeg';
import D4Img7 from './diapositivas/diapositiva4/7.jpeg';
import D4Img8 from './diapositivas/diapositiva4/8.jpeg';
import D4Img9 from './diapositivas/diapositiva4/9.jpeg';
import D4Img10 from './diapositivas/diapositiva4/10.jpeg';
import D4Img11 from './diapositivas/diapositiva4/11.jpeg';
import D4Img12 from './diapositivas/diapositiva4/12.jpeg';
import D4Img13 from './diapositivas/diapositiva4/13.jpeg';
import D4Img14 from './diapositivas/diapositiva4/14.jpeg';
import D4Img15 from './diapositivas/diapositiva4/15.jpeg';
import D4Img16 from './diapositivas/diapositiva4/16.jpeg';
import D4Img17 from './diapositivas/diapositiva4/17.jpeg';
import D4Img18 from './diapositivas/diapositiva4/18.jpeg';
import D4Img19 from './diapositivas/diapositiva4/19.jpeg';
import D4Img20 from './diapositivas/diapositiva4/20.jpeg';
import D4Img21 from './diapositivas/diapositiva4/21.jpeg';

function App() {

  const diapositiva1 = [
    DImg1,
    DImg2,
    DImg3,
    DImg4,
    DImg5,
    DImg6,
    DImg7,
    DImg8,
    DImg9,
    DImg10,
    DImg11,
    DImg12,
    DImg13,
    DImg14,
    DImg15,
  ];

  const diapositiva2 = [
    D2Img1,
    D2Img2,
    D2Img3,
    D2Img4,
    D2Img5,
    D2Img6,
    D2Img7,
    D2Img8,
    D2Img9,
    D2Img10,
    D2Img11,
    D2Img12,
  ];

  const diapositiva3 = [
    D3Img1,
    D3Img2,
    D3Img3,
    D3Img4,
    D3Img5,
    D3Img6,
    D3Img7,
    D3Img8,
    D3Img9,
    D3Img10,
    D3Img11,
    D3Img12,
    D3Img13,
    D3Img14,
    D3Img15,
    D3Img16,
    D3Img17,
    D3Img18,
    D3Img19,
    D3Img20,
    D3Img21,
    D3Img22,
    D3Img23,
    D3Img24,
    D3Img25,
    D3Img26,
    D3Img27,
    D3Img28,
    D3Img29,
    D3Img30,
    D3Img31,
    D3Img32,
    D3Img33,
    D3Img34,
  ];

  const diapositiva4 = [
    D4Img1,
    D4Img2,
    D4Img3,
    D4Img4,
    D4Img5,
    D4Img6,
    D4Img7,
    D4Img8,
    D4Img9,
    D4Img10,
    D4Img11,
    D4Img12,
    D4Img13,
    D4Img14,
    D4Img15,
    D4Img16,
    D4Img17,
    D4Img18,
    D4Img19,
    D4Img20,
    D4Img21,
  ];

  const inicioRef = useRef(null);
  const diapositiva1Ref = useRef(null);
  const diapositiva2Ref = useRef(null);
  const diapositiva3Ref = useRef(null);
  const diapositiva4Ref = useRef(null);

  const handlerPasarSeccion = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="inicio-pagina" ref={inicioRef}>
        <div className='flex '>
          <div className='m-28'>
            <img src={Logo} alt='logo' className='logo' />
            <p className='titulo-proyecto'>Proyecto <br /> Tecnologías de Seguridad</p>
            <p className='tema-proyecto'>Sitio web seguro en windows server 2019</p>
            <button className="boton-iniciar" onClick={() => handlerPasarSeccion(diapositiva1Ref)}>¡Comencemos!</button>
          </div>
        </div>
      </section>
      <section className='h-screen flex flex-col items-center justify-center bg-color-fondo' ref={diapositiva1Ref}>
        <div className='flex w-full items-center justify-center'>
          <div className='contenedor-diapositiva-1'>
            <Diapositiva imagenes={diapositiva1} />
          </div>
          <div className='contenedor-titulo-dipositiva-1'>
            <p>Tecnologías de Seguridad Operacional</p>
            <p className='descripcion-diapo'>Describe las medidas de seguridad a nivel de aplicación destinadas a evitar que los datos o el código de la aplicación
              sean robados o secuestrados.
            </p>
            <button className="boton-iniciar" onClick={() => handlerPasarSeccion(diapositiva2Ref)}>Continuar <MdKeyboardDoubleArrowDown /></button>
          </div>
        </div>
      </section>
      <section className='h-screen flex flex-col items-center justify-center bg-color-fondo' ref={diapositiva2Ref}>
        <div className='flex w-full items-center justify-center'>
          <div className='contenedor-titulo-dipositiva-2'>
            <p>Ecuador Digital</p>
            <p className='descripcion-diapo'>Resalta los aspectos clave de los usuarios y sus niveles de digitalización en Ecuador, desde el uso de aplicaciones web,
              moviles, juegos, redes sociales, entre otros. 
            </p>
            <button className="boton-iniciar" onClick={() => handlerPasarSeccion(diapositiva3Ref)}>Continuar <MdKeyboardDoubleArrowDown /></button>
          </div>
          <div className='contenedor-diapositiva-2'>
            <Diapositiva imagenes={diapositiva2} />
          </div>
        </div>
      </section>
      <section className='h-screen flex flex-col items-center justify-center bg-color-fondo' ref={diapositiva3Ref}>
        <div className='flex w-full items-center justify-center'>
          <div className='contenedor-diapositiva-3'>
            <Diapositiva imagenes={diapositiva3} />
          </div>
          <div className='contenedor-titulo-diapositiva-3'>
              <p>Amenazas y Vulnerabilidades – Estadísticas</p>
              <p className='descripcion-diapo'>Demuestra el estado global de la seguridad informática basado en miles de evaluaciones y pruebas de penetración realizadas
                por EdgeScan en 2021.
              </p>
              <button className="boton-iniciar" onClick={() => handlerPasarSeccion(diapositiva4Ref)}>Continuar <MdKeyboardDoubleArrowDown /></button>
          </div>
        </div>
      </section>
      <section className='h-screen flex flex-col items-center justify-center bg-color-fondo' ref={diapositiva4Ref}>
        <div className='flex w-full items-center justify-center'>
          <div className='contenedor-titulo-diapositiva-4'>
              <p>Tendencias Tecnológicas EC 2023</p>
              <p className='descripcion-diapo'>Descubre cómo las empresas afrontan el reto de adaptarse a la era digital, implementando innovadores modelos de negocio para enriquecer la experiencia de sus clientes</p>
              <button className="boton-iniciar" onClick={() => handlerPasarSeccion(inicioRef)}>Terminamos <MdKeyboardDoubleArrowUp /></button>
          </div>
          <div className='contenedor-diapositiva-4'>
            <Diapositiva imagenes={diapositiva4} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
