// import icons
import Fasting from '../../assets/icons/fasting-white.svg'
import Toilet from '../../assets/icons/toilet-male-and-female.svg'
import DeliveryMan from '../../assets/icons/delivery-man-white.svg'
import Support from '../../assets/icons/support.svg'

export const ProPackage = {
  packageName: 'Pro',
  rating: 4.1,
  corpId: '30044',
  description:
    'Regular health checkups are essential for preventing diseases and maintaining good health. They provide valuable information about your current health status and risk factors, which can help you and your doctor make informed decisions. For individuals with chronic conditions it helps them monitor the conditions progression and adjust treatment plans as needed.',
  originalPrice: 6500,
  currentPrice: 2499,
  discountAmount: 0,
  type: 'healthPackage',

  iconWithText: [
    {
      icon: Fasting,
      text: ' Fasting / No fasting',
      notes: ' For Random, fasting not required. For Fasting, 10-12 hrs fasting'
    },
    {
      icon: Toilet,
      text: 'Recommended for both male and female'
    },
    {
      icon: DeliveryMan,
      text: 'Caring phlebotomist & Home Sample Collection'
    },
    {
      icon: Support,
      text: '24/7 Support'
    }
  ],
  parameters: [
    {
      title: 'Bone',
      list: [
        {
          text: 'Calcium'
        },
        {
          text: 'Phosphorous'
        },
        {
          text: 'Magnesium'
        }
      ]
    },
    {
      title: 'Vitamin',
      list: [
        {
          text: 'Vitamin D'
        },
        {
          text: 'Vitamin B12'
        }
      ]
    },
    {
      title: 'Heart',
      list: [
        {
          text: 'Lipid Profile'
        }
      ]
    },
    {
      title: 'Blood Picture',
      list: [
        {
          text: 'Complete blood count with ESR '
        }
      ]
    },
    {
      title: 'Thyroid',
      list: [
        {
          text: 'Thyroid profile'
        }
      ]
    },
    {
      title: 'Liver',
      list: [
        {
          text: 'Liver function test'
        }
      ]
    },
    {
      title: 'Blood Sugar',
      list: [
        {
          text: 'Glucose- Fasting or Random'
        },
        {
          text: 'HbA1c (Glycosylated Haemoglobin) '
        }
      ]
    },
    {
      title: 'Kidney',
      list: [
        {
          text: 'Creatinine'
        },
        {
          text: 'Urea'
        },
        {
          text: 'Uric Acid'
        },
        {
          text: 'Blood Urea Nitrogen(BUN)'
        },
        {
          text: 'Urine complete analysis'
        }
      ]
    }
  ],
  free_consultation: [
    // {
    //     text: "Free Mind health assessment (online consultation only)"
    // },
    // {
    //   text: 'Free Physician consultation'
    // }
  ]
}

export default ProPackage
