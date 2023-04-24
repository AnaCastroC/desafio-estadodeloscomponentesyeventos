import "bootstrap/dist/css/bootstrap.min.css";

const Alert = ({passwordCorrect}) => {

  if (passwordCorrect === null) {
    return null;
  } else { 
    
    return (
    <div className={`alert mx-3 ${passwordCorrect ? "alert-success" : "alert-danger"}`} role="alert">
      <span>{passwordCorrect ? "Contraseña correcta! Haz accedido a la cuenta." : "Contraseña incorrecta! No puedes acceder a la cuenta."}</span>
    </div> )
    };
};

export default Alert;