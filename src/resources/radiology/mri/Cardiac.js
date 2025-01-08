// import other images 
import Machine from '../../../assets/images/mri/mri-machine2.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const CardiacMRI = {
    title: 'Cardiac MRI',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/MRI-Image/Cardiac-MRI-img.jpg',
    type: 'MRI',
    // highlightType: 'MRI',
    price: 'NA',
    chennaiPrice: 15100,
    banglorePrice: 11700,
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
        highlightedTitle: 'Cardiac MRI',
        image: Machine,
        description: [
            {
                text: "To evaluate and diagnose: congenital heart disease; some heart muscle conditions, such as cardiomyopathy; damage to your heart muscle if you've had a heart attack or have been diagnosed with heart failure; heart valve disease etc. Cardiac MRI scans also look at the blood supply to your heart. They can help your doctor to investigate conditions such as: reduced blood flow to the heart muscle that may cause chest pain (angina), coronary heart disease. "
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
                    text: "You may not be able to have an MRI scan if you have a pacemaker or implantable defibrillator, but this will have been discussed with you beforehand. You will need to sign a checklist before you have it done to ensure it is safe for you to have the scan. "
                }
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "Cardiac MRI",
            description: [
                {
                    text: "You usually won't need to prepare for a cardiac MRI scan, but as it involves magnets you will need to remove anything that contains metal, including jewellery and hairpins."
                },
                {
                    text: "Before the scan, you may be injected with a dye called contrast, through a cannula which is placed into a vein in the arm. This allows the MRI scanner to see your heart in detail.	"
                }
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Cardiac MRI',
            description: [
                {
                    text: "You'll need to keep still during the scan, so that the images come out clear. You'll be asked to lie on a bed that’s slowly moves head first into an MRI scanner. During the scan you may also be asked to hold your breath for few seconds to obtain respiratory motion free images. The scanner will make loud tapping sounds. You’ll be given earplugs or headphones so you can listen to music to distract you from the noise.The scan may last between 30 to 90 minutes, depending on how many images of the heart are needed."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Cardiac MRI results',
            description: [
                {
                    text: "The MRI images will be reviewed thoroughly by our expert radiologist, who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                },
            ]
        },
    ]
}

export default CardiacMRI