import React from 'react'


const PitcherDropdown = (props) => {
    console.log("map list " + props)
    return (
        <div className="pitcher-card">
            <div className="form-input">
                <input className="" type="text" name="pittcher" list="pittcherList" placeholder="Select Your Pitcher" />
                <datalist id="pittcherList"> {props.pitchersList} </datalist>
            </div>
            <div className="card">
                    <img src="img_avatar.png" alt="" />
                    <div className="card-container">
                    </div>
            </div>
        </div>
    )
}

export default PitcherDropdown