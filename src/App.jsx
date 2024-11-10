import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import notifications from './notifications';
import NotificationList from './notificationApp.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [notificationList, setNotificationList] = useState(notifications);

  const clearAllNotifications = () => {
    setNotificationList([]);
  };

  const clearNotification = (id) => {
    setNotificationList((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="container  d-flex flex-column  align-items-center">
    <div>
      <h1 className="mb-4">Notifications ({notificationList.length})</h1>
      <button className="btn btn-danger mb-3" onClick={clearAllNotifications}>
        Clear All
      </button>
      <NotificationList notifications={notificationList} clearNotification={clearNotification} />
    </div>
  </div>
);
}

export default App
