import React, { useEffect, useState } from "react";
import { LineGraph } from "./LineGraph";
import Piechart from "./Piechart";
import RegionTable from "./RegionTable";
import Table from "./ranked";
import UnpaidTable from "./LeastRanked";
import ProgressBar from "./ProgressBar";
import ContextualExample from "./ProgressBar";
import { DoughnutComponent } from "./doughnut";
import Speedometer from "./Speedometer";
import MapComponent from "./MapContainer";
import WardMapComponent from "./wardMap";
import WardMap from "./wardMap";
import Card from "./Card";
import dishaa from "./dishaa";
import IndividualWard from "./IndividualWard";
import IndividualWardTable from "./IndividualWardTable";
import ClipLoader from "react-spinners/ClipLoader";

const Dashboard = () => {
  const [SelectedType, setSelectedType] = useState();
  const [speedbtn, setspeedbtn] = useState(null);
  const [wardNumber, setwardNumber] = useState(null);
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDataAndPopulateCards() {
      try {
        const response = await fetch("http://localhost:8080/maps/markers");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setDatas(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchDataAndPopulateCards();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="white" size={50} />
      </div>
    );
  }

  let totalWaterTax = datas?.reduce(
    (total, entry) => total + entry.Water_Tax,
    0
  );
  let totalGarbageTax = datas?.reduce(
    (total, entry) => total + entry.Garbage_Tax,
    0
  );
  let totalPropertyTax = datas?.reduce(
    (total, entry) => total + entry.Property_Tax,
    0
  );
  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  const totalRevenue = totalGarbageTax + totalPropertyTax + totalWaterTax;

  console.log("The garbage tax is", totalGarbageTax);
  console.log("TP", totalPropertyTax);
  console.log("TW", totalWaterTax);
  console.log("TR", totalRevenue);
  console.log(datas);

  return (
    <div style={{ cursor: "pointer", userSelect: "none" }}>
      <div className="main-panel">
        <div className="content-wrapper">
          <Card TG={totalGarbageTax} TW={totalWaterTax} TP={totalPropertyTax} />
          <div className="row">
            <RegionTable />
            <MapComponent />
            <IndividualWardTable datas={datas} wardNumber="2" />
          </div>
          <div className="row">
            <ContextualExample data={datas} />
            <Speedometer
              TaxSelected={speedbtn}
              wardNumber={wardNumber}
              data={datas}
            />{" "}
          </div>

          <div className="row">
            <LineGraph data={datas} />
            <DoughnutComponent data={datas} SetType={SelectedType} />
          </div>
          <div className="row">
            <Table />
            <UnpaidTable />
            <WardMap datas={datas} />
            <dishaa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
