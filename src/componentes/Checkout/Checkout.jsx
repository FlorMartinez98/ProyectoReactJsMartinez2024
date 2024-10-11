import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import './Checkout.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons"; 

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const [validaciones, setValidaciones] = useState({
        nombre: false,
        apellido: false,
        telefono: false,
        email: false,
        emailConfirmacion: false,
    });

    const validarNombre = (value) => {
        const isValid = value.trim().length > 0;
        setValidaciones((prev) => ({ ...prev, nombre: isValid }));
        return isValid;
    };

    const validarApellido = (value) => {
        const isValid = value.trim().length > 0;
        setValidaciones((prev) => ({ ...prev, apellido: isValid }));
        return isValid;
    };

    const validarTelefono = (value) => {
        const isValid = /^[0-9]+$/.test(value.trim());
        setValidaciones((prev) => ({ ...prev, telefono: isValid }));
        return isValid;
    };

    const validarEmail = (value) => {
        const isValid = /\S+@\S+\.\S+/.test(value.trim());
        setValidaciones((prev) => ({ ...prev, email: isValid }));
        return isValid;
    };

    const validarEmailConfirmacion = (value) => {
        const isEmailValid = validarEmail(email); 
        const isValid = value === email && isEmailValid; 
        setValidaciones((prev) => ({ ...prev, emailConfirmacion: isValid }));
        return isValid;
    };

    const manejadorFormulario = (e) => {
        e.preventDefault();

        const validacionesTotales =
            validarNombre(nombre) &&
            validarApellido(apellido) &&
            validarTelefono(telefono) &&
            validarEmail(email) &&
            validarEmailConfirmacion(emailConfirmacion);

        if (!validacionesTotales) {
            setError("Por favor completa todos los campos correctamente.");
            return;
        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                return addDoc(collection(db, "ordenes"), orden);
            })
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();

                Swal.fire({
                    title: "¡Gracias por tu compra!",
                    html: `<strong>Tu número de orden es: ${docRef.id}</strong>`,
                    icon: "success",
                    confirmButtonColor: "#4CAF50",
                    background: "#ffffff",
                    color: "#b56576",
                    customClass: {
                        confirmButton: "alert-confirm-button",
                    },
                });

                setNombre("");
                setApellido("");
                setTelefono("");
                setEmail("");
                setEmailConfirmacion("");
                setValidaciones({
                    nombre: false,
                    apellido: false,
                    telefono: false,
                    email: false,
                    emailConfirmacion: false,
                });
            })
            .catch((error) => {
                console.error("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden");
            });
    };

    return (
        <div className="checkout-container">
            <h2>Checkout:</h2>
            <form className="checkout-form" onSubmit={manejadorFormulario}>
                {carrito.map((producto) => (
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre}</p>
                        <p>
                            {producto.item.precio} x {producto.cantidad}
                        </p>
                        <hr />
                    </div>
                ))}

                <div className="form-group">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <label>Nombre</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setNombre(e.target.value);
                            validarNombre(e.target.value);
                        }}
                        value={nombre}
                    />
                    {validaciones.nombre ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                    ) : nombre && (
                        <FontAwesomeIcon icon={faTimesCircle} className="error-icon" />
                    )}
                    {!validaciones.nombre && nombre && <p className="error-message">Por favor, ingresa un nombre válido.</p>}
                </div>

                <div className="form-group">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <label>Apellido</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setApellido(e.target.value);
                            validarApellido(e.target.value);
                        }}
                        value={apellido}
                    />
                    {validaciones.apellido ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                    ) : apellido && (
                        <FontAwesomeIcon icon={faTimesCircle} className="error-icon" />
                    )}
                    {!validaciones.apellido && apellido && <p className="error-message">Por favor, ingresa un apellido válido.</p>}
                </div>

                <div className="form-group">
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <label>Teléfono</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setTelefono(e.target.value);
                            validarTelefono(e.target.value);
                        }}
                        value={telefono}
                    />
                    {validaciones.telefono ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                    ) : telefono && (
                        <FontAwesomeIcon icon={faTimesCircle} className="error-icon" />
                    )}
                    {!validaciones.telefono && telefono && <p className="error-message">Por favor, ingresa un teléfono válido (solo números).</p>}
                </div>

                <div className="form-group">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <label>Email</label>
                    <input
                        type="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            validarEmail(e.target.value);
                            setValidaciones((prev) => ({ ...prev, emailConfirmacion: false }));
                        }}
                        value={email}
                    />
                    {validaciones.email ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                    ) : email && (
                        <FontAwesomeIcon icon={faTimesCircle} className="error-icon" />
                    )}
                    {!validaciones.email && email && <p className="error-message">Por favor, ingresa un email válido.</p>}
                </div>

                <div className="form-group">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <label>Confirmar Email</label>
                    <input
                        type="email"
                        onChange={(e) => {
                            setEmailConfirmacion(e.target.value);
                            validarEmailConfirmacion(e.target.value);
                        }}
                        value={emailConfirmacion}
                    />
                    {validaciones.emailConfirmacion ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                    ) : emailConfirmacion && (
                        <FontAwesomeIcon icon={faTimesCircle} className="error-icon" />
                    )}
                    {!validaciones.emailConfirmacion && emailConfirmacion && <p className="error-message">Los correos no coinciden o el original es inválido.</p>}
                </div>

                <button type="submit" className="checkout-button">Finalizar Compra</button>
                {error && <p className="error-message">{error}</p>}
                {ordenId && <p>Tu orden ID es: {ordenId}</p>}
            </form>
        </div>
    );
};

export default Checkout;

