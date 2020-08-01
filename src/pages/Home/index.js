import React from "react";
import Meses from "./Meses";
import AdicionarMes from "./AdicionarMes";

const Homes = () => {
  return (
    <div className="container">
      <AdicionarMes />
      <Meses />
    </div>
  );
};

export default Homes;
