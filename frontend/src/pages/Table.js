import { useEffect, useState } from "react";
import { getUsers } from "../utils/apiHelper";
import "./Table.css";

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const func = async () => {
      const data = await getUsers(users);
      setUsers(data);
    };
    func();
  }, []);
  const temp = getUsers();
  console.log(temp);
  return (
    <>
    <table className="table table-striped-columns border border-secondary tab-cls">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">user_id</th>
          <th scope="col">first_name</th>
          <th scope="col">last_name</th>
          <th scope="col">father_name</th>
          <th scope="col">middle_name</th>
          <th scope="col">dob</th>
          <th scope="col">email</th>
          <th scope="col">pan</th>
          <th scope="col">mobile</th>
          <th scope="col">address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{user.userId}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.fatherName}</td>
              <td>{user.middleName}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
              <td>{user.pan}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};

export default Table;
