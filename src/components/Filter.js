function Filter({ onChange, filter, handleSort }) {

    return <div className="filterWrapper">
        <label>Pig Filter: </label>
        <select name='filter' onChange={onChange} value={filter} >
            <option>All</option>
            <option>Greased</option>
            <option>Not Greased</option>
        </select>
        <label>Sort By: </label>
        <select name='sort' onChange={handleSort} >
            <option>Name</option>
            <option>Weight</option>
        </select>
    </div>
}

export default Filter