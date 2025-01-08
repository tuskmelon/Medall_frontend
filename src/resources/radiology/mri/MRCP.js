// import other images 
import Machine from '../../../assets/images/mri/mrcp-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const MRCPMRI = {
    title: 'MRCP MRI',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/MRI-Image/MRCP-MRI-Img.jpg',
    type: 'MRI',
    // highlightType: 'MRI',
    price: 'NA',
    chennaiPrice: 7500,
    banglorePrice: 9400,
    andhraPradeshPrice: 5500,
    discountAmount: 0,

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
        highlightedTitle: 'MRCP (Magnetic resonance cholangiopancreaticogram)',
        image: Machine,
        description: [
            {
                text: "MRCP is generally done to examine diseases of the liver, gallbladder, bile ducts, pancreas and pancreatic duct. These may include tumors, stones, inflammation or infection."
            },
            // {
            //     text: "Note: If you are pregnant or have any signs of pregnancy, make sure you tell your doctor.",
            // }
        ]
    },
    faqs: [
        {
            title: 'Is an ',
            highlightedTitle: 'MRI safe',
            description: [
                {
                    text: "An MRI scan is painless and safe.  You may wish to tell the technician doing the scan if you have a fear of confined spaces, so that they can try to make you as comfortable as possible. "
                },
                {
                    text: "You may not be able to have an MRI scan if you have a pacemaker or implantable defibrillator, but this will have been discussed with you beforehand. You will need to sign a checklist before you have it done to ensure it is safe for you to have the scan."
                }
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "MRCP MRI",
            description: [
                {
                    text: "Fasting for at least 4-6 hours is often suggested. This will minimize the amount of fluid and activity in your abdomen during the examination."
                },
                {
                    text: "You will need to remove anything that contains metal, including jewellery and hairpins."
                },
                {
                    text: "Before the scan, you may be injected with a dye called contrast (only if needed as decided by the radiologist and after your consent), through a cannula which is placed into a vein in the arm. This allows the MRI scanner to see your abdominal organs in detail."
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'MRCP MRI',
            description: [
                {
                    text: "You'll need to keep still during the scan, so that the images come out clear. You'll be asked to lie on a bed that’s slowly moves head first into an MRI scanner. The scanner will make loud tapping sounds. You’ll be given earplugs or headphones so you can listen to music to distract you from the noise."
                },
                {
                    text: "The scan may last between 30 to 45 minutes, depending on how many images of the abdomen are needed."
                }
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your MRCP MRI results',
            description: [
                {
                    text: "The MRI images will be reviewed thoroughly by our expert radiologist, who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries. "
                },
            ]
        },
    ]
}

export default MRCPMRI