const fs = require('fs');
const path = require('path');

// Example data fetcher: replace this with your API/database call to fetch URLs dynamically
const fetchURLs = async () => {
  // Replace this with real dynamic URLs, such as your product pages
  const dynamicURLs = [

    //10
    { loc: '/login', lastmod: new Date().toISOString() },
    { loc: '/download-report', lastmod: new Date().toISOString() },
    { loc: '/employee-report', lastmod: new Date().toISOString() },
    { loc: '/cart', lastmod: new Date().toISOString() },
    { loc: '/cart-form', lastmod: new Date().toISOString() },
    { loc: '/book-your-test', lastmod: new Date().toISOString() },
    { loc: '/prescription', lastmod: new Date().toISOString() },
    { loc: '/careers', lastmod: new Date().toISOString() },
    { loc: '/download-report-via-otp', lastmod: new Date().toISOString() },
    { loc: '/download-report-via-medall-login', lastmod: new Date().toISOString() },
//20
    { loc: '/download-report-via-corporate-login', lastmod: new Date().toISOString() },
    { loc: '/employee-details', lastmod: new Date().toISOString() },
    { loc: '/careers/all-job-opening', lastmod: new Date().toISOString() },
    { loc: '/brain-mri', lastmod: new Date().toISOString() },
    { loc: '/spine-mri', lastmod: new Date().toISOString() },
    { loc: '/knee-mri', lastmod: new Date().toISOString() },
    { loc: '/lumbar-spine-mri', lastmod: new Date().toISOString() },
    { loc: '/prostate-mri', lastmod: new Date().toISOString() },
    { loc: '/mrcp-mri', lastmod: new Date().toISOString() },
    { loc: '/cardiac-mri', lastmod: new Date().toISOString() },
//30
    { loc: '/angiography-mri', lastmod: new Date().toISOString() },
    { loc: '/pelvis-mri', lastmod: new Date().toISOString() },
    { loc: '/shoulder-mri', lastmod: new Date().toISOString() },
    { loc: '/brain-screening-mri', lastmod: new Date().toISOString() },
    { loc: '/whole-spine-mri', lastmod: new Date().toISOString() },
    { loc: '/3t-mri', lastmod: new Date().toISOString() },
    { loc: '/lumbar-spine-screening-mri', lastmod: new Date().toISOString() },
    { loc: '/contrast-mri', lastmod: new Date().toISOString() },
    { loc: '/brain-single-film-mri', lastmod: new Date().toISOString() },
    { loc: '/brain-screening-mra', lastmod: new Date().toISOString() },
//40
    { loc: '/brain-screening-wholespine-mri', lastmod: new Date().toISOString() },
    { loc: '/cervical-spine-screening-mri', lastmod: new Date().toISOString() },
    { loc: '/abdomen-pelvis', lastmod: new Date().toISOString() },
    { loc: '/abdomen-pelvis-scan', lastmod: new Date().toISOString() },
    { loc: '/obst-early', lastmod: new Date().toISOString() },
    { loc: '/kub-us', lastmod: new Date().toISOString() },
    { loc: '/abdomen-only', lastmod: new Date().toISOString() },
    { loc: '/pelvis-only', lastmod: new Date().toISOString() },
    { loc: '/abdomen-night', lastmod: new Date().toISOString() },
    { loc: '/transvaginal', lastmod: new Date().toISOString() },
//50
    { loc: '/antenatal', lastmod: new Date().toISOString() },
    { loc: '/obstetrics', lastmod: new Date().toISOString() },
    { loc: '/anomaly', lastmod: new Date().toISOString() },
    { loc: '/doppler', lastmod: new Date().toISOString() },
    { loc: '/breast', lastmod: new Date().toISOString() },
    { loc: '/nt-scan', lastmod: new Date().toISOString() },
    { loc: '/pregnancy-us', lastmod: new Date().toISOString() },
    { loc: '/scortal-us', lastmod: new Date().toISOString() },
    { loc: '/tvs', lastmod: new Date().toISOString() },
    { loc: '/aanomaly-scan', lastmod: new Date().toISOString() },
//60
    { loc: '/brain-ct', lastmod: new Date().toISOString() },
    { loc: '/chest-ct', lastmod: new Date().toISOString() },
    { loc: '/pns-ct', lastmod: new Date().toISOString() },
    { loc: '/whole-abdomen-pelvis-ct', lastmod: new Date().toISOString() },
    { loc: '/kub-ct', lastmod: new Date().toISOString() },
    { loc: '/abdomen-with-pelvis', lastmod: new Date().toISOString() },
    { loc: '/brain-plain-ct', lastmod: new Date().toISOString() },
    { loc: '/screening-ct', lastmod: new Date().toISOString() },
    { loc: '/complementary-ct', lastmod: new Date().toISOString() },
    { loc: '/thorax-ct', lastmod: new Date().toISOString() },
//70
    { loc: '/contrast-ct', lastmod: new Date().toISOString() },
    { loc: '/abdomen-and-pelvis-ct', lastmod: new Date().toISOString() },
    { loc: '/coronary-angiogram-ct', lastmod: new Date().toISOString() },
    { loc: '/contrast-iv', lastmod: new Date().toISOString() },
    { loc: '/virtual-colonoscopy', lastmod: new Date().toISOString() },
    { loc: '/neck-ct', lastmod: new Date().toISOString() },
    { loc: '/x-ray-chest', lastmod: new Date().toISOString() },
    { loc: '/x-ray-chest-ap', lastmod: new Date().toISOString() },
    { loc: '/x-ray-chest-pa', lastmod: new Date().toISOString() },
    { loc: '/x-ray-lumber-spine', lastmod: new Date().toISOString() },
//80
    { loc: '/x-ray-knee', lastmod: new Date().toISOString() },
    { loc: '/x-ray-pns', lastmod: new Date().toISOString() },
    { loc: '/x-ray-cervical-spine', lastmod: new Date().toISOString() },
    { loc: '/x-ray-foot', lastmod: new Date().toISOString() },
    { loc: '/x-ray-knee-ap', lastmod: new Date().toISOString() },
    { loc: '/x-ray-shoulder', lastmod: new Date().toISOString() },
    { loc: '/x-ray-lumbar-spine-ap', lastmod: new Date().toISOString() },
    { loc: '/x-ray-foot-ap', lastmod: new Date().toISOString() },
    { loc: '/x-ray-wrist-ap', lastmod: new Date().toISOString() },
    { loc: '/x-ray-lumbar-spine-ap-only', lastmod: new Date().toISOString() },
//90
    { loc: '/ecg', lastmod: new Date().toISOString() },
    { loc: '/echo', lastmod: new Date().toISOString() },
    { loc: '/mammogram', lastmod: new Date().toISOString() },
    { loc: '/tmt-radiology-scan', lastmod: new Date().toISOString() },
    { loc: '/cbc-test', lastmod: new Date().toISOString() },
    { loc: '/hba1c-test', lastmod: new Date().toISOString() },
    { loc: '/liver-function-test', lastmod: new Date().toISOString() },
    { loc: '/lipid-test', lastmod: new Date().toISOString() },
    { loc: '/thyroid-test', lastmod: new Date().toISOString() },
    { loc: '/aec-test', lastmod: new Date().toISOString() },
//100
    { loc: '/anti-streptolysin-test', lastmod: new Date().toISOString() },
    { loc: '/bleeding-time-test', lastmod: new Date().toISOString() },
    { loc: '/blood-group-test', lastmod: new Date().toISOString() },
    { loc: '/haemogram-test', lastmod: new Date().toISOString() },
    { loc: '/blood-count-with-esr-test', lastmod: new Date().toISOString() },
    { loc: '/erythrocyte-sedimentation-test', lastmod: new Date().toISOString() },
    { loc: '/ferritin-test', lastmod: new Date().toISOString() },
    { loc: '/hb-tc-dc-test', lastmod: new Date().toISOString() },
    { loc: '/iron-test', lastmod: new Date().toISOString() },
    { loc: '/packed-cell-volume-test', lastmod: new Date().toISOString() },
//110
    { loc: '/partial-thromboplastin-time-test', lastmod: new Date().toISOString() },
	{ loc: '/peripheral-smear-test', lastmod: new Date().toISOString() },
	{ loc: '/platelet-count-test', lastmod: new Date().toISOString() },
	{ loc: '/prothrombin-test', lastmod: new Date().toISOString() },
	{ loc: '/malarial-test', lastmod: new Date().toISOString() },
	{ loc: '/tc-dc-test', lastmod: new Date().toISOString() },
	{ loc: '/blood-urea-nitrogen', lastmod: new Date().toISOString() },
	{ loc: '/creatinine-kidney', lastmod: new Date().toISOString() },
	{ loc: '/creatinine-heart', lastmod: new Date().toISOString() },
	{ loc: '/alanine-aminotransferase', lastmod: new Date().toISOString() },
//120
    { loc: '/aspartate-sgot', lastmod: new Date().toISOString() },
	{ loc: '/albumin', lastmod: new Date().toISOString() },
	{ loc: '/albuminproteinurine', lastmod: new Date().toISOString() },
	{ loc: '/bilirubin', lastmod: new Date().toISOString() },
	{ loc: '/hbsag', lastmod: new Date().toISOString() },
	{ loc: '/magnesium', lastmod: new Date().toISOString() },
	{ loc: '/cholesterol-total', lastmod: new Date().toISOString() },
	{ loc: '/LDH', lastmod: new Date().toISOString() },
	{ loc: '/electrolytes-na-k-cl', lastmod: new Date().toISOString() },
	{ loc: '/electrolytes-na-k-ch-bic', lastmod: new Date().toISOString() },
//130
    { loc: '/glucose-fasting', lastmod: new Date().toISOString() },
	{ loc: '/glucose-post', lastmod: new Date().toISOString() },
	{ loc: '/sputum-afb', lastmod: new Date().toISOString() },
	{ loc: '/arterial-blood-gas', lastmod: new Date().toISOString() },
	{ loc: '/potassium', lastmod: new Date().toISOString() },
	{ loc: '/protein-creatinine', lastmod: new Date().toISOString() },
	{ loc: '/renal-function', lastmod: new Date().toISOString() },
	{ loc: '/uric-acid', lastmod: new Date().toISOString() },
	{ loc: '/urea', lastmod: new Date().toISOString() },
	{ loc: '/urine-microalbumin', lastmod: new Date().toISOString() },
//140
    { loc: '/urine-routine', lastmod: new Date().toISOString() },
	{ loc: '/urine-complete', lastmod: new Date().toISOString() },
	{ loc: '/sodium', lastmod: new Date().toISOString() },
	{ loc: '/urine-bile', lastmod: new Date().toISOString() },
	{ loc: '/hepatitis-c', lastmod: new Date().toISOString() },
	{ loc: '/wbc-count', lastmod: new Date().toISOString() },
	{ loc: '/coagulation-package', lastmod: new Date().toISOString() },
	{ loc: '/haemoglobin', lastmod: new Date().toISOString() },
	{ loc: '/hbTcDcEsr', lastmod: new Date().toISOString() },
	{ loc: '/malaria-qbc', lastmod: new Date().toISOString() },
//150
    { loc: '/malaria-rapid', lastmod: new Date().toISOString() },
	{ loc: '/vitamin-b12', lastmod: new Date().toISOString() },
	{ loc: '/free-t3-t4', lastmod: new Date().toISOString() },
	{ loc: '/free-t4', lastmod: new Date().toISOString() },
	{ loc: '/tsh', lastmod: new Date().toISOString() },
	{ loc: '/thyroxine', lastmod: new Date().toISOString() },
	{ loc: '/triiodothyronine-t3', lastmod: new Date().toISOString() },
	{ loc: '/anti-cpp', lastmod: new Date().toISOString() },
	{ loc: '/crp', lastmod: new Date().toISOString() },
	{ loc: '/crp-latex', lastmod: new Date().toISOString() },
//160
	{ loc: '/rheumatoid-arthritis', lastmod: new Date().toISOString() },
	{ loc: '/vitamin-d', lastmod: new Date().toISOString() },
	{ loc: '/amylase', lastmod: new Date().toISOString() },
	{ loc: '/lipase', lastmod: new Date().toISOString() },
	{ loc: '/stool-analysis', lastmod: new Date().toISOString() },
	{ loc: '/stool-analysis-routine', lastmod: new Date().toISOString() },
	{ loc: '/typhidot', lastmod: new Date().toISOString() },
	{ loc: '/trimester-down', lastmod: new Date().toISOString() },
	{ loc: '/ca-125', lastmod: new Date().toISOString() },
	{ loc: '/testosterone', lastmod: new Date().toISOString() },
//170
    { loc: '/psa', lastmod: new Date().toISOString() },
	{ loc: '/urine-pregnancy', lastmod: new Date().toISOString() },
	{ loc: '/vdrl', lastmod: new Date().toISOString() },
	{ loc: '/beta-hcg', lastmod: new Date().toISOString() },
	{ loc: '/fsh', lastmod: new Date().toISOString() },
	{ loc: '/glucose-fasting-only', lastmod: new Date().toISOString() },
	{ loc: '/glucose-postprandial', lastmod: new Date().toISOString() },
    { loc: '/', lastmod: new Date().toISOString() },
	{ loc: '/glucose-postprandial-urine', lastmod: new Date().toISOString() },
	{ loc: '/glucose-random', lastmod: new Date().toISOString() },
//180
    { loc: '/glucose-challenge', lastmod: new Date().toISOString() },
	{ loc: '/glucose-glucometer-random', lastmod: new Date().toISOString() },
	{ loc: '/leutinising-hormone', lastmod: new Date().toISOString() },
	{ loc: '/prolactin', lastmod: new Date().toISOString() },
	{ loc: '/urine-glucose-postprandial', lastmod: new Date().toISOString() },
	{ loc: '/urine-glucose-random', lastmod: new Date().toISOString() },
	{ loc: '/urine-glucose-fasting', lastmod: new Date().toISOString() },
	{ loc: '/glucose-postprandial-time', lastmod: new Date().toISOString() },
	{ loc: '/ana', lastmod: new Date().toISOString() },
	{ loc: '/dengue-antigen', lastmod: new Date().toISOString() },
//190
    { loc: '/hiv', lastmod: new Date().toISOString() },
	{ loc: '/immunoglobulin-e', lastmod: new Date().toISOString() },
	{ loc: '/calcium', lastmod: new Date().toISOString() },
	{ loc: '/phosphorus', lastmod: new Date().toISOString() },
	{ loc: '/biopsy', lastmod: new Date().toISOString() },
	{ loc: '/widal-slide-method', lastmod: new Date().toISOString() },
	{ loc: '/health-package-basic', lastmod: new Date().toISOString() },
	{ loc: '/health-package-classic', lastmod: new Date().toISOString() },
	{ loc: '/health-package-premium', lastmod: new Date().toISOString() },
	{ loc: '/health-package-pro', lastmod: new Date().toISOString() },
//200
    { loc: '/health-package-supreme', lastmod: new Date().toISOString() },
	{ loc: '/health-package-expert', lastmod: new Date().toISOString() },
	{ loc: '/health-package-elite', lastmod: new Date().toISOString() },
	{ loc: '/health-package-men', lastmod: new Date().toISOString() },
	{ loc: '/health-package-young-women', lastmod: new Date().toISOString() },
	{ loc: '/health-package-old-women', lastmod: new Date().toISOString() },
	{ loc: '/health-package-senior-citizen-men', lastmod: new Date().toISOString() },
	{ loc: '/health-package-senior-citizen-women', lastmod: new Date().toISOString() },
	{ loc: '/medall-center', lastmod: new Date().toISOString() },
	{ loc: '/business-enquiry', lastmod: new Date().toISOString() },
//205
    { loc: '/corporate', lastmod: new Date().toISOString() },
	{ loc: '/thank-you', lastmod: new Date().toISOString() },
	{ loc: '/thanks', lastmod: new Date().toISOString() },
	{ loc: '/admin-login', lastmod: new Date().toISOString() },
	{ loc: '/transactions-history', lastmod: new Date().toISOString() },
	
];

  return dynamicURLs;
};

const generateSitemap = async () => {
  const baseUrl = 'https://medall.in'; 
  const urls = await fetchURLs();

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
  console.log('Sitemap generated successfully');
};

generateSitemap();
