import React from 'react'

// import filter for tests
import FilterTest from '../components/BookYourTest/FilterTest'

// import all test content files
import AlanineAminotransferase from '../resources/pathology/bloodTests/AlanineAmino'
import Albumin from '../resources/pathology/bloodTests/Albumin'
import AspartateSGOT from '../resources/pathology/bloodTests/AspartateSGOT'
import Bilirubin from '../resources/pathology/bloodTests/Bilirubin'
import Hbsag from '../resources/pathology/bloodTests/Hbsag'
import LiverFunctionTest from '../resources/pathology/bloodTests/LiverFunction'
import HBA1CTest from '../resources/pathology/bloodTests/Hba1c'
import LipidTest from '../resources/pathology/bloodTests/LipidProfile'
import Magnesium from '../resources/pathology/bloodTests/Magnesium'
import BUN from '../resources/pathology/bloodTests/BloodUreaNitrogen'
import CreatinineKidney from '../resources/pathology/bloodTests/CreatinineKidney'
import ProteinCreatRatio from '../resources/pathology/bloodTests/ProteinCreatRatio'
import CholesterolTotal from '../resources/pathology/bloodTests/CholesterolTotal'
import LDH from '../resources/pathology/bloodTests/LDH'
import ElectrolytesNaKCl from '../resources/pathology/bloodTests/ElectrolytesNaKCl'
import ElectrolytesNaKChBic from '../resources/pathology/bloodTests/ElectrolytesNaKChBic'
import GlucoseFasting from '../resources/pathology/bloodTests/Glucose'
import GlucosePostprandialUrine from '../resources/pathology/bloodTests/GlucosePostprandialUrine'
import SputumAFB from '../resources/pathology/bloodTests/SputumAFB'
import ArterialBloodGas from '../resources/pathology/bloodTests/ArterialBloodGas'
import Potassium from '../resources/pathology/bloodTests/Potassium'
import CreatinineHeart from '../resources/pathology/bloodTests/CreatinineHeart'
import RenalFunction from '../resources/pathology/bloodTests/RenalFunction'
import UricAcid from '../resources/pathology/bloodTests/UricAcid'
import Urea from '../resources/pathology/bloodTests/Urea'
import UrineMicroalbumin from '../resources/pathology/bloodTests/UrineMicroalbumin'
import UrineAerobic from '../resources/pathology/bloodTests/UrineAerobic'
import UrineRotuine from '../resources/pathology/bloodTests/UrineRoutine'
import UrineComplete from '../resources/pathology/bloodTests/UrineComplete'
import Sodium from '../resources/pathology/bloodTests/Sodium'
import UrineBile from '../resources/pathology/bloodTests/UrineBile'
import HepatitisC from '../resources/pathology/bloodTests/HepatitisC'
import AntiStreptolysinTest from '../resources/pathology/bloodTests/AntiStreptolysin'
import AECTest from '../resources/pathology/bloodTests/Aec'
import BleedingTimeTest from '../resources/pathology/bloodTests/BleedingTime'
import BloodGroupTest from '../resources/pathology/bloodTests/BloodGroup'
import CBCTest from '../resources/pathology/bloodTests/Cbc'
import HaemogramTest from '../resources/pathology/bloodTests/Haemogram'
import BloodCountWithESRTest from '../resources/pathology/bloodTests/BloodCountWithESR'
import ErythrocyteSedimentationTest from '../resources/pathology/bloodTests/ErythrocyteSedimentation'
import FerritinTest from '../resources/pathology/bloodTests/Ferritin'
import HbTcDcTest from '../resources/pathology/bloodTests/HbTcDc'
import IronTest from '../resources/pathology/bloodTests/Iron'
import PackedCellVolumeTest from '../resources/pathology/bloodTests/PackedCellVolume'
import PartialThromboplastinTime from '../resources/pathology/bloodTests/PartialThromboplastinTime'
import PeripheralSmearTest from '../resources/pathology/bloodTests/PeripheralSmear'
import PlateletCountTest from '../resources/pathology/bloodTests/PlateletCount'
import ProthrombinTest from '../resources/pathology/bloodTests/Prothrombin'
import MalarialTest from '../resources/pathology/bloodTests/Malarial'
import TcDcTest from '../resources/pathology/bloodTests/TcDc'
import WBCCount from '../resources/pathology/bloodTests/WBCCount'
import CoagulationPackage from '../resources/pathology/bloodTests/CoagulationPackage'
import Haemoglobin from '../resources/pathology/bloodTests/Haemoglobin'
import HbTcDcEsr from '../resources/pathology/bloodTests/HbTcDcEsr'
import MalariaQBC from '../resources/pathology/bloodTests/MalariaQbc'
import MalariaRapid from '../resources/pathology/bloodTests/MalariaRapid'
import VitaminB12 from '../resources/pathology/bloodTests/VitaminB12'
import ThyriodTest from '../resources/pathology/bloodTests/Thyroid'
import FreeT3T4 from '../resources/pathology/bloodTests/FreeT3T4'
import FreeT4 from '../resources/pathology/bloodTests/FreeT4'
import TSH from '../resources/pathology/bloodTests/TSH'
// import ThyroidT3T4 from '../resources/pathology/bloodTests/ThyroidT3T4'
import Thyroxine from '../resources/pathology/bloodTests/Thyroxine'
import TriiodothyronineT3 from '../resources/pathology/bloodTests/Triiodothyronine'
import AntiCCP from '../resources/pathology/bloodTests/AntiCCP'
import CRP from '../resources/pathology/bloodTests/CRP'
import CRPLatex from '../resources/pathology/bloodTests/CRPLatex'
import RheumatoidArthritis from '../resources/pathology/bloodTests/RheumatoidArthritis'
import VitaminD from '../resources/pathology/bloodTests/VitaminD'
import Amylase from '../resources/pathology/bloodTests/Amylase'
import Lipase from '../resources/pathology/bloodTests/Lipase'
import StoolAnalysis from '../resources/pathology/bloodTests/StoolAnalysis'
import StoolAnalysisRoutine from '../resources/pathology/bloodTests/StoolAnalysisRoutine'
import Typhidot from '../resources/pathology/bloodTests/Typhidot'
import TrimesterDown from '../resources/pathology/bloodTests/TrimesterDown'
import CA125 from '../resources/pathology/bloodTests/CA125'
// import SemenAnalysis from '../resources/pathology/bloodTests/SemenAnalysis'
import Testosterone from '../resources/pathology/bloodTests/Testosterone'
import PSA from '../resources/pathology/bloodTests/PSA'
import UrinePregnancy from '../resources/pathology/bloodTests/UrinePregnancy'
import VDRL from '../resources/pathology/bloodTests/VDRL'
import BetaHCG from '../resources/pathology/bloodTests/BetaHCG'
import FSH from '../resources/pathology/bloodTests/FSH'
import GlucoseFastingHormones from '../resources/pathology/bloodTests/GlucoseFastingHormones'
import GlucoseFastingOnly from '../resources/pathology/bloodTests/GlucoseFasting'
import GlucosePostprandial from '../resources/pathology/bloodTests/GlucosePostprandial'
import GlucoseRandom from '../resources/pathology/bloodTests/GlucoseRandom'
import GlucoseChallenge from '../resources/pathology/bloodTests/GlucoseChallenge'
import GlucoseGlucometerRandom from '../resources/pathology/bloodTests/GlucoseGlucometerRandom'
import LeutinisingHormone from '../resources/pathology/bloodTests/LeutinisingHormone'
import UrineGlucosePostprandial from '../resources/pathology/bloodTests/UrineGlucosePostprandial'
import UrineGlucoseRandom from '../resources/pathology/bloodTests/UrineGlucoseRandom'
import UrineGlucoseFasting from '../resources/pathology/bloodTests/UrineGlucoseFasting'
import GlucosePostprandialTime from '../resources/pathology/bloodTests/GlucosePostprandialTime'
import WidalSlideMethod from '../resources/pathology/bloodTests/WidalSlideMethod'
// import FerritinTestImmune from '../resources/pathology/bloodTests/FerritinTestImmune'
import AntiNuclearAntibodies from '../resources/pathology/bloodTests/AntiNuclearAntibodies'
import DengueAntigen from '../resources/pathology/bloodTests/DengueAntigen'
import ImmunoglobulinE from '../resources/pathology/bloodTests/ImmunoglobulinE'
import Biopsy from '../resources/pathology/bloodTests/Biopsy'

