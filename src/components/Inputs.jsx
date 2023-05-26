import React, { useState } from "react";
import {
	UilSearch,
	UilLocationPoint,
	UilSearchAlt,
} from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
	const [city, setCity] = useState("");

	const handleUnitsChange = (e) => {
		const selectedUnit = e.currentTarget.name;

		if (units !== selectedUnit) setUnits(selectedUnit);
	};

	const handleSearchClick = () => {
		if (city !== "") setQuery({ q: city });
	};

	const handleLocationClick = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				let lat = position.coords.latitude;
				let lon = position.coords.longitude;

				setQuery({
					lat,
					lon,
				});
			});
		}
	};

	return (
			<div className="flex flex-row justify-center my-6">
				<div className="flex flex-row w-3/4 items-center justify-center space-x-4">
					<input
						value={city}
						onChange={(e) => setCity(e.currentTarget.value)}
						type="text"
						placeholder="search for cities..."
						className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-md"
					/>
					<UilSearch
						size={35}
						className="text-white cursor-pointer transition ease-out hover:scale-150"
						onClick={handleSearchClick}
					/>
					<UilLocationPoint
						size={35}
						className="text-white cursor-pointer transition ease-out hover:scale-150"
						onClick={handleLocationClick}
					/>

					<div className="flex flex-row w-1/4 items-center justify-center">
						<button
							name="metric"
							className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125"
							onClick={handleUnitsChange}
						>
							°C
						</button>
						<p className="text-xl text-white mx-1">|</p>
						<button
							name="imperial"
							className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125"
							onClick={handleUnitsChange}
						>
							°F
						</button>
					</div>
				</div>
			</div>
	);
}

export default Inputs;
