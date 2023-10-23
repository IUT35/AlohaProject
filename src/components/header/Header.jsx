import { faCalendar, faCalendarDays, faCampground, faGuitar, faMapLocation, faMapLocationDot, faMartiniGlassCitrus, faPeopleArrows, faPeopleLine, faPeopleRoof, faPerson, faPersonCane, faPersonCirclePlus, faPersonDotsFromLine, faSailboat, faTheaterMasks } from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState, date,handleDateSelect,handleDateChange } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { animated, useSpring} from "react-spring"
import { FaGuitar, FaMask, FaCampground, FaCar } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';


const Header = ({type}) => {

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    
    adult:1,
    children:0,
  });
  const handleOption = (name,operation)=>{
  setOptions(prev=>{return {
    ...prev, [name]:operation === "i" ? options[name] +1 : options[name] -1,
  };
  });
  }
  
  const icons = [FaGuitar, FaMask, FaCampground, FaCar];
  const transitionInterval = 3000; // Change icons every 3 seconds (3000 milliseconds)
  
  const AutoIconTransition = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(changeIcon, transitionInterval);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
  
    const changeIcon = () => {
      setIndex((prevIndex) => (prevIndex + 1) % icons.length);
    };
  
    return (
      <div className="auto-icon-transition">
        <CSSTransition
          in={true}
          appear={true}
          timeout={300}
          classNames="icon-transition"
          key={index}
        >
          <div className="icon-wrapper">
            {React.createElement(icons[index], { size: 35 })}
          </div>
          </CSSTransition>
      </div>
    );
  };
  
  function Number ({ n }){
    const {number} = useSpring({
      from:{number:0},
      number:n,
      delay:200,
      config: {mass:1, tension: 50, friction: 300},

    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  const YourComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
     const handleDateChange = (date) => {
      date.setHours(0, 0, 0, 0);
      setStartDate(date);
    };
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"  // Corrected format to include both date and time

      />
      <div className="selected-date-time">
        Selected Date and Time: {startDate.toLocaleString()}
      </div>
    </div>
  );
};    


    return (
    <div className="header"> 
      <div className={type==="List" ? "headerContainer listMode":"headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faGuitar} />
            <span>Concerts</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTheaterMasks} />
            <span>Theaters</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPeopleRoof} />
            <span>InDoor Activities</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCampground} />
            <span>OutDoor Activities</span>
            </div>
        </div>
        {type !== "List" &&
          <><h1 className="headerTitle"> <p className="headerText1"><Number n={100} /></p>s of tickets for any kinda <div className="text"><AutoIconTransition /></div> </h1>
           <p className="headerDesc">All the activities and artists you love are a ticket away! </p>
           <button className="headerBtn">Sign In Here</button>
          <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faMapLocationDot} className="headerIcon" />
            <input type="text" placeholder="Heading up to ?"
           className="headerSearchInput" /> 
          </div>
         <div className="headerSearchItem">
           <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
           <span className="headerSearchText" >I'll be there</span>
            <DatePicker
               selected={date}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="Pp"
              isClearable
              yearDropdownItemNumber
              scrollableMonthYearDropdown
              
           />
           </div>
          <div className="headerSearchItem">
           <FontAwesomeIcon icon={faPersonCirclePlus} className="headerIcon" />
         <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{options.adult} adult {options.children} children' </span>
         {openOptions &&<div className="options">
          <div className="optionItem">
         <span className="optionText">Adult</span>
        <div className="optionCounter"></div>
       <button
       disabled={options.adult<=1}
       className="optionCounterBtn" onClick={()=>handleOption("adult" ,"d")}>- </button>
        <span className="optionCounterNumer">{options.adult}</span>
         <button className="optionCounterBtn"onClick={()=>handleOption("adult" ,"i")}>+</button>
          </div>
            <div className="optionItem">
         <span className="optionText">Children</span>
         <div className="optionCounter"></div>
         <button
             disabled={options.children<=0}
           className="optionCounterBtn" onClick={()=>handleOption("children" ,"d")}>-</button>
             <span className="optionCounterNumer">{options.children}</span>
           <button className="optionCounterBtn" onClick={()=>handleOption("children" ,"i")}>+</button>
          </div>
       </div>}
         </div>
        <div className="headerSearchItem">
        <button className="headerBtn">Search</button>
          </div>
      </div></>}
  </div>
</div> 
 );
};

export default Header  