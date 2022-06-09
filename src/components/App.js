import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Cards from "./Cards";

import hogs from "../porkers_data";

function App() {
	const [filter, setFilter] = useState("All")
	const [sortType, setSortType] = useState('Name')
	const [sortedHogs, setSortedHogs] = useState(hogs)

	function handleChange(e) {
		if (e.target.name === 'filter') {
			setFilter(e.target.value)
		} else if (e.target.name === "sort") {
			setSortType(sortType => sortType = e.target.value);
		}
	}

	function handleSort(e) {
        const unsorted = [...sortedHogs]
        const sorted = unsorted.sort((a, b) => {
			if (e.target.value === "Name"){
				let aName = a.name.toLowerCase();
				let bName = b.name.toLowerCase();
				return aName < bName ? -1 : aName > bName ? 1 : 0;
			} else if (e.target.value === "Weight") {
				let aWeight = a.weight;
				let bWeight = b.weight;
				return aWeight < bWeight ? -1 : aWeight > bWeight ? 1 : 0;
			}
		});
        setSortedHogs(sorted);
    }

	return (
		<div className="App">
			<Nav />
			<Filter onChange={handleChange} handleSort={handleSort} filter={filter} />
			<Cards hogs={sortedHogs} filter={filter} sortType={sortType} />
		</div>
	);
}

export default App;
