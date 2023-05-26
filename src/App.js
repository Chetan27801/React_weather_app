import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
	const [query, setQuery] = useState({ q: "delhi" });
	const [units, setUnits] = useState("metric");
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			await getFormattedWeatherData({ ...query, units }).then((data) => {
				setWeather(data);
			});
		};

		fetchWeather();
	}, [query, units]);

	const formatBackground = () => {
		if (!weather) return "from-cyan-600 to-blue-900";

		const threshold1 = units === "metric" ? 20 : 60;
		const threshold2 = units === "metric" ? 30 : 86;

		if (weather.temp <= threshold1) return "from-cyan-600 to-blue-900";
		else if (weather.temp <= threshold2) return "from-cyan-600 to-red-600";

		return "from-yellow-600 to-red-700";
	};

	return (
		<div
			className="h-screen bg-no-repeat bg-cover bg-bottom  mg:bg-fixed flex"
			style={{
				"background-image": `url("https://images.unsplash.com/photo-1498477386155-805b90bf61f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1254&q=80")`,
			}}
		>
			<div
				className={`m-auto  backdrop-blur-sm max-w-screen-md py-5 px-32 bg-gradient-to-br h-max shadow-xl shadow-gray-800 ${formatBackground()} `}
			>
				<div className="text-white text-3xl font-medium  text-center">
					Weather App
				</div>
				<hr className="my-3" />
				<TopButtons setQuery={setQuery} />
				<Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

				{weather && (
					<div>
						<TimeAndLocation weather={weather} />
						<TemperatureAndDetails weather={weather} />
					</div>
				)}
				{/* <Forecast title="hourly forcast" />
			<Forecast title="daily forcast" /> */}
			</div>
		</div>
	);
}

export default App;
