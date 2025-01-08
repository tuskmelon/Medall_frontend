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

export const CoronaryAngiogramCT = {
    title: 'Coronary Angiogram CT',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/CT-Images/Coronary+AngiogramCT-IMG.jpg',
    type: 'CT',
    price: 'NA',
    chennaiPrice: 11600,
    banglorePrice: 11000,
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
        highlightedTitle: ' Coronary Angiogram CT',
        image: Machine,
        description: [
            {
                text: "A coronary angiogram CT  is a scan that records pictures of your heart. Before the pictures are taken, dye is injected into a vein (usually in your arm). The dye highlights any blockages in your coronary arteries, helping to diagnose coronary artery disease."
            },
            {
                text: "Your doctor may recommend a coronary angiogram CT  if you have symptoms of coronary artery disease like: Pain or discomfort in your arms, left shoulder, back, neck, jaw, or stomach; irregular heart beat – arrhythmia; difficulty breathing; excessive sweating; indigestion or heartburn; nausea or vomiting; light-headedness or dizziness. coronary angiogram CT  can also be used as a screening tool in high-risk asymptomatic population."
            }
        ]
    },
    faqs: [
        {
            title: 'Are ',
            highlightedTitle: 'CT scans safe',
            description: [
                {
                    text: "CT scans expose you to X-ray, but high-end scanners at Medall are designed so that you’re not exposed to very high levels of radiation. Your doctor will always weigh up the benefits and risks of a CT scan before advising you to have one. Women should always tell their doctor and X-ray or CT technologist if there is any chance, they are pregnant; as it is better to avoid CTs during this time. The risk of serious allergic reaction to contrast materials that contain iodine is extremely rare. Radiology departments are well-equipped to deal with such reactions."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "Coronary Angiogram CT",
            description: [
                {
                    text: "1.	Limit caffeine consumption, including herbal tea, coffee, chocolate and cola - these can increase your heart rate."
                },
                {
                    text: "2.	Bring a friend or family member - someone to support you before, during and after your procedure."
                },
                {
                    text: "3.	2 hours fasting prior to the scan. "
                },
                {
                    text: "4.	Bring your latest ECHO and other blood reports (in particular the serum creatine value)."
                },
                // {
                //     text: "5.	A cannula (small tube) will be inserted in a vein (usually in your arm) - For injection of contrast during the scan."
                // },
                {
                    text: "5.	You may be given medications to slow your heart rate, as images are clearer when the heart rate is low.	"
                }
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Coronary Angiogram CT ',
            description: [
                {
                    text: "You will need to lie on a bed that’s slowly moved into a CT scanner head first. A cannula (small tube) will be inserted in a vein (usually in your arm) - for injection of contrast during the scan. The scanner will rotate around your head. It’s important to keep as still as possible during the scan and hold your breath, so that the images come out clear. CT scans are quicker than MRI scans, usually lasting less than 10 minutes."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Coronary Angiogram CT results',
            description: [
                {
                    text: "The CT images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries. "
                },
            ]
        },
    ]
}

export default CoronaryAngiogramCT