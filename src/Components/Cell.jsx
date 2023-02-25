import React from 'react'
import '../Styles/Cell.css'

export function Cell (props) { 
  var symbol = "";

  var backgroundColor = (props.rowIndex + props.cellIndex) % 2 == 0 ? "whiteBack" : "blackBack";
  var number = props.number;
  var color = number > 0 ? "white" : "black";
  var green = (number >= 10 || number <= -10) ? "green" : "";
  
  switch (number % 10) {
    case(0): symbol = <div></div>; break;
    case(1): case(-1): symbol = <div>&#9812;</div>; break; //Король
    case(2): case(-2): symbol = <div>&#9813;</div>; break; //Королева
    case(3): case(-3): symbol = <div>&#9815;</div>; break; //Слон
    case(4): case(-4): symbol = <div>&#9816;</div>; break; //Конь
    case(5): case(-5): symbol = <div>&#9814;</div>; break; //Ладья
    case(6): case(-6): symbol = <div>&#9817;</div>; break; //Пешка
  }

  var classes = "cell" + " " + color + " " + backgroundColor + " " + green;

  return (
    <div className={classes} onClick={() => props.onClick()}>
      {symbol}
    </div>
  )
}