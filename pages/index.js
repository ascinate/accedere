
import Navbar from "./componets/Navbar";
import Banner from "./componets/Banner";
import CountingSection from "./componets/CountingSection";
import HomeServices from "./componets/HomeServices";
import Whychoose from "./componets/Whychoose";
import CaseStudy from "./componets/CaseStudy";
import Testimonial from "./componets/Testimonial";
import Clientlogo from "./componets/Clientlogo";
import Footer from "./componets/Footer";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
    <Head>
        <title>Accedere - Home</title>
        <meta name="description" content="Accedere is a leading cloud security audit and assessment company offering SOC 1, SOC 2 Compliance Software, SOC 2 Certification Cost, SOC 1 Type 1, ISO/IEC 27001 and related Data Security and Privacy Certification services."/>
        <meta name="keywords" content="SOC 2 Type 2, SSAE 16 Reports, SOC 2 Compliance Software, AICPA SOC Reports, SOC 2 Audit Report, SOC Auditor, SOC 2 for cloud,SOC 1 Audit,SOX compliance, SOX compliance with SOC 2,SAS 70, SOC 1 vs SOC 2,SOC 2 vs ISAE 3000,SOC 1 vs ISAE3402,SOC Auditor,SAS 70 Auditor,SSAE 18 vs SSAE 16,SOC vs SOX Auditor,SOC 1 Certification, SOC 2 Certification,System and Organization Controls (SOC),AT-C 320,AT-C 205 SOC 2,AT 101,SOC2 for Privacy,SOC for Cloud Security,SSAE 16 vs SAS 70,SOC 2 Audit,SOC 2 Bridge Letter, GDPR Auditor, CCPA Auditor, Cloud Auditor,Privacy Auditor, SOC 2 for Vendor-Third-Party Audit, Cloud CCSK, Cloud CCAK, CCM 4, CCAK, SOC carve-out, SOC Carve in, SOC for Supply Chain, ISO 27000 PDF,ISO 27701, ISO 27001, ISO 27017, ISO 27018, SOC VS ISO, SOC 2 VS ISO 27001, AICPA GAPP, AICPA PMF, AICPA Privacy Management Framework, ISO 27001 Certification Body"/>
    </Head>
    <Navbar/>
    <Banner/>
    <div className='totals-body-part float-start w-100  comon-body-part'>
 
       <HomeServices/>
      <CountingSection/>

      <Whychoose/>

      <CaseStudy/>
       
      <Testimonial/>

      <Clientlogo/>

    </div>
    <Footer/>
        
    
    </div>
  )
}
