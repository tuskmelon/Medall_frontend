// import other images 
import Machine from '../../../assets/images/mri/angiography-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const BrainCT = {
    title: 'Brain CT',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/CT-Images/BrainCT-IMG.jpg',
    type: 'CT',
    price: 'NA',
    chennaiPrice: 3800,
    banglorePrice: 3300,
    andhraPradeshPrice: 2500,
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
        highlightedTitle: 'Brain CT',
        image: Machine,
        description: [
            {
                text: "A CT scan can detect conditions of the brain, like stroke and vascular dementia. Unexplained persistent headaches, giddiness and epilepsy are evaluated using CT. The images produced by a CT scan provide detailed information about brain tissue and brain structures. "
            },
        ]
    },
    faqs: [
        {
            title: 'Are  ',
            highlightedTitle: 'CT scans safe',
            description: [
                {
                    text: "CT scans expose you to X-rays, but high-end scanners at Medall are designed so that you’re not exposed to very high levels of radiation. Your doctor will always weigh up the benefits and risks of a CT scan before advising you to have one. Women should always tell their doctor and X-ray or CT technologist if there is any chance they are pregnant; as it is better to avoid CTs during this time. The risk of serious allergic reaction to contrast materials that contain iodine is extremely rare. Radiology departments are well-equipped to deal with such reactions."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "Brain CT ",
            description: [
                {
                    text: "You usually won't need to prepare for a brain CT scan. However, right before the scan, you will need to remove anything that contains metal, including jewellery and hairpins.  You may also be given a dye / contrast solution (only if needed as decided by the radiologist and after your consent) that helps to improve the quality of the images. The contrast will be given after ensuring that your kidney function is normal (serum creatine blood test done for this purpose)."
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Brain CT ',
            description: [
                {
                    text: "You will need to lie on a bed that’s slowly moved into a CT scanner head first. The scanner will rotate around your head. It’s important to keep as still as possible during the scan, so that the images come out clear. CT scans are quicker than MRI scans, usually lasting less than 10 minutes.	"
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Brain CT results',
            description: [
                {
                    text: "The CT images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries. "
                },
            ]
        },
    ]
}

export default BrainCT