// src/data/Portfolio.js

// Images
import BluxImg from '../assets/img/Blux.webp';
import AirbotsImg from '../assets/img/Airbots.webp';
import JobhivesImg from '../assets/img/Jobhives.png';
import FigmaBluxImg from '../assets/img/Layout-blux.webp';
import FigmaCirclexImg from '../assets/img/Circlex.webp';
import SimpleLoginImg from '../assets/img/Simple-login.webp';
import CertUxImg from '../assets/img/UX.webp';
import CertImg from '../assets/img/certification.webp';
import YellevateImg from '../assets/img/Yellevate.webp';
import KapitalDaoImg from '../assets/img/KapitalDao.webp';
import UrbanThreadsImg from '../assets/img/UrbanThreadsCover.webp';
import BloomyImg from '../assets/img/BloomyCover.webp';
import LumeImg from '../assets/img/LumeCover.webp';
import TaxEaseImg from '../assets/img/Tax-ease.png';
import StackPointImg from '../assets/img/StackPoint.png';
import SonnyImg from '../assets/img/Sonny-company.png';
import RemedyTaxCoImg from '../assets/img/RemedyTaxCo.png';
import SampleSiteCover1 from '../assets/img/SampleSite-1.png';
import SampleSiteCover2 from '../assets/img/SampleSite-2.png';
import SampleSiteCover3 from '../assets/img/SampleSite-3.png';
import SampleSiteCover4 from '../assets/img/SampleSite-4.png';
import SampleSiteCover5 from '../assets/img/SampleSite-5.png';
import SampleSiteCover6 from '../assets/img/SampleSite-6.png';
import SampleSiteCover7 from '../assets/img/SampleSite-7.png';
import SampleSiteCover8 from '../assets/img/SampleSite-8.png';
import SampleSiteCover9 from '../assets/img/SampleSite-9.png';
import SampleSiteCover10 from '../assets/img/SampleSite-10.png';
import SampleSiteCover11 from '../assets/img/SampleSite-11.png';
import KimberleyCarbonImg from '../assets/img/KimberleyCarbonCover.png';
import KimberleyCarbonCover from '../assets/img/KimberleyCarbonWeb.png';

// PDFs
import CertificationPdf from '../assets/pdf/refocus.pdf';
import YellevatePdf from '../assets/pdf/Yellevate.pdf';
import KapitalDaoPdf from '../assets/pdf/KapitalDao.pdf';
import UrbanThreadsPdf from '../assets/pdf/UrbanThreads.pdf';
import BloomyPdf from '../assets/pdf/Bloomy.pdf';
import LumePdf from '../assets/pdf/Lume.pdf';
import TaxEasePdf from '../assets/pdf/Tax-ease.pdf';
import StackPointPdf from '../assets/pdf/Stack-point.pdf';
import SonnyPdf from '../assets/pdf/Sonny-company.pdf';
import RemedyTaxCoPdf from '../assets/pdf/RemedyTaxCo.pdf';
import SampleSite1 from '../assets/pdf/SampleSite1.pdf';
import SampleSite2 from '../assets/pdf/SampleSite2.pdf';
import SampleSite3 from '../assets/pdf/SampleSite3.pdf';
import SampleSite4 from '../assets/pdf/SampleSite4.pdf';
import SampleSite5 from '../assets/pdf/SampleSite5.pdf';
import SampleSite6 from '../assets/pdf/SampleSite6.pdf';
import SampleSite7 from '../assets/pdf/SampleSite7.pdf';
import SampleSite8 from '../assets/pdf/SampleSite8.pdf';
import SampleSite9 from '../assets/pdf/SampleSite9.pdf';
import SampleSite10 from '../assets/pdf/SampleSite10.pdf';
import SampleSite11 from '../assets/pdf/SampleSite11.pdf';
import KimberleyCarbonPdf from '../assets/pdf/KimberleyCarbon.pdf';

