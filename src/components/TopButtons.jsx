import React from "react";

function TopButtons({ setQuery }) {
	const cities = [
		{
			id: 1,
			title: "Delhi",
		},
		{
			id: 2,
			title: "Mumbai",
		},
		{
			id: 3,
			title: "Tokyo",
		},
		{
			id: 4,
			title: "Chicago",
		},
		{
			id: 5,
			title: "London",
		},
	];
	return (
		<div className="flex items-center justify-between md:justify-around my-6">
			<button
				key={cities[0].id}
				className="text-white text-lg font-medium "
				onClick={() => setQuery({ q: cities[0].title })}
			>
				{cities[0].title}
			</button>
			<button
				key={cities[1].id}
				className="text-white text-lg font-medium hidden md:block"
				onClick={() => setQuery({ q: cities[1].title })}
			>
				{cities[1].title}
			</button>
			<button
				key={cities[2].id}
				className="text-white text-lg font-medium "
				onClick={() => setQuery({ q: cities[2].title })}
			>
				{cities[2].title}
			</button>
			<button
				key={cities[3].id}
				className="text-white text-lg font-medium "
				onClick={() => setQuery({ q: cities[3].title })}
			>
				{cities[3].title}
			</button>
			<button
				key={cities[4].id}
				className="text-white text-lg font-medium hidden md:block"
				onClick={() => setQuery({ q: cities[4].title })}
			>
				{cities[4].title}
			</button>
		</div>
	);
}

export default TopButtons;
