import {useEffect, useState} from "react";
import FlowerService from "./services/FlowerService";

function App() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        FlowerService.getAllFlowers()
            .then(resp => setFlowers(resp.data))
    }, [])

    return (
        <>
            <ul>
                {flowers.map(flower => (
                    <li>{flower.id} : {flower.name}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
