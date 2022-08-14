import React, { useState } from "react";
import { nanoid } from "nanoid";

import ActivityItem from "./ActivityItem";
import "./Training.css";


//Оставил возможность вводить в расстояние отрицательные числа,
//чтобы была возможность исправить значение. Но в самой таблице
//расстояние может быть только неотрицательным
function Training() {
  const [trainData, setTrainData] = useState([]);
  const [date, setDate] = useState("");
  const [dist, setDist] = useState(0);

  const isValidValues = () => {
    if (/\d{4}-\d{2}-\d{2}/.exec(date) && dist) return true;
    return false;
  }
  const handleClick = (e) => {
    if (!isValidValues()) return;

    //Создаем новую запись, если записи с указанной датой в массиве нет,...
    if (!trainData.find((item) => item.date === date)) {
      setTrainData((prevArr) =>
        [
          ...prevArr,
          {
            date: date,
            dist: dist < 0 ? 0 : +dist.toFixed(2),
          },
        ].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
      return;
    }

    //...иначе меняем существующую запись
    setTrainData(
      trainData.map((item) => {
        if (item.date === date) {
          item.dist = +(item.dist + dist).toFixed(2);
          item.dist = item.dist < 0 ? 0 : item.dist;
        }
        return item;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  const handleDelete = (date) => {
    setTrainData(trainData.filter((item) => item.date !== date));
  };

  const handleEdit = (date, dist) => {
    setDate(date);
    document.querySelector(".Tr-input_date").value = date;
    setDist(dist);
    document.querySelector(".Tr-input_dist").value = dist;
  };

  return (
    <div className="Tr-window">
      <form className="Tr-form" onSubmit={(e) => e.preventDefault()}>
        <label className="Tr-label">
          <span>Дата (ДД.ММ.ГГ)</span>
          <input
            type="date"
            className="Tr-input Tr-input_date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label className="Tr-label">
        <span>Пройдено километров</span> 
          <input
            type="number"
            step="0.01"
            className="Tr-input Tr-input_dist"
            onChange={(e) => setDist(Number(e.target.value))}
            required
          />
        </label>
        <button className="Tr-button" type="submit" onClick={handleClick}>
          OK
        </button>
      </form>
      <div className="Tr-table">
        <div className="Tr-table_headers">
          <span>Дата (ДД.ММ.ГГ)</span>
          <span>Пройдено километров</span>
          <span>Действия</span>
        </div>
        <div className="Tr-table_data">
          <ul>
            {trainData.map((item) => (
              <ActivityItem
                key={nanoid()}
                item={item}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Training;
