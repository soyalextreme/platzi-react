import React from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

// styles
import "../assets/styles/App.scss";


const App = () => (
    <div className="app">
        <Header />
        <Search />
        <Categories>
            <Carousel>
                <CarouselItem />
            </Carousel>
        </Categories>
        <Footer />
    </div>
);

export default App;