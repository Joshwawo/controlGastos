import { useState, useEffect } from "react";
import cerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState('')
  const [fecha, setFecha]= useState('')

  useEffect(() => {
      if(Object.keys(gastoEditar).length>0){
        setNombre(gastoEditar.nombre)
        setCantidad(gastoEditar.cantidad)
        setCategoria(gastoEditar.categoria)
        setId(gastoEditar.id)
        setFecha(gastoEditar.fecha)
      }

  }, [gastoEditar]);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({})
    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria, id, fecha });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={cerrarBtn}
          alt="boton de cerrar modal"
          onClick={ocultarModal}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo="error"> {mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Añande el nombre del gasto"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            id="cantidad"
            placeholder="Añande la cantidad del gasto eje: 200"
            value={cantidad}
            onChange={(evento) => setCantidad(Number(evento.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            name=""
            id="categoria"
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
          >
            <option value="">Selecione</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>
          </select>
        </div>
        <input type="submit" value={gastoEditar.nombre ? "Guardar Cambios" : "Nuevo Gasto"} />
      </form>
    </div>
  );
};

export default Modal;
