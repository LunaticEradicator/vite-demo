import React from "react";

export default function Box(props) {
    const [isOn, SetIsOn] = React.useState(props.on)

    const toggleColor = isOn ? "black" : "white"

    function boxClick() {
        SetIsOn(prevIsOn => {
            return prevIsOn ? false : true;
            // return !prevIsOn;
        })
    }

    const styles = {
        backgroundColor: toggleColor
    }
    return (
        <>
            <div style={styles} className="eachBox" onClick={boxClick}></div>
        </>
    )
}
