import React from "react";

export default function Box(props) {
    const darkMode = props.darkMode ? "black" : "antiquewhite"
    // const evenNumber = (props.even % 2 == 0) ? "red" : "blue"

    const isOn = props.on ? "red" : "white"

    const styles = {
        backgroundColor: isOn
    }
    return (
        <div style={styles} className="eachBox">
        </div>
    )
}