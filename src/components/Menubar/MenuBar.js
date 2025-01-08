import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { UserLocationContext } from '../../context/UserLocation';

import '../../styles/MenuBar.scss'

import { Link } from "react-router-dom";

// import DownArrow from '../../assets/icons/down-arrow.svg'
import Upload from '../../assets/icons/upload.svg'
import TestTube from '../../assets/icons/test-tube.svg'
import Location from '../../assets/icons/location-solid.svg'

// importing all tests and scans list
import XRays from './TestAndScansList/Radiology/XRay';
import USGs from './TestAndScansList/Radiology/USG';
import CT from './TestAndScansList/Radiology/CT';
import MRI from './TestAndScansList/Radiology/MRI';
import ECG from './TestAndScansList/Radiology/ECG'
import ECHO from './TestAndScansList/Radiology/ECHO';
import TMT from './TestAndScansList/Radiology/TMT';
import Mammogram from './TestAndScansList/Radiology/Mammogram';
import TestBasedOnOrgans from './TestAndScansList/Pathology/TestsBasedOnOrgan'
import PopularTests from './TestAndScansList/PopularTests/PopularTests';

// import Context 
import { OpenHealthPackageMenuContext } from '../../context/OpenHealthPackageMenu';
import { OpenRadiologyMenu } from '../../context/OpenRadiologyMenu';
import { OpenPopularTestMenuContext } from '../../context/OpenPopularTestMenu';


