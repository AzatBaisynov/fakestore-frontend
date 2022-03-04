import '../assets/style/style.scss';
import 'animate.css';
import AuthForm from "./auth/AuthForm";
import {useSelector} from "react-redux";
import Home from "./home/Home";
import Header from "./header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Product from "./product/Product";
import Add from "./add/Add";
import Cart from "./cart/Cart";
import Search from "./search/Search";

const App = () => {
    const token = useSelector(store => store?.authReducer?.token)

    if (token) {
        return (
            <div>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/product/:id" element={<Product />}/>
                        <Route path={"/cart"} element={<Cart/>}/>
                        <Route path="/add" element={<Add />}/>
                        <Route path="/search/:search" element={<Search />} />
                    </Routes>
                </Router>
            </div>
        )
    } else {
        return (
            <AuthForm />
        );
    }

}

export default App;
