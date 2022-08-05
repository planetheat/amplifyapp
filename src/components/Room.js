import React from 'react'
// import {NavLink} from 'react-router-dom'

const Room = ({props, handleSelect}) => {

    const colour = (temp) => {
        if (temp >= 26){
            return "#E24125"
        }else if (temp <26 && temp >=21){
            return "#E5612A"
        }else if(temp < 21 && temp > 18) {
            return "#E8812F"
        }else if(temp <= 18 && temp > 15){
            return "#ECA035"
        }else if(temp <= 15 && temp > 12){
            return "#EFC03A"
        }else if(temp <= 12 && temp > 8){
            return "#F2E03F"
        }else if(temp <= 8 && temp > 4 ){
            return "#F2E03F"
        }else if(temp < 4){
            return "#A8D8DF"
        }else{
            return "#ffffff"
        }
    }

    // const highlighter = () => {
    //     if(props.name === highlight){
    //         return "border-4"
    //     }else{
    //         return "border-2"
    //     }
    // }
    // const slugger = (string) => {
    //     return string.toLowerCase().replace(" ", "-")
    // }

    // const slug = slugger(props.name)

    // call handleSelect to set selected room in Rooms.js
    // const selector = (e) => {
    //     e.preventDefault()
    //     handleSelect(e.target.innerHTML)
    // } 

    const countDecimals = (value) => {
        if(Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0; 
    }

    const round = (num) => {
        console.log(num)
        let dec = countDecimals(num)
        let sliced;
        if(dec > 5){
            sliced = num.toString().slice(0, 5)
        }else{
            sliced = num
        }
        console.log(sliced)
        sliced = parseInt(sliced)
        if(sliced < 0){
            return Math.ceil(sliced)
        }else{
            return Math.floor(sliced)
        }
    }

    return (
        // <NavLink to={"/rooms"} >
        <div className={"w-28 h-18 rounded shadow-lg border-2 border-blue-200 cursor-pointer sm:w-32 sm:h-18 p-1"}  style={{backgroundColor: colour(props.temp)}} onClick={()=> handleSelect(props.location)}>  
        <div className="p-1 text-sm" >
            <h4 className="font-bold">{props.location}</h4>
        </div> 
        <h6 className=""><span className="font-bold p-1">{round(props.temp)}</span>°C</h6>
        </div>
        // </NavLink>
    )
}

export default Room
