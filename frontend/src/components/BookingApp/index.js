import { Component } from "react";

import Flights from "../Flights"

import {ImLocation2} from "react-icons/im"

import {BsFillCalendarDateFill,BsFillPeopleFill} from "react-icons/bs"

import "./index.css"

class BookingApp extends Component{
  state = {from:"",to:"",date:"",flights:[],showHome:true}

  setFrom = (event) =>{
      this.setState({from:event.target.value})
  }

  setTo = (event) =>{
    this.setState({to:event.target.value})
  }

  setDate = (event) =>{
    this.setState({date:event.target.value})
  }

  getAvailableFlights = async () =>{
    const {from,to} = this.state
    const url = `http://localhost:3000/flights/?from=${from}&to=${to}`
    const response = await fetch(url)
    const data =await response.json()
    this.setState({flights:[...data],showHome:false})
  }
    render(){
      const {flights,showHome} = this.state
      console.log(flights)
        return(
          <>
          {
            showHome?(
              <div className="main-container">
            <div className="content-container">
                <h1 className="content">
                    Sky is waiting For You
                    Let's make your trip Better
                </h1>
                <div className="form-element">
                    <div className="label-input-container">
                      <label>From</label>
                      <div className="input-container">
                        <ImLocation2 className="icon"/>
                        <input placeholder="City or airport" onChange={this.setFrom}/>
                      </div>
                    </div>
                    <div className="label-input-container">
                      <label>TO</label>
                      <div className="input-container">
                        <ImLocation2 className="icon"/>
                        <input placeholder="City or airport" onChange={this.setTo}/>
                      </div>
                    </div>
                    <div className="label-input-container">
                      <label>Date</label>
                      <div className="input-container">
                        <BsFillCalendarDateFill className="icon"/>
                        <input placeholder="dd-mm-yyyy" onChange={this.setDate}/>
                      </div>
                    </div>
                    <div className="label-input-container">
                      <label>Total Tickets</label>
                      <div className="input-container">
                        <BsFillPeopleFill className="icon"/>
                        <input placeholder="total members" onChange={this.setMembers}/>
                      </div>
                    </div>
                    <div>
                      <button type = "button" onClick={this.getAvailableFlights}>Show Flights</button>
                    </div>
               </div>
            </div>
           </div>

            ):(
            <>
            {
              flights.length > 0 ?(
                <>
                <h1>Available Flights</h1>
                <ul className="list-of-available-flights">
              {flights.map(each =>(<Flights each = {each}/>))}
            </ul>
            </>
              ):<p className="err-para">Currently Flights are Not available</p>
            }
              
            </>
            )
          }
           
           </>
        )
    }
}

export default BookingApp