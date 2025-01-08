// import thumbnails
import complementaryct from '../../../assets/images/ct/ctcomplementary.jpg'

// import other images 
import Machine from '../../../assets/images/mri/angiography-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const ComplementaryCT = {
    title: 'CT Complementary',
    thumbnail: complementaryct,
    type: 'CT',
    price: 'NA',
    chennaiPrice: 1,
    banglorePrice: 1,
    andhraPradeshPrice: 1,
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
        highlightedTitle: 'angiography or venography MRI ?',
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
            title: 'Is an ',
            highlightedTitle: 'MRI safe',
            // description: 'An MRI scan is painless and safe.  You may wish to tell the technician doing the scan if you have a fear of confined spaces, so that they can try to make you as comfortable as possible. ',
            description: [
                {
                    text: "Transvaginal ultrasounds are sometimes called “endovaginal ultrasounds” because the device that records images of your pelvic cavity (transducer) is inserted inside your vagina. The process is different from a traditional abdominal ultrasound, where your provider moves the transducer across your belly to record images."
                },
                {
                    text: "A transvaginal ultrasound provides a more detailed visual of your organs and the soft tissue inside your pelvic cavity than an abdominal ultrasound."
                }
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "angiography/venography MRI",
            description: [
                {
                    text: "Transvaginal ultrasounds are sometimes called “endovaginal ultrasounds” because the device that records images of your pelvic cavity (transducer) is inserted inside your vagina. The process is different from a traditional abdominal ultrasound, where your provider moves the transducer across your belly to record images."
                },
                {
                    text: "A transvaginal ultrasound provides a more detailed visual of your organs and the soft tissue inside your pelvic cavity than an abdominal ultrasound."
                }
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'angiography MRI',
            description: [
                {
                    text: "Transvaginal ultrasounds are sometimes called “endovaginal ultrasounds” because the device that records images of your pelvic cavity (transducer) is inserted inside your vagina. The process is different from a traditional abdominal ultrasound, where your provider moves the transducer across your belly to record images."
                },
                {
                    text: "A transvaginal ultrasound provides a more detailed visual of your organs and the soft tissue inside your pelvic cavity than an abdominal ultrasound."
                }
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your angiography / venography MRI results',
            description: [
                {
                    text: "Transvaginal ultrasounds are sometimes called “endovaginal ultrasounds” because the device that records images of your pelvic cavity (transducer) is inserted inside your vagina. The process is different from a traditional abdominal ultrasound, where your provider moves the transducer across your belly to record images."
                },
                {
                    text: "A transvaginal ultrasound provides a more detailed visual of your organs and the soft tissue inside your pelvic cavity than an abdominal ultrasound."
                }
            ]
        },
    ]
}

export default ComplementaryCT