const portfolioData = [
  {
    name: "Blux",
    image: BluxImg,
    url: "https://jrtresvalles.github.io/BLUX/",
    category: "web",
    title: "Blux - Web development Services"
  },
  {
    name: "Airbots",
    image: AirbotsImg,
    url: "https://airbots-nine.vercel.app/",
    category: "web",
    title: "Airbots - Drone Website"
  },
  {
    name: "Jobhives",
    image: JobhivesImg,
    url: "https://github.com/BlukissGithub/JobHives-Webite",
    category: "web",
    title: "JobHives - Job Portal"
  },
  {
    name: "FigmaBlux",
    image: FigmaBluxImg,
    url: "https://www.figma.com/file/iuFvNbmPpdkqXH03bMH07x/BLUX-LAYOUT-%26-DESIGN?node-id=0%3A1&t=uA5QeJDvWUHk0sFg-1",
    category: "design",
    title: "Figma Design - Blux"
  },
  {
    name: "Kimberley Carbon",
    image: KimberleyCarbonImg,
    pdf: KimberleyCarbonPdf,
    category: "design",
    title: "Website Design - Kimberley Carbon"
  },
  {
    name: "Kimberley Carbon Web",
    image: KimberleyCarbonCover,
    url: "https://jonhtresvalles1.github.io/Kimberley-revamp-webpage/",
    category: "web",
    title: "Kimberley Carbon Web"
  },
  {
    name: "FigmaCirclex",
    image: FigmaCirclexImg,
    url: "https://www.figma.com/file/yPfJaXasoWkKUkxBnblzw7/Untitled?node-id=0%3A1&t=yImZGb9XRIgbx5Ao-1",
    category: "design",
    title: "Figma Design - CircleX"
  },
  {
    name: "SimpleLogin",
    image: SimpleLoginImg,
    url: "https://blukissgithub.github.io/Login/",
    category: "web",
    title: "Simple - Login & Signup"
  },
  {
    name: "CertUx",
    image: CertUxImg,
    pdf: CertUxImg,
    category: "certification",
    title: "UX Course"
  },
  {
    name: "Cert",
    image: CertImg,
    pdf: CertificationPdf,
    category: "certification",
    title: "Refocus Data Analyst Course"
  },
  {
    name: "Yellevate",
    image: YellevateImg,
    pdf: YellevatePdf,
    category: "others",
    title: "Yellevate Dispute Analysis"
  },
  {
    name: "KapitalDao",
    image: KapitalDaoImg,
    pdf: KapitalDaoPdf,
    category: "others",
    title: "Social Media Content"
  },
  {
    name: "UrbanThreads",
    image: UrbanThreadsImg,
    pdf: UrbanThreadsPdf,
    category: "design",
    title: "Website Design - Urban Threads"
  },
  {
    name: "Bloomy",
    image: BloomyImg,
    pdf: BloomyPdf,
    category: "design",
    title: "Website Design - Bloomy"
  },
  {
    name: "Lume",
    image: LumeImg,
    pdf: LumePdf,
    category: "design",
    title: "Website Design - Lumé"
  },
  {
    name: "TaxEase",
    image: TaxEaseImg,
    pdf: TaxEasePdf,
    category: "design",
    title: "Website Design - Tax Ease"
  },
  {
    name: "StackPoint",
    image: StackPointImg,
    pdf: StackPointPdf,
    category: "design",
    title: "Website Design - Stack Point"
  },
  {
    name: "Sonny",
    image: SonnyImg,
    pdf: SonnyPdf,
    category: "design",
    title: "Website Design - Sonny & Company"
  },
  {
    name: "RemedyTaxCo",
    image: RemedyTaxCoImg,
    pdf: RemedyTaxCoPdf,
    category: "design",
    title: "Website Design - Remedy Tax Co"
  },
  {
    name: "SampleSite1",
    image: SampleSiteCover1,
    pdf: SampleSite1,
    category: "design",
    title: "Website Design - Sample 1"
  },
  {
    name: "SampleSite2",
    image: SampleSiteCover2,
    pdf: SampleSite2,
    category: "design",
    title: "Website Design - Sample 2"
  },
  {
    name: "SampleSite3",
    image: SampleSiteCover3,
    pdf: SampleSite3,
    category: "design",
    title: "Website Design - Sample 3"
  },
  {
    name: "SampleSite4",
    image: SampleSiteCover4,
    pdf: SampleSite4,
    category: "design",
    title: "Website Design - Sample 4"
  },
  {
    name: "SampleSite5",
    image: SampleSiteCover5,
    pdf: SampleSite5,
    category: "design",
    title: "Website Design - Sample 5"
  },
  {
    name: "SampleSite6",
    image: SampleSiteCover6,
    pdf: SampleSite6,
    category: "design",
    title: "Website Design - Sample 6"
  },
  {
    name: "SampleSite7",
    image: SampleSiteCover7,
    pdf: SampleSite7,
    category: "design",
    title: "Website Design - Sample 7"
  },
  {
    name: "SampleSite8",
    image: SampleSiteCover8,
    pdf: SampleSite8,
    category: "design",
    title: "Website Design - Sample 8"
  },
  {
    name: "SampleSite9",
    image: SampleSiteCover9,
    pdf: SampleSite9,
    category: "design",
    title: "Website Design - Sample 9"
  },
  {
    name: "SampleSite10",
    image: SampleSiteCover10,
    pdf: SampleSite10,
    category: "design",
    title: "Website Design - Sample 10"
  },
  {
    name: "SampleSite11",
    image: SampleSiteCover11,
    pdf: SampleSite11,
    category: "design",
    title: "Website Design - Sample 11"
  }
];

export default portfolioData;