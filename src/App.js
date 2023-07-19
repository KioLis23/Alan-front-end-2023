import './App.css';
import React, { useState, useEffect } from 'react';
import { parseISO, getYear } from 'date-fns';
// import {getMonth} from 'date-fns'

import Graph0 from "./Components/Graph0";
//import Graph1 from './Components/Graph1';
//import Graph2 from './Components/Graph2';
//import Graph3 from './Components/Graph3';
import Graph4 from './Components/Graph4';
import Graph5 from './Components/Graph5';
import Graph6 from './Components/Graph6';
import ButtonSells from "./Components/ButtonSells";
import ButtonColvo from "./Components/ButtonCol-vo";
import ButtonLefts from "./Components/ButtonLefts";
import ButtonIn from "./Components/ButtonIn";
import ButtonOut from "./Components/ButtonOut";

const App = () => {
  const [data, setData] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  // const [selectedDate, setSelectedDate] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedYear, setSelectedYear] = useState("2018");

  // const handleCategoryChange = (e) => {
  //   const selectedOptions = Array.from(e.target.options)
  //     .filter((option) => option.selected && option.value !== "all")
  //     .map((option) => option.value);
  //   setSelectedCategory(selectedOptions);
  // };
  
  const handleCategoryChange1 = (e) => {
    setSelectedWarehouse(e.target.value)
  };
  // const handleCategoryChange2 = (e) => {
  //   const selectedOptions = Array.from(e.target.options)
  //     .filter((option) => option.selected && option.value !== "all")
  //     .map((option) => option.value);
  //   setSelectedDate(selectedOptions);
  // };
  const handleCategoryChange3 = (e) => {
    setSelectedType(e.target.value)
  };
  const handleCategoryChange4 = (e) => {
    setSelectedCompany(e.target.value)
  };
  const handleCategoryChange5 = (e) => {
    setSelectedYear(e.target.value)
  };

    useEffect(() => {
      fetch(
          "http://127.0.0.1:8080/api/data/"
        )
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          setData(result);
          console.log(result)
        });
        
      },[])
      let filteredData = data;




      // if (selectedCategory.length > 0 && !selectedCategory.includes("all")) {
      //   filteredData = data.filter((item) => selectedCategory.includes(item.segment_names));
      // }
      if (selectedWarehouse) {
        filteredData = filteredData.filter((item) => item.warehouse_name === selectedWarehouse);
      }
      // if (selectedDate.length > 0 && !selectedDate.includes("all")) {
      //   filteredData = filteredData.filter((item) => {
      //     const itemDate = parseISO(item.date);
      //     const itemMonth = getMonth(itemDate) + 1;
      //     return selectedDate.includes(String(itemMonth));
      //   });
      // }
      if (selectedYear.length > 0) {
        filteredData = filteredData.filter((item) => {
          const itemDate1 = parseISO(item.date);
          const itemYear = getYear(itemDate1);
          return selectedYear.includes(String(itemYear));
        });
      }
      if (selectedType) {
        filteredData = filteredData.filter((item) => item.movement_type === selectedType);
      }
      if (selectedCompany) {
        filteredData = filteredData.filter((item) => item.company_name
        === selectedCompany);
      }
      
      
  return (
  <>
  <ButtonColvo data = {filteredData}/>
  <ButtonSells data = {filteredData}/>
  <ButtonLefts data = {filteredData}/>
  <ButtonIn data = {filteredData}/>
  <ButtonOut data = {filteredData}/>
  <Graph0 data = {filteredData}/> 
  {/* <Graph1 data = {filteredData}/> */}
  {/* <Graph2 data = {filteredData}/>
  <Graph3 data = {filteredData}/> */}
  <Graph4 data = {filteredData}/>
  <Graph5 data = {filteredData}/>
  <Graph6 data = {filteredData}/>
  <div class="opt">
  <div class="logo"></div>
        {/* <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            multiple size="4"
            style={{ width: "10%", fontSize: "125%",top: "22%",right: "17%", position: "absolute" }}
          >
            <option value="all">Все сегменты</option>
            <option value="O">Сегмент	O</option>
            <option value="B">Сегмент B</option>
            <option value="C">Сегмент C</option>
        </select> */}

        <select
            value={selectedWarehouse}
            onChange={handleCategoryChange1}
            style={{ width: "10%", fontSize: "125%",top: "2%",right: "15%", position: "absolute" }}
          >
            <option value="">Все склады</option>
            <option value="HHPHL">HHPHL</option>
            <option value="RBPVS">RBPVS</option>
        </select>
        
        <select
            value={selectedYear}
            onChange={handleCategoryChange5}
            style={{ width: "10%", fontSize: "125%",top: "2%",right: "5%", position: "absolute" }}
          >
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
        </select>

        {/* <select
            value={selectedDate}
            onChange={handleCategoryChange2}
            multiple size="4"
            style={{ width: "10%", fontSize: "125%",top: "22%",right: "5%", position: "absolute" }}
          >
            <option value="all">Все месяцы</option>
            <option value="1">Январь</option>
            <option value="2">Февраль</option>
            <option value="3">Март</option>
            <option value="4">Апрель</option>
            <option value="5">Май</option>
            <option value="6">Июнь</option>
            <option value="7">Июль</option>
            <option value="8">Август</option>
            <option value="9">Сентябрь</option>
            <option value="10">Октябрь</option>
            <option value="11">Ноябрь</option>
            <option value="12">Декабрь</option>
        </select> */}


        <select
            value={selectedType}
            onChange={handleCategoryChange3}
            style={{ width: "10%", fontSize: "125%",top: "2%",right: "25%", position: "absolute" }}
          >
            <option value="">Перемещение</option>
            <option value="True">True</option>
            <option value="False">False</option>
        </select>

        <select
            value={selectedCompany}
            onChange={handleCategoryChange4}
            style={{width: "10%", fontSize: "125%",top: "2%",right: "35%", position: "absolute",  }}
          >
            <option value="">Все компании</option>
            <option value="PUZNW">PUZNW</option>
            <option value="GOTFH">GOTFH</option>
            
        </select>
        </div>

  </>);
};

export default App;
