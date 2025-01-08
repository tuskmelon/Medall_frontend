// import thumbnails
// import ECGThumb from '../../../assets/images/ecg/ecg.jpg'

// import icons
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const ECGcontent = {
    title: 'ECG',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/ECG-Images/ECG+1.jpg',
    type: 'ECG',
    price: 'NA',
    chennaiPrice: 400,
    banglorePrice: 400,
    andhraPradeshPrice: 400,
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
        title: 'Why am I having an',
        highlightedTitle: ' ECG',
        image: '',
        description: [
            {
                text: "To look for the cause of chest pain; to evaluate problems which may be heart-related, such as severe tiredness, shortness of breath, dizziness, or fainting; to identify irregular heartbeats; to help determine the overall health of the heart before procedures such as surgery; to see how an implanted pacemaker is working; to get a baseline tracing of the heart's function during a physical exam; this may be used as a comparison with future ECGs, to determine if there have been any changes."
            },
        ]
    },
    faqs: [
        {
            title: 'Is an ',
            highlightedTitle: 'ECG safe',
            description: [
                {
                    text: "Risks associated with ECG are minimal and rare. You will not feel anything during the ECG, but it may be uncomfortable when the sticky electrodes are taken off. If the electrode patches are left on too long, they may cause tissue breakdown or skin irritation.There may be other risks depending on your specific medical condition.Be sure to discuss any concerns with your doctor before the test"
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "ECG",
            description: [
                {
                    text: "Your doctor or the technician will explain the test to you and let you ask questions. Generally, fasting is not required before the test. Tell your doctor about the  medicines, vitamins, herbs, and supplements that you are taking. Tell your doctor if you have a pacemaker."
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'ECG',
            description: [
                {
                    text: "You will be asked to remove any jewellery or other objects that may interfere with the test. You will be asked to remove clothing from the waist up. The technician will ensure your privacy by covering you with a sheet or gown and exposing only the necessary skin. You will lie flat on a table or bed for the test without any movement or disturbance. Electrodes will be attached to your chest, arms, and legs. The lead wires will be attached to the electrodes. Once the leads are attached, the technician may enter identifying information about you into the machine's computer. The ECG will be started. It will take only a short time for the tracing to be completed. Once the tracing is completed, the technician will disconnect the leads and remove the skin electrodes."
                },

            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your results',
            description: [
                {
                    text: "The ECG tracing will be reviewed thoroughly by our expert physician who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit."
                },
            ]
        },
    ]
}

export default ECGcontent