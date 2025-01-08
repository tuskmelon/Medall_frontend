import React, { useState } from 'react'

import '../../styles/BookYourTest/FilterTest.scss'

// import component 
import AllTests from '../LabTests/AllTests';

// import organs icons 
import { Kidney } from '../../assets/icons/organs/kidney.js'
import { Liver } from '../../assets/icons/organs/liver.js'
import { Heart } from '../../assets/icons/organs/heart.js'
import { Lungs } from '../../assets/icons/organs/lungs.js'
import { Brain } from '../../assets/icons/organs/brain.js'
import { Thyroid } from '../../assets/icons/organs/thyroid.js'
import { FemaleReproductive } from '../../assets/icons/organs/femaleReproductive'
import { Stomach } from '../../assets/icons/organs/stomach'
import { Pancreas } from '../../assets/icons/organs/pancreas';
import { Intestine } from '../../assets/icons/organs/intestine';
import { Systemic } from '../../assets/icons/organs/systemic.js';
import { Human } from '../../assets/icons/organs/human-body.js';
import { Joint } from '../../assets/icons/organs/joints.js';
import { Hormone } from '../../assets/icons/organs/hormone.js';
import { Blood } from '../../assets/icons/organs/blood.js';
import { ImmuneSystem } from '../../assets/icons/organs/immune-system.js';
import { KneeJoint } from '../../assets/icons/organs/knee-joint.js';
import { Digestive } from '../../assets/icons/organs/digestive-system.js';
import { Git } from '../../assets/icons/organs/GIT.js';
import { Bone } from '../../assets/icons/organs/bone.js';



