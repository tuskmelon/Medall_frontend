import React, { useState } from 'react'
import Select from "react-dropdown-select";
import '../../styles/Map/Map.scss'
import Googlemap from './GoogleMap';
import { locationdata } from '../../resources/Locations/Location';

const Map = () => {
    const States = [
        {
            value: "Tamil Nadu",
            label: "Tamil Nadu"
        },
        {
            value: "Andhra Pradesh",
            label: "Andhra Pradesh"
        },
        {
            value: "Karnataka",
            label: "Karnataka"
        },
        // {
        //     value: "Jharkhand",
        //     label: "Jharkhand"
        // },
    ];

    const [City, setCity] = useState([]);
    const [Selectedcity, setSelectedcity] = useState();
    const [Branch, setBranch] = useState([]);
    const [searchBranch, setsearchBranch] = useState([]);
    const [mapdata, setmapdata] = useState();
    const [allLocation,setAllLocation]=useState([])


    const handleState = (data) => {
        // console.log("data", data[0].value)
        setSelectedcity(data[0].value)
        setCity([])
        const filterdata = locationdata?.filter(word => word?.STATE == data[0].value);
        let formatChange = [];
        let arr = [];
        filterdata?.map((data, index) => {
            if (!(arr.includes(data.City))) {
                let obj = {
                    "label": data.City,
                    "value": data.City
                };
                formatChange.push(obj);
                arr.push(data.City)
            }
        });
        setCity([...formatChange]);
        // console.log("filterdata", filterdata)

    }
    const handleCity = (data) => {
        console.log("citydata", data[0].value)
        const filterdata = locationdata?.filter(word => word?.City == data[0].value);
        console.log("filterdata", filterdata)
        let formatChange = [];
        let unFormatChange = [];
        let arr = [];
        filterdata?.map((data, index) => {
            if (!(arr.includes(data.Locality))) {
                let obj = {
                    "label": data.Locality,
                    "value": data.Locality,
                    "latitude": data.latitude,
                    "longitude": data.Longitude,
                    "address": data.Address,
                    "brand_name": data.CentreName,
                    "phone": data.PhoneNo
                };
                formatChange.push(obj);
                arr.push(data.Locality)
            }
        });
        filterdata?.map((data, index) => {
                let obj = {
                    "label": data.Locality,
                    "value": data.Locality,
                    "latitude": data.latitude,
                    "longitude": data.Longitude,
                    "address": data.Address,
                    "brand_name": data.CentreName,
                    "phone": data.PhoneNo
                };
                unFormatChange.push(obj);
        });

        console.log(formatChange,"formatChange")
        setBranch([...formatChange]);
        // console.log("filterdata", filterdata)
        setAllLocation(unFormatChange)
    }
    const handleBranch = (data) => {
            setsearchBranch(data)
    // console.log("databranch", data,allLocation.filter(word => word?.value == data[0].value))

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("searchBranch", searchBranch)
        setmapdata(searchBranch)
    }

    const showInMapClicked = (item) => {
        // e.preventDefault();
        console.log("direction Click==>", item)
        window.open("https://maps.google.com?q=" + item?.latitude + "," + item?.longitude);
    };
    const Card = ({ data }) => {
        console.log("item", data)
        return (
            <>
                <div class="card">
                    <div class="cardcontainer">
                        <div className='card-header'>
                            <h3>{data?.brand_name}</h3>
                        </div>
                        <div className='addressHeader'>
                            <h4>Address</h4>
                        </div>
                        <div className='card-container'>
                            <p className='content'>{`${data?.address}`}</p>
                        </div>
                        <div class="btn-container">
                            <div>
                                <button type="submit"
                                    onClick={() => window.open(`tel:${data.phone}`)}
                                    className="cardbutton" >Call</button>
                            </div>
                            <div>
                                <button type="submit"
                                    onClick={() => showInMapClicked(data)}
                                    className="cardbutton" >Direction</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='map'>
            <div className='container '>
                <h2 className='container__heading'>Find your nearest Medall</h2>

                <div className="row" style={{}}>
                    <div className="" >
                        <div className="Dropdown" >
                            <form onSubmit={handleSubmit}>
                                <div class="flex-container ">
                                    <h3>Search for Medall Branches</h3>
                                    <Select className='selectbox' placeholder="Select State" options={States} searchable={true} onChange={(e) => { handleState(e) }} />
                                    <Select className='selectbox' placeholder="Select City" options={City} value={Selectedcity} searchable={true} onChange={(e) => { handleCity(e) }} />
                                    <Select className='selectbox' placeholder="Select Branch" options={Branch} searchable={true} onChange={(e) => { handleBranch(e) }} />
                                    <div className='searchbtn'>
                                        <button type="submit" className="button">Search</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="column" >
                        <Googlemap BankState={mapdata} zoom={12} style={{ height: "60vh", width: "100%" }} />
                    </div>
                </div>
            </div>
            {mapdata?.length > 0 &&
                <>
                    <div className='container'>
                        <h2 className='container__heading'>Nearby Centre</h2>
                    </div>
                    <div className='card-style'>
                        {
                            mapdata?.map((data, index) => {
                                return (
                                    <Card key={index} data={data} />
                                )
                            })
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Map