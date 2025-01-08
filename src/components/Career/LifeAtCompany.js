import React, { useState, useRef } from 'react'

import '../../styles/Career/LifeAtCompany.scss'

// import icons
import Recognition from '../../assets/icons/recognition.svg'
import Growth from '../../assets/icons/men-with-up-arrow.svg'
// import Rings from '../../assets/icons/rings.svg'
import HandGrabSquare from '../../assets/icons/hand-grab-square.svg'
// import Check from '../../assets/icons/check-square.svg'
import MedallLogo from '../../assets/icons/medall-heart-dark.svg'

// Slide thumbnails 
import Trophies from '../../assets/images/trophies.jpg'
import CareerGrowth from '../../assets/images/career-growth.jpg'
import Learning from '../../assets/images/learning.jpg'
import employment from '../../assets/images/employment.jpg'
import inclusion from '../../assets/images/inclusion.jpg'
import Medal from '../../assets/images/medal.jpg'
import MileStone from '../../assets/images/flag-on-mountain.jpg'
import HandShake from '../../assets/images/handshake.jpg'
import StarAward from '../../assets/images/star-award.jpg'
import HandShakeOverTable from '../../assets/images/handshake-over-table.jpg'
import StarInDark from '../../assets/images/star-in-dark.jpg'
import MedallHridayaLogo from '../../assets/images/medall-hridaya-logo.png'
import SuccessLetters from '../../assets/images/success-letters-mountain.jpg'
import LMS from '../../assets/images/LMS.jpg'
import Technologies from '../../assets/images/technologies.jpg'
import Training from '../../assets/images/training.jpg'
import WalkingDiscussion from '../../assets/images/walking-discussion.jpg'
import GirlDoctor from '../../assets/images/girl-doctor.jpg'
import pregnantWomen from '../../assets/images/pregnant-women.jpg'
import Flowers from '../../assets/images/flowers.jpg'
import Patient from '../../assets/images/patient.jpg'
import Diversity from '../../assets/images/diversity.jpg'
import Pencils from '../../assets/images/pencils.jpg'
import Speaker from '../../assets/images/raising-speaker.jpg'
import Team from '../../assets/images/office-group.jpg'

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LifeAtCompany = () => {

    // Creating ref to Slider 
    const customeSlider = useRef();

    // give gradient border to Active Perk Slide 
    const [activeSlide, setActiveSlide] = useState(0);
    // const [activeTagClass, setActiveTagClass] = useState('');
    const [activeSlideData, setActiveSlideData] = useState({
        image: Trophies,
        title: "Best Model Hub Store award",
        description: "Given for recognising and encouraging workplaces that prioritise employee well-being, attracting and retaining talent, productivity and fostering a positive corporate culture which is done on a monthly based criteria.",
        buttonLink: "/",
    });

    const perks = [
        {
            icon: Recognition,
            text: 'Rewards & Recognition',
        },
        {
            icon: Growth,
            text: 'Career Growth'
        },
        {
            icon: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/Career/LearningAndDevelopmentCareer.svg',
            text: 'Learning & Development'
        },
        {
            icon: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/Career/employment.svg',
            text: 'Employment Engagement'
        },
        {
            icon: HandGrabSquare,
            text: 'Inclusion'
        },
    ];

    const bestModelHubStoreAward = {
        image: Trophies,
        title: "Best Model Hub Store Award",
        description: "Given for recognising and encouraging workplaces that prioritise employee well-being, attracting and retaining talent, productivity and fostering a positive corporate culture which is done on a monthly based criteria.",
        buttonLink: "/",
    }

    const bestEmployeeOfMonth = {
        image: Medal,
        title: "Best Employee of the month",
        description: "Given to boost morale among employees. It makes them feel appreciated and valued for their efforts which is done on a monthly criteria",
        buttonLink: "/",
    }

    const milestone = {
        image: MileStone,
        title: "Milestone celebration",
        description: "Milestone awards is a recognition and honor given to our long serving employees who have spent 5 to 10 years in the organization",
        buttonLink: "/",
    }
    const referBenefits = {
        image: HandShake,
        title: "Employee Refer And Win Benifits",
        description: "Given to our employees who refer suitable, talented and trustworthy candidates. A cash reward will be given if the candidate gets hired.",
        buttonLink: "/",
    }
    const instantAward = {
        image: StarAward,
        title: "Instant Awards",
        description: "The appeal of instant rewards lies in their immediacy and the sense of accomplishment or gratification they provide, which can motivate individuals to continue the desired behavior or action.",
        buttonLink: "/",
    }
    const buddy = {
        image: HandShakeOverTable,
        title: "Best Buddy",
        description: "It’s a token of appreciation to recognise the efforts and contribution provided by an employee to coach, guide and align them with organisational practices, culture, values, processes and systems for new entrants",
        buttonLink: "/",
    }
    const performanceRecog = {
        image: StarInDark,
        title: "Hi-Performance Recognition",
        description: "The company encourages young talents and recognises excellent performance, achievements and accomplishments that contribute to the overall objectives of the organisation.",
        buttonLink: "/",
    }
    const medallHridaya = {
        image: MedallHridayaLogo,
        title: "Medall Hridaya",
        description: "A knowledge platform to build the academic and the scientific temperament of the organisation where doctors can discuss medical topics, share information, collaborate and present case studies.",
        buttonLink: "/",
    }
    const journeyToExcellence = {
        image: SuccessLetters,
        title: "Journey to Excellence",
        description: "This program is designed to provide WOW customer experience",
        buttonLink: "/",
    }
    const learningManagementSystem = {
        image: LMS,
        title: "Learning Management System LMS",
        description: "LMS software is a platform that can administer, regulate, communicate, track and deliver learning. Also, it is equipped with features that enable to deliver fully automated online training and also support cross training models such as combined learning and flipped classroom approach.",
        buttonLink: "/",
    }

    const LMSfeatures = {
        image: Technologies,
        title: "LMS Features",
        description: "",
        buttonLink: "/",
        textList: [
            {
                text: "Tightly integrated with HRMS"
            },
            {
                text: "Training Audio, Video, PPT, PDF Courses can be created or uploaded."
            },
            {
                text: "Enhanced dashboard for the employees for the quick reference."
            },
            {
                text: "Question bank can be created and attached with Courses."
            },
            {
                text: "Training can be scheduled by batch Wise."
            },
            {
                text: "Test can be scheduled by batch Wise."
            },
            {
                text: "Trainer can be assigned to a batch."
            },
            {
                text: "Overall 3000 employees can use this application."
            },
            {
                text: "Concurrently 300 employees can attend the training."
            },
        ]
    }
    const trainingMethod = {
        image: Training,
        title: "Training Method",
        description: "",
        subHeading: "There will be 3 ways of training approach in LMS",
        buttonLink: "/",
        textList: [
            {
                listTitle: "Online Training - ",
                text: "Group of employees will be in one place and trainer will be interacting through online presence."
            },
            {
                listTitle: "Online Training - ",
                text: "Trainer will conduct face to face in the work site."
            },
            {
                listTitle: "Self Learning - ",
                text: "Employee can request for individual learning through email and trainer will map the course for online training."
            },
        ]
    }
    const LMSUserWebFlow = {
        image: Technologies,
        title: "LMS - User web flow",
        description: "LMS software is a platform that can administer, regulate, communicate, track and deliver learning. Also, it is equipped with features that enable to deliver fully automated online training and also support cross training models such as combined learning and flipped classroom approach.",
        buttonLink: "/",
    }
    const mobilityBenefits = {
        image: WalkingDiscussion,
        title: "Mobility Benefits",
        description: "",
        buttonLink: "/",
        headingWithDescription: [
            {
                heading: "Employee Transfer",
                description: "Transfer employees to new locations as per company requirements and provide support for the relocation process"
            },
            {
                heading: "Travel policy",
                description: "Travel Policy is to facilitate business travel within the state/ country by employees. The Policy aims at creating a level of comfort for the traveling employee and maintaining the dignity of the employee and making business travel cost effective."
            },
        ]
    }
    const healthWellness = {
        image: GirlDoctor,
        title: "Health & Wellness",
        description: "",
        buttonLink: "/",
        headingWithDescription: [
            {
                heading: "Employees  Diagnostic Discount Policy",
                description: "Employees, Doctors and full time consultants can avail this policy. The cap per employee for the year will be as per company guidelines. Coverage period will be from Jan to Dec every year ."
            },
            {
                heading: "Doctor’s Teleconsultation",
                description: "Employees can avail free teleconsultation with in-house doctors for immediate support at workplace"
            },
        ]
    }
    const maternityBenefit = {
        image: pregnantWomen,
        title: "Maternity Benefit",
        description: "",
        buttonLink: "/",
        headingWithDescription: [
            {
                heading: "Maternity benefit",
                description: "Maternity leave plays a vital role in ensuring the overall well-being of the mother and newborn child and allows women to adjust to their new role as mothers. This will help to protect women’s economic rights, ensure job security, and support their social function of childbearing and rearing , this is applicable to all the female employees as per statutory guidelines."
            },
        ]
    }
    const deathBenefit = {
        image: Flowers,
        title: "Death Benefit",
        description: "",
        buttonLink: "/",
        headingWithDescription: [
            {
                heading: "Death Benefit",
                description: "Employees Deposit Linked Insurance Scheme which help to cover the uncertainities in modern life"
            },
        ]
    }
    const insurance = {
        image: Patient,
        title: "Insurance",
        description: "",
        buttonLink: "/",
        headingWithDescription: [
            {
                heading: "Mediclaim Insurance",
                description: "Employees to cover their IP medical expenses or planned hospitalisation subject to classification."
            },
            {
                heading: "Group Personal Accident GPA",
                description: "This policy helps in covering the expenses of all employees for unforeseen happenings such as accident or death."
            },
            {
                heading: "Indemnity Insurance",
                description: "This policy helps when mistakes or errors done by professionals can lead to significant financial losses for the company . It helps protect assets and reputation in case of legal claims and provides peace of mind to both the professionals and the company."
            },
        ]
    }

    const diversity = {
        image: Diversity,
        title: "Diversity",
        description: "We promote Diversity and encompass differences among employees, including race, ethnicity, gender, age, sexual orientation, disability, religion, socioeconomic status and more.",
        buttonLink: "/",
    }

    const equalOpportunities = {
        image: Pencils,
        title: "Equal Opportunities",
        description: "we provide equal opportunities for all employees, ensuring that everyone has access to the same resources, promotions, training, and career advancement prospects.",
        buttonLink: "/",
    }

    const promoteFromWithin = {
        image: Speaker,
        title: "Promote from within",
        description: "We encourage employees to develop their skills & knowledge. We urge all the managers to coach and mentor their subordinates in developing their knowledge, skills and abilities (KSA).",
        buttonLink: "/",
    }

    const openCulture = {
        image: Team,
        title: "Open and accessible culture",
        description: "Employees are encouraged to express themselves, share their perspectives and contribute to decision-making.",
        buttonLink: "/",
    }

    const carouselSettings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrow: false,
        afterChange: function (index) {
            if (index) {
                setActiveSlide(index);
            } else {
                setActiveSlide(0);
            }

            if (index === 0) {
                setActiveSlideData(bestModelHubStoreAward);
            }
            if (index === 1) {
                setActiveSlideData(performanceRecog);
            }
            if (index === 2) {
                setActiveSlideData(learningManagementSystem);
            }
            if (index === 3) {
                setActiveSlideData(mobilityBenefits);
            }
            if (index === 4) {
                setActiveSlideData(diversity);
            }
        }
    }

    // go to respective slide when clicked on Perks
    function gotToSlide(slideNumber) {
        customeSlider.current.slickGoTo(slideNumber);
    }

    // Carousel slide datas 
    const slideContent = [
        {
            title: 'Rewards and Recognition',
            description: "",
            image: Trophies,
            tagsList: [
                {
                    text: "Best Model Hub Store Award"
                },
                {
                    text: "Best Employee of the month"
                },
                {
                    text: "Milestone celebration"
                },
                {
                    text: "Employee Refer And Win Benifits"
                },
                {
                    text: "Instant Awards"
                },
                {
                    text: "Best Buddy"
                },
            ]
        },
        {
            title: 'Career Growth',
            description: "",
            image: CareerGrowth,
            tagsList: [
                {
                    text: "Hi-Performance Recognition"
                },
                {
                    text: "Medall Hridaya"
                },
                {
                    text: "Journey to Excellence"
                },
            ]
        },
        {
            title: 'Learning and Development',
            description: "",
            image: Learning,
            tagsList: [
                {
                    text: "Learning Management System LMS"
                },
                {
                    text: "LMS Features"
                },
                {
                    text: "Training Method"
                },
                {
                    text: "LMS - User web flow"
                },
            ]
        },
        {
            title: 'Employment Engagement',
            description: "",
            image: employment,
            tagsList: [
                {
                    text: "Mobility Benefits"
                },
                {
                    text: "Health & Wellness"
                },
                {
                    text: "Maternity Benefit"
                },
                // {
                //     text: "Death Benefit"
                // },
                {
                    text: "Insurance"
                },
            ]
        },
        {
            title: 'Inclusion',
            description: "In our work environment all employees feel valued, respected, and supported, regardless of their backgrounds, identities, or differences. Inclusive workplaces foster a sense of belonging and ensure that every employee has an equal opportunity to contribute, thrive, and reach their full potential.",
            image: inclusion,
            tagsList: [
                {
                    text: "Diversity"
                },
                {
                    text: "Equal Opportunities"
                },
                {
                    text: "Promote from within"
                },
                {
                    text: "Open and accessible culture"
                },
            ]
        },
    ]


    const handleTagClick = (e, tag) => {
        e.preventDefault();
        e.stopPropagation();

        switch (tag) {
            case 'Best Model Hub Store Award':
                setActiveSlideData(bestModelHubStoreAward);
                break;
            case 'Best Employee of the month':
                setActiveSlideData(bestEmployeeOfMonth);
                break;
            case 'Milestone celebration':
                setActiveSlideData(milestone);
                break;
            case 'Employee Refer And Win Benifits':
                setActiveSlideData(referBenefits);
                break;
            case 'Instant Awards':
                setActiveSlideData(instantAward);
                break;
            case 'Best Buddy':
                setActiveSlideData(buddy);
                break;
            case 'Hi-Performance Recognition':
                setActiveSlideData(performanceRecog);
                break;
            case 'Medall Hridaya':
                setActiveSlideData(medallHridaya);
                break;
            case 'Journey to Excellence':
                setActiveSlideData(journeyToExcellence);
                break;
            case 'Learning Management System LMS':
                setActiveSlideData(learningManagementSystem);
                break;
            case 'LMS Features':
                setActiveSlideData(LMSfeatures);
                break;
            case 'Training Method':
                setActiveSlideData(trainingMethod);
                break;
            case 'LMS - User web flow':
                setActiveSlideData(LMSUserWebFlow);
                break;
            case 'Mobility Benefits':
                setActiveSlideData(mobilityBenefits);
                break;
            case 'Health & Wellness':
                setActiveSlideData(healthWellness);
                break;
            case 'Maternity Benefit':
                setActiveSlideData(maternityBenefit);
                break;
            case 'Death Benefit':
                setActiveSlideData(deathBenefit);
                break;
            case 'Insurance':
                setActiveSlideData(insurance);
                break;
            case 'Diversity':
                setActiveSlideData(diversity);
                break;
            case 'Equal Opportunities':
                setActiveSlideData(equalOpportunities);
                break;
            case 'Promote from within':
                setActiveSlideData(promoteFromWithin);
                break;
            case 'Open and accessible culture':
                setActiveSlideData(openCulture);
                break;
            default:
                setActiveSlideData(bestModelHubStoreAward);
        }
    }

    return (
        <div className='life-at-company'>
            <div className="life-at-company__container">
                <div className="life-at-company__header">
                    <h1>Life At <span> Medalll</span></h1>
                    {/* <h3>Chart your path to a fulfilling career at Medall Diagnostic Center. Join us for a healthcare journey filled with innovation, growth, and purpose.</h3> */}
                </div>
                <div className="life-at-company__perks-container">
                    {
                        perks.map((perk, index) => <div className='life-at-company__perk-box' key={perk.title} onClick={() => {
                            gotToSlide(index)
                        }}>
                            {
                                activeSlide === index && <div className="life-at-company__active-perk"></div>
                            }

                            <img src={perk.icon} alt="perk icon" />
                            <p>{perk.text}</p>
                        </div>)
                    }
                </div>

                {/* Carousel  */}
                <Slider className='life-at-company__carousel' ref={customeSlider} {...carouselSettings}>

                    {/* SLIDEs */}
                    {
                        slideContent.map(content => <div className="life-at-company__perk-slide" key={content.title}>


                            <div className="life-at-company__tags-container">
                                <ul>
                                    {
                                        content.description !== "" && <div className='life-at-company__extra-description'><p>{content.description}</p></div>
                                    }
                                    {
                                        content.tagsList.map(tag => <li className={activeSlideData.title === tag.text ? 'life-at-company__tag life-at-company__tag--active' : "life-at-company__tag"} key={tag.text} onClick={(e) => handleTagClick(e, tag.text)}>{tag.text}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="life-at-company__slide-inner-box">
                                <img src={activeSlideData.image} loading="lazy" alt="thumbnail" className='life-at-company__perk-image' />
                                <div className="life-at-company__perk-info">
                                    {
                                        activeSlideData.headingWithDescription ? "" : <h2>{activeSlideData.title}</h2>
                                    }
                                    <p className="life-at-company__perk-description">{activeSlideData.description} </p>

                                    {
                                        activeSlideData.textList && <>
                                            <h4 className='life-at-company__list-container-title'>{activeSlideData.subHeading}</h4>
                                            <ul className='life-at-company__list-details'>
                                                {
                                                    activeSlideData.textList.map(list => <li key={list.listTitle}><img src={MedallLogo} alt="medall logo" /><p><span>{list.listTitle}</span>{list.text}</p></li>)
                                                }
                                            </ul>
                                        </>
                                    }

                                    {
                                        activeSlideData.headingWithDescription && <>
                                            {
                                                activeSlideData.headingWithDescription.map(content => <div className='life-at-company__info-container'>
                                                    <h3 >{content.heading}</h3>
                                                    <p>{content.description}</p>
                                                </div>
                                                )
                                            }
                                        </>
                                    }

                                    {/* <div className="life-at-company__perk-point">
                                        <p><img src={Check} alt="check points" />Promotion</p>
                                        <p><img src={Check} alt="check points" />Work Culture</p>
                                        <p><img src={Check} alt="check points" />loreum ipsum</p>
                                    </div> */}
                                    {/* <a className="life-at-company__contact-btn" href="/">Contact Us</a> */}
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    )
}

export default LifeAtCompany