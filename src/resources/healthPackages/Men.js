// import icons
import Fasting from '../../assets/icons/fasting-white.svg'
import Toilet from '../../assets/icons/toilet-male-and-female.svg'
import DeliveryMan from '../../assets/icons/delivery-man-white.svg'
import Support from '../../assets/icons/support.svg'

export const MenPackage = {
  packageName: 'Men',
  rating: 4.1,
  corpId: '30049',
  description:
    'This integrated package of radiology and pathology tests is specifically designed for men to provide a complete analysis of various health parameters. It provides a holistic understanding of specific health conditions. Allowing healthcare providers to develop personalized health plans and offer guidance on lifestyle changes and preventive measures.',
  originalPrice: 21500,
  currentPrice: 7999,
  discountAmount: 0,
  type: 'healthPackage',

  iconWithText: [
    {
      icon: Fasting,
      text: '10-12 hours Fasting Required'
    },
    {
      icon: Toilet,
      text: 'Recommended only for men'
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
        },
        {
          text: 'Folic acid'
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
      title: 'Cancer Screening',
      list: [
        {
          text: 'PSA(Prostate)'
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
      title: 'Liver',
      list: [
        {
          text: 'Liver function test'
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
          text: 'Thyroid profile'
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
          text: 'Renal function test'
        },
        {
          text: 'Urine complete analysis'
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
        },
        {
          text: 'Apolipoprotein A1'
        },
        {
          text: 'Apolipoprotein B'
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

export default MenPackage
