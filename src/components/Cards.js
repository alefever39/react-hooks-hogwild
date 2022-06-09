import Card from "./Card";

function Cards({ hogs, filter }) {
    
    const filteredHogs = hogs.filter(hog => {
        if (filter === "All") {
            return true
        } else if (filter === "Greased") {
            return hog.greased
        } else {
            return !hog.greased
        }
    })
    
    return(
        <ul className="ui grid container">
            {filteredHogs.map(hog => <Card key={hog.name} hog={hog} />)}
        </ul>
    )
}

export default Cards