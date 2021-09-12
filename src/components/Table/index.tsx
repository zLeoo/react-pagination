import React from 'react';
import './styles.css';

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
}

const Table: React.FC<TableProps> = ({ data }) => {
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
          {data.map((item, index) => (
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
