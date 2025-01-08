// import icons
import Fasting from '../../assets/icons/fasting-white.svg'
import Toilet from '../../assets/icons/toilet-male-and-female.svg'
import DeliveryMan from '../../assets/icons/delivery-man-white.svg'
import Support from '../../assets/icons/support.svg'

export const SeniorCitizenWomenPackage = {
  packageName: 'Senior Citizen Women',
  ageRange: '',
  rating: 4.1,
  corpId: '28381',
  description:
    'This integrated package of radiology and pathology tests is specifically curated for senior citizen women, providing a complete analysis of various health parameters. It provides a holistic understanding of specific health conditions faced by women above 60 years of age. Allowing healthcare providers to develop personalized health plans and offer guidance on lifestyle changes and preventive measures.',
  originalPrice: 16600,
  currentPrice: 7899,
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
        },
        {
          text: 'BMD'
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
      title: 'Lung',
      list: [
        {
          text: 'X-ray Chest PA view'
        }
      ]
    },
    {
      title: 'Cancer Screening',
      list: [
        {
          text: 'Mammogram'
        },
        {
          text: 'CA 125'
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
          text: 'Thyroid profile (Free)'
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
          text: 'ECHO'
        }
      ]
    },
    {
      title: 'Diabetes',
      list: [
        {
          text: 'Glucose - Fasting'
        },
        {
          text: 'Glucose - Postprandial'
        },
        {
          text: 'HbA1c (Glycosylated Haemoglobin)'
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
    {
      text: 'Stool Routine '
    },
    {
      text: 'Stool - OB'
    }
    // {
    //     text: "Free Mind health assessment (online consultation only)"
    // },
    // {
    //   text: 'Free Physician consultation'
    // }
  ]
}

export default SeniorCitizenWomenPackage
