// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const XrayKneeAP = {
    title: 'Knee X-ray',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/X-ray-Images/Knee-X-ray-IMG.jpg',
    type: 'X-ray',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 600,
    banglorePrice: 800,
    andhraPradeshPrice: 600,
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
        highlightedTitle: 'Knee X-ray',
        image: '',
        description: [
            {
                text: "Your healthcare provider may use a knee X-ray to diagnose possible health and medical conditions in your knee or knees. Knee X-rays can show signs of broken knee bones (fractures); joint dislocation; excess fluid, which can be a sign of a sprain; loose pieces of bone; bone spurs (osteophytes); osteoarthritis; abnormal alignment of your knee joint; bone infections (osteomyelitis); bone thinning (osteopenia); bone cancer."
            },
            {
                text: "Note: If you are pregnant or have any signs of pregnancy, make sure you tell your doctor.",
            },
        ]
    },
    faqs: [
        {
            title: 'What happens during the ',
            highlightedTitle: 'Knee X- ray',
            description: [
                {
                    text: "Before the X-ray, you’ll be asked to remove any metallic items from your body; which might come in the field of exam. Most likely, you’ll change into a hospital gown to prevent any buttons or zippers on your clothes from affecting the quality of the X-ray images. Your technologist will place an X-ray film holder or digital recording plate behind or under the X-ray machine. They’ll have you stand or sit in front of the X-ray machine or have you lie down on an X-ray table. You’ll need to keep very still during the procedure. Any movement may cause the X-ray images to show up blurry. "
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your results',
            description: [
                {
                    text: "The image will be reviewed thoroughly by our expert radiologist, who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                },
            ]
        },
    ]
}

export default XrayKneeAP