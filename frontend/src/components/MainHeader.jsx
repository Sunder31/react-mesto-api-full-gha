import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';

function MainHeader({userData, setLoggedIn}) {

    const navigate = useNavigate();

    const handleSignOut = () => {
        auth
         .logout()
         .then(() => {
            localStorage.removeItem('isLoggedIn');
            setLoggedIn(false);
            navigate('/signin', { replace: true });
         })
         .catch((err) => {
            console.error(`${err} ${err.message}`);
         });
      };

    return (
        <header className="header">
            <div className="logo"></div>
            <div className="header__data">
                <p className="header__user-info">{userData}</p>
                <Link className='link' onClick={handleSignOut}>Выйти</Link>
            </div>
        </header>
    );
}

export default MainHeader;