import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import Hijo from './components/hijo';
import Validacion from './components/validacion';
import React from 'react';
import HijoPasos from './components/hijo';

//esta funcion es el padre
function AppReceta() {
  const nombreReceta = "Torta de chocolate"
  const ingredientes = [
    "Harina de trigo: 2 tazas (240 gramos)",
     "Azúcar: 2 tazas (400 gramos)",
     "Cacao en polvo sin azúcar: 3/4 taza (75 gramos)",
     "Polvo de hornear: 1 1/2 cucharaditas",
     "Bicarbonato de sodio: 1 1/2 cucharaditas",
     "Sal: 1 cucharadita",
     "Huevos: 2 grandes",
     "Leche: 1 taza (240 ml)",
     "Aceite vegetal: 1/2 taza (120 ml)",
     "Extracto de vainilla: 2 cucharaditas",
  ];

  const pasos=[
    "Preparar el horno: Precalienta el horno a 175°C (350°F).Engrasa y enharina dos moldes redondos de 23 cm (9 pulgadas).",
    "Mezclar los ingredientes secos: mezcla la harina, el azúcar, el cacao en polvo, el polvo de hornear, el bicarbonato de sodio y la sal.",
    "Agregar los ingredientes húmedos: Añade los huevos, la leche, el aceite y el extracto de vainilla.",
    "Hornear: Distribuye la mezcla de manera uniforme en los moldes preparados. Hornea de 30 a 35 minutos.",
    "Enfriar: Deja enfriar los pasteles en los moldes durante 10 minutos, luego desmolda.",

  ];


  const mensaje="Gracias por ver la receta de chocolate!!"



 return (
  <div className="receta-app">
    <h1>{nombreReceta}</h1>
    <h2>Ingredientes:</h2>
    <ol>
      {ingredientes.map((ingrediente, index) => (
        <li key={index}>{ingrediente}</li>
      ))}
    </ol>

    <HijoPasos pasos={pasos} />
    <h3>{mensaje}</h3>
   
        
  </div>
);
}

export default AppReceta;
