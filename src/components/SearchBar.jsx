import { useState, useEffect } from "react";
import styled from "styled-components";
import StarshipTable from "../components/StarshipTable";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useStarships from "../hooks/useStarships";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchData = useStarships();

  useEffect(() => {
    if (query.length == 0) {
      setSuggestions([]);
      setError("");
      setSuggestions([]);
      return;
    }


    const fetch_Star_ships = async () => {
      setError("");
      setSuggestions([]);
      setLoading(true);
      
      try {
        const response = await fetchData(query);
        if (!response) {
          setError("An error occurred. Please try again later.");
          setLoading(false);
          return;
        }
        setError(response.data.count === 0 ? "No results found." : "");
        setLoading(false);
        setSuggestions(response.data.results);
      } catch (error) {
        setError("An error occurred. Please try again later.");
        setLoading(false);
        console.error("Error fetching star ships", error);
      }
    };

    const debounceTimeout = setTimeout(fetch_Star_ships, 300);
    return () => clearTimeout(debounceTimeout);
  }, [query]);

  return (
    <>
      <div className="gap-[10px] flex flex-col items-center justify-center">
        <StyledWrapper1>
          <div>
            <div id="search-bar">
              <div className="glow" />
              <div className="darkBorderBg" />
              <div className="darkBorderBg" />
              <div className="darkBorderBg" />
              <div className="white" />
              <div className="border" />
              <div id="main">
                <input
                  placeholder="Search..."
                  type="text"
                  name="text"
                  className="input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoComplete="off"
                />
                <div id="input-mask" />
                <div id="pink-mask" />
                <div id="search-icon" className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    height={24}
                    fill="none"
                    className="feather feather-search"
                  >
                    <circle stroke="url(#search)" r={8} cy={11} cx={11} />
                    <line
                      stroke="url(#searchl)"
                      y2="16.65"
                      y1={22}
                      x2="16.65"
                      x1={22}
                    />
                    <defs>
                      <linearGradient
                        gradientTransform="rotate(50)"
                        id="search"
                      >
                        <stop stopColor="#f8e7f8" offset="0%" />
                        <stop stopColor="#b6a9b7" offset="50%" />
                      </linearGradient>
                      <linearGradient id="searchl">
                        <stop stopColor="#b6a9b7" offset="0%" />
                        <stop stopColor="#837484" offset="50%" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </StyledWrapper1>

        <div className="suggestions">
          {loading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {suggestions.length > 0 && <StarshipTable data={suggestions} />}
        </div>
      </div>
    </>
  );
};

