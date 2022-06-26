import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isvalidPresupuesto,
  setIsvalidPresupuesto,
  gastos
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isvalidPresupuesto ? (
        <ControlPresupuesto
        gastos={gastos}
        presupuesto={presupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsvalidPresupuesto={setIsvalidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
