import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "../containers/Home"
import MyFavorites from "../containers/MyFavorites"
import PokemonDetail from "../containers/PokemonDetail"
import Login from "../containers/Login";

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="favorites" element={<MyFavorites />} />
                <Route path="detail" element={<PokemonDetail />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App