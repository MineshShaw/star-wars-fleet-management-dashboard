import axios from "axios";

const useStarships = () => {
    return async (query) => {
        const response = await axios.get(
            `https://swapi.dev/api/starships/?search=${query}`
          );
            return response;
    };
}
 
export default useStarships;