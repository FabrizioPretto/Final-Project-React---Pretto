
import logo from './Images/lupulo.jpg'
import './LogoWidget.css'
import { Link } from 'react-router-dom';

const LogoWidget = () => {
    return (

        <Link to={`/`}>
            <img alt="logo_image" src={logo} />
        </Link>

    );
}

export default LogoWidget;
