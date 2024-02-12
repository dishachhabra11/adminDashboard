import React from "react";
import { useEffect } from "react";

function Card({ TG, TP, TW, theme }) {
  const TR = TG + TP + TW;

  return (
    <div>
      <div class="row">
        <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
          {/* card 1 */}
          <div
            class={`card ${theme === "light" ? "bg-lavender text-black" : ""}`}
          >
            <div class="card-body">
              <div class="row">
                <div class="col-9">
                  <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0" id="totalRevenueValue">
                      {TR}
                    </h3>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    class={`icon icon-box-warning ${
                      theme === "light" ? "bg-black" : ""
                    } `}
                  >
                    <span class="mdi mdi-arrow-top-right icon-item"></span>
                  </div>
                </div>
              </div>
              <h6
                class={`${
                  theme === "light"
                    ? "text-black font-weight-normal"
                    : "text-muted font-weight-normal"
                }`}
              >
                Total Revenue
              </h6>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
          {/* card 2 */}
          <div
            class={`card ${theme === "light" ? "bg-lavender text-black" : ""}`}
          >
            <div class="card-body">
              <div class="row">
                <div class="col-9">
                  <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0" id="waterTaxValue">
                      {TW}
                    </h3>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    class={`icon icon-box-primary ${
                      theme === "light" ? "bg-black" : ""
                    }`}
                  >
                    <span class=" mdi mdi-cup-water  icon-item"></span>
                  </div>
                </div>
              </div>
              <h6
                class={`${
                  theme === "light"
                    ? "text-black font-weight-normal"
                    : "text-muted font-weight-normal"
                }`}
              >
                Water Tax
              </h6>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
          {/* card 3 */}
          <div
            class={`card ${theme === "light" ? "bg-lavender text-black" : ""}`}
          >
            <div class="card-body">
              <div class="row">
                <div class="col-9">
                  <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0" id="propertyTaxValue">
                      {TP}
                    </h3>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    class={`icon icon-box-danger ${
                      theme === "light" ? "bg-black" : ""
                    }`}
                  >
                    <span class=" mdi mdi-store di left icon-item"></span>
                  </div>
                </div>
              </div>
              <h6
                class={`${
                  theme === "light"
                    ? "text-black font-weight-normal"
                    : "text-muted font-weight-normal"
                }`}
              >
                Property Tax
              </h6>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
          {/* card 4 */}
          <div
            class={`card ${theme === "light" ? "bg-lavender text-black" : ""}`}
          >
            <div class="card-body">
              <div class="row">
                <div class="col-9">
                  <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0" id="garbageTaxValue">
                      {TG}
                    </h3>
                    {/* <p class="text-success ms-2 mb-0 font-weight-medium">
                          +3.5%
                        </p> */}
                  </div>
                </div>
                <div class="col-3">
                  <div
                    class={`icon icon-box-success ${
                      theme === "light" ? "bg-black" : ""
                    }`}
                  >
                    <span class=" mdi mdi-archive icon-item"></span>
                  </div>
                </div>
              </div>
              <h6
                class={`${
                  theme === "light"
                    ? "text-black font-weight-normal"
                    : "text-muted font-weight-normal"
                }`}
              >
                Garbage Tax
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
