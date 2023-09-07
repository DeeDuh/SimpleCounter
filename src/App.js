import { React, useState } from "react";
import "./styles.css";

function Counter() {
  //первый элемент хранит начальное ссылку на начальное значение состояния,useState
  //второй эл.хранит ссылку на функцию для
  //изменения значения состояния,инициализировать эту функцию не нужно
  const [counterVal, setCounterVal] = useState(0);

  const btnClick = () => {
    setCounterVal(counterVal + 1);
  };
  return (
    <button onClick={btnClick} style={{ marginLeft: 100 }}>
      {counterVal}
    </button>
  );
}

const ButtonApp = () => {
  const [bkColor, setBkColor] = useState("yellow");
  const [text, setText] = useState("Click me");

  const btnClick = () => {
    setBkColor("red");
    setText("You clicked me, buster!");
  };

  return (
    <button
      onClick={btnClick}
      style={{ backgroundColor: bkColor, margin: 10, marginTop: 50 }}
    >
      {text}
    </button>
  );
};

function State() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");
  const [radius, setRadius] = useState(0);

  const increment = () => {
    setCount(count + 1);

    randomColor();
    randomBorder();
  };

  const decrement = () => {
    setCount(count - 1);

    randomColor();
    randomBorder();
  };

  const randomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    setColor(randomColor);
  };

  const randomBorder = () => {
    const randomBorder = Math.floor(Math.random() * 40);

    setRadius(randomBorder);
  };

  return (
    <div>
      <p style={{ color }}>Counter: {count}</p>

      <button
        style={{ borderRadius: `${radius}%`, background: `${color}` }}
        onClick={increment}
      >
        Increment +
      </button>

      <button
        style={{ borderRadius: `${radius}%`, background: `${color}` }}
        onClick={decrement}
      >
        Decrement -
      </button>
    </div>
  );
}

function Button(props) {
  const handleClick = () => {
    props.onClickAct(props.bkColor);
  };

  return (
    <button
      className="Button"
      onClick={handleClick}
      style={{ backgroundColor: props.bkColor, marginTop: "10px" }}
    >
      {props.text}
    </button>
  );
}

function DisplayBlock(props) {
  return (
    <div className="displayBlock" style={{ backgroundColor: props.bkColor }}>
      Some Text
    </div>
  );
}

function Traffic_Light() {
  const [displayBkColor, setDisplayBkColor] = useState("white");
  const stateFunc = (newBkColor) => {
    setDisplayBkColor(newBkColor);
  };
  return (
    <>
      <Button bkColor="red" text="Red" onClickAct={stateFunc} />
      <Button bkColor="yellow" text="Yellow" onClickAct={stateFunc} />
      <Button bkColor="green" text="Green" onClickAct={stateFunc} />
      <DisplayBlock bkColor={displayBkColor} />
    </>
  );
}
export default function App() {
  return (
    <>
      <Counter />
      <ButtonApp />
      <State />
      <Traffic_Light />
    </>
  );
}
