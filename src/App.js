import React, {useState} from 'react';
import HexRgb from './components/HexRgb';
import './App.css';

function App() {
  const [app, setApp] = useState(<HexRgb />);
  const [currentClass, setCurrentClass] = useState("hex");
  const apps = [
    {
      name: "hex",
      component: <HexRgb />
    },
    {
      name: "",
      component: ''
    },
    {
      name: "dropdown",
      component: ''
    }
  ]

  const handleClick = e => {
    const curApp = apps.find(item => item.name === e.target.className);
    setApp(curApp.component);
    setCurrentClass(curApp.name);
  }
  
  return (
    <div className='container'>
      <header className="header_main">
        <button className='hex' onClick={handleClick}>Задание №1(Цвета)</button>
        <button className='' onClick={handleClick}>Задание №2()</button>
        <button className="" onClick={handleClick}>Задание №3()</button>
      </header>
      <div className={"app_" + currentClass}>{app}</div>
    </div>
  );
}

export default App;
