import React, { useState } from 'react' 
import './MoodInput.css'

function MoodInput() {
    const [selected, setSelected] = useState('')
    console.log(selected)
    function onClick(e) {
        e.preventDefault();
        console.log(e)
        const id = e.target.id
        if (id === selected) setSelected('')
        else {
            console.log(id)
            setSelected(id)
            const b = document.getElementById(id)
            b.style.class = "mood-button " + id === selected ? "selected" : ""
        }
    }
    return (
        <div className="mood-buttons">
            <button className={`mood-button ${selected === "1" ? 'selected' : ''}`} id="1" onClick={onClick}>
                <svg id="1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="1" d="M16 0H18V4H20V6H24V4H26V10H28V14H26V12H24V14H22V12H18V10H16V12H14V10H12V14H10V12H8V14H4V12H6V10H8V4H10V6H14V4H16V0Z" fill="#1A1A1A"/>
                    <path id="1" d="M6 2H8V4H6V2Z" fill="#1A1A1A"/>
                    <path id="1" d="M26 2H28V4H26V2Z" fill="#1A1A1A"/>
                    <path id="1" d="M2 14H4V18H2V14Z" fill="#1A1A1A"/>
                    <path id="1" d="M28 14H30V18H28V14Z" fill="#1A1A1A"/>
                    <path id="1" d="M8 16H12V20H8V16Z" fill="#1A1A1A"/>
                    <path id="1" d="M18 16H22V20H18V16Z" fill="#1A1A1A"/>
                    <path id="1" d="M0 18H2V26H0V18Z" fill="#1A1A1A"/>
                    <path id="1" d="M30 18H32V26H30V18Z" fill="#1A1A1A"/>
                    <path id="1" d="M4 20H6V22H4V20Z" fill="#1A1A1A"/>
                    <path id="1" d="M24 20H26V22H24V20Z" fill="#1A1A1A"/>
                    <path id="1" d="M8 22H10V24H8V22Z" fill="#1A1A1A"/>
                    <path id="1" d="M20 22H22V24H20V22Z" fill="#1A1A1A"/>
                    <path id="1" d="M10 24H20V26H10V24Z" fill="#1A1A1A"/>
                    <path id="1" d="M2 26H4V28H2V26Z" fill="#1A1A1A"/>
                    <path id="1" d="M28 26H30V28H28V26Z" fill="#1A1A1A"/>
                    <path id="1" d="M4 28H8V30H4V28Z" fill="#1A1A1A"/>
                    <path id="1" d="M24 28H28V30H24V28Z" fill="#1A1A1A"/>
                    <path id="1" d="M8 30H24V32H8V30Z" fill="#1A1A1A"/>
                </svg>
            </button>
            <button className={`mood-button ${selected === "2" ? 'selected' : ''}`} id="2" onClick={onClick}>
                <svg id="2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="2" d="M18 0H24V2H20V6H22V8H24V12H26V14H22V12H18V10H16V12H14V10H12V14H10V12H8V10H10V8H12V6H14V4H16V2H18V0Z" fill="#1A1A1A"/>
                    <path id="2" d="M6 12H8V14H6V12Z" fill="#1A1A1A"/>
                    <path id="2" d="M4 14H6V16H4V14Z" fill="#1A1A1A"/>
                    <path id="2" d="M26 14H28V16H26V14Z" fill="#1A1A1A"/>
                    <path id="2" d="M2 16H4V18H2V16Z" fill="#1A1A1A"/>
                    <path id="2" d="M28 16H30V18H28V16Z" fill="#1A1A1A"/>
                    <path id="2" d="M0 18H2V26H0V18Z" fill="#1A1A1A"/>
                    <path id="2" d="M8 18H12V20H8V18Z" fill="#1A1A1A"/>
                    <path id="2" d="M18 18H22V20H18V18Z" fill="#1A1A1A"/>
                    <path id="2" d="M30 18H32V26H30V18Z" fill="#1A1A1A"/>
                    <path id="2" d="M4 20H6V22H4V20Z" fill="#1A1A1A"/>
                    <path id="2" d="M24 20H26V22H24V20Z" fill="#1A1A1A"/>
                    <path id="2" d="M8 22H10V24H8V22Z" fill="#1A1A1A"/>
                    <path id="2" d="M20 22H22V24H20V22Z" fill="#1A1A1A"/>
                    <path id="2" d="M10 24H20V26H10V24Z" fill="#1A1A1A"/>
                    <path id="2" d="M2 26H4V28H2V26Z" fill="#1A1A1A"/>
                    <path id="2" d="M28 26H30V28H28V26Z" fill="#1A1A1A"/>
                    <path id="2" d="M4 28H8V30H4V28Z" fill="#1A1A1A"/>
                    <path id="2" d="M24 28H28V30H24V28Z" fill="#1A1A1A"/>
                    <path id="2" d="M8 30H24V32H8V30Z" fill="#1A1A1A"/>
                </svg>
            </button>
            <button className={`mood-button ${selected === "3" ? 'selected' : ''}`} id="3" onClick={onClick}>
                <svg id="3" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="3" d="M16 0H18V4H20V6H22V8H24V10H26V14H22V12H20V14H18V10H16V12H14V10H12V14H10V12H8V10H10V8H12V6H14V4H16V0Z" fill="#1A1A1A"/>
                    <path id="3" d="M2 4H4V6H2V4Z" fill="#1A1A1A"/>
                    <path id="3" d="M30 4H32V6H30V4Z" fill="#1A1A1A"/>
                    <path id="3" d="M4 6H6V8H4V6Z" fill="#1A1A1A"/>
                    <path id="3" d="M28 6H30V8H28V6Z" fill="#1A1A1A"/>
                    <path id="3" d="M6 8H8V10H6V8Z" fill="#1A1A1A"/>
                    <path id="3" d="M26 8H28V10H26V8Z" fill="#1A1A1A"/>
                    <path id="3" d="M6 12H8V14H6V12Z" fill="#1A1A1A"/>
                    <path id="3" d="M4 14H6V16H4V14Z" fill="#1A1A1A"/>
                    <path id="3" d="M14 14H16V18H14V14Z" fill="#1A1A1A"/>
                    <path id="3" d="M26 14H28V16H26V14Z" fill="#1A1A1A"/>
                    <path id="3" d="M2 16H4V18H2V16Z" fill="#1A1A1A"/>
                    <path id="3" d="M6 16H8V18H6V16Z" fill="#1A1A1A"/>
                    <path id="3" d="M22 16H24V18H22V16Z" fill="#1A1A1A"/>
                    <path id="3" d="M28 16H30V18H28V16Z" fill="#1A1A1A"/>
                    <path id="3" d="M0 18H2V26H0V18Z" fill="#1A1A1A"/>
                    <path id="3" d="M8 18H12V20H8V18Z" fill="#1A1A1A"/>
                    <path id="3" d="M18 18H22V20H18V18Z" fill="#1A1A1A"/>
                    <path id="3" d="M30 18H32V26H30V18Z" fill="#1A1A1A"/>
                    <path id="3" d="M12 22H18V24H12V22Z" fill="#1A1A1A"/>
                    <path id="3" d="M10 24H12V26H10V24Z" fill="#1A1A1A"/>
                    <path id="3" d="M18 24H20V26H18V24Z" fill="#1A1A1A"/>
                    <path id="3" d="M2 26H4V28H2V26Z" fill="#1A1A1A"/>
                    <path id="3" d="M28 26H30V28H28V26Z" fill="#1A1A1A"/>
                    <path id="3" d="M4 28H8V30H4V28Z" fill="#1A1A1A"/>
                    <path id="3" d="M24 28H28V30H24V28Z" fill="#1A1A1A"/>
                    <path id="3" d="M8 30H24V32H8V30Z" fill="#1A1A1A"/>
                </svg>
            </button>
            <button className={`mood-button ${selected === "4" ? 'selected' : ''}`} id="4" onClick={onClick}>
                <svg id="4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="4" d="M16 0H18V2H20V4H22V6H24V8H26V12H22V10H20V12H18V8H16V10H14V8H12V12H10V10H8V8H10V6H12V4H14V2H16V0Z" fill="#1A1A1A"/>
                    <path id="4" d="M6 10H8V12H6V10Z" fill="#1A1A1A"/>
                    <path id="4" d="M4 12H6V14H4V12Z" fill="#1A1A1A"/>
                    <path id="4" d="M26 12H28V14H26V12Z" fill="#1A1A1A"/>
                    <path id="4" d="M2 14H4V16H2V14Z" fill="#1A1A1A"/>
                    <path id="4" d="M10 14H12V16H10V14Z" fill="#1A1A1A"/>
                    <path id="4" d="M18 14H20V16H18V14Z" fill="#1A1A1A"/>
                    <path id="4" d="M28 14H30V16H28V14Z" fill="#1A1A1A"/>
                    <path id="4" d="M0 16H2V24H0V16Z" fill="#1A1A1A"/>
                    <path id="4" d="M8 16H10V18H8V16Z" fill="#1A1A1A"/>
                    <path id="4" d="M20 16H22V18H20V16Z" fill="#1A1A1A"/>
                    <path id="4" d="M30 16H32V24H30V16Z" fill="#1A1A1A"/>
                    <path id="4" d="M6 18H8V20H6V18Z" fill="#1A1A1A"/>
                    <path id="4" d="M14 18H16V20H14V18Z" fill="#1A1A1A"/>
                    <path id="4" d="M22 18H24V20H22V18Z" fill="#1A1A1A"/>
                    <path id="4" d="M12 20H14V22H12V20Z" fill="#1A1A1A"/>
                    <path id="4" d="M16 20H18V22H16V20Z" fill="#1A1A1A"/>
                    <path id="4" d="M10 22H12V24H10V22Z" fill="#1A1A1A"/>
                    <path id="4" d="M18 22H20V24H18V22Z" fill="#1A1A1A"/>
                    <path id="4" d="M2 24H4V26H2V24Z" fill="#1A1A1A"/>
                    <path id="4" d="M28 24H30V26H28V24Z" fill="#1A1A1A"/>
                    <path id="4" d="M4 26H8V28H4V26Z" fill="#1A1A1A"/>
                    <path id="4" d="M24 26H28V28H24V26Z" fill="#1A1A1A"/>
                    <path id="4" d="M8 28H24V30H8V28Z" fill="#1A1A1A"/>
                </svg>
            </button>
        </div>
    );
}

export default MoodInput;
