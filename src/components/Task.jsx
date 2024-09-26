import React from "react";
import "./Task.css";
import classNames from "classnames";

const Task = ({ title }) => {
  const STATUS = "ONGOING";
  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames('status', STATUS)}>{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;
