import Fasting from '../../../assets/icons/fasting-white.svg'
import Toilet from '../../../assets/icons/toilet-male-and-female.svg'
import DeliveryMan from '../../../assets/icons/delivery-man-white.svg'
import Support from '../../../assets/icons/support.svg'

// import thumbnail 
import HoldingTestTube from '../../../assets/images/holding-test-tube.jpg'

export const FreeT4 = {
    thumbnail: HoldingTestTube,
    testName: 'Free T4',
    rating: 4.1,
    corpId: "1290",
    alternateTestName: '',
    description: 'It confirms  the accurate status of thyroid function.',
    parameter: 'Includes : 17 Parameters',
    price: 300,
    chennaiPrice: 320,
    banglorePrice: 600,
    andhraPradeshPrice: 200,
    discountAmount: 0,
    type: 'test',
    relatedToOrgan: 'thyroid',
    testDetailsPageLink: '/free-t4',
    popular: false,

    iconWithText: [
        {
            icon: Fasting,
            text: ' No fasting required'
        },
        {
            icon: Toilet,
            text: 'Recommended for both male and female'
        },
        {
            icon: DeliveryMan,
            text: 'Caring phlebotomist & home sample collection'
        },
        {
            icon: Support,
            text: '24/7 Support'
        },
    ],
    propertiesTitle: '',
    properties: [
        {
            text: ''
        },
        {
            text: ''
        },
        {
            text: ''
        },
        {
            text: ''
        },
        {
            text: ''
        },
        {
            text: ''
        },
        {
            text: ''
        },
        {
            text: ''
        },
        {
            text: ''
        },
    ],

    faqs: [
        {
            title: 'Is an ',
            highlightedTitle: 'MRI safe',
            description: 'An MRI scan is painless and safe.  You may wish to tell the technician doing the scan if you have a fear of confined spaces, so that they can try to make you as comfortable as possible. ',
            descriptionSecond: 'You may not be able to have an MRI scan if you have a pacemaker or implantable defibrillator, but this will have been discussed with you beforehand.You will need to sign a checklist before you have it done to ensure it is safe for you to have the scan.',
            descriptionThird: ''
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "angiography/venography MRI",
            description: "You usually won't need to prepare, but as it involves magnets you will need to remove anything that contains metal, including jewellery and hairpins.",
            descriptionSecond: "Before the scan, you may be injected with a dye called contrast (only contrast angiogram studies), through a cannula which is placed into a vein in the arm. This allows the MRI scanner to see your vessels in detail.",
            descriptionThird: ""
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'angiography MRI',
            description: "YYou'll need to keep still during the scan, so that the images come out clear. You'll be asked to lie on a bed that’s slowly moved head first into an MRI scanner. The scanner will make loud tapping sounds. You’ll be given earplugs or headphones so you can listen to music to distract you from the noise.",
            descriptionSecond: "The scan may last between 30 and 90 minutes, depending on how many images of the vessels are needed.",
            descriptionThird: ''
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your angiography / venography MRI results',
            description: 'The MRI images will be reviewed thoroughly by our expert radiologist; who will then prepare the report.Your report may contain complex words and information.You can discuss your results with your referral doctor at your next visit.If there is any concern with the report findings, our radiologists will be happy to answer your queries.',
            descriptionSecond: '',
            descriptionThird: ''
        },
    ]
}

export default FreeT4