const MenuBar = () => {
    const openHealthPackageMenuContext = useContext(OpenHealthPackageMenuContext);
    const openRadiologyMenu = useContext(OpenRadiologyMenu);
    const openPopularTestMenuContext = useContext(OpenPopularTestMenuContext);
    const userLocationContext = useContext(UserLocationContext);

    const [toggleXRayMenu, setToggleXRayMenu] = useState(false);
    const [toggleLabTestMenu, setToggleLabTestMenu] = useState(false);
    const [togglePackagesMenu, setTogglePackagesMenu] = useState(false);

    const arrowSvg = <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.99999 6.9748C5.86665 6.9748 5.73732 6.9498 5.61199 6.8998C5.48665 6.8498 5.38265 6.78314 5.29999 6.6998L0.699987 2.0998C0.516654 1.91647 0.424988 1.68314 0.424988 1.3998C0.424988 1.11647 0.516654 0.883138 0.699987 0.699804C0.883321 0.516471 1.11665 0.424805 1.39999 0.424805C1.68332 0.424805 1.91665 0.516471 2.09999 0.699804L5.99999 4.5998L9.89999 0.699804C10.0833 0.516471 10.3167 0.424805 10.6 0.424805C10.8833 0.424805 11.1167 0.516471 11.3 0.699804C11.4833 0.883138 11.575 1.11647 11.575 1.3998C11.575 1.68314 11.4833 1.91647 11.3 2.0998L6.69999 6.6998C6.59999 6.7998 6.49165 6.8708 6.37499 6.9128C6.25832 6.9548 6.13332 6.97547 5.99999 6.9748Z" fill="currentColor" />
    </svg>

    // Open Health Package menu When Click on Health Package Menu  under Our Services 
    useEffect(() => {
        if (openHealthPackageMenuContext.healthPackageDisplayState) {
            setTogglePackagesMenu(true);
        }
        if (openPopularTestMenuContext.openPopularTestMenuState) {
            setToggleLabTestMenu(true);
        }
        if (!togglePackagesMenu) {
            openHealthPackageMenuContext.healthPackageDisplayDispatch({ type: 'closeHealthPackageMenu' })
            openPopularTestMenuContext.openPopularTestMenuReducerDispatch({ type: 'closePopularTestMenu' })
        }
        if (openRadiologyMenu.openRadiologyMenuState.isXRayOpen) {
            setToggleXRayMenu(true);
            setXRayAndScanSubMenuOne(true);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        }
        if (openRadiologyMenu.openRadiologyMenuState.isUsgOpen) {
            setToggleXRayMenu(true);
            setXRayAndScanSubMenuTwo(true);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        }
        if (openRadiologyMenu.openRadiologyMenuState.isCtOpen) {
            setToggleXRayMenu(true);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(true);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        }
        if (openRadiologyMenu.openRadiologyMenuState.isMriOpen) {
            setToggleXRayMenu(true);
            setXRayAndScanSubMenuFour(true);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        }
        if (openRadiologyMenu.openRadiologyMenuState.isEcgOpen) {
            setToggleXRayMenu(true);
            setXRayAndScanSubMenuFive(true);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        }
        if (openRadiologyMenu.openRadiologyMenuState.isEchoOpen) {
            setToggleXRayMenu(true);
            setXRayAndScanSubMenuSix(true);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        }
        if (openRadiologyMenu.openRadiologyMenuState.isTmtOpen) {
            setToggleXRayMenu(true);
            setXRayAndScanSubMenuSeven(true);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuEight(false);
        }
        if (openRadiologyMenu.openRadiologyMenuState.isManmmogramOpen) {
            setToggleXRayMenu(true);
            setXRayAndScanSubMenuEight(true);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuOne(false);
        }
        return () => {
            openRadiologyMenu.openRadiologyMenuReducerDispatch({ type: 'resetRadiologyMenu' })
        }
    }, [openHealthPackageMenuContext.healthPackageDisplayState, openRadiologyMenu.openRadiologyMenuState.isXRayOpen, openRadiologyMenu.openRadiologyMenuState.isUsgOpen, openRadiologyMenu.openRadiologyMenuState.isCtOpen, openRadiologyMenu.openRadiologyMenuState.isMriOpen, openRadiologyMenu.openRadiologyMenuState.isEcgOpen, openRadiologyMenu.openRadiologyMenuState.isTmtOpen, openRadiologyMenu.openRadiologyMenuState.isManmmogramOpen, openPopularTestMenuContext.openPopularTestMenuState])



    // Toggle sidebar sub links menu 
    const [toggleLabTestSubMenuOne, setLabTestSubMenuOne] = useState(true);
    const [toggleLabTestSubMenuTwo, setLabTestSubMenuTwo] = useState(false);
    const [toggleLabTestSubMenuThree, setLabTestSubMenuThree] = useState(false);
    // const [toggleLabTestSubMenuFour, setLabTestSubMenuFour] = useState(false);

    // Toggle Health menu Package 
    const [toggleHealthPackageMenu, setHealthPackageMenu] = useState(true);
    const [toggleLifestylePackageMenu, setLifestylePackageMenu] = useState(false);


    // Test to show based on organs 
    const [filterTestByOrgan, setFilterTestByOrgan] = useState([]);

    // X-ray menus 
    const [toggleXRayAndScanSubMenuOne, setXRayAndScanSubMenuOne] = useState(true);
    const [toggleXRayAndScanSubMenuTwo, setXRayAndScanSubMenuTwo] = useState(false);
    const [toggleXRayAndScanSubMenuThree, setXRayAndScanSubMenuThree] = useState(false);
    const [toggleXRayAndScanSubMenuFour, setXRayAndScanSubMenuFour] = useState(false);
    const [toggleXRayAndScanSubMenuFive, setXRayAndScanSubMenuFive] = useState(false);
    const [toggleXRayAndScanSubMenuSix, setXRayAndScanSubMenuSix] = useState(false);
    const [toggleXRayAndScanSubMenuSeven, setXRayAndScanSubMenuSeven] = useState(false);
    const [toggleXRayAndScanSubMenuEight, setXRayAndScanSubMenuEight] = useState(false);

    // Organs list 
    const organs = [
        {
            name: 'Kidney'
        },
        {
            name: 'Liver'
        },
        {
            name: 'Heart'
        },
        {
            name: 'Lungs'
        },
        // {
        //     name: 'Brain'
        // },
        {
            name: 'Thyroid'
        },
        {
            name: 'Reproductive System'
        },
        {
            name: 'Cancer Marker'
        },
        // {
        //     name: 'Stomach'
        // },
        // {
        //     name: 'Pancreas'
        // },
        // {
        //     name: 'Intestine'
        // },
        {
            name: 'Blood'
        },
        {
            name: 'Bones and Joints'
        },
        {
            name: 'Bones'
        },
        {
            name: 'Joints'
        },
        {
            name: 'Digestive System'
        },
        {
            name: 'Hormones'
        },
        {
            name: 'Immune System'
        },
        {
            name: 'Whole Body'
        },
        {
            name: 'Git'
        },
        {
            name: 'Systemic'
        },
    ]


    useEffect(() => {
        const xRayLink = document.getElementById('menubar__X-ray');
        const labTest = document.getElementById('menubar__lab-text');
        const packages = document.getElementById('menubar__packages');

        // X-ray sub menu links 
        // Toggle sidebar sub links menu 
        const xRaySubMenuOne = document.getElementById('menubar__X-ray-sub-menu-one');
        const xRaySubMenuTwo = document.getElementById('menubar__X-ray-sub-menu-two');
        const xRaySubMenuThree = document.getElementById('menubar__X-ray-sub-menu-three');
        const xRaySubMenuFour = document.getElementById('menubar__X-ray-sub-menu-four');
        const xRaySubMenuFive = document.getElementById('menubar__X-ray-sub-menu-five');
        const xRaySubMenuSix = document.getElementById('menubar__X-ray-sub-menu-six');
        const xRaySubMenuSeven = document.getElementById('menubar__X-ray-sub-menu-seven');
        const xRaySubMenuEight = document.getElementById('menubar__X-ray-sub-menu-eight');

        // Toggle sidebar sub links menu 
        const labTestSubMenuOne = document.getElementById('menubar__lab-test-sub-menu-one');
        const labTestSubMenuTwo = document.getElementById('menubar__lab-test-sub-menu-two');
        // const labTestSubMenuThree = document.getElementById('menubar__lab-test-sub-menu-three');
        // const labTestSubMenuFour = document.getElementById('menubar__lab-test-sub-menu-four');

        // Oragn Menus 
        const organ = document.getElementsByClassName('menubar__organ');


        // Toogle Health Package menu 
        const healthPackageMenu = document.getElementById('menubar__health-package-option');
        // const lifestylePackageMenu = document.getElementById('menubar__lifestyle-option');

        for (let i = 0; i < organ.length; i++) {

            organ[i].addEventListener('mouseover', () => {
                // Getting all the Organs list
                const kidney = document.getElementById('menubar__Kidney');
                const liver = document.getElementById('menubar__Liver');
                const heart = document.getElementById('menubar__Heart');
                const lungs = document.getElementById('menubar__Lungs');
                // const brain = document.getElementById('menubar__Brain');
                const thyroid = document.getElementById('menubar__Thyroid');
                const femaleReproductive = document.getElementById('menubar__Reproductive System');
                const reproductiveSystemCancer = document.getElementById('menubar__Cancer Marker');
                // const stomach = document.getElementById('menubar__Stomach');
                // const pancreas = document.getElementById('menubar__Pancreas');
                // const intestine = document.getElementById('menubar__Intestine');
                const blood = document.getElementById('menubar__Blood');
                const bonesAndJoints = document.getElementById('menubar__Bones and Joints');
                const bones = document.getElementById('menubar__Bones');
                const joints = document.getElementById('menubar__Joints');
                const digestiveSystem = document.getElementById('menubar__Digestive System');
                const hormones = document.getElementById('menubar__Hormones');
                const immuneSystem = document.getElementById('menubar__Immune System');
                const wholeBody = document.getElementById('menubar__Whole Body');
                const git = document.getElementById('menubar__Git');
                const systemic = document.getElementById('menubar__Systemic');


                if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'kidney') {
                    setFilterTestByOrgan(TestBasedOnOrgans.kidney);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    kidney.classList.add('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }

                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'liver') {
                    setFilterTestByOrgan(TestBasedOnOrgans.liver);
                    // set active class only to hovered item 
                    liver.classList.add('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }

                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'heart') {
                    setFilterTestByOrgan(TestBasedOnOrgans.heart);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.add('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }

                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'lungs') {
                    setFilterTestByOrgan(TestBasedOnOrgans.lungs);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.add('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }

                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'brain') {
                    setFilterTestByOrgan(TestBasedOnOrgans.brain);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.add('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }

                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'thyroid') {
                    setFilterTestByOrgan(TestBasedOnOrgans.thyroid);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.add('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }

                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'reproductive system') {
                    setFilterTestByOrgan(TestBasedOnOrgans.femaleReproductive);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.add('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }

                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'stomach') {
                    setFilterTestByOrgan(TestBasedOnOrgans.stomach);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.add('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }

                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'pancreas') {
                    setFilterTestByOrgan(TestBasedOnOrgans.pancreas);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.add('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }

                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'intestine') {
                    setFilterTestByOrgan(TestBasedOnOrgans.intestine);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    // intestine.classList.add('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'blood') {
                    setFilterTestByOrgan(TestBasedOnOrgans.blood);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    blood.classList.add('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'bones and joints') {
                    setFilterTestByOrgan(TestBasedOnOrgans.bonesAndJoints);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.add('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'bones') {
                    setFilterTestByOrgan(TestBasedOnOrgans.bones);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    bones.classList.add('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'joints') {
                    setFilterTestByOrgan(TestBasedOnOrgans.joints);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    joints.classList.add('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'digestive system') {
                    setFilterTestByOrgan(TestBasedOnOrgans.digestiveSystem);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.add('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'hormones') {
                    setFilterTestByOrgan(TestBasedOnOrgans.hormones);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'immune system') {
                    setFilterTestByOrgan(TestBasedOnOrgans.immuneSystem);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.add('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'whole body') {
                    setFilterTestByOrgan(TestBasedOnOrgans.wholeBody);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.add('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'git') {
                    setFilterTestByOrgan(TestBasedOnOrgans.git);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.add('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'systemic') {
                    setFilterTestByOrgan(TestBasedOnOrgans.systemic);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.remove('menubar__organ--active');
                    systemic.classList.add('menubar__organ--active');
                }
                else if (organ[i].getAttribute('data-organ-type').toLowerCase() === 'cancer marker') {
                    setFilterTestByOrgan(TestBasedOnOrgans.cancerMarker);
                    // set active class only to hovered item 
                    liver.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    heart.classList.remove('menubar__organ--active');
                    lungs.classList.remove('menubar__organ--active');
                    // brain.classList.remove('menubar__organ--active');
                    kidney.classList.remove('menubar__organ--active');
                    thyroid.classList.remove('menubar__organ--active');
                    femaleReproductive.classList.remove('menubar__organ--active');
                    // stomach.classList.remove('menubar__organ--active');
                    // pancreas.classList.remove('menubar__organ--active');
                    // intestine.classList.remove('menubar__organ--active');
                    blood.classList.remove('menubar__organ--active');
                    bonesAndJoints.classList.remove('menubar__organ--active');
                    bones.classList.remove('menubar__organ--active');
                    joints.classList.remove('menubar__organ--active');
                    digestiveSystem.classList.remove('menubar__organ--active');
                    immuneSystem.classList.remove('menubar__organ--active');
                    wholeBody.classList.remove('menubar__organ--active');
                    git.classList.remove('menubar__organ--active');
                    systemic.classList.remove('menubar__organ--active');
                    reproductiveSystemCancer.classList.add('menubar__organ--active');
                }

                else {
                    setFilterTestByOrgan([]);
                }

            });
        }


        // Toggle X-ray menu 
        xRayLink.addEventListener('mouseover', () => {
            setToggleXRayMenu(true);

        });
        xRayLink.addEventListener('mouseout', () => {
            setToggleXRayMenu(false)

        });

        // Toggle sidebar sub-menu links for X -rays
        xRaySubMenuOne.addEventListener('mouseover', () => {
            setXRayAndScanSubMenuOne(true);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        })
        xRaySubMenuOne.addEventListener('mouseout', () => {
            setXRayAndScanSubMenuOne(true);
        })
        xRaySubMenuTwo.addEventListener('mouseover', () => {
            setXRayAndScanSubMenuTwo(true);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        })
        xRaySubMenuTwo.addEventListener('mouseout', () => {
            setXRayAndScanSubMenuOne(false);
        })
        xRaySubMenuThree.addEventListener('mouseover', () => {
            setXRayAndScanSubMenuThree(true);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        })
        xRaySubMenuThree.addEventListener('mouseout', () => {
            setXRayAndScanSubMenuThree(true);
            setXRayAndScanSubMenuFour(false);
        })
        xRaySubMenuFour.addEventListener('mouseover', () => {
            setXRayAndScanSubMenuFour(true);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        })
        xRaySubMenuFour.addEventListener('mouseout', () => {
            setXRayAndScanSubMenuFour(true);
        })
        xRaySubMenuFive.addEventListener('mouseover', () => {
            setXRayAndScanSubMenuFive(true);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        })
        xRaySubMenuFive.addEventListener('mouseout', () => {
            setXRayAndScanSubMenuFive(true);
        })
        xRaySubMenuSix.addEventListener('mouseover', () => {
            setXRayAndScanSubMenuSix(true);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuEight(false);
        })
        xRaySubMenuSix.addEventListener('mouseout', () => {
            setXRayAndScanSubMenuSix(true);
        })
        xRaySubMenuSeven.addEventListener('mouseover', () => {
            setXRayAndScanSubMenuSeven(true);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
            setXRayAndScanSubMenuEight(false);
        })
        xRaySubMenuSeven.addEventListener('mouseout', () => {
            setXRayAndScanSubMenuSeven(true);
        })
        xRaySubMenuEight.addEventListener('mouseover', () => {
            setXRayAndScanSubMenuEight(true);
            setXRayAndScanSubMenuSeven(false);
            setXRayAndScanSubMenuSix(false);
            setXRayAndScanSubMenuFive(false);
            setXRayAndScanSubMenuFour(false);
            setXRayAndScanSubMenuOne(false);
            setXRayAndScanSubMenuTwo(false);
            setXRayAndScanSubMenuThree(false);
        })
        xRaySubMenuEight.addEventListener('mouseout', () => {
            setXRayAndScanSubMenuEight(true);
        })

        // Toogle Lab - Test Menu
        labTest.addEventListener('mouseover', () => {
            setToggleLabTestMenu(true);
        });
        labTest.addEventListener('mouseout', () => {
            setToggleLabTestMenu(false);
        });

        // Toggle sidebar sub-menu links
        labTestSubMenuOne.addEventListener('mouseover', () => {
            setLabTestSubMenuOne(true);
            setLabTestSubMenuTwo(false);
            setLabTestSubMenuThree(false);
            // setLabTestSubMenuFour(false);
        })
        labTestSubMenuOne.addEventListener('mouseout', () => {
            setLabTestSubMenuOne(true);
        })
        labTestSubMenuTwo.addEventListener('mouseover', () => {
            setLabTestSubMenuTwo(true);
            setLabTestSubMenuOne(false);
            setLabTestSubMenuThree(false);
            // setLabTestSubMenuFour(false);
        })
        labTestSubMenuTwo.addEventListener('mouseout', () => {
            setLabTestSubMenuOne(false);
        })
        // labTestSubMenuThree.addEventListener('mouseover', () => {
        //     setLabTestSubMenuThree(true);
        //     setLabTestSubMenuOne(false);
        //     setLabTestSubMenuTwo(false);
        //     // setLabTestSubMenuFour(false);
        // })
        // labTestSubMenuThree.addEventListener('mouseout', () => {
        //     setLabTestSubMenuThree(true);
        //     // setLabTestSubMenuFour(false);
        // })
        // labTestSubMenuFour.addEventListener('mouseover', (event) => {
        //     setLabTestSubMenuFour(true);
        //     setLabTestSubMenuThree(false);
        //     setLabTestSubMenuOne(false);
        //     setLabTestSubMenuTwo(false);
        // })
        // labTestSubMenuFour.addEventListener('mouseout', (event) => {
        //     setLabTestSubMenuFour(true);
        // })

        // Toogle packages Menu
        packages.addEventListener('mouseover', (event) => {
            setTogglePackagesMenu(true);
            event.stopPropagation();
            if (toggleLifestylePackageMenu) {
                setHealthPackageMenu(true);
            }
        });
        packages.addEventListener('mouseout', (event) => {
            setTogglePackagesMenu(false)
            event.stopPropagation();
        });


        // Toogle Health package menu 
        healthPackageMenu.addEventListener('mouseover', (event) => {
            setHealthPackageMenu(true);
            setTogglePackagesMenu(true);
            setLifestylePackageMenu(false);
            event.stopPropagation();
        });

        healthPackageMenu.addEventListener('mouseout', (event) => {
            setHealthPackageMenu(true);
            event.stopPropagation();
        });

        // lifestylePackageMenu.addEventListener('mouseover', (event) => {
        //     setHealthPackageMenu(false);
        //     setTogglePackagesMenu(true);
        //     setLifestylePackageMenu(true);
        //     event.stopPropagation();
        // });

        // lifestylePackageMenu.addEventListener('mouseout', (event) => {
        //     setLifestylePackageMenu(true);
        //     setHealthPackageMenu(false);
        //     event.stopPropagation();
        // });

    }, [toggleLabTestSubMenuTwo, filterTestByOrgan]);


    const { pathname } = useLocation();

    useEffect(() => {
        // close Menu when route change
        setToggleXRayMenu(false);
        setToggleLabTestMenu(false);
        setTogglePackagesMenu(false);
    }, [pathname]);

    return (
        <div className='menubar'>
            <div className='menubar__links-container'>
                <div className="menubar__links-inner-container">


                    {/* First link  */}
                    <div className='menubar__link' id='menubar__X-ray'>
                        <Link to="#" className='menubar__top-link'>X-ray & Scans<span>{arrowSvg}</span></Link>
                        <div className="menubar__drop-down-menu" style={toggleXRayMenu ? { display: 'flex' } : { display: 'none' }}>
                            <ul className="menubar__drop-down-sidebar">
                                <li id='menubar__X-ray-sub-menu-one' className={toggleXRayAndScanSubMenuOne ? 'menubar__sub-menu--bg-color' : ''}>
                                    <Link to="#">X-ray{arrowSvg}</Link>
                                </li>

                                <li id='menubar__X-ray-sub-menu-two' className={toggleXRayAndScanSubMenuTwo ? 'menubar__sub-menu--bg-color' : ''}>
                                    <Link to="#">USG {arrowSvg}</Link>
                                </li>

                                <li id='menubar__X-ray-sub-menu-three' className={toggleXRayAndScanSubMenuThree ? 'menubar__sub-menu--bg-color' : ''}>
                                    <Link to="#">CT{arrowSvg}</Link>
                                </li>

                                <li id='menubar__X-ray-sub-menu-four' className={toggleXRayAndScanSubMenuFour ? 'menubar__sub-menu--bg-color' : ''}>
                                    <Link to="#">MRI{arrowSvg}</Link>
                                </li>

                                <li id='menubar__X-ray-sub-menu-five' className={toggleXRayAndScanSubMenuFive ? 'menubar__sub-menu--bg-color' : ''}>
                                    <Link to="#">ECG{arrowSvg}</Link>
                                </li>

                                <li id='menubar__X-ray-sub-menu-six' className={toggleXRayAndScanSubMenuSix ? 'menubar__sub-menu--bg-color' : ''}>
                                    <Link to="#">ECHO{arrowSvg}</Link>
                                </li>

                                <li id='menubar__X-ray-sub-menu-seven' className={toggleXRayAndScanSubMenuSeven ? 'menubar__sub-menu--bg-color' : ''}>
                                    <Link to="#">TMT{arrowSvg}</Link>
                                </li>

                                <li id='menubar__X-ray-sub-menu-eight' className={toggleXRayAndScanSubMenuEight ? 'menubar__sub-menu--bg-color' : ''}>
                                    <Link to="#">Mammogram{arrowSvg}</Link>
                                </li>
                            </ul>

                            {/* X-rays Scans  */}
                            {
                                toggleXRayAndScanSubMenuOne && <div className={toggleXRayAndScanSubMenuOne ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        {
                                            XRays.map(scan => <li key={scan.name}>
                                                <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }

                            {/* USG Scans  */}
                            {
                                toggleXRayAndScanSubMenuTwo && <div className={toggleXRayAndScanSubMenuTwo ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        {
                                            USGs.map(scan => <li key={scan.name}>
                                                <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }

                            {/* CT Scans  */}
                            {
                                toggleXRayAndScanSubMenuThree && <div className={toggleXRayAndScanSubMenuThree ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        {
                                            CT.map(scan => <li key={scan.name}>
                                                <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                                            </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            }

                            {/* MRI Scans  */}
                            {
                                toggleXRayAndScanSubMenuFour && <div className={toggleXRayAndScanSubMenuFour ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        {
                                            MRI.map(scan => <li key={scan.name}>
                                                <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }

                            {/* ECG Scans  */}
                            {
                                toggleXRayAndScanSubMenuFive && <div className={toggleXRayAndScanSubMenuFive ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        {
                                            ECG.map(scan => <li key={scan.name}>
                                                <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }
                            {
                                toggleXRayAndScanSubMenuSix && <div className={toggleXRayAndScanSubMenuSix ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        {
                                            ECHO.map(scan => <li key={scan.name}>
                                                <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }
                            {
                                toggleXRayAndScanSubMenuSeven && <div className={toggleXRayAndScanSubMenuSeven ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        {
                                            TMT.map(scan => <li key={scan.name}>
                                                <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }
                            {
                                toggleXRayAndScanSubMenuEight && <div className={toggleXRayAndScanSubMenuEight ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        {
                                            Mammogram.map(scan => <li key={scan.name}>
                                                <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>


                    {/* Second link  */}
                    <div className='menubar__link' id='menubar__lab-text'>
                        <Link to="#" className='menubar__top-link'>Lab Tests <span>{arrowSvg}</span></Link>
                        <div className="menubar__drop-down-menu" style={toggleLabTestMenu ? { display: 'flex' } : { display: 'none' }}>
                            <ul className="menubar__drop-down-sidebar">
                                <li id='menubar__lab-test-sub-menu-one' className={toggleLabTestSubMenuOne ? 'menubar__sub-menu--bg-color' : ''}><Link to='#'>Popular Search {arrowSvg}</Link></li>
                                <li id='menubar__lab-test-sub-menu-two' className={toggleLabTestSubMenuTwo ? 'menubar__sub-menu--bg-color' : ''}><Link to="#">Search by Organs {arrowSvg}</Link></li>
                                {/* <li id='menubar__lab-test-sub-menu-three' className={toggleLabTestSubMenuThree ? 'menubar__sub-menu--bg-color' : ''}><Link to="/">Search By Conditions {arrowSvg}</Link></li> */}
                                {/* <li id='menubar__lab-test-sub-menu-four' className={toggleLabTestSubMenuFour ? 'menubar__sub-menu--bg-color' : ''}><Link to="/">Lipid Profile Test{arrowSvg}</Link></li> */}
                            </ul>

                            {/* Show Orangs menu  */}
                            {
                                toggleLabTestSubMenuTwo && <div className="menubar__sub-category-container" id='menubar__sub-category-container'>
                                    <ul>
                                        {
                                            organs.map((organ, index) => <li key={organ.name} data-organ-type={organ.name} className={`menubar__organ menubar__organ--${index}`} id={`menubar__${organ.name}`} data-aos="fade-right" data-aos-offset="-1000" data-aos-delay={`${100 * index}`}>
                                                <span>{organ.name}</span>
                                                {arrowSvg}
                                            </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            }
                            {

                                toggleLabTestSubMenuTwo && <div className='menubar__test-name-container'>
                                    {
                                        filterTestByOrgan?.map(test => <Link to={test.pageLink} className="menubar__test-name" data-aos="fade-down" data-aos-offset="-1000" key={test.name}>{test.name}</Link>)
                                    }
                                </div>
                            }

                            {
                                toggleLabTestSubMenuOne && <div className={toggleLabTestSubMenuOne ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        {
                                            PopularTests.map(test => <li key={test.name}>
                                                <Link to={test.pageLink}>{test.name}</Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }
                            {/* {
                            toggleLabTestSubMenuTwo && <div className={toggleLabTestSubMenuTwo ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                <ul>
                                    <li>
                                        <a href="/">Lab Test UltraSound 01</a>
                                    </li>
                                    <li>
                                        <a href="/">Lab Test UltraSound 02</a>
                                    </li>
                                </ul>
                            </div>
                        } */}
                            {
                                toggleLabTestSubMenuThree && <div className={toggleLabTestSubMenuThree ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                    <ul>
                                        <li>
                                            <Link to="/">Lab Test CT Scan 01</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Lab Test CT Scan 02</Link>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {/* {
                            toggleLabTestSubMenuFour && <div className={toggleLabTestSubMenuFour ? 'menubar__drop-down-links menubar__drop-down-links--animate' : 'menubar__drop-down-links'}>
                                <ul>
                                    <li>
                                        <a href="/">Lab Test ECG 01</a>
                                    </li>
                                    <li>
                                        <a href="/">Lab Test ECG 02</a>
                                    </li>
                                </ul>
                            </div>
                        } */}
                        </div>

                    </div>


                    {/* Third link  */}
                    <div className='menubar__link' id='menubar__packages' >
                        <Link to="#" className='menubar__top-link' id='menubar__health-packages-menu'>Health Packages <span>{arrowSvg}</span></Link>
                        {/* {
                        togglePackagesMenu && (<ul>
                            <li><a href="/">Item 1</a></li>
                            <li><a href="/">Item 2</a></li>
                            <li><a href="/">Item 3</a></li>
                        </ul>
                        )
                    } */}
                        <div className="menubar__drop-down-menu" style={togglePackagesMenu ? { display: 'flex' } : { display: 'none' }}>

                            <ul className="menubar__drop-down-sidebar" style={{ width: 'max-content' }}>
                                <li id='menubar__health-package-option' className={toggleHealthPackageMenu ? 'menubar__sub-menu--bg-color' : ''}>
                                    <Link to="#">Medall Health Packages &nbsp; {arrowSvg}</Link>
                                </li>

                                {/* <li id='menubar__lifestyle-option' className={toggleLifestylePackageMenu ? 'menubar__sub-menu--bg-color' : ''}>
                                <Link to="">Medall Lifestyle Packages &nbsp;&nbsp; {arrowSvg}</Link>
                            </li> */}
                            </ul>
                            {
                                toggleHealthPackageMenu ? <ul className="menubar__drop-down-sidebar menubar__drop-down-sidebar--packages" style={{ width: 'max-content' }} data-aos="fade-down">
                                    {
                                        userLocationContext.userLocationState === 'andhraPradesh' && <li><Link to="/health-package-basic">Medall Health Basic</Link></li>
                                    }
                                    {
                                        userLocationContext.userLocationState === 'andhraPradesh' && <li><Link to="/health-package-elite">Medall Health Elite </Link></li>
                                    }

                                    {
                                        userLocationContext.userLocationState === 'andhraPradesh' && <li><Link to="/health-package-classic">Medall Health Classic</Link></li>
                                    }
                                    {
                                        userLocationContext.userLocationState === 'andhraPradesh' ? <>
                                            <li><Link to="/health-package-men">Medall Health Men</Link></li>
                                            <li><Link to="/health-package-premium">Medall Health Premium </Link></li>
                                            <li><Link to="/health-package-young-women">Medall Health Women (&lt;35 Years)</Link></li>
                                            <li><Link to="/health-package-pro">Medall Health Pro</Link></li>
                                            <li><Link to="/health-package-old-women">Medall Health Women (&gt;35 Years)</Link></li>
                                            <li><Link to="/health-package-supreme">Medall Health Supreme </Link></li>
                                            <li><Link to="/health-package-senior-citizen-men">Medall Health Senior Citizen Men </Link></li>
                                            <li><Link to="/health-package-expert">Medall Health Expert</Link></li>
                                            <li><Link to="/health-package-senior-citizen-women">Medall Health Senior Citizen Women &nbsp; &nbsp;</Link></li>
                                        </> : <>
                                            <li><Link to="/health-package-premium">Medall Health Premium </Link></li>
                                            <li><Link to="/health-package-men">Medall Health Men</Link></li>
                                            <li><Link to="/health-package-pro">Medall Health Pro</Link></li>
                                            <li><Link to="/health-package-young-women">Medall Health Women (&lt;35 Years)</Link></li>
                                            <li><Link to="/health-package-supreme">Medall Health Supreme </Link></li>
                                            <li><Link to="/health-package-old-women">Medall Health Women (&gt;35 Years)</Link></li>
                                            <li><Link to="/health-package-expert">Medall Health Expert</Link></li>
                                            <li><Link to="/health-package-senior-citizen-men">Medall Health Senior Citizen Men </Link></li>
                                            <li><Link to="/health-package-elite">Medall Health Elite </Link></li>
                                            <li><Link to="/health-package-senior-citizen-women">Medall Health Senior Citizen Women &nbsp; &nbsp;</Link></li>
                                        </>
                                    }
                                </ul> : ''
                            }

                            {
                                toggleLifestylePackageMenu ? <ul className="menubar__drop-down-sidebar menubar__drop-down-sidebar--packages" style={{ width: 'max-content' }} data-aos="fade-down">
                                    <li><Link to="/health-package-basic">Medall Lifestyle Basic</Link></li>
                                    <li><Link to="/health-package-premium">Medall Lifestyle Premium </Link></li>
                                    <li><Link to="/health-package-pro">Medall Lifestyle Pro </Link></li>
                                    <li><Link to="/health-package-supreme">Medall Lifestyle Supreme </Link></li>
                                    <li><Link to="/health-package-expert">Medall Lifestyle Expert </Link></li>
                                </ul> : ''
                            }



                            {/* Show Orangs menu  */}
                            {/* {
                            toggleHealthPackageSubMenuTwo && <div className="menubar__sub-category-container" id='menubar__sub-category-container'>
                                <ul>
                                    {
                                        organs.map((organ, index) => <li key={organ.name} data-organ-type={organ.name} className={`menubar__organ menubar__organ--${index}`} id={`menubar__${organ.name}`} data-aos="fade-right" data-aos-offset="-1000" data-aos-delay={`${100 * index}`}>
                                            <span>{organ.name}</span>
                                            {arrowSvg}
                                        </li>
                                        )
                                    }
                                </ul>
                            </div>
                        } */}

                        </div>
                    </div>

                    {/* Fourth link  */}
                    {/* <div className="menubar__link">
                        <Link to="https://mind.medall.in/" target="_blank">Medall Mind</Link>
                    </div> */}
                    {/* <div className="menubar__link">
                    <Link to="/medall-pro">Pro (Test)</Link>
                </div> */}

                    {/* Fourth link  */}
                    <div className="menubar__link">
                        {/* <a href="/"><img className='menubar__upload-icon' src={Upload} alt="icon" />Upload Prescription</a> */}
                        {/* <form action="">
                        <input type="file" />
                    </form> */}
                        {/* <button onClick={(e) => handlePrescription(e)}>
                        <img className='menubar__upload-icon' src={Upload} alt="icon" /> Upload Prescription
                    </button> */}
                        <Link to="/prescription" >
                            <img className='menubar__upload-icon' src={Upload} alt="icon" /> Upload Prescription
                        </Link>
                        {/* <input type="file"
                        ref={hiddenFileInput}
                        onChange={(e) => handlePrescriptionUpload(e)}
                        style={{ display: 'none' }}
                    /> */}
                    </div>

                    {/* Fifth link  */}
                    <div className="menubar__link menubar__link--highlight">
                        <Link to="/book-your-test"><img className='menubar__upload-icon' src={TestTube} alt="icon" />Book Your Test </Link>
                    </div>
                </div>
            </div>
            {/* <div className='menubar__near-center'>Nearest Center <img src={Location} alt="location icon" /></div> */}
            <div className='menubar__link menubar__link--highlight'>
                <Link to="/medall-center">Nearest Center <img className='menubar__upload-icon' src={Location} alt="location icon" /></Link>
            </div>
        </div>
    )
}

export default MenuBar