import React, { useState } from 'react';
import '../../styles/Career/Benefits.scss'

// Import icons
import Insurance from '../../assets/icons/insurance.svg';
import GoodHealth from '../../assets/icons/good-health.svg';
import Help from '../../assets/icons/help.svg';
// import FlexibleWork from '../../assets/icons/flexible-work.svg';
import Percentage from '../../assets/icons/percentage.svg';
// import deathBenfit from '../../assets/icons/deadthBenfit.svg';
import Heart from '../../assets/icons/medall-heart-dark.svg';
import modalclose from '../../assets/icons/modalclose.svg';
import modalinsurance from '../../assets/icons/modalinsurance.svg';
import modalmaternity from '../../assets/icons/modalmaternity.svg';
import modalhealth from '../../assets/icons/modalhealth.svg';
import modalmobility from '../../assets/icons/modalmobility.svg';


const Benefits = () => {
  const [modal, setModal] = useState(null);

  const toggleModal = (index) => {
    setModal(index === modal ? null : index);

    // Toggle the CSS class on the body to prevent scrolling
    if (index !== modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

    // Stop website scroll when popUp is open 
    if (modal === null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll"
    }
  };

  const benefitsList = [
    {
      icon: GoodHealth,
      text: 'Mobility Benefits',
      modalImg: modalmobility,
      heartImg: Heart,
      modelTitle: 'Mobility Benefits',
      modalTitleTwo: 'Employee Transfer',
      modelContentTwo: 'Transfer employees to new locations as per company requirements and provide support for the relocation process',
      modalTitleThree: 'Travel policy',
      modelContentThree: 'Travel Policy is to facilitate business travel within the state/ country by employees. The Policy aims at creating a level of comfort for the traveling employee.',
    },
    {
      icon: Insurance,
      text: 'Health & Wellness',
      modalImg: modalhealth,
      heartImg: Heart,
      modelTitle: 'Health & Wellness',
      modalTitleTwo: 'Employees Free Diagnostic Discount Policy',
      modelContentTwo: 'Employees, Doctors and full time consultants can avail this policy. ',
      modalTitleThree: 'Doctors Teleconsultation',
      modelContentThree: 'Employees can avail free tele-consultation with in-house Doctors for immediate support at workplace.',
    },
    {
      icon: Help,
      text: 'Parental Support',
      modalImg: modalmaternity,
      heartImg: Heart,
      modelTitle: 'Maternity & Paternity benefit',
      modalTitleTwo: 'Maternity benefit',
      modelContentTwo: 'Maternity leave plays a vital role in ensuring the overall well-being of the mother and newborn child and allows women to adjust to their new role as mothers. This will help to protect women’s economic rights, ensure job security, and support their social function of childbearing and rearing , this is applicable to all the female employees as per statutory guidelines',
    },
    // {
    //   icon: FlexibleWork,
    //   text: 'Death Benefits',
    //   modalImg: deathBenfit,
    //   heartImg: Heart,
    //   modelTitle: 'Death benefit',
    //   modalTitleTwo: 'Death benefit',
    //   modelContentTwo: 'Employees Deposit Linked Insurance Scheme which help to cover the uncertainities in modern life.',
    // },
    {
      icon: Percentage,
      text: 'Insurance',
      modalImg: modalinsurance,
      heartImg: Heart,
      modelTitle: 'Insurance',
      modalTitleTwo: 'Mediclaim Insurance',
      modelContentTwo: 'Employees to cover their IP medical expenses or planned hospitalisation subject to classification.',
      modalTitleThree: 'Group Personal Accident GPA',
      modelContentThree: 'This policy helps in covering the expenses of unforeseen happenings such as accident / Death and this is covered for all employees.',
      modalTitleFour: 'Indemnity Insurance',
      modelContentFour: 'This policy helps when mistakes or errors done by professionals can lead to significant financial losses for the company . It helps protect assets and reputation in case of legal claims and provides peace of mind to both the professionals and company.',
    },
  ];

  return (
    <>
      <div className="benefits">
        <div className="benefits__header">
          <h1>
            <span>Benefits</span> For Our Employees
          </h1>
        </div>

        <div className="benefits__perks-container">
          {benefitsList.map((perk, index) => (
            <div
              className="benefits__perk"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => toggleModal(index)}
                className="btn-modal"
              >
                <img src={perk.icon} alt="icon" />
                <p>{perk.text}</p>

              </button>
            </div>
          ))}
        </div>
      </div>

      {modal !== null && (
        <div className="modal">
          <div onClick={() => toggleModal(null)} className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal" onClick={() => toggleModal(null)}>
              <img src={modalclose} alt="close" />
            </button>

            <div className="popupcontainer">
              <div>
                <h1>{benefitsList[modal].modelTitle}</h1>

                <h2>
                  <span><img className="heartimg" src={benefitsList[modal].heartImg} alt='heart' /></span>
                  &nbsp; {benefitsList[modal].modalTitleTwo}
                </h2>
                <br />
                {/* <p>{benefitsList[modal].modelContentTwo}</p> */}

                <h2>
                  <span><img className="heartimg" src={benefitsList[modal].modalTitleThree ? benefitsList[modal].heartImg : ""} alt='heart' /></span>
                  &nbsp; {benefitsList[modal].modalTitleThree ? benefitsList[modal].modalTitleThree : ""}
                </h2>


                {/* <p>{benefitsList[modal].modelContentThree}</p> */}
                <br />
                <h2>
                  <span><img className="heartimg" src={benefitsList[modal].modalTitleFour ? benefitsList[modal].heartImg : ""} alt='heart' /></span>
                  &nbsp; {benefitsList[modal].modalTitleFour ? benefitsList[modal].modalTitleFour : ""}
                </h2>
                {/* <p>{benefitsList[modal].modelContentFour}</p> */}
              </div>
              <div>
                <img className="modalimg" src={benefitsList[modal].modalImg} alt='modal' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Benefits;
