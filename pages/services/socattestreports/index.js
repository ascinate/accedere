
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import Head from "next/head";

export default function aicpasocreports() {
  return (
    <div>
    <Head>
        <title>Accedere - SOC Attest Reports</title>
        <meta name="description" content="Accedere is the leading Cybersecurity services company offers SOC compliance certification in North America and globally for Type 2 SOC 2, SOC 2 Type II, SOC Compliance, SOC 1 SOC 2 Report, SOC for Cybersecurity."/>
        <meta name="keywords" content="Type 2 SOC 2, SOC 2 Type II, SOC Compliance, SOC 2 Report, SOC For Cybersecurity, SOC Report, SOC 1 Reports, Accedere.io"/>
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       SOC Attest Reports </h2>
                       <h5 className="text-white"> One of the most important reports for a third party 
                       (vendor) data security and SOX compliance is the SOC Report, SOC 1 Report or SOC 2
                        Type 2 Report. The SOC Report, SOC 1 Report or SOC 2 Type 2 attest report provides 
                        an assurance on controls for SOX compliance. SOC compliance reports are part of 
                        AICPA&apos;s SSAE 18 Attest Standard that is now used for the SOC Report, SOC 1
                         Report or SOC 2 Type II, and SOC 3 reports.
                       </h5>
     
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/ad-socl-1.jpg"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
               
                <h2 className="comon-head-main text-center"> Founded and grown through experience </h2>
               
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/socattestreports/soc-reporting-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC 1 Type 2 Compliance Audit
                               </h5>
                               <p> One of the most important reports for third-party (vendor) data security, and SOX compliance is the SOC 1 Type 2 Attestation (some call Audit).
                               </p>
                               <span className="btn"> read more <FaAngleRight/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/socattestreports/soc-2-type-2-compliance-audit">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC 2Type 2 Compliance Audit </h5>
                               <p>One of the most important reports for third party (vendor)
                                data security and SOX compliance is the SOC 2 Type 2 Audit.
                               </p> 
                               <span className="btn"> read more <FaAngleRight/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/socattestreports/soc2cloud">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7818296.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC Reports for CSA / C5 </h5>
                               <p>According to some estimates, there are more than 20,000 SaaS providers globally.
                                SaaS Software as a service (SaaS) will remain the largest market segment, 
                               which is forecast to grow to $141 billion by 2022.
                               </p> 
                               <span className="btn"> read more <FaAngleRight/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                        <Link href="/services/socattestreports/soc2privacy">
                            <div className="comon-services-part">
                                <figure>
                                    <Image src="/4248625.svg"
                                    layout="fill"
                                    />
                                </figure>
                                <h5> SOC Reports for Privacy </h5>
                                <p>The SOC 2 compliance report provides an assurance to the internal and external stakeholders
                                 of the organization, the specific controls implemented,
                                </p> 
                                <span className="btn"> read more <FaAngleRight/> </span>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/socattestreports/soc4cyber">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1067263.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC Reports for Cyber Risk </h5>
                               <p>In 2017 AICPA has developed a SOC 2 cybersecurity reporting framework that 
                               organizations can use to demonstrate to key stakeholders..
                               </p> 
                               <span className="btn"> read more <FaAngleRight/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/socattestreports/soc-supply-chain">
                          <div className="comon-services-part">
                              <figure>
                                  <Image src="/5074591.svg"
                                  layout="fill"
                                  />
                              </figure>
                              <h5> SOC for Supply Chain </h5>
                              <p>A SOC audit report for Supply Chain is designed to provide intended users with information
                               about a system that produces, manufactures,
                              </p> 
                              <span className="btn"> read more <FaAngleRight/> </span>
                          </div>
                      </Link>
                    </div>


                    
                </div> 
            </div>
         </div>

   

    </div>
        
    <Footer/>
    </div>
  )
}
