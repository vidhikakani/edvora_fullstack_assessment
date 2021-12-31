import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "../containers/Home"
import MyFavorites from "../containers/MyFavorites"
import PokemonDetail from "../containers/PokemonDetail"
import Login from "../containers/Login";
import Signup from "../containers/Signup";

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="favorites" element={<MyFavorites />} />
                <Route path="detail" element={<PokemonDetail />} />
                <Route path="signin" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default App