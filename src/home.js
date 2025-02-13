import React , {useState} from "react";
 import SearchBar from "./searchBar";
 import Table from "./table";
import Navbar from "./navBar";
import Sidebar from "./sideBar";
import dataList from "./data/clients.json";
    const Home = () => {

            const [searchTerm, setSearchTerm] = useState("");
            const filteredData = dataList.filter(
                (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.etat.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.type.toLowerCase().includes(searchTerm.toLowerCase()) 
            );        
    return ( 
        <div>
            <Navbar/>
            <Sidebar/>
        <h1>list des clients</h1> 
        <SearchBar onSearch={setSearchTerm} />
        <Table data={filteredData} />
        </div>
    );
}

export default Home;