import {useState, useEffect} from "react";



const useInitialState = ()=> {

    const [videos, setVideos] = useState({mylist: [], originals: [], trends: []});

    useEffect(() => {
        const fetchVideos = () => {
            const API = "http://localhost:3000/initalState";
            fetch(API).then(response => response.json()).then(data => setVideos(data));
        }

        fetchVideos();

    }, [])


    return videos;
}


export default useInitialState;