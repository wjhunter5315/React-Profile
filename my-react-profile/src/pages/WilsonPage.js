import React, { useState, useEffect } from "react";
// import "../RowMenuBtn/RowMenuBtn.css";
import redMenu from "../../assets/images/red_menu.png";
import blueMenu from "../../assets/images/blue_menu.png";
import purpleMenu from "../../assets/images/purple_menu.png";
import greenMenu from "../../assets/images/green_menu.png";
import BYO from "../../assets/images/BYO.jpg";
let RowMenuBtn = () => {
  let initialRedState = {
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 24
    }
  };
  let initialGreenState = {
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 26
    }
  };
  let initialBlueState = {
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 20
    }
  };
  let initialPurpleState = {
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 26
    }
  };
  let initialYellowState = {
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 32
    }
  };
  let [clickedRed, setClickedRed] = useState({
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 24
    }
  });
  let [clickedGreen, setClickedGreen] = useState({
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 26
    }
  });
  let [clickedBlue, setClickedBlue] = useState({
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 20
    }
  });
  let [clickedPurple, setClickedPurple] = useState({
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 26
    }
  });
  let [clickedYellow, setClickedYellow] = useState({
    dataColor: "",
    isClicked: false,
    pageStyle: {
      backgroundColor: "#9AB49D",
      fontSize: 32
    }
  });
  useEffect(() => {
    setClickedRed({
      dataColor: "red",
      isClicked: true,
      pageStyle: {
        backgroundColor: "#E55538",
        fontSize: 24
      }
    });
  }, []);
  let handleClick = e => {
    let val = e.target.dataset.color;
    let menuImg = document.getElementById("menuImg");
    switch (val) {
      case "red":
        setClickedGreen(initialGreenState);
        setClickedBlue(initialBlueState);
        setClickedPurple(initialPurpleState);
        setClickedYellow(initialYellowState);
        return (
          setClickedRed({
            dataColor: val,
            isClicked: true,
            pageStyle: { backgroundColor: "#E55538", fontSize: 24 }
          }),
          (menuImg.src = redMenu)
        );
      case "green":
        setClickedRed(initialRedState);
        setClickedBlue(initialBlueState);
        setClickedPurple(initialPurpleState);
        setClickedYellow(initialYellowState);
        return (
          setClickedGreen({
            dataColor: val,
            isClicked: true,
            pageStyle: { backgroundColor: "#11AC4C", fontSize: 26 }
          }),
          (menuImg.src = greenMenu)
        );
      case "blue":
        setClickedRed(initialRedState);
        setClickedGreen(initialGreenState);
        setClickedPurple(initialPurpleState);
        setClickedYellow(initialYellowState);
        return (
          setClickedBlue({
            dataColor: val,
            isClicked: true,
            pageStyle: { backgroundColor: "#0093D0", fontSize: 20 }
          }),
          (menuImg.src = blueMenu)
        );
      case "purple":
        setClickedRed(initialRedState);
        setClickedGreen(initialGreenState);
        setClickedBlue(initialBlueState);
        setClickedYellow(initialYellowState);
        return (
          setClickedPurple({
            dataColor: val,
            isClicked: true,
            pageStyle: { backgroundColor: "#D0336A", fontSize: 26 }
          }),
          (menuImg.src = purpleMenu)
        );
      case "yellow":
        setClickedRed(initialRedState);
        setClickedGreen(initialGreenState);
        setClickedBlue(initialBlueState);
        setClickedPurple(initialPurpleState);
        return (
          setClickedYellow({
            dataColor: val,
            isClicked: true,
            pageStyle: { backgroundColor: "#FEB600", fontSize: 32 }
          }),
          (menuImg.src = BYO)
        );
      default:
        return;
    }
  };
  return (
    <div className="row no-gutters" id="rowMenuBtn">
      <div className="col-sm-1"></div>
      <div className="col-sm-2">
        <button
          className="btn menuBtn"
          data-color="red"
          onClick={handleClick}
          style={clickedRed.pageStyle}
        >
          ALL FRUITS, FRUITS & VEGGIES, MEAL REPLACER
        </button>
      </div>
      <div className="col-sm-2">
        <button
          className="btn menuBtn"
          data-color="green"
          onClick={handleClick}
          style={clickedGreen.pageStyle}
        >
          CLEANSING DETOX, NATURAL REMEDIES
        </button>
      </div>
      <div className="col-sm-2">
        <button
          className="btn menuBtn"
          data-color="blue"
          onClick={handleClick}
          style={clickedBlue.pageStyle}
        >
          WORKOUT SMOOTHIES, COFFEE SMOOTHIES, HEALTHY SNACKS
        </button>
      </div>
      <div className="col-sm-2">
        <button
          className="btn menuBtn"
          data-color="purple"
          onClick={handleClick}
          style={clickedPurple.pageStyle}
        >
          ORGANIC TEA, ORGANIC MATCHA
        </button>
      </div>
      <div className="col-sm-2">
        <button
          className="btn menuBtn"
          data-color="yellow"
          onClick={handleClick}
          style={clickedYellow.pageStyle}
        >
          BUILD YOUR OWN
        </button>
      </div>
      <div className="col-sm-1"></div>
    </div>
  );
};
export default RowMenuBtn;