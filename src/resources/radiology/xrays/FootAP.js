// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const FootAP = {
    title: 'Foot X-ray',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/X-ray-Images/Foot-X-ray-IMG.jpg',
    type: 'X-ray',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 650,
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
        highlightedTitle: 'Foot X-ray',
        image: '',
        description: [
            {
                text: "If your doctor suspects that your foot pain is being caused by a fracture, he or she will prescribe an X-ray to see the bone and look for signs of a crack or break. An X-ray can also tell your doctor if the bone has been affected by an infection, arthritis, or other bone disease. If you have suffered an injury, an X- ray lets your doctor locate pieces of glass, metal, or other foreign objects that can be lodged in the wound. In some cases, X - rays are used to ensure that children’s bones are growing properly. If you had your foot in a cast, your doctor will perform an X - ray when it is removed to make sure that the bones are fully healed."
            },
            {
                text: "Note: If you are pregnant or have any signs of pregnancy, make sure you tell your doctor.",
            },
        ]
    },
    faqs: [
        {
            title: 'What happens during the ',
            highlightedTitle: 'Foot X-ray ',
            description: [
                {
                    text: "Before the X-ray, you’ll be asked to remove any metallic items from your body; which might come in the field of exam. Most likely, you’ll change into a hospital gown to prevent any buttons or zippers on your clothes from affecting the quality of the X- ray images. First, a large film cartridge is placed next to the limb. If the limb is injured, your radiology technicians will work with you to find a comfortable position. Then images are taken. You’ll need to keep still during the procedure. Any movement may cause the X- ray images to show up blurry."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your results',
            description: [
                {
                    text: "The X-ray images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                },
            ]
        },
    ]
}

export default FootAP