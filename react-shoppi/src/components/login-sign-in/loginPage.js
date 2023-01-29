import './loginPageStyle.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {handleKeypress} from "../../Utils-and-Hooks/pressEnterHandle";
import {useUserActions} from "../../store/features/userSlice/actionsIndex";
import {PendingButton} from "../pendingButton";
import {checkUserFields} from "../../Utils-and-Hooks/checkUserFields";

// This component serve as login and sign-in depend on which pageName it receives
function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const userMessage = useSelector(state => state.user.message);
    const isUserLog = useSelector(state => state.user.isLog);
    const pending = useSelector(state => state.user.pending);

    const {signUser, logUser, logOutUser, resetMessage} = useUserActions();

    const [pageName, setPageName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [cameFromCart, setCameFromCart] = useState(false);
    const [subClicked, setSubClicked] = useState(false);
    const [subTrue, setSubTrue] = useState(false);

    const green = 'green-message', red = 'red-message';
    const [messageColor, setMessageColor] = useState(green);
    const [message, setMessage] = useState(userMessage);


    const handleSubmit = (type) => {

        setSubClicked(!subClicked);
        setSubTrue(true);

        const user = {username, email, password};

        if (type === 'Login') {

            if (checkUserFields(user, setMessageColor, setMessage)) {
                logUser(user);
            }
        }

        if (type === 'Sign-in') {
            if (checkUserFields(user, setMessageColor, setMessage)) {
                signUser(user);
            }
        }
    };

    useEffect(() => {
        if (location.pathname === '/login') {
            setPageName('Login');
        } else {
            setPageName('Sign-in');
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.state && location.state.id === '1') {
            setCameFromCart(true);
        }
    }, [location.state]);

    //useEffect navigate to home page when isUserLoge and subClicked is true
    useEffect(() => {
        if (isUserLog && subTrue && !cameFromCart) {
            navigate('/');
            setSubTrue(false);
        }
        if (!isUserLog && userMessage === 'not a signed user please sign in first (or check email spelling)') {
            setPageName('Sign-in');
            navigate('/sign-in');
        }
        if (!isUserLog && userMessage === 'you are a signed user please login') {
            setPageName('Login');
            navigate('/login');
        }
        if (isUserLog && cameFromCart) {
            navigate('/submit');
        }
    }, [isUserLog, subClicked, userMessage]);

    useEffect(() => {
        if (userMessage !== 'please fill the form\nto sign/log in') {
            setMessageColor(red);
            setMessage(userMessage);
        } else {
            setMessageColor(green);
            setMessage(userMessage);
        }
    }, [userMessage]);


    useEffect(() => {

        return () => {
            if (location.pathname !== '/login' || location.pathname !== '/sign-in') {
                resetMessage();
            }
        }

    }, []);

    return (
        <div onKeyDown={(e) => handleKeypress(e, handleSubmit, pageName)}>
            {!isUserLog ?
                <div className="container login">

                    <h1>{pageName}</h1>

                    <input type="text"
                           placeholder="3 letters username"
                           onChange={(event) => setUsername(event.target.value)}
                           value={username}/>
                    <input type="email"
                           placeholder="email"
                           onChange={(event) => setEmail(event.target.value)}
                           value={email}/>
                    <input type="password"
                           placeholder="password"
                           onChange={(event) => setPassword(event.target.value)}
                           value={password}/>

                    <p className={messageColor}>{message}</p>

                    <PendingButton
                        buttonText={pageName}
                        pendingTerm={pending}
                        onClick={handleSubmit}
                        onClickArgs={[pageName]}
                    />

                </div>
                :
                <div className="container login">
                    <h3>{userMessage}</h3>
                    <button
                        className="button"
                        onClick={() => logOutUser()}
                    >
                        Logout
                    </button>
                </div>
            }
        </div>
    );
}

export default Login;