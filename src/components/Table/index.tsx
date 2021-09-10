import React from 'react';
import './styles.css';

const Table: React.FC = () => {
  return (
    <table id="users">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Phone</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Alf@gmail.com</td>
        <td>18</td>
        <td>99999999</td>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Alf@gmail.com</td>
        <td>18</td>
        <td>99999999</td>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Alf@gmail.com</td>
        <td>18</td>
        <td>99999999</td>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Alf@gmail.com</td>
        <td>18</td>
        <td>99999999</td>
      </tr>
    </table>
  );
};

export default Table;
