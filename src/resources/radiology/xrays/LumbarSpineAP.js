// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const XrayLumbarSpineAP = {
    title: 'Lumbar Spine X-ray',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/X-ray-Images/Lumbar-Spine-X-ray-IMG.jpg',
    type: 'X-ray',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 1000,
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
        highlightedTitle: 'Lumbar Spine X-ray',
        image: '',
        description: [
            {
                text: "It can help your doctor understand the cause of chronic back pain or view the effects of injuries, disease, or infection. Your doctor might prescribe a lumbar spine X-ray to diagnose: birth defects that affect the spine; injury or fractures to the lower spine; low back pain that’s severe or lasts for more than four to eight weeks; osteoporosis, which is a condition that causes your bones to thin; abnormal curvature or degenerative changes in your lumbar spine, such as bone spurs and cancer."
            },
            {
                text: "Note: If you are pregnant or have any signs of pregnancy, make sure you tell your doctor.",
            },
        ]
    },
    faqs: [
        {
            title: 'What happens during the ',
            highlightedTitle: 'Lumbar Spine X-ray',
            description: [
                {
                    text: "Before the X-ray, you’ll be asked to remove any jewellery and other metallic items from your body. Most likely, you’ll change into a hospital gown to prevent any buttons or zippers on your clothes from affecting the quality of the X-ray images. Usually, you will start by lying down on a table, facing up. A technician will move a large camera connected to a steel arm over your lower back. A film inside the table will capture the X-ray images of your spine as the camera moves overhead. The technician may ask you to lie in several positions during the test, including on your back, side, stomach, or even standing depending on what views your doctor has requested. While the images are taken, you’ll have to hold your breath and remain still.This ensures that the images are as clear as possible."
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

export default XrayLumbarSpineAP