// import icons
import Fasting from '../../assets/icons/fasting-white.svg'
import Toilet from '../../assets/icons/toilet-male-and-female.svg'
import DeliveryMan from '../../assets/icons/delivery-man-white.svg'
import Support from '../../assets/icons/support.svg'

export const ElitePackage = {
  packageName: 'Elite',
  rating: 4.1,
  corpId: '30048',
  description:
    'This integrated package of Radiology and Pathology will provide a complete analysis of various parameters of your body. Health checkups are essential for preventing diseases and maintaining good health which can help you make informed decisions. For individuals with chronic conditions it helps them monitor the conditions progression and adjust treatment plans as needed.',
  originalPrice: 15900,
  currentPrice: 7099,
  discountAmount: 0,
  type: 'healthPackage',

  iconWithText: [
    {
      icon: Fasting,
      text: '10-12 hours Fasting Required'
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
      title: 'Lung / Heart',
      list: [
        {
          text: 'X-ray Chest PA view/ECG'
        }
      ]
    },
    {
      title: 'Lung',
      list: [
        {
          text: 'Spirometry'
        }
      ]
    },
    {
      title: 'Abdomen',
      list: [
        {
          text: 'Ultrasound - Whole abdomen'
        }
      ]
    },
    {
      title: 'Hormone',
      list: [
        {
          text: 'Cortisol'
        }
      ]
    },
    {
      title: 'Diabetes',
      list: [
        {
          text: 'Glucose - PP '
        }
      ]
    },
    {
      title: 'Blood',
      list: [
        {
          text: 'Serum Ferritin'
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
      title: 'Pancreas',
      list: [
        {
          text: 'Amylase'
        },
        {
          text: 'Lipase'
        }
      ]
    },
    {
      title: 'Thyroid',
      list: [
        {
          text: 'Thyroid Stimulating Hormone - TSH'
        },
        {
          text: 'Thyroid profile'
        }
      ]
    },

    {
      title: 'Heart',
      list: [
        {
          text: 'Lipid Profile'
        },
        {
          text: 'ECG'
        },
        {
          text: 'Homocysteine'
        },
        {
          text: 'hs-CRP'
        },
        {
          text: 'ECHO'
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
      title: 'Blood Picture',
      list: [
        {
          text: 'Complete Haemogram'
        }
      ]
    },
    {
      title: 'Kidney',
      list: [
        {
          text: 'Urine complete analysis'
        },
        {
          text: 'Renal function test'
        }
      ]
    },
    {
      title: 'Vitals',
      list: [
        {
          text: 'Height'
        },
        {
          text: 'Weight'
        },
        {
          text: 'Blood pressure(BP)'
        },
        {
          text: 'BMI'
        },
        {
          text: 'Waist Circumference'
        },
        {
          text: 'Hip Circumference'
        },
        {
          text: 'Waist/Hip ratio'
        },
        {
          text: 'Body fat %'
        },
        {
          text: 'Visceral fat'
        },
        {
          text: 'Metabolic age'
        }
      ]
    }
  ],
  free_consultation: [
    // {
    //     text: "Free Mind health assessment (online consultation only)"
    // },
    // {
    //     text: "Free Diet consultation (online consultation only)"
    // },
    // {
    //   text: 'Free Physician consultation'
    // }
  ]
}

export default ElitePackage
