import Empresa from '../empresas/Empresa';
import './header.css';
import logo from './logo.png';



export default function Header() {
  return (
    <header className="header">
        <div className='header-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='header-links-container'>
          <a  href='/#'>Home</a>
          <a  href='/#'>Asset</a>
          <a  href='/#'>Wealth Management</a>
          <a  href='/#'>Contato</a>
        </div>
      

    </header>
  );
}