const FilterTest = ({ testCards }) => {

    // Filtering Test Result 
    const [query, setquery] = useState('');

    // initially show only popular test
    const [filteredTests, setFilteredTests] = useState({
        query: '',
        list: testCards.filter(test => {
            return test.popular;
        }),
        topHeading: 'Most Searched Test'
    });


    // Handling Searched Test's from search bar 
    const handleChange = (e) => {
        e.stopPropagation();
        setquery(e.target.value);
        const results = testCards.filter(test => {
            if (test.testName) {
                return test.testName.toLowerCase().includes(e.target.value.toLowerCase());
            }
        });

        setFilteredTests({
            query: e.target.value,
            list: results,
            topHeading: `Showing results for ${e.target.value}`
        });

        // If search box is empty then show Popular Test 
        if (e.target.value === "") {
            const results = testCards.filter(test => {
                return test.popular;
            }
            )
            setFilteredTests({ ...filteredTests, list: results, topHeading: 'Most Searched Test' })
        }
    }

    // Handle filter 
    const [searchBar, setSearchBar] = useState(true);
    const [alphabetSearch, setAlphabetSearch] = useState(false);
    const [organSearch, setOrganSearch] = useState(false);

    // Handle Popular search results 
    function handlePopularSearch(e) {
        setSearchBar(true);
        setAlphabetSearch(false);
        setOrganSearch(false);
        const results = testCards.filter(test => {
            return test.popular;
        }
        )
        setFilteredTests({ ...filteredTests, list: results, topHeading: 'Most Searched Test' })
    }

    // Handle Search By Alphabet 
    function handleSearchByAlphabet(e) {
        e.stopPropagation();
        setSearchBar(false);
        setAlphabetSearch(true);
        setOrganSearch(false);
        const results = testCards.filter(test => {
            if (test.testName) {
                return test.testName.toLowerCase()[0] === 'a';
            }
        });
        setFilteredTests({ ...filteredTests, list: results, topHeading: 'Search By Alphabet' });
    }

    // handle Alphabet filter (filter out test, whose testName mathces with Alphabet value)
    function handleAlphabetFilter(e) {
        e.stopPropagation();
        const results = testCards.filter(test => {
            if (test.testName) {
                return test.testName.toLowerCase()[0] === e.target.value.toLowerCase();
            }
        });
        setFilteredTests({ ...filteredTests, list: results });
    }

    // Organs filter Selectors content
    const organs = [
        {
            organImage: Kidney,
            organName: 'Kidney'
        },
        {
            organImage: Liver,
            organName: 'Liver'
        },
        {
            organImage: Heart,
            organName: 'Heart'
        },
        {
            organImage: Lungs,
            organName: 'Lungs'
        },
        {
            organImage: Brain,
            organName: 'Brain'
        },
        {
            organImage: Thyroid,
            organName: 'Thyroid'
        },
        {
            organImage: FemaleReproductive,
            organName: 'Reproductive'
        },
        {
            organImage: Stomach,
            organName: 'Stomach'
        },
        {
            organImage: Pancreas,
            organName: 'Pancreas'
        },
        {
            organImage: Intestine,
            organName: 'Intestine'
        },
        {
            organImage: Blood,
            organName: 'Blood'
        },
        {
            organImage: KneeJoint,
            organName: 'Bones & Joints'
        },
        {
            organImage: Bone,
            organName: 'Bones'
        },
        {
            organImage: Joint,
            organName: 'Joints'
        },
        {
            organImage: Digestive,
            organName: 'Digestive System'
        },
        {
            organImage: Hormone,
            organName: 'Hormones'
        },
        {
            organImage: ImmuneSystem,
            organName: 'Immune System'
        },
        {
            organImage: Human,
            organName: 'Whole Body'
        },
        {
            organImage: Git,
            organName: 'GIT'
        },
        {
            organImage: Systemic,
            organName: 'Systemic'
        }
    ];

    function handleOrganSearchFilter(e) {
        setSearchBar(false);
        setAlphabetSearch(false);
        setOrganSearch(true);
        // By default show Kidney Test if clicked in Search By Organs 
        const results = testCards.filter(test => {
            if (test.relatedToOrgan) {
                return test.relatedToOrgan.toLowerCase().includes('kidney');
            }
        })
        setFilteredTests({ ...filteredTests, list: results, topHeading: 'Search By Kidney' })
    }

    function handleOrganFilter(e) {
        e.stopPropagation();
        const results = testCards.filter(test => {
            // Return test which includes mentioned organs
            if (test.relatedToOrgan) {
                return test.relatedToOrgan.toLowerCase().split(" ").join("").includes(e.target.value.toLowerCase().split(" ").join(""));
            }
        }
        )
        setFilteredTests({ ...filteredTests, list: results, topHeading: `Search By ${e.target.value}` })
    }

    // Condition Search Filter 
    function handleConditionSearchFilter(e) {
        setSearchBar(false);
        setAlphabetSearch(false);
        setOrganSearch(false);
        setFilteredTests({ ...filteredTests, list: [], topHeading: `Search By Condition` })
    }


    return (
        <div className='filter-test'>
            <div className='filter-test__container'>
                <h1 className='filter-test__heading'>Search Your Test Here</h1>

                {/* Search Bar Filter  */}
                {
                    searchBar && <div className="filter-test__search-bar-filter">
                        <span>
                            <input type="search" value={query} onInput={(e) => handleChange(e)} placeholder='Search your test here...' />
                        </span>
                    </div>
                }

                <div className="filter-test__filter-buttons">
                    {/* Popular Search  */}
                    <input type="radio" name="searchTags" id="filter-test__popular-search" value="popularSearch" defaultChecked={true} onChange={(e) => handlePopularSearch(e)} />
                    <label htmlFor="filter-test__popular-search">Popular Search</label>

                    {/* Alphabet Search  */}
                    <input type="radio" name="searchTags" id="filter-test__alphabet-search" value="alphabetSearch" onClick={(e) => { handleSearchByAlphabet(e) }} />
                    <label htmlFor="filter-test__alphabet-search" >Search By Letters</label>

                    {/* Organs Search  */}
                    <input type="radio" name="searchTags" id="filter-test__organs-search" value="organsSearch" onChange={(e) => { handleOrganSearchFilter(e) }} />
                    <label htmlFor="filter-test__organs-search">Search by Organs</label>

                    {/* Conditions Search  */}
                    {/* <input type="radio" name="searchTags" id="filter-test__condition-search" value="conditionSearch" onChange={(e) => { handleConditionSearchFilter(e) }} />
                    <label htmlFor="filter-test__condition-search">Condition</label> */}
                </div>

                {/* Alphabet Search Filter  */}
                {alphabetSearch &&
                    <div className="filter-test__alphabets-container">
                        {
                            ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(alphabet => <div className='filter-test__alphabet-input-group' key={alphabet}>
                                <input type='radio' name='filterAlphabet' value={alphabet} id={'filter-test__' + alphabet} onChange={(e) => handleAlphabetFilter(e)} defaultChecked={alphabet === 'A' ? true : false} />
                                <label htmlFor={'filter-test__' + alphabet}>{alphabet}</label>
                            </div>)
                        }
                    </div>
                }

                {/* Organs Search Filter */}
                {organSearch &&
                    <div className="filter-test__organ-filter-container">

                        {
                            organs.map(organ => <div className='filter-test__organs-input-group' key={organ}>
                                <input type='radio' name='filterOrgan' value={organ.organName} id={'filter-test__' + organ.organName} onChange={(e) => handleOrganFilter(e)} defaultChecked={organ.organName.toLowerCase() === 'kidney' ? true : false} />
                                <label htmlFor={'filter-test__' + organ.organName}>
                                    {organ.organImage}
                                    <span>{organ.organName}</span>
                                </label>
                            </div>)
                        }
                    </div>
                }

            </div>


            {/* <ul>
                {(filteredTests.query === '' ? "" : filteredTests.list.map(test => {
                    return <li key={test.title}>{test.title}</li>
                }))}
            </ul> */}
            <AllTests allTestCards={filteredTests.list} topHeading={filteredTests.topHeading} />
        </div >
    )
}

export default FilterTest