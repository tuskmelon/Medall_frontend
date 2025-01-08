import React, { useState, useEffect } from 'react'
import ScansCard from '../ScansCard'

import '../../styles/MRI/Scans.scss'

// import Card thumbnails 
import DoctorCheckingChestXray from "../../assets/images/scanThumbnails/doctor-checking-chest-xray.jpg"
import USG from "../../assets/images/scanThumbnails/usg.jpg"
import BrainCT from "../../assets/images/scanThumbnails/ct-brain.jpg"
import MRIMachine from "../../assets/images/scanThumbnails/mri-machine.jpg"

const Scans = ({ scanType }) => {

    const [scanData, setScanData] = useState([]);

    const scanDetailsForMRIPage = [
        {
            thumbnail: DoctorCheckingChestXray,
            title: "X-Ray",
            startingPrice: 300,
            description: "Book your X-ray now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyXrayMenu'
        },
        {
            thumbnail: USG,
            title: "USG Scans",
            startingPrice: 700,
            description: "Book your Ultrasound now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyUsgMenu'
        },
        {
            thumbnail: BrainCT,
            title: "CT Scans",
            startingPrice: 1700,
            description: "Book your CT Scan now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyCtMenu'
        },
    ];

    const scanDetailsForXrayPage = [
        {
            thumbnail: USG,
            title: "USG Scans",
            startingPrice: 700,
            description: "Book your Ultrasound now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyUsgMenu'
        },
        {
            thumbnail: BrainCT,
            title: "CT Scans",
            startingPrice: 1700,
            description: "Book your CT Scan now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyCtMenu'
        },
        {
            thumbnail: MRIMachine,
            title: "MRI Scans",
            startingPrice: 1500,
            description: "Book your MRI Scan now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyMriMenu'
        },
    ];

    const scanDetailsForUSGPage = [
        {
            thumbnail: DoctorCheckingChestXray,
            title: "X-Ray",
            startingPrice: 300,
            description: "Book your X-ray now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyXrayMenu'
        },
        {
            thumbnail: BrainCT,
            title: "CT Scans",
            startingPrice: 1700,
            description: "Book your CT Scan now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyCtMenu'
        },
        {
            thumbnail: MRIMachine,
            title: "MRI Scans",
            startingPrice: 1500,
            description: "Book your MRI Scan now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyMriMenu'
        },
    ];

    const scanDetailsForCTPage = [
        {
            thumbnail: DoctorCheckingChestXray,
            title: "X-Ray",
            startingPrice: 300,
            description: "Book your X-ray now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyXrayMenu'
        },
        {
            thumbnail: USG,
            title: "USG Scans",
            startingPrice: 700,
            description: "Book your Ultrasound now!",
            buttonLink: "/",
        },
        {
            thumbnail: MRIMachine,
            title: "MRI Scans",
            startingPrice: 1500,
            description: "Book your Mri Scan now!",
            buttonLink: "/",
            openMenuReference: 'openRadiologyMriMenu'
        },
    ];

    useEffect(() => {
        if (scanType === "MRI") {
            setScanData(scanDetailsForMRIPage);
        }
        if (scanType === "X-ray") {
            setScanData(scanDetailsForXrayPage);
        }
        if (scanType === "Ultrasound") {
            setScanData(scanDetailsForUSGPage);
        }
        if (scanType === "CT") {
            setScanData(scanDetailsForCTPage);
        }
    }, [scanType])

    return (
        <div className='scans'>
            <h2 className="scans__header">
                {/* {props.heading ? props.heading : 'Other Radiology Tests'} */}
                Other Radiology Tests
            </h2>
            <div className="scans__cards-container">
                {
                    scanData.map(scan => <ScansCard scanDetails={scan} key={scan.title} />)
                }
            </div>
        </div>
    )
}

export default Scans