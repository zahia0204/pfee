import React from "react";
import ImportButton from "./importButton";
import FilterButton from "./filterButton";
import { useNavigate } from "react-router-dom";

const handleImport = () => {
  console.log("Importing data...");
};

const handleFilter = () => {
  console.log("Filtering data...");
};

const Table = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="button-container">
        <FilterButton onFilter={handleFilter} />
        <ImportButton onImport={handleImport} />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Num Tel</th>
            <th>État</th>
            <th>Total</th>
            <th>Type</th>
            <th>Région</th>
            <th>Plus</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.numtel}</td>
                <td>{client.etat}</td>
                <td>{client.total}</td>
                <td>{client.type}</td>
                <td>{client.region}</td>
                <td>
                  <button
                    onClick={() => navigate(`/client/${client.id}`)}
                    style={{ padding: "5px 10px", cursor: "pointer" }}
                  >
                    More
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center", color: "red" }}>
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
