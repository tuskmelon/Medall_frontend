import XRays from "../../components/Menubar/TestAndScansList/Radiology/XRay"
import CT from "../../components/Menubar/TestAndScansList/Radiology/CT"
import ECG from "../../components/Menubar/TestAndScansList/Radiology/ECG"
import ECHO from "../../components/Menubar/TestAndScansList/Radiology/ECHO"
import Mammogram from "../../components/Menubar/TestAndScansList/Radiology/Mammogram"
import MRI from "../../components/Menubar/TestAndScansList/Radiology/MRI"
import TMT from "../../components/Menubar/TestAndScansList/Radiology/TMT"
import USGs from "../../components/Menubar/TestAndScansList/Radiology/USG"

export const xray = XRays.map(item => ({ testName: item.name, testDetailsPageLink: item.pageLink }));
export const ct = CT.map(item => ({ testName: item.name, testDetailsPageLink: item.pageLink }));
export const ecg = ECG.map(item => ({ testName: item.name, testDetailsPageLink: item.pageLink }));
export const echo = ECHO.map(item => ({ testName: item.name, testDetailsPageLink: item.pageLink }));
export const mammogram = Mammogram.map(item => ({ testName: item.name, testDetailsPageLink: item.pageLink }));
export const mri = MRI.map(item => ({ testName: item.name, testDetailsPageLink: item.pageLink }));
export const tmt = TMT.map(item => ({ testName: item.name, testDetailsPageLink: item.pageLink }));
export const usgs = USGs.map(item => ({ testName: item.name, testDetailsPageLink: item.pageLink }));
