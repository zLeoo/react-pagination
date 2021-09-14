import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import Table from './components/Table';
import './styles/global.css';
import { USERS_PER_PAGE } from './utils/constants';

const App: React.FC = () => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=50')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setTotalPages(Math.ceil(data.results.length) / USERS_PER_PAGE);
      });
  }, []);

  function handleClick(num: number) {
    setPage(num);
  }

  if (users)
    return (
      <>
        <Table data={users} page={page} />
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </>
    );
  else return <div>Loading</div>;
};

export default App;
