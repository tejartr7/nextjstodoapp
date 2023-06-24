'use client'
import React from 'react';
import { ToDoBtn} from './Clients';

export const ToDoItem = ({ title, description, id, completed }) => {
  return (
    <div className='todo'>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <ToDoBtn id={id} completed={completed} />
      </div>
    </div>
  );
};
