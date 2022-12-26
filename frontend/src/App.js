import './App.css';
import Header from "./components/layout/header/header";
import Content from "./components/layout/content/content";
import Footer from "./components/layout/footer/footer";
import {useEffect} from "react";
import {useSelector} from "react-redux";

function App() {
    const cart = useSelector(state => state.cart);
    useEffect(() => {
        if (cart.cart.length > 0) {
            window.addEventListener('beforeunload', handleBeforeClose);
        }
        return () => {
            window.removeEventListener('beforeunload', handleBeforeClose)
        };
    }, [cart]);

    const handleBeforeClose = (event) => {
            event.preventDefault();
            return event.returnValue = '';
    };

    return (
        <div className="app container">
            <Header/>
            <div className="footer-content-wrapper">
                <Content/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;