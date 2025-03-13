import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { useState } from 'react';
import StarshipTable from '../components/StarshipTable';

const data = [
    {
        name: "TIE Advanced x1",
        model: "T-70 X-wing",
        manufacturer: "Kuat Drive Yards",
        "crew-size": "1",
        "hyperdrive-rating": "1.0",
    },
    {
        name: "TIE Advanced x1",
        model: "T-70 X-wing",
        manufacturer: "Kuat Drive Yards",
        "crew-size": "1",
        "hyperdrive-rating": "1.0",
    },
    {
        name: "TIE Advanced x1",
        model: "T-70 X-wing",
        manufacturer: "Kuat Drive Yards",
        "crew-size": "1",
        "hyperdrive-rating": "1.0",
    },
    {
        name: "TIE Advanced x1",
        model: "T-70 X-wing",
        manufacturer: "Kuat Drive Yards",
        "crew-size": "1",
        "hyperdrive-rating": "1.0",
    },
    {
        name: "TIE Advanced x1",
        model: "T-70 X-wing",
        manufacturer: "Kuat Drive Yards",
        "crew-size": "1",
        "hyperdrive-rating": "1.0",
    },
  ];

const Index = () => {

    const [error, _] = useState("Oops something went wrong... Please try again later");

    return ( 
        <div className="app p-4 bg-black flex flex-col h-screen items-center justify-center">
            <div className="z-1">
                <SearchBar />
            </div>
            <Loader />
            {error && <ErrorMessage error={error}/>}
            <StarshipTable data={data}/>
        </div>
     );
}
 
export default Index;