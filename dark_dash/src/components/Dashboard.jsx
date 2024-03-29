import React, { useEffect } from "react";
import { LineGraph } from "./LineGraph";
import Piechart from "./Piechart";
import RegionTable from "./RegionTable";
import Table from "./ranked";
import UnpaidTable from "./LeastRanked";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import ContextualExample from "./ProgressBar";
import { DoughnutComponent } from "./doughnut";
import Speedometer from "./Speedometer";
import MapComponent from "./MapContainer";
import WardMapComponent from "./wardMap";

async function fetchDataAndPopulateCards() {
  try {
    const response = await fetch("http://localhost:8080/maps/markers");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const totalWaterTax = data.reduce(
      (total, entry) => total + entry.Water_Tax,
      0
    );
    const totalGarbageTax = data.reduce(
      (total, entry) => total + entry.Garbage_Tax,
      0
    );
    const totalPropertyTax = data.reduce(
      (total, entry) => total + entry.Property_Tax,
      0
    );
    const totalRevenue = totalGarbageTax + totalPropertyTax + totalWaterTax;

    document.getElementById(
      "totalRevenueValue"
    ).innerText = `₹ ${totalRevenue}`;
    document.getElementById("waterTaxValue").innerText = `₹ ${totalWaterTax}`;
    document.getElementById(
      "garbageTaxValue"
    ).innerText = `₹ ${totalGarbageTax}`;
    document.getElementById(
      "propertyTaxValue"
    ).innerText = `₹ ${totalPropertyTax}`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataAndPopulateCards();

const Dashboard = () => {
  const [SelectedType, setSelectedType] = useState();
  const [speedbtn, setspeedbtn] = useState(null);

  const [wardNumber, setwardNumber] = useState(null);

  const handleclick = (ward) => {
    setwardNumber(ward);
  };

  const handlebuttonclick = (taxtype) => {
    setSelectedType(taxtype);
  };
  const handlebtn = (taxtype) => {
    setspeedbtn(taxtype);
  };

  return (
<div style={{ cursor: "pointer", userSelect: "none" }}>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              {/* card 1 */}
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0" id="totalRevenueValue">
                          Loading...
                        </h3>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-warning ">
                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Total Revenue</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              {/* card 2 */}
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0" id="waterTaxValue">
                          Loading...
                        </h3>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-primary">
                        <span class=" mdi mdi-cup-water  icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Water Tax</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              {/* card 3 */}
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0" id="propertyTaxValue">
                          Loading...
                        </h3>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-danger">
                        <span class=" mdi mdi-store di left icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Property Tax</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              {/* card 4 */}
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0" id="garbageTaxValue">
                          Loading...
                        </h3>
                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">
                          +3.5%
                        </p> */}
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-success ">
                        <span class=" mdi mdi-archive icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Garbage Tax</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            {/* ward table */}
            <div class="col-md-3 grid-margin stretch-card">
              <div
                class="card"
                style={{
                  height: "78vh",
                  overflowY: "auto",
                  scrollbarWidth: "thick",
                  overflowX: "hidden",
                }}
              >
                <div class="card-body">
                  <RegionTable />
                </div>
                <style>
                  {`
            /* WebKit Scrollbar Styles */
            .card::-webkit-scrollbar {
                width: 8px;
            }
            .card::-webkit-scrollbar-thumb {
                background-color: #555555;
            }
            .card::-webkit-scrollbar-track {
                background-color:   #333333 ;
            }
        `}
                </style>
              </div>
            </div>
            {/* map card */}
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <MapComponent />
                </div>
              </div>
            </div>
            <div class="col-md-3 grid-margin stretch-card">
              <div class="card " >
                <div class="card-body" >

                  <div class="md-3">

                    <h3 class="text-white font-weight-normal"> Ward 83</h3>


                   <div class="card"  style={{backgroundColor:"rgba(0,0,0,0.6)",marginBottom:"12px",marginTop:"20px",padding:"0px"}}>
                    <div class="row">
                    <div class="card-body" style={{height:"80px",minHeight:"110px"}}>
                      <h6>Water Tax</h6>
                      <p className="text-muted font-weight-normal">111/130</p>
                    </div>
                    
                      {/* <div>hhh</div> */}
                
                    </div>
                  </div>
                  <div class="card"  style={{backgroundColor:"rgba(0,0,0,0.6)",marginBottom:"12px",padding:"0px"}}>
                    <div class="row">
                    <div class="card-body" style={{height:"80px",minHeight:"110px"}}>
                      <h6>Property Tax</h6>
                      <p className="text-muted font-weight-normal">111/130</p>
                    </div>
                    
                      {/* <div>hhh</div> */}
                
                    </div>
                  </div>

                  <div class="card"  style={{backgroundColor:"rgba(0,0,0,0.6)",marginBottom:"12px",padding:"0px"}}>
                    <div class="row">
                    <div class="card-body" style={{height:"80px",minHeight:"110px"}}>
                      <h6>Garbage Tax</h6>
                      <p className="text-muted font-weight-normal">111/130</p>
                    </div>
                    
                      {/* <div>hhh</div> */}
                
                    </div>
                  </div>
                  </div>
                 

                </div>
              </div>
            </div>


          </div>

          <div class="row">
            {/* progess chart */}
            <div class="col-sm-6 grid-margin">
              <div class="card">
                <div
                  class="card-body"
                  style={{ height: "269px", alignItems: "center" }}
                >
                  <ContextualExample />
                </div>
              </div>
            </div>
            {/* speedo meter */}
            <div class="col-sm-6 grid-margin">
              <div class="card">
                <div
                  class="row"
                  style={{
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "8px",
                    marginTop: "8px",
                  }}
                >
                  <button
                    class="btn btn-primary btn-sm"
                    style={{ width: "100px" }}
                    onClick={() => {
                      handlebtn("");
                    }}
                  >
                    Overall Tax
                  </button>
                  <button
                    class="btn btn-primary btn-sm"
                    style={{ width: "100px" }}
                    onClick={() => {
                      handlebtn("Garbage_Tax");
                    }}
                  >
                    Garbage Tax
                  </button>
                  <button
                    class="btn btn-primary btn-sm"
                    style={{ width: "100px" }}
                    onClick={() => {
                      handlebtn("Property_Tax");
                    }}
                  >
                    Property Tax
                  </button>
                  <button
                    class="btn btn-primary btn-sm"
                    style={{ width: "100px" }}
                    onClick={() => {
                      handlebtn("Water_Tax");
                    }}
                  >
                    Water Tax
                  </button>
                </div>
                <div
                  class="card-body"
                  style={{
                    width: "300px",
                    height: "229px",
                    display: "flex",

                    borderRadius: "5px",
                    justifyContent: "center",
                    position: "relative",
                    margin: "auto",
                  }}
                >
                  <Speedometer TaxSelected={speedbtn} wardNumber={wardNumber} />
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Scrollable Menu */}
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                            style={{ pointer: "arrow" }}
                          >
                            Ward List
                          </button>
                          <ul
                            className="dropdown-menu scrollable-menu"
                            role="menu"
                            style={{
                              height: "auto",
                              maxHeight: "200px",
                              overflowX: "hidden",
                            }}
                          >
                            {[...Array(10).keys()].map((index) => (
                              <li key={index} style={{ cursor: "pointer" }}>
                                <option
                                  value={index + 1}
                                  onClick={() => {
                                    handleclick(`${index + 1}`);
                                  }}
                                  style={{ pointer: "default" }}
                                >
                                  ward {index + 1}{" "}
                                </option>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* line chart */}
          {/* line chart */}
          <div className="row ">
            <div className="col-8 grid-margin">
              <div className="card" style={{ height: "71vh" }}>
                <div style={{ width: "100%", height: "50vh", margin: "auto" }}>
                  <LineGraph />
                </div>
              </div>
            </div>
            {/* pie graph */}
            <div className="col-4 grid-margin">
              <div className="card">
                <div
                  class="row"
                  style={{
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "8px",
                    marginTop: "8px",
                  }}
                >
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    style={{ width: "80px" }}
                    onClick={() => {
                      handlebuttonclick("Paid");
                    }}
                  >
                    Paid
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    style={{ width: "80px" }}
                    onClick={() => {
                      handlebuttonclick("UnPaid");
                    }}
                  >
                    Unpaid
                  </button>
                </div>

                <DoughnutComponent
                  SetType={SelectedType}
                  style={{ marginBottom: "9px" }}
                />
              </div>
            </div>
          </div>

          {/* table ranking  */}
          <div class="row">
            <div class="col-md-6 col-xl-4 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <Table />
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <UnpaidTable />
                </div>
              </div>
            </div>
            <div class="col-md-12 col-xl-4 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <WardMapComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
