import React, { useState, useEffect, useContext } from 'react'

import '../../styles/LabTests/AllTests.scss'

import LabTestCard from '../LabTestCard'

import { UserLocationContext } from '../../context/UserLocation';

const AllTests = (props) => {
    // Using UserLocationContext to change price based on user location
    const userLocationContext = useContext(UserLocationContext);

    const [testCard, setTestCards] = useState(props.allTestCards);
    // re-setting value after props change 
    useEffect(() => {
        setTestCards(props.allTestCards);
    }, [props.allTestCards])

    function sortTestsByPrice(e) {
        e.stopPropagation();

        if (userLocationContext.userLocationState === 'chennai') {
            if (e.target.value === 'LowToHigh') {
                // Sorting Test by price -  Low To High 
                setTestCards([...testCard.sort((a, b) => { return a.chennaiPrice - b.chennaiPrice })]);
                console.log(testCard);
            }

            if (e.target.value === 'HighToLow') {
                // Sorting Test by price -  High To Low 
                setTestCards([...testCard.sort((a, b) => { return b.chennaiPrice - a.chennaiPrice })]);
                console.log(testCard);
            }
        } else if (userLocationContext.userLocationState === 'banglore') {
            if (e.target.value === 'LowToHigh') {
                // Sorting Test by price -  Low To High 
                setTestCards([...testCard.sort((a, b) => { return a.banglorePrice - b.banglorePrice })]);
                console.log(testCard);
            }

            if (e.target.value === 'HighToLow') {
                // Sorting Test by price -  High To Low 
                setTestCards([...testCard.sort((a, b) => { return b.banglorePrice - a.banglorePrice })]);
                console.log(testCard);
            }
        } else if (userLocationContext.userLocationState === 'andhraPradesh') {
            if (e.target.value === 'LowToHigh') {
                // Sorting Test by price -  Low To High 
                setTestCards([...testCard.sort((a, b) => { return a.andhraPradeshPrice - b.andhraPradeshPrice })]);
                console.log(testCard);
            }

            if (e.target.value === 'HighToLow') {
                // Sorting Test by price -  High To Low 
                setTestCards([...testCard.sort((a, b) => { return b.andhraPradeshPrice - a.andhraPradeshPrice })]);
                console.log(testCard);
            }
        } else {
            if (e.target.value === 'LowToHigh') {
                // Sorting Test by price -  Low To High 
                setTestCards([...testCard.sort((a, b) => { return a.price - b.price })]);
                console.log(testCard);
            }

            if (e.target.value === 'HighToLow') {
                // Sorting Test by price -  High To Low 
                setTestCards([...testCard.sort((a, b) => { return b.price - a.price })]);
                console.log(testCard);
            }
        }

    }

    return (
        <div className='all-tests'>
            <h1 className='all-tests__top-heading'>{props.topHeading}
                {
                    props.allTestCards.length > 0 && <div className="all-tests__price-filter">
                        <span> Price : &nbsp;</span>
                        <select name="price" id="test-price" onChange={(e) => sortTestsByPrice(e)}>
                            <option value="LowToHigh">Low To High</option>
                            <option value="HighToLow">High To Low</option>
                        </select>
                    </div>
                }
            </h1>
            {/* <div className="all-tests__header">
                <h1>{props.allTestCards.length > 0 ? `${props.allTestCards.length} Test` : 'No Test Found'} </h1>
            </div> */}

            <div className="all-tests__card-container">
                {
                    testCard.map((card, index) => (<LabTestCard key={card.testName + index} TestCard={card} />))
                }
            </div>
        </div>
    )
}

export default AllTests