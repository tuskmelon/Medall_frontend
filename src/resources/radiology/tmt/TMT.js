// import thumbnails
// import Thumbnail from '../../../assets/images/tmt/tmt.jpg'

// import icons
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const TMTcontent = {
    title: 'TMT (Treadmill test)',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/TMT-Images/TMT.jpg',
    type: 'TMT',
    price: 'NA',
    chennaiPrice: 2100,
    banglorePrice: 2100,
    andhraPradeshPrice: 2100,
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
        title: 'Why am I having a',
        highlightedTitle: ' TMT',
        image: '',
        description: [
            {
                text: "Treadmill test is used to diagnose coronary artery disease; to diagnose heart rhythm problems; to guide treatment of heart disorders; to check the heart before surgery."
            },
        ]
    },
    faqs: [
        {
            title: 'Is a ',
            highlightedTitle: 'TMT safe ',
            description: [
                {
                    text: "A stress test is generally safe. Complications are rare. Possible complications of an exercise stress test are: Low blood pressure and irregular heart rhythms, called arrhythmias. Although very rare, it's possible that an exercise stress test could cause a heart attack."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "TMT ",
            description: [
                {
                    text: "You may be asked not to eat, drink or smoke for a time before a stress test. You may need to stay away from caffeine the day before and on the day of the test. Some medicines might have an effect on stress tests. Ask your health care provider if you can take your medicines before the test. If you use an inhaler for asthma or other breathing problems, bring it to the test. Tell your health care provider that you use an inhaler. Wear or bring comfortable clothes and walking shoes."
                },
            ]
        },
        {
            title: 'What happens during a ',
            highlightedTitle: 'TMT',
            description: [
                {
                    text: "A health care provider puts sticky patches called electrodes on your chest and sometimes the arms and legs. Body hair may be shaved to help the patches to stick. The patches record the heart's rhythm. Wires connect the patches to a computer, which shows or prints the test results. This part of a test is called an electrocardiogram, commonly called an ECG."
                },
                {
                    text: "A cuff on your arm checks your blood pressure during the test.You may be asked to breathe into a tube during the test to show how well you're able to breathe during exercise."
                },
                {
                    text: "Exercise may be on a treadmill or stationary bike.The pace is easy at first.As the test continues, the exercise gets harder.You can use the railing on the treadmill for balance.Don't hang on tightly, as this may affect the results."
                },
                {
                    text: "Exercise continues until your heart rate reaches a target level.You might need to stop sooner if you develop symptoms such as: Moderate to severe chest pain; severe shortness of breath; unusually high or low blood pressure; irregular heart rhythm; dizziness, fatigue."
                },

            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your results',
            description: [
                {
                    text: "The TMT tracing will be reviewed thoroughly by our expert Physician / Cardiologist, who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit."
                },
            ]
        },
    ]
}

export default TMTcontent