import React from 'react'

import '../../styles/BusinessFranchise/FranchiseFormat.scss'

const FranchiseFormat = () => {
    return (
        <div className='franchise-format'>
            <div className="franchise-format__header">
                <h1><span>Franchise</span> Format</h1>
            </div>
            <div className="franchise-format__table-container">
                <table>
                    <thead>
                        <tr>
                            <th className='franchise-format__top-left'>Model</th>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                            <th>E</th>
                            <th className='franchise-format__top-right'>F</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >Store Name</td>
                            <td>LCC</td>
                            <td>LCC Plus</td>
                            <td>MCC</td>
                            <td>MCC+</td>
                            <td>SPOKE</td>
                            <td>HUB</td>
                        </tr>
                        <tr>
                            <td>Max space requirement</td>
                            <td>200 sq.ft</td>
                            <td>300 sq.ft</td>
                            <td>800 sq.ft</td>
                            <td>1500 sq.ft</td>
                            <td>3000 sq.ft</td>
                            <td>3500 sq.ft</td>
                        </tr>
                        <tr>
                            <td>Facilities</td>
                            <td>sample collection</td>
                            <td>sample collection</td>
                            <td>sample collection</td>
                            <td>sample collection</td>
                            <td>sample collection</td>
                            <td>sample collection</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>ECG cum Consultation</td>
                            <td>ECG cum Consultation</td>
                            <td>ECG cum Consultation</td>
                            <td>ECG cum Consultation</td>
                            <td>ECG cum Consultation</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultra sound</td>
                            <td>X ray</td>
                            <td>X ray</td>
                            <td>X ray</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultra sound</td>
                            <td>Ultra sound</td>
                            <td>Ultra sound</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>TMT</td>
                            <td>TMT</td>
                            <td>TMT</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>ECHO</td>
                            <td>ECHO</td>
                            <td>ECHO</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>PFT</td>
                            <td>PFT</td>
                            <td>PFT</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>CT</td>
                            <td>CT</td>
                        </tr>
                        <tr>
                            <td className='franchise-format__bottom-left'></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='franchise-format__bottom-right'>MRI</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FranchiseFormat