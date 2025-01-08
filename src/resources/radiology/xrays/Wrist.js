// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const XrayWrist = {
    title: 'Wrist X-ray',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/X-ray-Images/Wrist-X-ray-IMG.jpg',
    type: 'X-ray',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 500,
    banglorePrice: 400,
    andhraPradeshPrice: 300,
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
        highlightedTitle: 'Wrist X-ray',
        image: '',
        description: [
            {
                text: "Your healthcare provider uses a wrist X-ray to find the cause of any pain, swelling or tenderness in your wrist. They can use a wrist X-ray to diagnose possible health conditions involving your wrists. These conditions include: Broken bones (fractures) in your wrist; dislocated joints; degenerative conditions such as arthritis in your wrists; carpal tunnel syndrome; bone cysts; bone infection (osteomyelitis); bone cancer."
            }, {
                text: "Note: If you are pregnant or have any signs of pregnancy, make sure you tell your doctor.",
            },
        ]
    },
    faqs: [

        {
            title: 'What happens during the ',
            highlightedTitle: 'Wrist X-ray',
            description: [
                {
                    text: "Before the X-ray, you’ll be asked to remove any jewellery / metallic items from your body; which might come in the field of exam. Most likely, you’ll change into a hospital gown to prevent any buttons or zippers on your clothes from affecting the quality of the X-ray images. The technologist will have you place your arm on the X-ray table. They may put sponges or other positioning equipment around your wrist to keep it in place. You’ll be asked to keep still during the test because any movement can affect the X-ray images. You may also be asked to hold your breath while the X-rays are being taken. Your technologist will put an X-ray film holder or digital recording plate under the X-ray table. Then, they’ll go into a small room or behind a wall to activate the X-ray machine. A normal wrist X-ray includes at least two images. Your technologist will return to reposition your wrist as needed. The images include one picture taken from the top with your palm facing down(posteroanterior view) and one picture taken from the side(lateral view). A picture of your wrist at an angle(oblique view) may also be taken.If you’re in any pain, let your technologist know so they can help assist you through the test."
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

export default XrayWrist