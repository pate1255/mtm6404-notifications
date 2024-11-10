import React from 'react';
import notifications from "./notifications.js";



function NotificationList({ notifications, clearNotification }) {
  return (
    <div>
      {notifications.map((note) => (
        <div key={note.id} className='p-3 border border-dark rounded m-3 border-3 bg-success bg-opacity-75 text-light'>
          <h2>{note.id}</h2>
          <h3>{note.name}</h3>
          <p>{note.message}</p>
          <button onClick={() => clearNotification(note.id)} className='btn btn-danger'>Clear</button>
        </div>
      ))}
    </div>
  );
}

export default NotificationList;

