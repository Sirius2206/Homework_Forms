import React from "react";

function ActivityItem({ item, onDelete, onEdit }) {
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  };

  return (
    <li className="Ai-item">
      <span>{formatDate(item.date)}</span>
      <span>{item.dist}</span>
      <span>
        <span
          className="Ai-edit material-icons"
          onClick={() => onEdit(item.date, item.dist)}
        >
          edit
        </span>
        <span
          className="Ai-delete material-icons"
          onClick={() => onDelete(item.date)}
        >
          delete
        </span>
      </span>
    </li>
  );
}

export default ActivityItem;
