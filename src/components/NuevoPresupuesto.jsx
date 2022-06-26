import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsvalidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");
  const handlePresupuesto = (evento) => {
    evento.preventDefault();
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("No es un presupuesto valido");

      return;
    }

    setMensaje("");
    setIsvalidPresupuesto(true)
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario" action="">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={(evento) => setPresupuesto(Number(evento.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje} </Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
