import React from "react";
import { useState, useRef } from "react";
import "./diapositivas.css";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import { RxEnterFullScreen, RxExitFullScreen } from "react-icons/rx";

function Diapositivas(props) {

  const [mostrarBotones, setMostrarBotones] = useState(false);
  const [pantallaCompleta, setPantallaCompleta] = useState(false);
  const [diapositivaActual, setDiapositivaActual] = useState(0);
  const diapositivaRef = useRef(null);

  const handlerMostrarBotones = () => {
    setMostrarBotones(!mostrarBotones);
  }

  const handlerMostrarSiguienteDiapositiva = () => {
    setDiapositivaActual((prevDiapositiva) =>
      prevDiapositiva === props.imagenes.length - 1 ? 0 : prevDiapositiva + 1
    );
  };

  const handlerMostrarAnteriorDiapositiva = () => {
    setDiapositivaActual((prevDiapositiva) =>
      prevDiapositiva === 0 ? props.imagenes.length - 1 : prevDiapositiva - 1
    );
  };

  const hanlderHacerPantallaCompleta = () => {
    const isInFullScreen = document.fullscreenElement || document.webkitFullscreenElement;

    if (isInFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setPantallaCompleta(false);
    } else {
      if (diapositivaRef.current.requestFullscreen) {
        diapositivaRef.current.requestFullscreen();
      } else if (diapositivaRef.current.webkitRequestFullscreen) {
        diapositivaRef.current.webkitRequestFullscreen();
      }
      setPantallaCompleta(true);
    }
  };

  return (
    <div className="contenedor-diapositiva" ref={diapositivaRef}>
      <div className="diapositiva">
        <img
          key={diapositivaActual}
          src={props.imagenes[diapositivaActual]}
          alt={`Diapositiva ${diapositivaActual + 1}`}
        />
      </div>
      <div className="botones-control " onMouseEnter={handlerMostrarBotones} onMouseLeave={handlerMostrarBotones}>
        <button className="boton-izquierda" onClick={handlerMostrarAnteriorDiapositiva}><TiChevronLeftOutline /></button>
        <button className="boton-pantalla-completa" onClick={hanlderHacerPantallaCompleta}><RxEnterFullScreen /></button>
        <button className="boton-derecha" onClick={handlerMostrarSiguienteDiapositiva}><TiChevronRightOutline /></button>
      </div>
    </div>
  );
}

export default Diapositivas;