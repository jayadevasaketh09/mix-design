import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
function App() {
  let unitwconc = null;
  let combmag = null;
  let perofag = null;
  let perofcag = null;
  let aasaabRatio = null;
  let chemRatio = null;
  let waterAAb = null;
  let fa = null;
  let ggbs = null;
  if (unitwconc == null) {
    //id unitwconc
    unitwconc = document.getElementById("unitwconc");
    console.log(unitwconc);
    if (unitwconc != null) {
      unitwconc = unitwconc.value;
      console.log(unitwconc);
    }
  }
  if (combmag == null) {
    //id combmag
    combmag = document.getElementById("combmag");
    console.log(combmag);
    if (combmag != null) {
      combmag = combmag.value;
      if (combmag <= 60 || combmag >= 80) {
        alert("Enter the value between 60 and 80");
      }
    }
  }
  if (perofag == null) {
    perofag = document.getElementById("perofag");
    console.log(perofag);
    if (perofag != null) {
      perofag = perofag.value;
      if (perofag <= 60 || perofag >= 75) {
        alert("Enter the value between 60 and 75");
      }
    }
  }
  if (perofcag == null) {
    perofcag = document.getElementById("perofcag");
    console.log(perofcag);
    if (perofcag != null) {
      perofcag = perofcag.value;
      if (perofcag <= 60 || perofcag >= 75) {
        alert("Enter the value between 60 and 75");
      }
    }
  }

  if (aasaabRatio == null) {
    aasaabRatio = document.getElementById("aasaabRatio");
    console.log(aasaabRatio);
    if (aasaabRatio != null) {
      aasaabRatio = aasaabRatio.value;
      if (aasaabRatio <= 0.3 || aasaabRatio >= 0.6) {
        alert("Enter the value between 0.3 and 0.6");
      }
    }
  }
  if (chemRatio == null) {
    chemRatio = document.getElementById("chemRatio");
    console.log(chemRatio);
    if (chemRatio != null) {
      chemRatio = chemRatio.value;
      if (chemRatio <= 1.5 || chemRatio >= 3) {
        alert("Enter the value between 1.5 and 3");
      }
    }
  }
  if (waterAAb == null) {
    waterAAb = document.getElementById("waterAAb");
    console.log(waterAAb);
    if (waterAAb != null) {
      waterAAb = waterAAb.value;
      if (waterAAb <= 0.3 || waterAAb >= 0.55) {
        alert("Enter the value between 0.3 and 0.55");
      }
    }
  }

  if (fa == null) {
    fa = document.getElementById("fa");
    console.log(fa);
    if (fa != null) {
      fa = fa.value;
      if (fa <= 0 || fa >= 100) {
        alert("Enter the value between 0 and 100");
      }
    }
  }

  if (ggbs == null) {
    ggbs = document.getElementById("ggbs");
    console.log(ggbs);
    if (ggbs != null) {
      ggbs = ggbs.value;
      if (ggbs <= 0 || ggbs >= 100) {
        alert("Enter the value between 0 and 100");
      }
    }
  }









  let totmassofconc = (perofag * unitwconc) / 100;
  console.log(perofag, "perofag");
  console.log(unitwconc, "unitwconc");
  console.log(totmassofconc, "totmassofconc")
  let cacontent = (perofcag * totmassofconc) / 100;
  console.log(cacontent, "cacontent")

  let fineag = totmassofconc - cacontent;
  console.log(fineag, "fineag")
  let aabaas = unitwconc - totmassofconc;
  console.log(aabaas, "aabass")

  let oneplusaasaabRatio = 1 + parseFloat(aasaabRatio);

  let aab = (aabaas/(1+parseFloat(aasaabRatio)));
  console.log(aab, "aab")
  
  let aas = aabaas - aab;
  let massNaoh = aas / (1 + parseFloat(chemRatio));
  console.log(chemRatio, "chemRatio");
  console.log(aas, "aas")
  console.log(massNaoh, "massNaoh")
  let massna2sio3 = aas - massNaoh;
  let na2sio3water = 0.605 * massna2sio3;
  let na2sio3solid = massna2sio3 - na2sio3water;
  let naohsol = 0.4 * massNaoh;
  let naohwat = massNaoh - naohsol;
  let totalWater = na2sio3water + naohwat;
  let aabsolid = aab + naohsol + na2sio3solid;
  let theowater = totalWater / aabsolid;
  let actualwatreq = waterAAb * aabsolid;
  let extrawaterreq = actualwatreq - totalWater;
  console.log("totmassofconc", totmassofconc);
  return (
    <div className="parentDiv">
      <label>Unit Weight of Concrete:</label>{" "}
      <input
        type="text"
        name="Unit Weight of Concrete"
        className="grid-item"
        id="unitwconc"
      ></input>{" "}
      &nbsp;
      {/* <label>Combined mass of aggregate:</label>{" "}
      <input
        type="text"
        name="Combined mass of aggregate"
        className="grid-item"
        id="combmag"
      ></input>
      &nbsp; */}
      <label>Percentage of aggregate:</label>{" "}
      <input
        type="text"
        name="Percentage of aggregate"
        className="grid-item"
        id="perofag"
      ></input>
      &nbsp;
      <label>Percentage of Coarse aggregate:</label>{" "}
      <input
        type="text"
        name="Percentage of Coarse aggregate"
        className="grid-item"
        id="perofcag"
      ></input>
      &nbsp;
      <label>AAS/AAB Ratio:</label>
      <input
        type="text"
        name="aasaabRatio"
        id="aasaabRatio"
        className="grid-item"
      ></input>
      &nbsp;
      <label>Na2sio3/NaoH ratio:</label>
      <input
        type="text"
        name="Na2sio3/NaoH ratio"
        id="chemRatio"
        className="grid-item"
      ></input>
      &nbsp;
      <label>Practical(Water/AAB):</label>
      <input
        type="text"
        name="Practical(Water/AAB)"
        id="waterAAb"
        className="grid-item"
      ></input>
      &nbsp;
      <label>FA:</label>
      <input
        type="text"
        name="Practical(Water/AAB)"
        id="fa"
        className="grid-item"
      ></input>
      &nbsp;
      <label>GGBS:</label>
      <input
        type="text"
        name="Practical(Water/AAB)"
        id="ggbs"
        className="grid-item"
      ></input>
      {/* &nbsp; */}



      <button type="submit" className="grid-item" style={{ margin: '50px', marginLeft: "2px"}} onClick={() => App()}>
        Calculate
      </button>




      <div className="parentResultsDiv">
        <div style={{ marginLeft: "2px" }}>
          {" "}
          <h4> Mix Design</h4>
          <br />{" "}
        </div>
        <div className="resultsDiv">
          <div className="grid-item-results">
           <li>Mass of Na2si03 = {massna2sio3}</li>
           <li> Mass of NaoH Solution = {massNaoh}</li>
           <li> Mass of extra water= {extrawaterreq}</li>
           <li>  AAS/AAB ratio is  = {aasaabRatio}</li>
           <li>Water/AAB solids by weight = {waterAAb}</li>
           <li>FA: {(fa/100)*aab}</li>
           <li>GGBS: {(ggbs/100)*aab}</li>
           <li>Fine aggregate: {fineag}</li>
           <li>coarse aggregate:{cacontent}</li>

          </div>
          
        </div>
        {/* <h4> For FA-25 GGBS-75:</h4>
        <div className="resultsDiv">
        <div className="grid-item-results">
           <li>Mass of Na2si03 = {massna2sio3}</li>
           <li> Mass of NaoH Solution = {massNaoh}</li>
           <li> Mass of extra water= {extrawaterreq}</li>
           <li>  AAS/AAB ratio is  = {aasaabRatio}</li>
           <li>Water/AAB solids by weight = {waterAAb}</li>
           <li>"FA: 133.5</li>
           <li>GGBS: 400.5</li>
           <li>Fine aggregate: {fineag}</li>
           <li>coarse aggregate:{cacontent}</li>
          </div>
          
        </div>
        <h4> For FA-0 GGBS-100: </h4>
        <div className="resultsDiv">
        <div className="grid-item-results">
           <li>Mass of Na2si03 = {massna2sio3}</li>
           <li> Mass of NaoH Solution = {massNaoh}</li>
           <li> Mass of extra water= {extrawaterreq}</li>
           <li>  AAS/AAB ratio is  = {aasaabRatio}</li>
           <li>Water/AAB solids by weight = {waterAAb}</li>
           <li>FA: 0</li>
           <li>GGBS: 400.5</li>
           <li>Fine aggregate: {fineag}</li>
           <li>coarse aggregate:{cacontent}</li>
          </div>
        
        </div> */}
      </div>
    </div>
  );
}

export default App;
