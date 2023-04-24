import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({handlePasswordCorrect}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[botonDes, setBotonDes] = useState(true);
   
    const handleEmail = (event) => {
        setEmail(event.target.value);
        setBotonDes(!(event.target.value&&password));
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value);
        setBotonDes(!(event.target.value&&email));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email&&password){
            setBotonDes(false);
        }
        if(password==='contraseña'){
            console.log('Contraseña correcta');
            handlePasswordCorrect(true);
        }else{
            console.log('Contraseña incorrecta');
            handlePasswordCorrect(false);
        }
    }

return(
    <div className='card m-3 p-3 bg-warning'>
        <form className='card-container' onSubmit={handleSubmit}>
            <div className='card-title text-center'>
                <h5>Desafío Estado de los componentes y eventos</h5>
            </div>
            <div className='form-group p-2 row' >
                <label htmlFor='email'>Email</label>
                <input id='email' type='email'
                placeholder='Ingresa tu email' onChange={handleEmail}/>
            </div>
            <div className='form-group p-2 row'>
                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password'
                placeholder='Ingresa la contraseña' onChange={handlePassword}/>
            </div>
            <button type='submit' className='btn bg-black text-white m-3' disabled={botonDes}>Iniciar Sesión</button>
        </form>
    </div>
);
}

export default Login;