import React, {useState} from 'react';
import Moment from 'react-moment';
import {FaCaretDown} from 'react-icons/fa'
import {FaCaretUp} from 'react-icons/fa'


const DateCard = ({item, index}) => {

    const [isExpanded, setIsExpanded] = useState(false)

    const expandCollapse = () => {
        setIsExpanded(!isExpanded)
    }

    const renderPopup = () => {
        if(isExpanded === false){
            return <div></div>
        }else{
            return <div className="pl-4 bg-red-100 rounded text-sm">
                <h4 className="font-bold border-b-2 border-gray-700 mr-4">Device Data:</h4>
                {
                    item && item.payload.temperatures.map((t, i)=>(
                        <div className="flex justify-between px-2 pr-8" key={i}>{t.location} 
                        <span className="bg-blue-200 p-1">{Math.floor(t.temp)}°C</span>
                        </div>
                    ))
                }
            </div>
        }
    }

    const background = (index) => {
        if(index % 2 === 1){
            return "bg-gray-300"
        }else{
            return "bg-gray-400"
        }
    }
  
  return (  <div className="pl-1">
    <div className="" onClick={expandCollapse}>
        <div className={`flex rounded ${background(index)} p-1 justify-between`}>
            <Moment format="ddd DD MM YYYY hh:mm:ss ">{1000 * parseInt(item.payload.epoch)}</Moment>
            {!isExpanded? <FaCaretDown /> : <FaCaretUp/>}
        </div>
        {renderPopup()} 
    </div> 
</div>);
};

export default DateCard;
