import React from 'react'
import { Dna } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading