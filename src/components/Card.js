import { useState } from 'react';

function Card({hog}) {
    const [displayDetails, setDisplayDetails] = useState(false)
    const [displayPig, setDisplayPig] = useState(true)
    
    function handleClick() {
        setDisplayDetails(displayDetails => !displayDetails)
    }

    function handleBlur() {
        setDisplayDetails(displayDetails => displayDetails = false)
    }

    function handleHidePig() {
        setDisplayPig(displayPig => !displayPig)
    }
    
    return(
        <li>
            <div className="pigTile minPigTile maxPigTile" onClick={handleClick} onBlur={handleBlur} style={{visibility: displayPig ? "visible" : "hidden"}} >
                <h3 className="largeHeader">{hog.name}</h3>
                <div className='details' style={{visibility: displayPig ? (displayDetails ? "visible" : "hidden") : "hidden"}} >
                    <h3>Details:</h3>
                    <h4>Highest Medal Achieved:</h4>
                    <p>{hog['highest medal achieved']}</p>
                    <h4>Specialty:</h4>
                    <p>{hog.specialty}</p>
                    <h4>Weight:</h4>
                    <p>{hog.weight}</p>
                    <h4>Greased:</h4>
                    <p>{hog.greased ? "For sure!" : "Not so much."}</p>
                </div>
                <img src={hog.image} className="minBackgroundSneak maxBackgroundSneak" />
            </div>
            <button onClick={handleHidePig}>{displayPig ? "Hide Pig" : "Show Pig"}</button>
        </li>
    )
}

export default Card
