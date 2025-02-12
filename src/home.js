import React , {useState} from "react";
 import SearchBar from "./searchBar";
 import Table from "./table";
    const Home = () => {

        const dataList = [
            { id: 1, name: "samah samah", numtel: "023456789", etat: "non traiter", total: "2.45M", type: "comporate", plus: "more" }, {
                id: 2, name: " zahia zahia", numtel: "087654321", etat: "huissier", total: "4.6M", type: "residential", plus: "more"
            } , {
                id: 3, name: "toufik toufik", numtel: "023456789", etat: "payment regle", total: "5.6M", type: "residential", plus: "more"
            }, {
                id: 4, name: "islam islam", numtel: "087654321", etat: "avocat", total: "7.2M", type: "comporate", plus: "more"
            }
            ];
            const [searchTerm, setSearchTerm] = useState("");
            const filteredData = dataList.filter(
              (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.etat.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.type.toLowerCase().includes(searchTerm.toLowerCase()) 
            );        
    return ( 
        <div>
        <h1>list des clients</h1> 
      <SearchBar onSearch={setSearchTerm} />
      <Table data={filteredData} />
        </div>
    );
}

export default Home;