// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const CervicalSpine = {
    title: 'Cervical Spine X-ray',
    type: 'X-ray',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/X-ray-Images/Cervical-Spine-X-Ray-IMG.jpg',
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
        highlightedTitle: 'Cervical Spine X-ray',
        image: '',
        description: [
            {
                text: "A cervical spine X-ray can help you find the cause of symptoms such as neck, shoulder, upper back, or arm pain, as well as tingling, numbness, or weakness in the arm or hand. It can detect fractures in the cervical vertebrae or dislocation of the joints between the vertebrae."
            },
            {
                text: "Note: If you are pregnant or have any signs of pregnancy, make sure you tell your doctor.",
            },
        ]
    },
    faqs: [
        {
            title: 'What happens during the ',
            highlightedTitle: 'Cervical Spine X-ray',
            description: [
                {
                    text: "Before the X-ray, you’ll be asked to remove any jewellery and other metallic items from your body. Most likely, you’ll change into a hospital gown to prevent any buttons or zippers on your clothes from affecting the quality of the X-ray images. Cervical spine X-ray is performed by a radiographer in an X-ray room after you lie on the X-ray table. The standard two views taken are the: AP (anteroposterior view, which looks at the spine from the front); Lateral (which looks at the spine from the side)."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your results',
            description: [
                {
                    text: "The image will be reviewed thoroughly by our expert radiologist, who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit.If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                },
            ]
        },
    ]
}

export default CervicalSpine