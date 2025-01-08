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

export const VirtualColonoscopyCT = {
    title: ' Virtual Colonoscopy CT',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/CT-Images/Virtual+ColonoscopyCT-IMG.jpg',
    type: 'CT',
    price: 'NA',
    chennaiPrice: 'NA',
    banglorePrice: 10100,
    andhraPradeshPrice: 'NA',
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
        highlightedTitle: ' Virtual Colonoscopy CT',
        image: Machine,
        description: [
            {
                text: "CT virtual colonoscopy, also known as colonography, uses low dose radiation CT scanning to obtain an interior view of the colon (the large intestine). This area is otherwise only seen with a more invasive procedure where the doctor inserts an endoscope into the rectum and passes it through the entire colon. The major reason for performing CT colonography is to screen for polyps or cancers in the large intestine. Polyps are growths that arise from the inner lining of the intestine. A very small number of polyps may grow and turn into cancers."
            },
        ]
    },
    faqs: [
        {
            title: 'Are ',
            highlightedTitle: 'CT scans safe',
            description: [
                {
                    text: "CT scans expose you to X-rays, but high-end scanners at Medall are designed so that you’re not exposed to very high levels of radiation. Your doctor will always weigh up the benefits and risks of a CT scan before advising you to have one. Women should always tell their doctor and X-ray or CT technologist if there is any chance, they are pregnant; as it is better to avoid CTs during this time. The risk of serious allergic reaction to contrast materials that contain iodine is extremely rare. Radiology departments are well-equipped to deal with such reactions."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "Virtual Colonoscopy CT",
            description: [
                {
                    text: "1.	You should wear comfortable, loose-fitting clothing to your examination. "
                },
                // {
                //     text: "2.	Women should always inform their physician and the CT technologist if there is any possibility that they may be pregnant. "
                // },
                {
                    text: "2.	Your diet will be restricted to clear liquids the day before the examination. "
                },
                {
                    text: "3.	You may have to take a laxative a day prior to the study (also known as “bowel prep”). This is to clean out your colon so that the radiologist can clearly see any polyps that might be present. You will be informed by our clinical staff regarding the regimen during your appointment.  "
                },
                {
                    text: "4.	Be sure to tell your doctor if you have heart, liver, or kidney disease to be certain that the bowel prep will be safe.  "
                },
                {
                    text: "5.	You will be able to resume your usual diet immediately after the examination. "
                },
            ]
        },
        {
            title: 'What happens during ',
            highlightedTitle: 'Virtual Colonoscopy CT',
            description: [
                {
                    text: "The technologist begins by positioning you on the CT examination table, lying flat on your back. The doctor / technologist will pass a very small, flexible tube two inches into your rectum and gently pump air into the colon using a hand-held squeeze bulb. The purpose of this is to distend (inflate) the colon as much as possible to eliminate any folds or wrinkles that might hide polyps from the doctor’s view. Next, the table will move through the scanner. The technologist may ask you to hold your breath for about 15 seconds before turning over and lying on your back or side for a second pass through the scanner. Once the scan is done, the doctor or technologist will remove the tube. The entire examination usually takes about 15 minutes."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Virtual Colonoscopy CT results',
            description: [
                {
                    text: "The CT images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries. "
                },
            ]
        },
    ]
}

export default VirtualColonoscopyCT