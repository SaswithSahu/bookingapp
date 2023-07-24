import{RiArrowRightLine} from "react-icons/ri"

import "./index.css"


const Flights = (props) =>{
    const{each} = props
    return(
        <li className="list-Item">
        <div>
        <h3 className="airline">{each.airline}</h3>
          <p className="flightnumber">{each.flightNumber}</p>
        </div>
        <div className="from-to-container">
            <p>{each.from}</p>
            <RiArrowRightLine className="arrow-icon"/>
            <p>{each.to}</p><br/> 
        </div>
        <div>
        <p>Available Seats:{4}</p>
        <h5>Price:{230}</h5>
        </div>
            <button>Book Now</button>
        </li>
    )
} 

export default Flights