const StyledWrapper1 = styled.div`
  .grid {
    height: 800px;
    width: 800px;
    background-image: linear-gradient(to right, #0f0f10 1px, transparent 1px),
      linear-gradient(to bottom, #0f0f10 1px, transparent 1px);
    background-size: 1rem 1rem;
    background-position: center center;
    position: absolute;
    z-index: -1;
    filter: blur(1px);
  }
  .white,
  .border,
  .darkBorderBg,
  .glow {
    max-height: 70px;
    max-width: 314px;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    /* Border Radius */
    border-radius: 12px;
    filter: blur(3px);
  }
  .input {
    background-color: #010201;
    border: none;
    /* padding:7px; */
    width: 510px;
    height: 56px;
    border-radius: 10px;
    color: white;
    padding-inline: 59px;
    font-size: 18px;
  }
  #search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input::placeholder {
    color: #c0b9c0;
  }

  .input:focus {
    outline: none;
  }

  #main:focus-within > #input-mask {
    display: none;
  }

  #input-mask {
    pointer-events: none;
    width: 100px;
    height: 20px;
    position: absolute;
    background: linear-gradient(90deg, transparent, black);
    top: 18px;
    left: 70px;
  }
  #pink-mask {
    pointer-events: none;
    width: 30px;
    height: 20px;
    position: absolute;
    background: #cf30aa;
    top: 10px;
    left: 5px;
    filter: blur(20px);
    opacity: 0.8;
    //animation:leftright 4s ease-in infinite;
    transition: all 2s;
  }
  #main:hover > #pink-mask {
    //animation: rotate 4s linear infinite;
    opacity: 0;
  }

  .white {
    max-height: 63px;
    max-width: 307px;
    border-radius: 10px;
    filter: blur(2px);
  }

  .white::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(83deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.4);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0) 0%,
      #a099d8,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 0) 50%,
      #dfa2da,
      rgba(0, 0, 0, 0) 58%
    );
    //  animation: rotate 4s linear infinite;
    transition: all 2s;
  }
  .border {
    max-height: 59px;
    max-width: 303px;
    border-radius: 11px;
    filter: blur(0.5px);
  }
  .border::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(70deg);
    position: absolute;
    width: 600px;
    height: 600px;
    filter: brightness(1.3);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #1c191c,
      #402fb5 5%,
      #1c191c 14%,
      #1c191c 50%,
      #cf30aa 60%,
      #1c191c 64%
    );
    // animation: rotate 4s 0.1s linear infinite;
    transition: all 2s;
  }
  .darkBorderBg {
    max-height: 65px;
    max-width: 312px;
  }
  .darkBorderBg::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(82deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #18116a,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 50%,
      #6e1b60,
      rgba(0, 0, 0, 0) 60%
    );
    transition: all 2s;
  }
  #search-bar:hover > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(262deg);
  }
  #search-bar:hover > .glow::before {
    transform: translate(-50%, -50%) rotate(240deg);
  }
  #search-bar:hover > .white::before {
    transform: translate(-50%, -50%) rotate(263deg);
  }
  #search-bar:hover > .border::before {
    transform: translate(-50%, -50%) rotate(250deg);
  }

  #search-bar:hover > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(-98deg);
  }
  #search-bar:hover > .glow::before {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
  #search-bar:hover > .white::before {
    transform: translate(-50%, -50%) rotate(-97deg);
  }
  #search-bar:hover > .border::before {
    transform: translate(-50%, -50%) rotate(-110deg);
  }

  #search-bar:focus-within > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(442deg);
    transition: all 4s;
  }
  #search-bar:focus-within > .glow::before {
    transform: translate(-50%, -50%) rotate(420deg);
    transition: all 4s;
  }
  #search-bar:focus-within > .white::before {
    transform: translate(-50%, -50%) rotate(443deg);
    transition: all 4s;
  }
  #search-bar:focus-within > .border::before {
    transform: translate(-50%, -50%) rotate(430deg);
    transition: all 4s;
  }

  .glow {
    overflow: hidden;
    filter: blur(30px);
    opacity: 0.4;
    max-height: 130px;
    max-width: 354px;
  }
  .glow:before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    position: absolute;
    width: 999px;
    height: 999px;
    background-repeat: no-repeat;
    background-position: 0 0;
    /*border color, change middle color*/
    background-image: conic-gradient(
      #000,
      #402fb5 5%,
      #000 38%,
      #000 50%,
      #cf30aa 60%,
      #000 87%
    );
    /* change speed here */
    //animation: rotate 4s 0.3s linear infinite;
    transition: all 2s;
  }

  @keyframes rotate {
    100% {
      transform: translate(-50%, -50%) rotate(450deg);
    }
  }
  @keyframes leftright {
    0% {
      transform: translate(0px, 0px);
      opacity: 1;
    }

    49% {
      transform: translate(250px, 0px);
      opacity: 0;
    }
    80% {
      transform: translate(-40px, 0px);
      opacity: 0;
    }

    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

  #filter-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    max-height: 40px;
    max-width: 38px;
    height: 100%;
    width: 100%;

    isolation: isolate;
    overflow: hidden;
    /* Border Radius */
    border-radius: 10px;
    background: linear-gradient(180deg, #161329, black, #1d1b4b);
    border: 1px solid transparent;
  }
  .filterBorder {
    height: 42px;
    width: 40px;
    position: absolute;
    overflow: hidden;
    top: 7px;
    right: 7px;
    border-radius: 10px;
  }

  .filterBorder::before {
    content: "";

    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.35);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #3d3a4f,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 50%,
      #3d3a4f,
      rgba(0, 0, 0, 0) 100%
    );
    animation: rotate 4s linear infinite;
  }
  #main {
    position: relative;
  }
  #search-icon {
    position: absolute;
    left: 20px;
    top: 15px;
  }
  .white,
  .border,
  .darkBorderBg,
  .glow {
    max-width: 514px;
  }
`;

export default SearchBar;
