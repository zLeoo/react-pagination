import { useEffect, useState } from 'react';
import Table from './components/Table';
import './styles/global.css';

const App: React.FC = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=50')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        console.log(users);
      });
  }, []);
  if (users) return <Table data={users} />;
  else return <div>Loading</div>;
};

export default App;
