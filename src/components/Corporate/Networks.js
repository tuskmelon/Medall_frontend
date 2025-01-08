import React from 'react'

import '../../styles/Corporate/Networks.scss'


import Diagnostic from '../../assets/icons/diagnostic.svg'
import DiagnosticPartner from '../../assets/icons/diagnostic-partner.svg'
import Globe from '../../assets/icons/globe.svg'

const Networks = () => {

    const networks = [
        {
            icon: Diagnostic,
            text: 'Centers in 5 states'
        },
        {
            icon: DiagnosticPartner,
            text: 'Diagnostic Partners in other cities'
        },
        {
            icon: Globe,
            text: 'Pan India service'
        },
    ]
    return (
        <div className='network'>
            <div className="network__header">
                <h1><span>Our</span> Networks</h1>
                {/* <h3>Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis condimentum id iaculis tincidunt scelerisque in. Mauris lacinia nunc in sem consequat euismod. Sit mal</h3> */}
            </div>
            <div className="network__info">

                <ul>
                    {networks.map(network => <li key={network.text}>
                        <img src={network.icon} alt="network" />
                        <p>{network.text}</p>
                    </li>)}
                </ul>

            </div>
        </div>
    )
}

export default Networks