import React from "react"
import dataArray from './data'
import Box from "./Box";

export default function App() {
    const [data, SetData] = React.useState(dataArray);

    const mapData = data.map(item => {
        // console.log(item.id)
        return (
            <Box
                key={item.id}
                darkMode={false}
                on={item.on}
            />
        )
    })

    return (
        <div className="app">
            {mapData}
        </div>
    )
}

{/* {mapData} */ }