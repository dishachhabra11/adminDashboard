import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./RegionList.css";

const RegionTable = () => {
  // Dummy data for the paid and unpaid tables

  const scrollbarStyle = {
    height: "300px",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1)",
  };
  const regionData = [
    { wardNo: "Zone 1", wardName: "Vijay Nagar " },
    { wardNo: "Zone 2", wardName: "Nandini Nagar " },
    { wardNo: "Zone 3", wardName: "Lokmanya Nagar Zone" },
    { wardNo: "Zone 4", wardName: "Municipal Corporation Zone" },
    { wardNo: "Zone 5", wardName: "Zeenathabad Zone " },
    { wardNo: "Zone 6", wardName: "Zeenathabad Zone " },
    { wardNo: "Zone 7", wardName: "Rajwada Zone" },
    { wardNo: "Zone 8", wardName: "Kishanganj" },
    { wardNo: "Zone 9", wardName: "Rajmohalla" },
    { wardNo: "Zone 10", wardName: " New Siyaganj" },
    { wardNo: "Zone 11", wardName: "Mandakini Colony " },

    // Add more data as needed
  ];

  return <RegionTableData data={regionData} />;
};

const RegionTableData = ({ data }) => {
  return (
    <div className="card" style={{ height: "100%", overflow: "auto" }}>
      <div className="card-body">
        <h4 style={{ position: "sticky" }}>Zone List</h4>
        <table className="table">
          <thead>
            <tr className="content">
              <th>Zone No.</th>
              <th>Zone Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.wardNo} className="content">
                <td>{item.wardNo}</td>
                <td>{item.wardName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegionTable;
