import React, {useState} from 'react';
import HexRgb from './components/Hex2RGB/HexRgb';
import Training from './components/Training/Training';
import Photo from './components/photo/Photo';
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
      name: "training",
      component: <Training />
    },
    {
      name: "photo",
      component: <Photo />
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
        <button className='training' onClick={handleClick}>Задание №2(Учет тренировок)</button>
        <button className="photo" onClick={handleClick}>Задание №3(Фото)</button>
      </header>
      <div className={"app_" + currentClass}>{app}</div>
    </div>
  );
}

export default App;
