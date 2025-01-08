// import icons
import Fasting from '../../assets/icons/fasting-white.svg'
import Toilet from '../../assets/icons/toilet-male-and-female.svg'
import DeliveryMan from '../../assets/icons/delivery-man-white.svg'
import Support from '../../assets/icons/support.svg'

export const OldWomenPackage = {
  packageName: 'Women',
  ageRange: '(>35 Years)',
  rating: 4.1,
  corpId: '30051',
  description:
    'This integrated package of radiology and pathology tests is specifically curated for women above 35 years of age, providing a complete analysis of various health parameters. Allowing healthcare providers to develop personalized health plans and offer guidance on lifestyle changes and preventive measures.',
  originalPrice: 24500,
  currentPrice: 8999,
  discountAmount: 0,
  type: 'healthPackage',

  iconWithText: [
    {
      icon: Fasting,
      text: '10-12 hours Fasting Required'
    },
    {
      icon: Toilet,
      text: 'Recommended only for female'
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
      title: 'Thyroid',
      list: [
        {
          text: 'Thyroid profile'
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
      title: 'Blood Picture',
      list: [
        {
          text: 'Complete Haemogram'
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
      title: 'Cancer Screening',
      list: [
        {
          text: 'PAP Smear'
        },
        {
          text: 'Mammogram '
        },
        {
          text: 'CA 125'
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
          text: 'Urine complete analysis'
        },
        {
          text: 'Renal function test'
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

export default OldWomenPackage
