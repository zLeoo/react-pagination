import React from 'react';
import './styles.css';
import { USERS_PER_PAGE } from './../../utils/constants';

interface User {
  email: string;
  phone: string;
  name: {
    first: string;
    last: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

interface TableProps {
  data: Array<User>;
  page: number;
}

const Table: React.FC<TableProps> = ({ data, page }) => {
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const selectedUsers = data.slice(startIndex, startIndex + USERS_PER_PAGE);

  return (
    <div className="tableContainer">
      <table id="users">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {selectedUsers.map((item, index) => (
            <tr key={index}>
              <td>{item.name.first}</td>
              <td>{item.email}</td>
              <td>{item.registered.age}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
