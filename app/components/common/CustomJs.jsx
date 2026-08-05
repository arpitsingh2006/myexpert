"use client";

import { useEffect } from "react";

import { customJs } from "../../assets/js/custom";

export default function CustomJs() {

  useEffect(() => {

    // Bootstrap JS
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    // Custom JS
    customJs();

  }, []);

  return null;
}