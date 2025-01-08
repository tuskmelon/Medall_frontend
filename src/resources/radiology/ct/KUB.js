// import other images 
import Machine from '../../../assets/images/mri/angiography-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const KUB = {
    title: ' KUB CT',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/CT-Images/KUBCT-IMG.jpg',
    type: 'CT',
    price: 'NA',
    chennaiPrice: 6600,
    banglorePrice: 4400,
    andhraPradeshPrice: 1700,
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
        title: 'Why am I having an ',
        highlightedTitle: 'KUB CT',
        image: Machine,
        description: [
            {
                text: "CT scan KUB means Computed Tomography of the Kidneys, Ureters, and Bladder. The scan is helpful in getting images of the urinary system. Common indications include renal stone disease, diagnose and assess infection / tumors of the urinary tract and other causes of abdominal pain."
            },
        ]
    },
    faqs: [
        {
            title: 'Are ',
            highlightedTitle: 'CT scans safe ',
            description: [
                {
                    text: "CT scans expose you to X-rays, but high-end scanners at Medall are designed so that you’re not exposed to very high levels of radiation. Your doctor will always weigh up the benefits and risks of a CT scan before advising you to have one. Women should always tell their doctor and X-ray or CT technologist if there is any chance, they are pregnant; as it is better to avoid CTs during this time. The risk of serious allergic reaction to contrast materials that contain iodine is extremely rare. Radiology departments are well-equipped to deal with such reactions."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "KUB CT",
            description: [
                {
                    text: "If your doctor prescribed for a CT scan without contrast, you can eat, drink and take your prescribed medications prior to your exam. If your doctor prescribed for a CT scan with contrast, do not eat anything 2 hours prior to your CT scan. You are encouraged to drink clear liquids. You may also take your prescribed medications prior to your examination. Right before the scan, you will need to remove anything that contains metal, including jewellery and hairpins.  The dye / contrast will be given after ensuring that your kidney function is normal (serum creatine blood test done for this purpose). "
                },

            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'KUB CT',
            description: [
                {
                    text: "You will need to lie on a bed that’s slowly moved into a CT scanner head first. The scanner will rotate around your head. It’s important to keep as still as possible during the scan and hold your breath, so that the images come out clear. CT scans are quicker than MRI scans, usually lasting less than 10 minutes."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your KUB CT results',
            description: [
                {
                    text: "The CT images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries. "
                },
            ]
        },
    ]
}

export default KUB