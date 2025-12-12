import { useState } from "react";

export default function IndicatorTemp() {
  const [temp, setTemp] = useState(10);

  // Определяем цвет кружка
  const getColor = () => {
    if (temp > 50) return "red";
    if (temp > 25) return "orange";
    if (temp < -10) return "blue";
    if (temp < 0) return "lightblue";
    return "green";
  };

  return (
    <div className="wrapper">
      <p
        style={{
          backgroundColor: getColor(),
          transition: "0.3s",
        }}
      >
        <p>{temp}°C</p>
      </p>
      <div className="wrapper-btn">
        <button onClick={() => setTemp(temp + 1)}>+</button>
        <button onClick={() => setTemp(temp - 1)}>-</button>
      </div>
    </div>
  );
}
