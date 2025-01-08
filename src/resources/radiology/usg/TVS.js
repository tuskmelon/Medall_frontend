// import thumbnails
// import Angiography from '../../../assets/images/mri/blood-vessels.jpg'

// import other images 
import Machine from '../../../assets/images/mri/angiography-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const TVS = {
    title: 'TVS Ultrasound',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/USG-Image/TVSUSG-IMG.jpg',
    type: 'Ultrasound',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 1600,
    banglorePrice: 1400,
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
        highlightedTitle: 'Transvaginal ultrasound',
        image: Machine,
        description: [
            {
                text: "Transvaginal ultrasounds are sometimes called “endovaginal ultrasounds” because the device that records images of your pelvic cavity (transducer) is inserted inside your vagina. The process is different from a traditional abdominal ultrasound, where your provider moves the transducer across your belly to record images."
            },
            {
                text: "A transvaginal ultrasound provides a more detailed visual of your organs and the soft tissue inside your pelvic cavity than an abdominal ultrasound."
            }
        ]
    },
    faqs: [
        {
            title: 'Are ',
            highlightedTitle: 'ultrasound examinations safe ',
            description: [
                {
                    text: "There is no radiation used and generally no discomfort from the application of the ultrasound transducer to the skin. There may be risks depending on your specific medical condition. Be sure to discuss any concerns with your doctor prior to the procedure."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "TVS ultrasound ",
            description: [
                {
                    text: "Wear clothes that you can slip out of easily. You will have to remove your pants and underwear, and you may have to wear a gown. Remove your tampon before the procedure if you’re on your period. You may need to arrive at your appointment with a bladder that’s empty."
                }
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'TVS ultrasound ',
            description: [
                {
                    text: "A wand-like instrument called a transducer is inserted into your vagina, where it releases sound waves that bounce off the various structures inside your pelvis. The sound waves travel back to the transducer, where they’re converted into electrical signals. These signals project a real-time visual image of your pelvic organs onto a screen that the technician performing the procedure can view."
                }
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your TVS ultrasound results',
            description: [
                {
                    text: "The ultrasound images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                }
            ]
        },
    ]
}

export default TVS