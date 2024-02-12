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
import { useTheme } from "./ThemeContext";

const Dashboard = () => {
  const [SelectedType, setSelectedType] = useState();
  const [speedbtn, setspeedbtn] = useState(null);
  const [wardNumber, setwardNumber] = useState(null);
  const [datas, setDatas] = useState(null);

  const { theme } = useTheme();

  useEffect(() => {
    async function fetchDataAndPopulateCards() {
      try {
        const response = await fetch("http://localhost:8080/maps/markers");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setDatas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDataAndPopulateCards();
  }, []);

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
  const totalRevenue = totalGarbageTax + totalPropertyTax + totalWaterTax;

  return (
    <div style={{ cursor: "pointer", userSelect: "none" }}>
      <div
        className={`main-panel ${theme === "light" ? "bg-floralwhite" : ""}`}
      >
        <div
          className={`content-wrapper ${
            theme === "light" ? "bg-floralwhite" : ""
          }`}
        >
          <Card
            TG={totalGarbageTax}
            TW={totalWaterTax}
            TP={totalPropertyTax}
            theme={theme}
          />
          <div class="row">
            <RegionTable theme={theme} />
            <MapComponent theme={theme} />
            <IndividualWardTable theme={theme} datas={datas} wardNumber="2" />
          </div>
          <div class="row">
            <ContextualExample theme={theme} data={datas} />
            <Speedometer
              theme={theme}
              TaxSelected={speedbtn}
              wardNumber={wardNumber}
              data={datas}
            />{" "}
          </div>

          <div class="row">
            <LineGraph theme={theme} data={datas} />
            <DoughnutComponent
              theme={theme}
              data={datas}
              SetType={SelectedType}
            />
          </div>
          <div class="row">
            <Table theme={theme} />
            <UnpaidTable theme={theme} />
            <WardMap theme={theme} datas={datas} />
            <dishaa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
