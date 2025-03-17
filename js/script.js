// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = document.getElementById("street-name").value
  // output
  document.getElementById("answer").innerHTML =
    "Your address is: " + streetNumber + " " + streetName
}
