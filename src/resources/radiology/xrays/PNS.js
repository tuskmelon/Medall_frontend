// import thumbnails
import Pns from '../../../assets/images/x-ray/X-RAY PNS.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const PNS = {
    title: 'PNS X-ray',
    thumbnail: Pns,
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
        title: ' Why am I having a ',
        highlightedTitle: 'PNS X-ray',
        image: '',
        description: [
            {
                text: "Your doctor may ask for a sinus X-ray if you’re experiencing symptoms of a sinus problem or sinusitis, also known as a sinus infection. Sinusitis occurs when your sinuses become inflamed, causing a buildup of pus and mucus in these cavities. The condition is usually caused by a bacterial infection that develops after a viral infection."
            }, {
                text: "Note: If you are pregnant or have any signs of pregnancy, make sure you tell your doctor.",
            },
        ]
    },
    faqs: [
        {
            title: 'What happens during the ',
            highlightedTitle: 'PNS X-ray ',
            description: [
                {
                    text: "Before the X-ray, you’ll be asked to remove any jewellery and other metallic items from your body. Most likely, you’ll change into a hospital gown to prevent any buttons or zippers on your clothes from affecting the quality of the X-ray images. You may be asked to sit or lie down on an X-ray table. The technologist will then place your head in line with the X-ray machine. You need to hold this position for a few moments while the X-ray image is being produced. The technologist steps behind a protective window to take the X-ray. It’s important to remain as still as possible while the X-ray is being taken. Otherwise, the image will be blurred. It only takes a couple of seconds for the X-ray image to be completed."
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

export default PNS