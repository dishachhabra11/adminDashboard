import React from "react";
import IndividualWard from "./IndividualWard";

const IndividualWardTable = ({ datas, wardNumber, theme }) => {
  return (
    <div class="col-md-3 grid-margin stretch-card">
      <div class={`card ${theme === "light" ? "bg-lavender text-black" : ""}`}>
        <div class="card-body">
          <div class="md-3">
            <h3
              class={` ${
                theme === "light"
                  ? "text-black"
                  : "text-white font-weight-normal"
              } `}
            >
              {" "}
              {`Ward ${wardNumber}`}
            </h3>
            <IndividualWard
              TaxName="Garbage_Tax"
              wardNumber={wardNumber}
              data={datas}
              theme={theme}
            />
            <IndividualWard
              TaxName="Property_Tax"
              wardNumber={wardNumber}
              data={datas}
              theme={theme}
            />
            <IndividualWard
              TaxName="Water_Tax"
              wardNumber={wardNumber}
              data={datas}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualWardTable;
