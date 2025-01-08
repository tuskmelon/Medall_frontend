import React, { useEffect, useReducer, lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss'

// Component helps to automatic scroll to top of website when route changes
import ScrollToTop from './components/ScrollToTop'

// AOS library for scroll aniamtion
import AOS from 'aos'
import 'aos/dist/aos.css'

// import Resources data (For radiology)
import BrainMRI from './resources/radiology/mri/Brain'
import SpineMRI from './resources/radiology/mri/CervicalSpine'
import KneeMRI from './resources/radiology/mri/Knee'
import LumbarSpineMRI from './resources/radiology/mri/LumbarSpine'
import ProstateMRI from './resources/radiology/mri/Prostate'
import MRCPMRI from './resources/radiology/mri/MRCP'
import CardiacMRI from './resources/radiology/mri/Cardiac'
import AngiographyMRI from './resources/radiology/mri/Angiography'
import PelvisMRI from './resources/radiology/mri/Pelvis'
import ShoulderMRI from './resources/radiology/mri/Shoulder'
import Chest from './resources/radiology/xrays/Chest'
import ChestAP from './resources/radiology/xrays/ChestAP'
import ChestPA from './resources/radiology/xrays/ChestPA'
import LumberSpine from './resources/radiology/xrays/LumberSpine'
import Knee from './resources/radiology/xrays/Knee'
import PNS from './resources/radiology/xrays/PNS'
import CervicalSpine from './resources/radiology/xrays/CervicalSpine'
import XrayFoot from './resources/radiology/xrays/Foot'
import XrayKneeAP from './resources/radiology/xrays/KneeAp'
import XrayShoulder from './resources/radiology/xrays/Shoulder'
import XrayLumbarSpineAP from './resources/radiology/xrays/LumbarSpineAP'
import FootAP from './resources/radiology/xrays/FootAP'
import XrayWrist from './resources/radiology/xrays/Wrist'
import XrayLumbarSpineAPOnly from './resources/radiology/xrays/LumbarSpineAPOnly'
import BrainScreeningMRI from './resources/radiology/mri/BrainScreening'
import WholeSpineMRI from './resources/radiology/mri/WholeSpine'
import ThreeTMRI from './resources/radiology/mri/3tMri'
import LumbarSpineScreening from './resources/radiology/mri/LumbarSpineScreening'
import Contrast from './resources/radiology/mri/Contrast'
import BrainMriSingleFilm from './resources/radiology/mri/BrainSingleFilm'
import BrainMRA from './resources/radiology/mri/BrainMRA'
import BrainWholeSpine from './resources/radiology/mri/BrainWholeSpine'
import CervicalSpineScreening from './resources/radiology/mri/CervicalSpineScreening'
import AbdomenPelvis from './resources/radiology/usg/AbdomenPelvis'
import OBSTearly from './resources/radiology/usg/ObstEarly'
import AbdomenOnly from './resources/radiology/usg/AbdomenOnly'
import PelvisOnly from './resources/radiology/usg/PelvisOnly'
import AbdomenNight from './resources/radiology/usg/AbdomenNight'
import Transvaginal from './resources/radiology/usg/Transvaginal'
import Antenatal from './resources/radiology/usg/Antenatal'
import Obstetrics from './resources/radiology/usg/Obstetrics'
import Anomaly from './resources/radiology/usg/Anomaly'
import Doppler from './resources/radiology/usg/Doppler'
import Breast from './resources/radiology/usg/Breast'
import NT from './resources/radiology/usg/NT'
import PregnancyUSG from './resources/radiology/usg/Pregnancy'
import ScortalUSG from './resources/radiology/usg/Scortal'
import TVS from './resources/radiology/usg/TVS'
import AanomalyScan from './resources/radiology/usg/AanomalyScan'
import AbdomenPelvisScan from './resources/radiology/usg/AbdomenPelvisScan'
import BrainCT from './resources/radiology/ct/Brain'
import ChestCT from './resources/radiology/ct/Chest'
import PNSCT from './resources/radiology/ct/PNS'
import WholeAbdomenPelvisCT from './resources/radiology/ct/WholeAbdomenPelvis'
import KUB from './resources/radiology/ct/KUB'
import AbdomenWithPelvis from './resources/radiology/ct/AbdomenWithPelvis'
import BrainPlainCT from './resources/radiology/ct/BrainPlain'
import ScreeningCT from './resources/radiology/ct/Screening'
import ComplementaryCT from './resources/radiology/ct/Complementary'
import ThoraxCT from './resources/radiology/ct/Thorax'
import ContrastCT from './resources/radiology/ct/Contrast'
import AbdomenAndPelvisCT from './resources/radiology/ct/AbdomenAndPelvis'
import CoronaryAngiogramCT from './resources/radiology/ct/CoronaryAngiogram'
import ContrastIV from './resources/radiology/ct/ContrastIV'
import VirtualColonoscopyCT from './resources/radiology/ct/VirtualColonoscopy'
import NeckCT from './resources/radiology/ct/Neck'
import ECGcontent from './resources/radiology/ecg/ECGcontent'
import ECHO from './resources/radiology/echo/ECHO'
import MammogramContent from './resources/radiology/mamogram/Mamogram'
import TMTcontent from './resources/radiology/tmt/TMT'

// import Resources data (For Pathology)
import CBCTest from './resources/pathology/bloodTests/Cbc'
import HBA1CTest from './resources/pathology/bloodTests/Hba1c'
import LiverFunctionTest from './resources/pathology/bloodTests/LiverFunction'
import LipidTest from './resources/pathology/bloodTests/LipidProfile'
import ThyroidTest from './resources/pathology/bloodTests/Thyroid'
import AECTest from './resources/pathology/bloodTests/Aec'
import AntiStreptolysinTest from './resources/pathology/bloodTests/AntiStreptolysin'
import BleedingTimeTest from './resources/pathology/bloodTests/BleedingTime'
import BloodGroupTest from './resources/pathology/bloodTests/BloodGroup'
import HaemogramTest from './resources/pathology/bloodTests/Haemogram'
import BloodCountWithESR from './resources/pathology/bloodTests/BloodCountWithESR'
import ErythrocyteSedimentationTest from './resources/pathology/bloodTests/ErythrocyteSedimentation'
import FerritinTest from './resources/pathology/bloodTests/Ferritin'
import HbTcDc from './resources/pathology/bloodTests/HbTcDc'
import IronTest from './resources/pathology/bloodTests/Iron'
import PackedCellVolume from './resources/pathology/bloodTests/PackedCellVolume'
import PartialThromboplastinTime from './resources/pathology/bloodTests/PartialThromboplastinTime'
import PeripheralSmear from './resources/pathology/bloodTests/PeripheralSmear'
import PlateletCountTest from './resources/pathology/bloodTests/PlateletCount'
import ProthrombinTest from './resources/pathology/bloodTests/Prothrombin'
import MalarialTest from './resources/pathology/bloodTests/Malarial'
import TcDcTest from './resources/pathology/bloodTests/TcDc'
import BUN from './resources/pathology/bloodTests/BloodUreaNitrogen'
import CreatinineKidney from './resources/pathology/bloodTests/CreatinineKidney'
import CreatinineHeart from './resources/pathology/bloodTests/CreatinineHeart'
import AlanineAminotransferase from './resources/pathology/bloodTests/AlanineAmino'
import Albumin from './resources/pathology/bloodTests/Albumin'
import Bilirubin from './resources/pathology/bloodTests/Bilirubin'
import AspartateSGOT from './resources/pathology/bloodTests/AspartateSGOT'
import Hbsag from './resources/pathology/bloodTests/Hbsag'
import Magnesium from './resources/pathology/bloodTests/Magnesium'
import CholesterolTotal from './resources/pathology/bloodTests/CholesterolTotal'
import LDH from './resources/pathology/bloodTests/LDH'
import ElectrolytesNaKCl from './resources/pathology/bloodTests/ElectrolytesNaKCl'
import ElectrolytesNaKChBic from './resources/pathology/bloodTests/ElectrolytesNaKChBic'
import GlucoseFasting from './resources/pathology/bloodTests/Glucose'
import GlucosePost from './resources/pathology/bloodTests/GlucosePost'
import SputumAFB from './resources/pathology/bloodTests/SputumAFB'
import ArterialBloodGas from './resources/pathology/bloodTests/ArterialBloodGas'
import Potassium from './resources/pathology/bloodTests/Potassium'
import ProteinCreatRatio from './resources/pathology/bloodTests/ProteinCreatRatio'
import RenalFunction from './resources/pathology/bloodTests/RenalFunction'
import UricAcid from './resources/pathology/bloodTests/UricAcid'
import Urea from './resources/pathology/bloodTests/Urea'
import UrineMicroalbumin from './resources/pathology/bloodTests/UrineMicroalbumin'
import UrineAerobic from './resources/pathology/bloodTests/UrineAerobic'
import UrineRotuine from './resources/pathology/bloodTests/UrineRoutine'
import UrineComplete from './resources/pathology/bloodTests/UrineComplete'
import Sodium from './resources/pathology/bloodTests/Sodium'
import UrineBile from './resources/pathology/bloodTests/UrineBile'
import HepatitisC from './resources/pathology/bloodTests/HepatitisC'
import WBCCount from './resources/pathology/bloodTests/WBCCount'
import CoagulationPackage from './resources/pathology/bloodTests/CoagulationPackage'
import Haemoglobin from './resources/pathology/bloodTests/Haemoglobin'
import HbTcDcEsr from './resources/pathology/bloodTests/HbTcDcEsr'
import MalariaQBC from './resources/pathology/bloodTests/MalariaQbc'
import MalariaRapid from './resources/pathology/bloodTests/MalariaRapid'
import VitaminB12 from './resources/pathology/bloodTests/VitaminB12'
import FreeT3T4 from './resources/pathology/bloodTests/FreeT3T4'
import FreeT4 from './resources/pathology/bloodTests/FreeT4'
import TSH from './resources/pathology/bloodTests/TSH'
// import ThyroidT3T4 from './resources/pathology/bloodTests/ThyroidT3T4';
import Thyroxine from './resources/pathology/bloodTests/Thyroxine'
import TriiodothyronineT3 from './resources/pathology/bloodTests/Triiodothyronine'
import AntiCCP from './resources/pathology/bloodTests/AntiCCP'
import CRP from './resources/pathology/bloodTests/CRP'
import CRPLatex from './resources/pathology/bloodTests/CRPLatex'
import RheumatoidArthritis from './resources/pathology/bloodTests/RheumatoidArthritis'
import VitaminD from './resources/pathology/bloodTests/VitaminD'
import Amylase from './resources/pathology/bloodTests/Amylase'
import Lipase from './resources/pathology/bloodTests/Lipase'
import StoolAnalysis from './resources/pathology/bloodTests/StoolAnalysis'
import StoolAnalysisRoutine from './resources/pathology/bloodTests/StoolAnalysisRoutine'
import Typhidot from './resources/pathology/bloodTests/Typhidot'
import TrimesterDown from './resources/pathology/bloodTests/TrimesterDown'
import CA125 from './resources/pathology/bloodTests/CA125'
// import SemenAnalysis from './resources/pathology/bloodTests/SemenAnalysis';
import Testosterone from './resources/pathology/bloodTests/Testosterone'
import PSA from './resources/pathology/bloodTests/PSA'
import UrinePregnancy from './resources/pathology/bloodTests/UrinePregnancy'
import VDRL from './resources/pathology/bloodTests/VDRL'
import BetaHCG from './resources/pathology/bloodTests/BetaHCG'
import FSH from './resources/pathology/bloodTests/FSH'
// import GlucoseFastingHormones from './resources/pathology/bloodTests/GlucoseFastingHormones';
import GlucoseFastingOnly from './resources/pathology/bloodTests/GlucoseFasting'
import GlucosePostprandial from './resources/pathology/bloodTests/GlucosePostprandial'
import GlucosePostprandialUrine from './resources/pathology/bloodTests/GlucosePostprandialUrine'
import GlucoseRandom from './resources/pathology/bloodTests/GlucoseRandom'
import GlucoseChallenge from './resources/pathology/bloodTests/GlucoseChallenge'
import GlucoseGlucometerRandom from './resources/pathology/bloodTests/GlucoseGlucometerRandom'
import LeutinisingHormone from './resources/pathology/bloodTests/LeutinisingHormone'
import Prolactin from './resources/pathology/bloodTests/Prolactin'
import UrineGlucosePostprandial from './resources/pathology/bloodTests/UrineGlucosePostprandial'
import UrineGlucoseRandom from './resources/pathology/bloodTests/UrineGlucoseRandom'
import UrineGlucoseFasting from './resources/pathology/bloodTests/UrineGlucoseFasting'
// import FerritinTestImmune from './resources/pathology/bloodTests/FerritinTestImmune';
import AntiNuclearAntibodies from './resources/pathology/bloodTests/AntiNuclearAntibodies'
import DengueAntigen from './resources/pathology/bloodTests/DengueAntigen'
import HIV from './resources/pathology/bloodTests/HIV'
import ImmunoglobulinE from './resources/pathology/bloodTests/ImmunoglobulinE'
import KubUS from './resources/radiology/usg/KUB'
import GlucosePostprandialTime from './resources/pathology/bloodTests/GlucosePostprandialTime'

// import Resources data (For Health Packages)
import BasicPackage from './resources/healthPackages/Basic'
import ClassicPackage from './resources/healthPackages/Classic'
import PremiumPackage from './resources/healthPackages/Premium'
import ProPackage from './resources/healthPackages/Pro'
import SupremePackage from './resources/healthPackages/Supreme'
import ExpertPackage from './resources/healthPackages/Expert'
import ElitePackage from './resources/healthPackages/Elite'
import MenPackage from './resources/healthPackages/Men'
import YoungWomenPackage from './resources/healthPackages/YoungWomen'
import OldWomenPackage from './resources/healthPackages/OldWomen'
import SeniorCitizenMenPackage from './resources/healthPackages/SeniorCitizenMen'
import SeniorCitizenWomenPackage from './resources/healthPackages/SeniorCitizenWomen'

// import components
import Header from './components/Header.js'
import Footer from './components/Footer.js'

import QuickLinksBar from './components/QuickLinksBar'
import BottomNavbar from './components/BottomNavbar/BottomNavbar'

// Importing Contexts
import { CartContext } from './context/Cart'
import { UserContext } from './context/User'
import { UserLocationContext } from './context/UserLocation'
import { AddressContext } from './context/Address'
import { OpenHealthPackageMenuContext } from './context/OpenHealthPackageMenu'
import { OpenRadiologyMenu } from './context/OpenRadiologyMenu'
import { OpenPopularTestMenuContext } from './context/OpenPopularTestMenu'
import { OpenLoginFormContext } from './context/OpenLoginForm'
import { PaymentStatusContext } from './context/PaymentStatus'

// Import Reducers
import { cart, cartReducer } from './reducers/Cart'
import { user, userReducer } from './reducers/User'
import { userLocation, userLocationReducer } from './reducers/UserLocation'
import { address, addressReducer } from './reducers/Address'
import {
  openHealthPackageMenu,
  openHealthPackageMenuReducer
} from './reducers/OpenHealthPackageMenu'
import {
  openRadiologyMenu,
  openRadiologyMenuReducer
} from './reducers/OpenRadiologyMenu'
import {
  openPopularTestMenu,
  openPopularTestMenuReducer
} from './reducers/OpenPopularTestMenu'
import { openLoginForm, openLoginFormReducer } from './reducers/OpenLoginForm'
// import { paymentStatus, paymentStatusReducer } from './reducers/PaymentStatus';
import {
  paymentStatus,
  paymentStatusReducer
} from './reducers/PaymentStatusCheck'

import AlbuminProteinUrine from './resources/pathology/bloodTests/AlbuminProteinUrine'
import Calcium from './resources/pathology/bloodTests/Calcium'
import Phosphorus from './resources/pathology/bloodTests/Phosphorus'
import Biopsy from './resources/pathology/bloodTests/Biopsy'
import WidalSlideMethod from './resources/pathology/bloodTests/WidalSlideMethod'
// import LocationPopUp from './components/LocationPopUp';
import PaymentStatus from './components/Payment/PaymentStatus'

import Loading from './components/Loading.js';
import AdminLogin from './pages/AdminLogin.js';
import Transactions from './pages/Transactions.js';
import Receipt from './components/Receipt/Receipt.js';

// Lazy Load PAGES
const Login = lazy(() => import('./components/Login'))
const Home = lazy(() => import('./pages/Home'))
// const LabTests = lazy(() => import('./pages/LabTests'));
// const Pro = lazy(() => import('./pages/Pro'));
const Cart = lazy(() => import('./pages/Cart'))
const CartForm = lazy(() => import('./pages/CartForm'))
const BookYourTest = lazy(() => import('./pages/BookYourTest'))
const Prescription = lazy(() => import('./pages/Prescription'))
const AllOpenings = lazy(() => import('./pages/AllOpenings'))
const BusinessFranchise = lazy(() => import('./pages/BussinessFranchise'))
const Corporate = lazy(() => import('./pages/Corporate'))
const Career = lazy(() => import('./pages/Career'))
const DownloadReport = lazy(() => import('./pages/DownloadReport'))

// Lazy load components
const Mri = lazy(() => import('./pages/Mri.js'))
const PathologyTest = lazy(() => import('./pages/PathologyTest'))
const HealthPackages = lazy(() => import('./pages/HealthPackages'))
const Map = lazy(() => import('./components/Map/Map'))
const EmployeeDetails = lazy(() =>
  import('./components/DownloadReport/EmployeeDetails')
)
const EmployeeReports = lazy(() =>
  import('./components/DownloadReport/EmployeeReports')
)
const Reports = lazy(() => import('./components/DownloadReport/Reports'))
const MedallLogin = lazy(() =>
  import('./components/DownloadReport/MedallLogin')
)
const CorporateLogin = lazy(() =>
  import('./components/DownloadReport/CorporateLogin')
)
const ThankYou = lazy(() => import('./components/ThankYou.js'))
const Thanks = lazy(() => import('./components/Thanks.js'))

const TestHistory = lazy(() => import('./pages/TestHistory'))

function App () {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 150,
      delay: 0,
      once: true
    })
    AOS.refresh()
  }, [])

  // Handle Cart State via Cart Reducer
  const [ItemInCart, cartDispatch] = useReducer(cartReducer, cart)

  // console.log(ItemInCart);

  //Handle User State
  const [userDetails, userDispatch] = useReducer(userReducer, user)

  // Handle Thank You page
  const [paymentStatusDetail, paymentStatusDispatch] = useReducer(
    paymentStatusReducer,
    paymentStatus
  )

  // Handle User Location
  const [userLocationDetails, userLocationDispatch] = useReducer(
    userLocationReducer,
    userLocation
  )

  // User Address State
  const [addressDetails, addressDispatch] = useReducer(addressReducer, address)
  // Below is the address filled by user at checkout
  // console.log(addressDetails, 'Address from APP.JS');

  // Health Package Menu display when redirect from any Health Pacakge link
  const [healthPackageDisplay, healthPackageDisplayDispatch] = useReducer(
    openHealthPackageMenuReducer,
    openHealthPackageMenu
  )

  // Radiology Menu display when redirect
  const [openRadiologyMenuDisplay, openRadiologyMenuReducerDispatch] =
    useReducer(openRadiologyMenuReducer, openRadiologyMenu)

  // Popular Test Menu display when redirect
  const [openPopularTestMenuDisplay, openPopularTestMenuReducerDispatch] =
    useReducer(openPopularTestMenuReducer, openPopularTestMenu)

  // Login Form dispaly when redirect
  const [openLoginFormDisplay, openLoginFormDispatch] = useReducer(
    openLoginFormReducer,
    openLoginForm
  )

  // Fetch User details from local storage
  // const getUserLoginStatus = window.localStorage.getItem("ismedallUserLoggedIn");
  // const getUserData = JSON.parse(window.localStorage.getItem("medallUserInfo"));
  // console.log(getUserData);

  // console.log(userLocationDetails);

  return (
    <CartContext.Provider
      value={{ cartState: ItemInCart, cartDispatch: cartDispatch }}
    >
      <OpenLoginFormContext.Provider
        value={{
          openLoginFormState: openLoginFormDisplay,
          openLoginFormDispatch: openLoginFormDispatch
        }}
      >
        <PaymentStatusContext.Provider
          value={{
            paymentStatusState: paymentStatusDetail,
            paymentStatusDispatch: paymentStatusDispatch
          }}
        >
          <UserContext.Provider
            value={{ userState: userDetails, userDispatch: userDispatch }}
          >
            <UserLocationContext.Provider
              value={{
                userLocationState: userLocationDetails,
                userLocationDispatch: userLocationDispatch
              }}
            >
              <AddressContext.Provider
                value={{
                  addressState: addressDetails,
                  addressDispatch: addressDispatch
                }}
              >
                <OpenRadiologyMenu.Provider
                  value={{
                    openRadiologyMenuState: openRadiologyMenuDisplay,
                    openRadiologyMenuReducerDispatch:
                      openRadiologyMenuReducerDispatch
                  }}
                >
                  <OpenPopularTestMenuContext.Provider
                    value={{
                      openPopularTestMenuState: openPopularTestMenuDisplay,
                      openPopularTestMenuReducerDispatch:
                        openPopularTestMenuReducerDispatch
                    }}
                  >
                    <OpenHealthPackageMenuContext.Provider
                      value={{
                        healthPackageDisplayState: healthPackageDisplay,
                        healthPackageDisplayDispatch:
                          healthPackageDisplayDispatch
                      }}
                    >
                      <BrowserRouter>
                        <QuickLinksBar />
                        <Header />
                        <Suspense fallback={<Loading />}>
                          <ScrollToTop />
                          <Routes>
                            <Route exact path='/login' element={<Login />} />
                            <Route exact path='/' element={<Home />} />
                            <Route
                              exact
                              path='/download-report'
                              element={<Reports />}
                            />
                            <Route
                              exact
                              path='/employee-report'
                              element={<EmployeeReports />}
                            />
                            {/* <Route exact path="/lab-tests" element={<LabTests />} /> */}
                            {/* <Route exact path="/medall-pro" element={<Pro />} /> */}
                            <Route exact path='/cart' element={<Cart />} />
                            <Route
                              exact
                              path='/cart-form'
                              element={<CartForm />}
                            />
                            <Route
                              exact
                              path='/book-your-test'
                              element={<BookYourTest />}
                            />
                            <Route
                              exact
                              path='/prescription'
                              element={<Prescription />}
                            />
                            <Route exact path='/careers' element={<Career />} />
                            <Route
                              exact
                              path='/download-report-via-otp'
                              element={<DownloadReport />}
                            />
                            <Route
                              exact
                              path='/download-report-via-medall-login'
                              element={<MedallLogin />}
                            />
                            <Route
                              exact
                              path='/download-report-via-corporate-login'
                              element={<CorporateLogin />}
                            />
                            <Route
                              exact
                              path='/employee-details'
                              element={<EmployeeDetails />}
                            />
                            <Route
                              exact
                              path='/careers/all-job-opening'
                              element={<AllOpenings />}
                            />

                            {/* Radiology pages  */}
                            {/* MRI  */}
                            <Route
                              exact
                              path='/brain-mri'
                              element={<Mri mriInfo={BrainMRI} />}
                            />
                            <Route
                              exact
                              path='/spine-mri'
                              element={<Mri mriInfo={SpineMRI} />}
                            />
                            <Route
                              exact
                              path='/knee-mri'
                              element={<Mri mriInfo={KneeMRI} />}
                            />
                            <Route
                              exact
                              path='/lumbar-spine-mri'
                              element={<Mri mriInfo={LumbarSpineMRI} />}
                            />
                            <Route
                              exact
                              path='/prostate-mri'
                              element={<Mri mriInfo={ProstateMRI} />}
                            />
                            <Route
                              exact
                              path='/mrcp-mri'
                              element={<Mri mriInfo={MRCPMRI} />}
                            />
                            <Route
                              exact
                              path='/cardiac-mri'
                              element={<Mri mriInfo={CardiacMRI} />}
                            />
                            <Route
                              exact
                              path='/angiography-mri'
                              element={<Mri mriInfo={AngiographyMRI} />}
                            />
                            <Route
                              exact
                              path='/pelvis-mri'
                              element={<Mri mriInfo={PelvisMRI} />}
                            />
                            <Route
                              exact
                              path='/shoulder-mri'
                              element={<Mri mriInfo={ShoulderMRI} />}
                            />
                            <Route
                              exact
                              path='/brain-screening-mri'
                              element={<Mri mriInfo={BrainScreeningMRI} />}
                            />
                            <Route
                              exact
                              path='/whole-spine-mri'
                              element={<Mri mriInfo={WholeSpineMRI} />}
                            />
                            <Route
                              exact
                              path='/3t-mri'
                              element={<Mri mriInfo={ThreeTMRI} />}
                            />
                            <Route
                              exact
                              path='/lumbar-spine-screening-mri'
                              element={<Mri mriInfo={LumbarSpineScreening} />}
                            />
                            <Route
                              exact
                              path='/contrast-mri'
                              element={<Mri mriInfo={Contrast} />}
                            />
                            <Route
                              exact
                              path='/brain-single-film-mri'
                              element={<Mri mriInfo={BrainMriSingleFilm} />}
                            />
                            <Route
                              exact
                              path='/brain-screening-mra'
                              element={<Mri mriInfo={BrainMRA} />}
                            />
                            <Route
                              exact
                              path='/brain-screening-wholespine-mri'
                              element={<Mri mriInfo={BrainWholeSpine} />}
                            />
                            <Route
                              exact
                              path='/cervical-spine-screening-mri'
                              element={<Mri mriInfo={CervicalSpineScreening} />}
                            />
                            {/* MRI END  */}

                            {/* USG Routes  */}
                            <Route
                              exact
                              path='/abdomen-pelvis'
                              element={<Mri mriInfo={AbdomenPelvis} />}
                            />
                            <Route
                              exact
                              path='/abdomen-pelvis-scan'
                              element={<Mri mriInfo={AbdomenPelvisScan} />}
                            />
                            <Route
                              exact
                              path='/obst-early'
                              element={<Mri mriInfo={OBSTearly} />}
                            />
                            <Route
                              exact
                              path='/kub-us'
                              element={<Mri mriInfo={KubUS} />}
                            />
                            <Route
                              exact
                              path='/abdomen-only'
                              element={<Mri mriInfo={AbdomenOnly} />}
                            />
                            <Route
                              exact
                              path='/pelvis-only'
                              element={<Mri mriInfo={PelvisOnly} />}
                            />
                            <Route
                              exact
                              path='/abdomen-night'
                              element={<Mri mriInfo={AbdomenNight} />}
                            />
                            <Route
                              exact
                              path='/transvaginal'
                              element={<Mri mriInfo={Transvaginal} />}
                            />
                            <Route
                              exact
                              path='/antenatal'
                              element={<Mri mriInfo={Antenatal} />}
                            />
                            <Route
                              exact
                              path='/obstetrics'
                              element={<Mri mriInfo={Obstetrics} />}
                            />
                            <Route
                              exact
                              path='/anomaly'
                              element={<Mri mriInfo={Anomaly} />}
                            />
                            <Route
                              exact
                              path='/doppler'
                              element={<Mri mriInfo={Doppler} />}
                            />
                            <Route
                              exact
                              path='/breast'
                              element={<Mri mriInfo={Breast} />}
                            />
                            <Route
                              exact
                              path='/nt-scan'
                              element={<Mri mriInfo={NT} />}
                            />
                            <Route
                              exact
                              path='/pregnancy-us'
                              element={<Mri mriInfo={PregnancyUSG} />}
                            />
                            <Route
                              exact
                              path='/scortal-us'
                              element={<Mri mriInfo={ScortalUSG} />}
                            />
                            <Route
                              exact
                              path='/tvs'
                              element={<Mri mriInfo={TVS} />}
                            />
                            <Route
                              exact
                              path='/aanomaly-scan'
                              element={<Mri mriInfo={AanomalyScan} />}
                            />
                            {/* <Route exact path="/abdomen-pelvis" element={<Mri mriInfo={AbdomenPelvis} />} /> */}
                            {/* USG Routes END */}

                            {/* CT Routes START */}
                            <Route
                              exact
                              path='/brain-ct'
                              element={<Mri mriInfo={BrainCT} />}
                            />
                            <Route
                              exact
                              path='/chest-ct'
                              element={<Mri mriInfo={ChestCT} />}
                            />
                            <Route
                              exact
                              path='/pns-ct'
                              element={<Mri mriInfo={PNSCT} />}
                            />
                            <Route
                              exact
                              path='/whole-abdomen-pelvis-ct'
                              element={<Mri mriInfo={WholeAbdomenPelvisCT} />}
                            />
                            <Route
                              exact
                              path='/kub-ct'
                              element={<Mri mriInfo={KUB} />}
                            />
                            <Route
                              exact
                              path='/abdomen-with-pelvis'
                              element={<Mri mriInfo={AbdomenWithPelvis} />}
                            />
                            <Route
                              exact
                              path='/brain-plain-ct'
                              element={<Mri mriInfo={BrainPlainCT} />}
                            />
                            <Route
                              exact
                              path='/screening-ct'
                              element={<Mri mriInfo={ScreeningCT} />}
                            />
                            <Route
                              exact
                              path='/complementary-ct'
                              element={<Mri mriInfo={ComplementaryCT} />}
                            />
                            <Route
                              exact
                              path='/thorax-ct'
                              element={<Mri mriInfo={ThoraxCT} />}
                            />
                            <Route
                              exact
                              path='/contrast-ct'
                              element={<Mri mriInfo={ContrastCT} />}
                            />
                            <Route
                              exact
                              path='/abdomen-and-pelvis-ct'
                              element={<Mri mriInfo={AbdomenAndPelvisCT} />}
                            />
                            <Route
                              exact
                              path='/coronary-angiogram-ct'
                              element={<Mri mriInfo={CoronaryAngiogramCT} />}
                            />
                            <Route
                              exact
                              path='/contrast-iv'
                              element={<Mri mriInfo={ContrastIV} />}
                            />
                            <Route
                              exact
                              path='/virtual-colonoscopy'
                              element={<Mri mriInfo={VirtualColonoscopyCT} />}
                            />
                            <Route
                              exact
                              path='/neck-ct'
                              element={<Mri mriInfo={NeckCT} />}
                            />
                            {/* CT Routes END */}

                            {/* X-ray Start  */}
                            <Route
                              exact
                              path='/x-ray-chest'
                              element={<Mri mriInfo={Chest} />}
                            />
                            <Route
                              exact
                              path='/x-ray-chest-ap'
                              element={<Mri mriInfo={ChestAP} />}
                            />
                            <Route
                              exact
                              path='/x-ray-chest-pa'
                              element={<Mri mriInfo={ChestPA} />}
                            />
                            <Route
                              exact
                              path='/x-ray-lumber-spine'
                              element={<Mri mriInfo={LumberSpine} />}
                            />
                            <Route
                              exact
                              path='/x-ray-knee'
                              element={<Mri mriInfo={Knee} />}
                            />
                            <Route
                              exact
                              path='/x-ray-pns'
                              element={<Mri mriInfo={PNS} />}
                            />
                            <Route
                              exact
                              path='/x-ray-cervical-spine'
                              element={<Mri mriInfo={CervicalSpine} />}
                            />
                            <Route
                              exact
                              path='/x-ray-foot'
                              element={<Mri mriInfo={XrayFoot} />}
                            />
                            <Route
                              exact
                              path='/x-ray-knee-ap'
                              element={<Mri mriInfo={XrayKneeAP} />}
                            />
                            <Route
                              exact
                              path='/x-ray-shoulder'
                              element={<Mri mriInfo={XrayShoulder} />}
                            />
                            <Route
                              exact
                              path='/x-ray-lumbar-spine-ap'
                              element={<Mri mriInfo={XrayLumbarSpineAP} />}
                            />
                            <Route
                              exact
                              path='/x-ray-foot-ap'
                              element={<Mri mriInfo={FootAP} />}
                            />
                            <Route
                              exact
                              path='/x-ray-wrist-ap'
                              element={<Mri mriInfo={XrayWrist} />}
                            />
                            <Route
                              exact
                              path='/x-ray-lumbar-spine-ap-only'
                              element={<Mri mriInfo={XrayLumbarSpineAPOnly} />}
                            />

                            <Route
                              exact
                              path='/ecg'
                              element={<Mri mriInfo={ECGcontent} />}
                            />
                            <Route
                              exact
                              path='/echo'
                              element={<Mri mriInfo={ECHO} />}
                            />
                            <Route
                              exact
                              path='/mammogram'
                              element={<Mri mriInfo={MammogramContent} />}
                            />
                            <Route
                              exact
                              path='/tmt-radiology-scan'
                              element={<Mri mriInfo={TMTcontent} />}
                            />
                            {/* Radiology pages END  */}

                            {/* Pathology Tests pages  */}
                            <Route
                              exact
                              path='/cbc-test'
                              element={<PathologyTest testInfo={CBCTest} />}
                            />
                            <Route
                              exact
                              path='/hba1c-test'
                              element={<PathologyTest testInfo={HBA1CTest} />}
                            />
                            <Route
                              exact
                              path='/liver-function-test'
                              element={
                                <PathologyTest testInfo={LiverFunctionTest} />
                              }
                            />
                            <Route
                              exact
                              path='/lipid-test'
                              element={<PathologyTest testInfo={LipidTest} />}
                            />
                            <Route
                              exact
                              path='/thyroid-test'
                              element={<PathologyTest testInfo={ThyroidTest} />}
                            />
                            <Route
                              exact
                              path='/aec-test'
                              element={<PathologyTest testInfo={AECTest} />}
                            />
                            <Route
                              exact
                              path='/anti-streptolysin-test'
                              element={
                                <PathologyTest
                                  testInfo={AntiStreptolysinTest}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/bleeding-time-test'
                              element={
                                <PathologyTest testInfo={BleedingTimeTest} />
                              }
                            />
                            <Route
                              exact
                              path='/blood-group-test'
                              element={
                                <PathologyTest testInfo={BloodGroupTest} />
                              }
                            />
                            <Route
                              exact
                              path='/haemogram-test'
                              element={
                                <PathologyTest testInfo={HaemogramTest} />
                              }
                            />
                            <Route
                              exact
                              path='/blood-count-with-esr-test'
                              element={
                                <PathologyTest testInfo={BloodCountWithESR} />
                              }
                            />
                            <Route
                              exact
                              path='/erythrocyte-sedimentation-test'
                              element={
                                <PathologyTest
                                  testInfo={ErythrocyteSedimentationTest}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/ferritin-test'
                              element={
                                <PathologyTest testInfo={FerritinTest} />
                              }
                            />
                            <Route
                              exact
                              path='/hb-tc-dc-test'
                              element={<PathologyTest testInfo={HbTcDc} />}
                            />
                            <Route
                              exact
                              path='/iron-test'
                              element={<PathologyTest testInfo={IronTest} />}
                            />
                            <Route
                              exact
                              path='/packed-cell-volume-test'
                              element={
                                <PathologyTest testInfo={PackedCellVolume} />
                              }
                            />
                            <Route
                              exact
                              path='/partial-thromboplastin-time-test'
                              element={
                                <PathologyTest
                                  testInfo={PartialThromboplastinTime}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/peripheral-smear-test'
                              element={
                                <PathologyTest testInfo={PeripheralSmear} />
                              }
                            />
                            <Route
                              exact
                              path='/platelet-count-test'
                              element={
                                <PathologyTest testInfo={PlateletCountTest} />
                              }
                            />
                            <Route
                              exact
                              path='/prothrombin-test'
                              element={
                                <PathologyTest testInfo={ProthrombinTest} />
                              }
                            />
                            <Route
                              exact
                              path='/malarial-test'
                              element={
                                <PathologyTest testInfo={MalarialTest} />
                              }
                            />
                            <Route
                              exact
                              path='/tc-dc-test'
                              element={<PathologyTest testInfo={TcDcTest} />}
                            />

                            <Route
                              exact
                              path='/blood-urea-nitrogen'
                              element={<PathologyTest testInfo={BUN} />}
                            />
                            <Route
                              exact
                              path='/creatinine-kidney'
                              element={
                                <PathologyTest testInfo={CreatinineKidney} />
                              }
                            />
                            <Route
                              exact
                              path='/creatinine-heart'
                              element={
                                <PathologyTest testInfo={CreatinineHeart} />
                              }
                            />
                            <Route
                              exact
                              path='/creatinine-heart'
                              element={
                                <PathologyTest testInfo={CreatinineHeart} />
                              }
                            />
                            <Route
                              exact
                              path='/alanine-aminotransferase'
                              element={
                                <PathologyTest
                                  testInfo={AlanineAminotransferase}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/aspartate-sgot'
                              element={
                                <PathologyTest testInfo={AspartateSGOT} />
                              }
                            />
                            <Route
                              exact
                              path='/albumin'
                              element={<PathologyTest testInfo={Albumin} />}
                            />
                            <Route
                              exact
                              path='/albuminproteinurine'
                              element={
                                <PathologyTest testInfo={AlbuminProteinUrine} />
                              }
                            />
                            <Route
                              exact
                              path='/bilirubin'
                              element={<PathologyTest testInfo={Bilirubin} />}
                            />
                            <Route
                              exact
                              path='/hbsag'
                              element={<PathologyTest testInfo={Hbsag} />}
                            />
                            <Route
                              exact
                              path='/magnesium'
                              element={<PathologyTest testInfo={Magnesium} />}
                            />
                            <Route
                              exact
                              path='/cholesterol-total'
                              element={
                                <PathologyTest testInfo={CholesterolTotal} />
                              }
                            />
                            <Route
                              exact
                              path='/LDH'
                              element={<PathologyTest testInfo={LDH} />}
                            />
                            <Route
                              exact
                              path='/electrolytes-na-k-cl'
                              element={
                                <PathologyTest testInfo={ElectrolytesNaKCl} />
                              }
                            />
                            <Route
                              exact
                              path='/electrolytes-na-k-ch-bic'
                              element={
                                <PathologyTest
                                  testInfo={ElectrolytesNaKChBic}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/glucose-fasting'
                              element={
                                <PathologyTest testInfo={GlucoseFasting} />
                              }
                            />
                            <Route
                              exact
                              path='/glucose-post'
                              element={<PathologyTest testInfo={GlucosePost} />}
                            />
                            <Route
                              exact
                              path='/sputum-afb'
                              element={<PathologyTest testInfo={SputumAFB} />}
                            />
                            <Route
                              exact
                              path='/arterial-blood-gas'
                              element={
                                <PathologyTest testInfo={ArterialBloodGas} />
                              }
                            />
                            <Route
                              exact
                              path='/potassium'
                              element={<PathologyTest testInfo={Potassium} />}
                            />
                            <Route
                              exact
                              path='/protein-creatinine'
                              element={
                                <PathologyTest testInfo={ProteinCreatRatio} />
                              }
                            />
                            <Route
                              exact
                              path='/renal-function'
                              element={
                                <PathologyTest testInfo={RenalFunction} />
                              }
                            />
                            <Route
                              exact
                              path='/uric-acid'
                              element={<PathologyTest testInfo={UricAcid} />}
                            />
                            <Route
                              exact
                              path='/urea'
                              element={<PathologyTest testInfo={Urea} />}
                            />
                            <Route
                              exact
                              path='/urine-microalbumin'
                              element={
                                <PathologyTest testInfo={UrineMicroalbumin} />
                              }
                            />
                            {/* <Route exact path="/urine-aerobic" element={<PathologyTest testInfo={UrineAerobic} />} /> */}
                            <Route
                              exact
                              path='/urine-routine'
                              element={
                                <PathologyTest testInfo={UrineRotuine} />
                              }
                            />
                            <Route
                              exact
                              path='/urine-complete'
                              element={
                                <PathologyTest testInfo={UrineComplete} />
                              }
                            />
                            <Route
                              exact
                              path='/sodium'
                              element={<PathologyTest testInfo={Sodium} />}
                            />
                            <Route
                              exact
                              path='/urine-bile'
                              element={<PathologyTest testInfo={UrineBile} />}
                            />
                            <Route
                              exact
                              path='/hepatitis-c'
                              element={<PathologyTest testInfo={HepatitisC} />}
                            />
                            <Route
                              exact
                              path='/wbc-count'
                              element={<PathologyTest testInfo={WBCCount} />}
                            />
                            <Route
                              exact
                              path='/coagulation-package'
                              element={
                                <PathologyTest testInfo={CoagulationPackage} />
                              }
                            />
                            <Route
                              exact
                              path='/haemoglobin'
                              element={<PathologyTest testInfo={Haemoglobin} />}
                            />
                            <Route
                              exact
                              path='/hbTcDcEsr'
                              element={<PathologyTest testInfo={HbTcDcEsr} />}
                            />
                            <Route
                              exact
                              path='/malaria-qbc'
                              element={<PathologyTest testInfo={MalariaQBC} />}
                            />
                            <Route
                              exact
                              path='/malaria-rapid'
                              element={
                                <PathologyTest testInfo={MalariaRapid} />
                              }
                            />
                            <Route
                              exact
                              path='/vitamin-b12'
                              element={<PathologyTest testInfo={VitaminB12} />}
                            />
                            <Route
                              exact
                              path='/free-t3-t4'
                              element={<PathologyTest testInfo={FreeT3T4} />}
                            />
                            <Route
                              exact
                              path='/free-t4'
                              element={<PathologyTest testInfo={FreeT4} />}
                            />
                            <Route
                              exact
                              path='/tsh'
                              element={<PathologyTest testInfo={TSH} />}
                            />
                            {/* <Route exact path="/thyroid-t3-t4" element={<PathologyTest testInfo={ThyroidT3T4} />} /> */}
                            <Route
                              exact
                              path='/thyroxine'
                              element={<PathologyTest testInfo={Thyroxine} />}
                            />
                            <Route
                              exact
                              path='/triiodothyronine-t3'
                              element={
                                <PathologyTest testInfo={TriiodothyronineT3} />
                              }
                            />
                            {/* <Route exact path='/trimester-down' element={<PathologyTest testInfo={TrimesterDown}/>}/> */}
                            <Route
                              exact
                              path='/anti-cpp'
                              element={<PathologyTest testInfo={AntiCCP} />}
                            />
                            <Route
                              exact
                              path='/crp'
                              element={<PathologyTest testInfo={CRP} />}
                            />
                            <Route
                              exact
                              path='/crp-latex'
                              element={<PathologyTest testInfo={CRPLatex} />}
                            />
                            <Route
                              exact
                              path='/rheumatoid-arthritis'
                              element={
                                <PathologyTest testInfo={RheumatoidArthritis} />
                              }
                            />
                            <Route
                              exact
                              path='/vitamin-d'
                              element={<PathologyTest testInfo={VitaminD} />}
                            />
                            <Route
                              exact
                              path='/amylase'
                              element={<PathologyTest testInfo={Amylase} />}
                            />
                            <Route
                              exact
                              path='/lipase'
                              element={<PathologyTest testInfo={Lipase} />}
                            />
                            <Route
                              exact
                              path='/stool-analysis'
                              element={
                                <PathologyTest testInfo={StoolAnalysis} />
                              }
                            />
                            <Route
                              exact
                              path='/stool-analysis-routine'
                              element={
                                <PathologyTest
                                  testInfo={StoolAnalysisRoutine}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/typhidot'
                              element={<PathologyTest testInfo={Typhidot} />}
                            />
                            <Route
                              exact
                              path='/trimester-down'
                              element={
                                <PathologyTest testInfo={TrimesterDown} />
                              }
                            />
                            <Route
                              exact
                              path='/ca-125'
                              element={<PathologyTest testInfo={CA125} />}
                            />
                            {/* <Route exact path="/semen-analysis" element={<PathologyTest testInfo={SemenAnalysis} />} /> */}
                            <Route
                              exact
                              path='/testosterone'
                              element={
                                <PathologyTest testInfo={Testosterone} />
                              }
                            />
                            <Route
                              exact
                              path='/psa'
                              element={<PathologyTest testInfo={PSA} />}
                            />
                            <Route
                              exact
                              path='/urine-pregnancy'
                              element={
                                <PathologyTest testInfo={UrinePregnancy} />
                              }
                            />
                            <Route
                              exact
                              path='/vdrl'
                              element={<PathologyTest testInfo={VDRL} />}
                            />
                            <Route
                              exact
                              path='/beta-hcg'
                              element={<PathologyTest testInfo={BetaHCG} />}
                            />
                            <Route
                              exact
                              path='/fsh'
                              element={<PathologyTest testInfo={FSH} />}
                            />
                            {/* <Route exact path="/glucose-fasting-hormones" element={<PathologyTest testInfo={GlucoseFastingHormones} />} /> */}
                            <Route
                              exact
                              path='/glucose-fasting-only'
                              element={
                                <PathologyTest testInfo={GlucoseFastingOnly} />
                              }
                            />
                            <Route
                              exact
                              path='/glucose-postprandial'
                              element={
                                <PathologyTest testInfo={GlucosePostprandial} />
                              }
                            />
                            <Route
                              exact
                              path='/glucose-postprandial-urine'
                              element={
                                <PathologyTest
                                  testInfo={GlucosePostprandialUrine}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/glucose-random'
                              element={
                                <PathologyTest testInfo={GlucoseRandom} />
                              }
                            />
                            <Route
                              exact
                              path='/glucose-challenge'
                              element={
                                <PathologyTest testInfo={GlucoseChallenge} />
                              }
                            />
                            <Route
                              exact
                              path='/glucose-glucometer-random'
                              element={
                                <PathologyTest
                                  testInfo={GlucoseGlucometerRandom}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/leutinising-hormone'
                              element={
                                <PathologyTest testInfo={LeutinisingHormone} />
                              }
                            />
                            <Route
                              exact
                              path='/prolactin'
                              element={<PathologyTest testInfo={Prolactin} />}
                            />
                            <Route
                              exact
                              path='/urine-glucose-postprandial'
                              element={
                                <PathologyTest
                                  testInfo={UrineGlucosePostprandial}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/urine-glucose-random'
                              element={
                                <PathologyTest testInfo={UrineGlucoseRandom} />
                              }
                            />
                            <Route
                              exact
                              path='/urine-glucose-fasting'
                              element={
                                <PathologyTest testInfo={UrineGlucoseFasting} />
                              }
                            />
                            <Route
                              exact
                              path='/glucose-postprandial-time'
                              element={
                                <PathologyTest
                                  testInfo={GlucosePostprandialTime}
                                />
                              }
                            />
                            {/* <Route exact path="/ferritin-test-immune" element={<PathologyTest testInfo={FerritinTestImmune} />} /> */}
                            <Route
                              exact
                              path='/ana'
                              element={
                                <PathologyTest
                                  testInfo={AntiNuclearAntibodies}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/dengue-antigen'
                              element={
                                <PathologyTest testInfo={DengueAntigen} />
                              }
                            />
                            <Route
                              exact
                              path='/hiv'
                              element={<PathologyTest testInfo={HIV} />}
                            />
                            <Route
                              exact
                              path='/immunoglobulin-e'
                              element={
                                <PathologyTest testInfo={ImmunoglobulinE} />
                              }
                            />
                            <Route
                              exact
                              path='/calcium'
                              element={<PathologyTest testInfo={Calcium} />}
                            />
                            <Route
                              exact
                              path='/phosphorus'
                              element={<PathologyTest testInfo={Phosphorus} />}
                            />
                            <Route
                              exact
                              path='/biopsy'
                              element={<PathologyTest testInfo={Biopsy} />}
                            />
                            <Route
                              exact
                              path='/widal-slide-method'
                              element={
                                <PathologyTest testInfo={WidalSlideMethod} />
                              }
                            />

                            {/* Pathology Tests pages END */}

                            {/* Health Packages route START */}
                            <Route
                              exact
                              path='/health-package-basic'
                              element={
                                <HealthPackages packageInfo={BasicPackage} />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-classic'
                              element={
                                <HealthPackages packageInfo={ClassicPackage} />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-premium'
                              element={
                                <HealthPackages packageInfo={PremiumPackage} />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-pro'
                              element={
                                <HealthPackages packageInfo={ProPackage} />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-supreme'
                              element={
                                <HealthPackages packageInfo={SupremePackage} />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-expert'
                              element={
                                <HealthPackages packageInfo={ExpertPackage} />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-elite'
                              element={
                                <HealthPackages packageInfo={ElitePackage} />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-men'
                              element={
                                <HealthPackages packageInfo={MenPackage} />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-young-women'
                              element={
                                <HealthPackages
                                  packageInfo={YoungWomenPackage}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-old-women'
                              element={
                                <HealthPackages packageInfo={OldWomenPackage} />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-senior-citizen-men'
                              element={
                                <HealthPackages
                                  packageInfo={SeniorCitizenMenPackage}
                                />
                              }
                            />
                            <Route
                              exact
                              path='/health-package-senior-citizen-women'
                              element={
                                <HealthPackages
                                  packageInfo={SeniorCitizenWomenPackage}
                                />
                              }
                            />
                            {/* Health Packages route END */}

                            {/* Imcluding Google Maps  */}
                            <Route
                              exact
                              path='/medall-center'
                              element={<Map />}
                            />
                            <Route
                              exact
                              path='/business-enquiry'
                              element={<BusinessFranchise />}
                            />
                            <Route
                              exact
                              path='/corporate'
                              element={<Corporate />}
                            />

                            {/* Thank You pages Start */}
                            <Route
                              exact
                              path='/thank-you'
                              element={<ThankYou />}
                            />
                            <Route exact path='/thanks' element={<Thanks />} />
                            {/* Thank You pages  END*/}
                            {/* <Route exact path="/about/experience" element={<Experience />} /> */}

                            <Route
                              exact
                              path='/admin-login'
                              element={<AdminLogin />}
                            />
                            <Route
                              exact
                              path='/transactions-history'
                              element={<Transactions />}
                            />
                             {/* <Route
                              exact
                              path='/test-history'
                              element={<TestHistory />}
                            /> */}
                          </Routes>
                        </Suspense>
                        <Footer />
                        {/* Location Pop Up selector  */}
                        {paymentStatusDetail && <PaymentStatus />}
                        <BottomNavbar />
                        {/* <LocationPopUp /> */}
                        <ToastContainer />
                      </BrowserRouter>
                    </OpenHealthPackageMenuContext.Provider>
                  </OpenPopularTestMenuContext.Provider>
                </OpenRadiologyMenu.Provider>
              </AddressContext.Provider>
            </UserLocationContext.Provider>
          </UserContext.Provider>
        </PaymentStatusContext.Provider>
      </OpenLoginFormContext.Provider>
    </CartContext.Provider>
  )
}

export default App
