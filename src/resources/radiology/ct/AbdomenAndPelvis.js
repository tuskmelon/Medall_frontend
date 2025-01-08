// import other images 
import Machine from '../../../assets/images/mri/angiography-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'
// import Contrast from '../mri/Contrast'

export const AbdomenAndPelvisCT = {
    title: 'Abdomen & Pelvis CT',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/CT-Images/Abdomen%26+PelvisCT-IMG.jpg',
    type: 'CT',
    price: 'NA',
    chennaiPrice: 10500,
    banglorePrice: 9400,
    andhraPradeshPrice: 6100,
    discountAmount: 0,
    highlightType: '',

    iconWithText: [
        {
            icon: Report,
            text: 'Specialised clinical reports by experts'
        },
        {
            icon: CTScan,
            text: 'High end, State-of-the-art machines'
        },
        {
            icon: ReportCard,
            text: 'Fast report turn around time'
        },
        {
            icon: RupeesCreditCard,
            text: 'Competitive pricing'
        },
        {
            icon: Businessmen,
            text: 'Friendly and professional staff'
        },
        {
            icon: Care,
            text: 'Exemplary patient care'
        },
    ],
    imageWithInfo: {
        title: 'Why am I having a ',
        highlightedTitle: 'Abdomen & Pelvis CT',
        image: Machine,
        description: [
            {
                text: "The abdomen and pelvis contains organs of the gastrointestinal, urinary, endocrine, and reproductive systems. A CT scan of the abdomen may be performed to assess the abdomen and its organs for tumors and other lesions, injuries, intra-abdominal bleeding, infections, unexplained abdominal pain, obstructions, or other conditions, particularly when another type of examination, such as X-ray, ultrasound or physical examination, is not conclusive."
            },
            {
                text: "A CT scan of the abdomen may also be used to evaluate the effects of treatment on abdominal tumors. Another use of abdominal CT is to provide guidance for biopsies and aspiration or either of the tissue from the abdomen."
            }
        ]
    },
    faqs: [
        {
            title: 'Are ',
            highlightedTitle: 'CT scans safe ',
            description: [
                {
                    text: "CT scans expose you to X-ray, but high-end scanners at Medall are designed so that you’re not exposed to very high levels of radiation. Your doctor will always weigh up the benefits and risks of a CT scan before advising you to have one. Women should always tell their doctor and X-ray or CT technologist if there is any chance, they are pregnant; as it is better to avoid CTs during this time. The risk of serious allergic reaction to contrast materials that contain iodine is extremely rare. Radiology departments are well-equipped to deal with such reactions."
                },
            ]
        },
        {
            title: 'How do I prepare for an ',
            highlightedTitle: "Abdomen & Pelvis CT",
            description: [
                {
                    text: "If your doctor prescribed a CT scan without contrast, you can eat, drink and take your prescribed medications prior to your exam. If your doctor prescribed a CT scan with IV contrast, do not eat anything 2 hours prior to your CT scan. You are encouraged to drink clear liquids. You may also take your prescribed medications prior to your exam. Right before the scan, you will need to remove anything that contains metal, including jewellery and hairpins.  An oral contrast may also be given prior to the study; which is generally safe and helps visualize the bowel better. The IV contrast will be given after ensuring that your kidney function is normal (serum creatine blood test done for this purpose). "
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Abdomen & Pelvis CT ',
            description: [
                {
                    text: "You will need to lie on a bed that’s slowly moved into a CT scanner head first. The scanner will rotate around your head. It’s important to keep as still as possible during the scan and hold your breath, so that the images come out clear. CT scans are quicker than MRI scans, usually lasting less than 10 minutes."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Abdomen & Pelvis CT results',
            description: [
                {
                    text: "The CT images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                },
            ]
        },
    ]
}

export default AbdomenAndPelvisCT