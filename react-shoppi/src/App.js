import './App.css';
import Header from "./components/layout/header/header";
import Content from "./components/layout/content/content";
import Footer from "./components/layout/footer/footer";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {AppStyle} from "./jsAppStyle";
import {imagUrl} from "./jsAppStyle";


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
        <AppStyle url={imagUrl}>

            <Header/>
                <div className="footer-content-wrapper">
                    <Content/>
                    <Footer/>
                </div>

        </AppStyle>
    );
}

export default App;