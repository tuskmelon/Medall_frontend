import React, { useMemo, useEffect, useState } from 'react'
import { GoogleMap, MarkerF, LoadScript, InfoWindowF, DrawingManager, useJsApiLoader, CircleF } from "@react-google-maps/api";
// import { useSelector, useDispatch } from "react-redux";
// import { language } from '../Redux/Action';
// import styled, { useTheme } from 'styled-components'
// const url = process.env.REACT_APP_GOOGLE_API_KEY

const url = "AIzaSyCZ2oKS4HrPmNtc8ge0W3hy50ZdIowPrjU"

// const markers = [
//     { lat: 13.0827, lng: 80.2707 },
//     { lat: 13.0937, lng: 80.2807 },
//     { lat: 13.0847, lng: 80.2907 },
// ];
const Googlemap = ({ BankState, style, zoom }) => {
    // const themecolor = useTheme();
    // const BranchData = useSelector((state) => state?.userReducer?.branch);
    // const coords = JSON.parse(localStorage.getItem('coords'));
    console.log("coords==>", BankState)
    const lib = ['places'];
    // const [isState, setisState] = useState([BankState]);
    // const [zoom, setzoom] = useState(10)
    // const [radius, setradius] = useState(3000)
    const [markers, setmarkers] = useState([]);
    const [mapRef, setMapRef] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [infoWindowData, setInfoWindowData] = useState();
    // console.log("mapdata==>", markers, zoom)
    const libraries = useMemo(() => ['places'], [])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: url,
        libraries
    });
    useEffect(() => {
        if (BankState) {
            init(BankState)
        }
    }, [BankState]);


    const init = async (data) => {
        let Rebulid = data.map((item, index) => {
            return {
                lat: item?.latitude,
                lng: item?.longitude,
                address: `${item?.address}`
            }
        })
        setmarkers(Rebulid)
        // console.log("rebulid==>", Rebulid)
    }
    const onMapLoad = (map) => {
        // console.log("mapload", map)
        setMapRef(map);
        map.setZoom(map.zoom)
        // const bounds = new window.google.maps.LatLngBounds();
        // markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        // map.fitBounds(bounds);
    };

    const handleMarkerClick = (id, lat, lng, address) => {
        mapRef?.panTo({ lat, lng });
        setInfoWindowData({ id, address });
        setIsOpen(true);
    };

    return (
        <div className=''>
            {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY} libraries={lib} > */}
            {isLoaded &&
                < GoogleMap mapContainerStyle={style}
                    zoom={zoom || 10}
                    // coords==> {lat: 13.0827, lng: 80.2707}
                    center={{ lat: markers[0]?.lat ? markers[0]?.lat : 13.0827, lng: markers[0]?.lng ? markers[0]?.lng : 80.2707 }}
                    onLoad={onMapLoad} >
                    {/* <DrawingManager /> */}
                    {markers?.map(({ lat, lng, address, circle }, index) => (
                        <div key={index}>
                            <MarkerF
                                position={{ lat, lng }}
                                // icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
                                onClick={() => {
                                    handleMarkerClick(index, lat, lng, address);
                                }}
                            >
                                {isOpen && infoWindowData?.id === index && (
                                    <InfoWindowF
                                        onCloseClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        <h5 style={{ fontSize: "14px", padding: "10px" }}>{infoWindowData?.address}</h5>
                                    </InfoWindowF >
                                )}
                            </MarkerF>
                            {/* {
                                index == 0 && <CircleF
                                    center={{ lat: lat, lng: lng }}
                                    radius={circle?.radius}
                                    options={circle?.options}
                                />
                            } */}
                        </div>
                    ))}
                </GoogleMap>
            }
        </div >
    )
}

export default Googlemap