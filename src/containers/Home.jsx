import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

// styles
import "../assets/styles/App.scss";

// hooks

import useInitialState from "../hooks/useInitialState";

const Home = () => {
  const initialState = useInitialState();
  const { mylist, trends, originals } = initialState;

  return (
    <div className="app">
      <Header />
      <Search />
      <Categories titleCategory="Mi Lista">
        <Carousel>
          {mylist.length > 0 &&
            mylist.map((data) => <CarouselItem key={data.id} {...data} />)}
        </Carousel>
      </Categories>
      <Categories titleCategory="Originales Platzi">
        <Carousel>
          {originals.length > 0 &&
            originals.map((data) => <CarouselItem key={data.id} {...data} />)}
        </Carousel>
      </Categories>
      <Categories titleCategory="Tendencias">
        <Carousel>
          {trends.length > 0 &&
            trends.map((data) => <CarouselItem key={data.id} {...data} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default Home;