const BookYourTest = () => {
  const allTests = [
    AlanineAminotransferase,
    Albumin,
    AspartateSGOT,
    Bilirubin,
    Hbsag,
    LiverFunctionTest,
    HBA1CTest,
    LipidTest,
    Magnesium,
    BUN,
    CreatinineKidney,
    ProteinCreatRatio,
    CholesterolTotal,
    LDH,
    ElectrolytesNaKCl,
    ElectrolytesNaKChBic,
    GlucoseFasting,
    GlucosePostprandialUrine,
    SputumAFB,
    ArterialBloodGas,
    Potassium,
    CreatinineHeart,
    RenalFunction,
    UricAcid,
    Urea,
    UrineMicroalbumin,
    // UrineAerobic,
    UrineRotuine,
    UrineComplete,
    Sodium,
    UrineBile,
    HepatitisC,
    AntiStreptolysinTest,
    AECTest,
    BleedingTimeTest,
    BloodGroupTest,
    CBCTest,
    HaemogramTest,
    BloodCountWithESRTest,
    ErythrocyteSedimentationTest,
    FerritinTest,
    HbTcDcTest,
    IronTest,
    PackedCellVolumeTest,
    PartialThromboplastinTime,
    PeripheralSmearTest,
    PlateletCountTest,
    ProthrombinTest,
    MalarialTest,
    TcDcTest,
    WBCCount,
    CoagulationPackage,
    Haemoglobin,
    HbTcDcEsr,
    MalariaQBC,
    MalariaRapid,
    VitaminB12,
    ThyriodTest,
    FreeT3T4,
    FreeT4,
    TSH,
    // ThyroidT3T4,
    Thyroxine,
    TriiodothyronineT3,
    AntiCCP,
    CRP,
    CRPLatex,
    RheumatoidArthritis,
    VitaminD,
    Amylase,
    Lipase,
    StoolAnalysis,
    StoolAnalysisRoutine,
    Typhidot,
    TrimesterDown,
    CA125,
    // SemenAnalysis,
    Testosterone,
    PSA,
    UrinePregnancy,
    VDRL,
    BetaHCG,
    FSH,
    GlucoseFastingHormones,
    GlucoseFastingOnly,
    GlucosePostprandial,
    GlucoseRandom,
    GlucoseChallenge,
    GlucoseGlucometerRandom,
    LeutinisingHormone,
    UrineGlucosePostprandial,
    UrineGlucoseRandom,
    UrineGlucoseFasting,
    GlucosePostprandialTime,
    WidalSlideMethod,
    // FerritinTestImmune,
    AntiNuclearAntibodies,
    DengueAntigen,
    ImmunoglobulinE,
    Biopsy
  ]

  return (
    <>
      <FilterTest testCards={allTests} />
    </>
  )
}

export default BookYourTest
