import { useState } from "react";
import "./App.css";
import { useWeatherData } from "./services/apiWeather";
import { AnimatePresence, motion } from "framer-motion";
import InputSearch from "./components/InputSearch";
import CardData from "./components/CardData";

function App() {
  const [search, setSearch] = useState("");
  const { data } = useWeatherData(search);
  const [WeatherDataList, setWeatherDataList] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setWeatherDataList([data, ...WeatherDataList]);
      setSearch("");
    }
  };

  return (
    <>
      <main className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <header className="bg-gray-900 text-white">
          <div className="max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
            <div className="max-w-xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Weather app</h2>
            </div>
          </div>
        </header>
        <div className="max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
          <InputSearch
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Pais que quieras buscar"
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 
            px-4 text-gray-900 shadow-sm sm:text-sm"
          />
        </div>
        <div className="max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
          <AnimatePresence mode="sync">
            {WeatherDataList.map((weatherData, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                style={{ marginBottom: "20px" }}
              >
                <CardData data={weatherData} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}

export default App;
