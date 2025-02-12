import React from "react";
import ImportButton from "./importButton";
import FilterButton from "./filterButton";

const handleImport = () => {
  console.log("Importing data...");
};

const handleFilter = () => {
  console.log("Filtering data...");
};
const Table = ({ data }) => {
  return (
    <div>
       <ImportButton onImport={handleImport} />
       <FilterButton onFilter={handleFilter} />
    <table >
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>num tel</th>
          <th>Etat</th>
          <th>Total</th>
          <th>Type</th>
          <th>plus</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.numtel}</td>
              <td>{item.etat} </td>
              <td>{item.total} </td>
              <td>{item.type} </td>
              <td><button>{item.plus}</button> </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" style={{ textAlign: "center", color: "red" }}>
              No results found
            </td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
