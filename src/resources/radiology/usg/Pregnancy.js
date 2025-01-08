// import thumbnails
// import pregnancyUltraSound from '../../../assets/images/usg/pregnancyultrasound.jpg'

// import other images 
import Womb from '../../../assets/images/usg/pregnancy.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const PregnancyUSG = {
    title: 'Pregnancy Ultrasound',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/USG-Image/AnomalyUSG-IMG.jpg',
    type: 'Ultrasound',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 'NA',
    banglorePrice: 'NA',
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
        title: 'What is ',
        highlightedTitle: 'an ultrasound in Pregnancy',
        image: Womb,
        description: [
            {
                text: "A prenatal ultrasound(or sonogram) is a test during pregnancy that checks on the health and development of your baby. An obstetrician, performs ultrasounds during pregnancy for many reasons. Sometimes ultrasounds are requested to check on your baby and make sure they’re growing properly. Other times your pregnancy care provider prescribes an ultrasound after they detect a problem."
            },
        ]
    },
    faqs: [
        {
            title: 'What can be ',
            highlightedTitle: 'detected in Pregnancy ultrasound',
            description: [
                {
                    text: "Reasons why your provider performs a prenatal ultrasound are: to confirm you’re pregnant; check for ectopic pregnancy, molar pregnancy, miscarriage or other early pregnancy complications; determine your baby’s gestational age and due date; check your baby’s growth, movement and heart rate; look for multiple babies (twins, triplets or more); examine your pelvic organs like your uterus, ovaries and cervix; examine how much amniotic fluid you have; check the location of the placenta; check your baby’s position in your uterus; detect problems with your baby’s organs, muscles or bones."
                },
            ]
        },
        {
            title: 'How soon ',
            highlightedTitle: "can you detect the baby on ultrasound",
            description: [
                {
                    text: "Pregnancy care providers can detect an embryo on an ultrasound as early as six weeks into the pregnancy. An embryo develops into a fetus around the eighth week of pregnancy. If your last menstrual period isn’t accurate, it’s possible that it may be too early to detect a fetal heart rate."
                },
            ]
        },
        {
            title: 'When is ',
            highlightedTitle: 'the Pregnancy ultrasound done',
            description: [
                {
                    text: "The timing of your first ultrasound varies depending on your provider. Some people have an early ultrasound (also called a first-trimester ultrasound or dating ultrasound). This can happen as early as seven to eight weeks of pregnancy. Then a NT scan is done at 11-13 weeks. A 20-week ultrasound (anomaly scan) is done to look for fetal anomalies, if any. A third trimester scan may be requested to check if your pregnancy is progressing well with no complications."
                },
            ]
        },
        {
            title: 'Are ',
            highlightedTitle: 'ultrasound examinations safe',
            description: [
                {
                    text: "There is no radiation used and generally no discomfort from the application of the ultrasound transducer to the skin.  No known biological risks to babies due to ultrasound scan."
                },
            ]
        },
        {
            title: 'Understanding  ',
            highlightedTitle: 'your Pregnancy ultrasound results',
            description: [
                {
                    text: "The ultrasound images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries. "
                },
            ]
        },
    ]
}

export default PregnancyUSG