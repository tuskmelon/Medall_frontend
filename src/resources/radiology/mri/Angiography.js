// import other images 
import Machine from '../../../assets/images/mri/angiography-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const CardiacMRI = {
    title: 'Angiography / Venography MRI',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/MRI-Image/Angiography-Venography-MRI-img.jpg',
    type: 'MRI',
    // highlightType: 'MRI',
    price: 'NA',
    chennaiPrice: 'NA',
    banglorePrice: 'NA',
    andhraPradeshPrice: 'NA',
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
        highlightedTitle: 'Angiography / Venography MRI',
        image: Machine,
        description: [
            {
                text: "MRI angiography is a specialised tests used to study the blood flow in the arteries (vessels carrying pure blood). The following body parts are usually recommended for MR angiogram: Brain; Neck; Heart; Arms and hands; Chest; Abdomen; Pelvis; Legs and feet. This is to evaluate for any blockage, aneurysms or vascular malformations etc."
            },
            {
                text: "MRI venography is a specialised tests used to study the blood flow in the veins (vessels carrying impure blood). This is to evaluate for any blockage, thrombosis, varicose veins and vascular malformations."
            },
            {
                text: "The advantage of MRI angiogram / venogram is that, they can be done even without a dye / contrast."
            },
            // {
            //     text: "Note: If you are pregnant or have any signs of pregnancy, make sure you tell your doctor.",
            // }
        ],
    },
    faqs: [
        {
            title: 'Is an ',
            highlightedTitle: 'MRI safe',

            description: [
                {
                    text: "An MRI scan is painless and safe.  You may wish to tell the technician doing the scan if you have a fear of confined spaces, so that they can try to make you as comfortable as possible."
                },
                {
                    text: "You may not be able to have an MRI scan if you have a pacemaker or implantable defibrillator, but this will have been discussed with you beforehand.You will need to sign a checklist before you have it done to ensure it is safe for you to have the scan."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "Angiography / Venography MRI",
            description: [
                {
                    text: "You usually won't need to prepare, but as it involves magnets you will need to remove anything that contains metal, including jewellery and hairpins."
                },
                {
                    text: "Before the scan, you may be injected with a dye called contrast (only contrast angiogram studies), through a cannula which is placed into a vein in the arm. This allows the MRI scanner to see your vessels in detail."
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Angiography MRI',
            description: [
                {
                    text: "You'll need to keep still during the scan, so that the images come out clear. You'll be asked to lie on a bed that’s slowly moves head first into an MRI scanner. The scanner will make loud tapping sounds. You’ll be given earplugs or headphones so you can listen to music to distract you from the noise."
                },
                {
                    text: "The scan may last between 30 to 90 minutes, depending on how many images of the vessels are needed."
                }
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Angiography / Venography MRI results',
            description: [
                {
                    text: "The MRI images will be reviewed thoroughly by our expert radiologist; who will then prepare the report.Your report may contain complex words and information.You can discuss your results with your referral doctor at your next visit.If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                }
            ]
        },
    ]
}

export default CardiacMRI