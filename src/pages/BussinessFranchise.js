import React from 'react'

// import components 
import FranchiseHero from '../components/BusinessFranchise/FranchiseHero'
import HeadingWithCarousel from '../components/HeadingWithCarousel'
import Advantage from '../components/BusinessFranchise/Advantage'
import FranchiseForm from '../components/BusinessFranchise/FranchiseForm'
import SideMenuCarousel from '../components/BusinessFranchise/SideMenuCarousel'
// import FranchiseFormat from '../components/BusinessFranchise/FranchiseFormat'
import Process from '../components/BusinessFranchise/Process'

// import images lab section
import ourlab1 from '../assets/images/ourlabslide1.jpg'
import ourlab2 from '../assets/images/ourlabslide2.jpg'
import ourlab3 from '../assets/images/ourlabslide3.jpg'
import ourlab4 from '../assets/images/ourlabslide4.jpg'
import ourlab5 from '../assets/images/ourlabslide5.jpg'
// import ourlab6 from '../assets/images/ourlabslide6.jpg'

// FranchiseSection images
// import franchiseslide1 from '../assets/images/franchiseslide1.jpg'
import franchiseslide2 from '../assets/images/franchiseslide2.jpg'
import franchiseslide3 from '../assets/images/franchiseslide3.jpg'

const BusinessFranchise = () => {

    const LabSectionData = [
        {
            title: "Our",
            colourTitle: "Labs",
            subTitle: "Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis condimentum id iaculis tincidunt scelerisque in. Mauris lacinia nunc in sem consequat euismod. Sit mal"
        },
        [
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: ourlab1
            },
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: ourlab2
            },
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: ourlab3
            },
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: ourlab4
            },
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: ourlab5
            },
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/FranchisePage/Our+Lab.jpg'
            },
        ]
    ]

    const FranchiseSectionData = [
        {
            title: "Our",
            colourTitle: "Franchise Centers",
            subTitle: "Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis condimentum id iaculis tincidunt scelerisque in. Mauris lacinia nunc in sem consequat euismod. Sit mal"
        },
        [
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/FranchisePage/Our+Franchise66.jpg'
            },
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: franchiseslide2
            },
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/FranchisePage/Our+Franchise.3jpg.jpg'
            },
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/FranchisePage/Our+Franchise.jpg'
            },
            {
                slideTitle: 'Loreum Ipsum',
                slideDescription: 'Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis ',
                slideImage: franchiseslide3
            },
        ]
    ]

    return (
        <>
            <FranchiseHero />
            <Advantage />
            <HeadingWithCarousel labData={LabSectionData} />
            <HeadingWithCarousel labData={FranchiseSectionData} />
            <FranchiseForm />
            <SideMenuCarousel />
            {/* <FranchiseFormat /> */}
            <Process />
        </>
    )
}

export default BusinessFranchise