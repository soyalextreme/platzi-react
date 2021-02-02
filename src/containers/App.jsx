import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

// styles
import "../assets/styles/App.scss";



const App = () => {

    useEffect(() => {

        const fetchVideos = () => {
            const API = "http://localhost:3000/initalState";
            fetch(API).then(response => response.json()).then(data => setVideos(data));
        }

        fetchVideos();

    }, [])

    
    const [videos, setVideos] = useState({mylist: [], originals: [], trends: []});

    
    return (
    <div className="app">
        <Header />
        <Search />
        <Categories titleCategory="Mi Lista">
            <Carousel>
                {videos.mylist.length > 0 && videos.mylist.map( data => <CarouselItem key={data.id} {...data} />) }
            </Carousel>
        </Categories>
        <Categories titleCategory="Originales Platzi">
            <Carousel>
                {videos.originals.length > 0 && videos.originals.map( data => <CarouselItem key={data.id} {...data} />)}
            </Carousel>
        </Categories>
        <Categories titleCategory="Tendencias">
            <Carousel>
                {videos.trends.length > 0 && videos.trends.map( data => <CarouselItem key={data.id} {...data} />)}
            </Carousel>
        </Categories>
        <Footer />
    </div>
    );
}

export default App;