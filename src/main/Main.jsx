import Read from '../components/read/Read';
import Empresa from '../empresas/Empresa';
import './main.css';

export default function Main(){
    return(
        <div className='main-container'>
            <Empresa />
        </div>
    );
}