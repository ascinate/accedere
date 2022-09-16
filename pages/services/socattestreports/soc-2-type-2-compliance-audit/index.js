
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";


function complianceauditT(){
    return(
        <>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> Why is SOC 2 Type 2 Used?  </h2>
                              <p className="text-white mt-4"> One of the most important reports for third party (vendor) data security and SOX compliance is the SOC 2 Type 2 Audit. 
                              </p>
                             <p className="text-white mt-4"> The SOC 2 Type 2 attest report(also called audit report by clients) provides for compliance and assurance. SOC 2 Attestation is popularly known as SOC 2 Audit (by clients), SOC 2 Engagement, SOC 2
                              Examination, SOC 2 Certification (by clients), SOC 2 Compliance. </p>
                             <p className="text-white mt-4"> SOC 2 compliance reports are part of AICPA&apos;s SSAE 18 Attest Standard that is used for the SOC 1, SOC 2, and SOC 3 reports. SOC reportswere known as SAS 3 since 1974, and as SAS 70 audit reports since 1992.In 2011 the SOC 1 was brought under SSAE 16 Standard and SOC 2 under AT 101. Finally, in 2017 the SSAE 16 along with other SSAE standards got merged into one SSAE 18, bringing all SOC 1, SOC 2, and SOC 3 reports under SSAE 18. This is the main difference between SSAE 16 vs 18 pertaining to SOC compliance reports. AT-C section 205 provides guidance on “Examination Engagements. AICPA Guide,
                              SOC 2 Reporting on an Examination of Controls at a Service Organization”. </p>
                             <p className="text-white mt-4"> SOC stands for System and Organization Controls. The definition got changed in 2017 from the earlier one as Service Organization Controls as these compliance reports were mainly being used for vendor(third-party) compliance audits as these organizations were service organizations. The auditor auditing these service organizations 
                             is called Service Auditor or popularly SOC Auditor. </p>
                           </div>
                           <div className="col">
                               <figure className="mn-big-div">
                                    <Image src="/pexels-cottonbro-5473302.jpg" alt="about"
                                    width={700}
                                    height={900}
                                    layout="responsive"
                                    />
                               </figure>
                           </div>
                        </div>


                        

                        
                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        <h2 className="comon-head-main text-center"> SOC 2 Type 2 Certification and Audit FAQs </h2> 
                        <div className="row row-cols-1 row-cols-lg-2  g-lg-5 mt-0">
                            <div className="col">
                                 <figure className="mn-big-div6">
                                        <Image src="/about-company.jpg" alt="about"
                                        width={700}
                                        height={900}
                                        layout="responsive"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main"> What does SOC 2 Type 2 Mean? </h2>
                                 <p className="mt-4"> A SOC 2 Type 2 compliance report provides for operating effectiveness of controls over a period minimum 6 months or maximum 12 months in contrast to certifications such as ISO/IEC 27001 that provides a certificate which is valid for 3 years. For missing periods or periods immediately after the report, 
                                 some User Entities or User Auditors may insist on a SOC Bridge Letter. </p>
                                 <p> A SOC 2 Type 2 compliance report usually is about 100 pages depending on the controls reported on. The Type 2 report comprises of all the applicable controls that are reported by the SOC Auditor (Service Auditor). The SOC 2 Type 2 report is now of 4 sections, Section 1 is the Auditors Opinion, Section II is the Management Assertion, Section III is the Description Criteria or System Description, and Section IV is a detailed list of controls as per 
                                 applicable TSC 2017 along with the results of the auditors&apos; test of controls.</p>

                                 <p> In comparison, an ISO/IEC 27001 does not provide such a detailed list of controls that are applicable to the entity. The SOA or Statement of Applicability of controls and details of audit or non-compliances (NC) in an ISO/IEC 27001 is between the auditor firm and the entity. These details are not shared with the end-user of the entity and these end-users or clients would not know what are the exact controls that have 
                                 been implemented by the entity or if they were operated effectively.</p>
                            </div>
                        </div>
                       

                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                            <div className="col">
                                <h2 className="comon-head-main "> SOC 2 Type II Report Comprise of? </h2>
                                <p className="mt-4"> The SOC 2 Type II compliance report uses the Trust Services Criteria (TSC) to report on the controls of an entity. Formerly they were known as the Trust Services Principles and Criteria (TSPC). The most 
                                updated one is the TSC 2017 which is now aligned with the COSO Risk Framework. </p>

                                <p> The TSP 100 section covers TSC 2017 which has 5 criteria namely Security (or Common Criteria), Availability, Confidentiality, Processing Integrity, and Privacy. The common criteria itself has about 300 Points of 
                                Focus each of which may have multiple controls that are implemented by the entity. </p>

                                 <p> A SOC 2 Type II compliance report can only be issued only by a
                                  Licensed CPA as a SOC Auditor, also known as a Service Auditor. </p>

                                <p> A SOC 2 Type II compliance report mirrors the ISAE 3000 based on the International Standard on Assurance Engagements standard popularly used in Europe.
                                 A Licensed CPA such as Accedere can issue a joint SOC 2 and ISAE 3000 report. </p>

                                <p> To issue a SOC 2 compliance report for a public (listed) entity, 
                                the CPA Firm must be registered with the PCAOB. </p>

                                <p> To issue a SOC 2 Plus CSA STAR covering CCM controls the CPA Firm must 
                                be registered with the Cloud Security Alliance. </p>

                                <p> The SOC 2 Type II compliance report can be qualified or unqualified. </p>


                               

                            </div>
                            <div className="col">
                                 <figure className="mn-big-div4">
                                        <Image src="/pexels-photo-3183186.jpeg" alt="about"
                                        width={700}
                                        height={900}
                                        layout="responsive"
                                        />
                                </figure>
                            </div>
                            
                        </div>
                       

                        
                    </div>
                </div>


                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                            
                            <div className="col">
                                    <figure className="mn-big-div4">
                                        <Image src="/pexels-christina-morillo-1181216.jpg" alt="about"
                                        width={700}
                                        height={900}
                                        layout="responsive"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main "> What is SOC 3, Applications of SOC 2 Report? </h2>

                                <p className="mt-4"> A SOC 3 report is an abridged SOC 2 report that can be shared with any person or displayed on the organization&apos;s website. It is a shorter version of the SOC 2 reports without Section IV. Unlike the SOC 3, a SOC 2 report can be shared only with knowledgeable parties such as prospective 
                                clients against an NDA, or a confidentiality agreement. </p>

                                <p> SOC 2 vs SOC 1 the major difference is the kind of data being processed or stored by the service organization. If it is financial data ICFR (Internal Controls over Financial Reporting)
                                 a SOC 1 is used. In all other cases, a SOC 2 is used. </p>

                                 <h5> SOC 2 compliance reports now have many flavors </h5>

                                 <ul className="list-unstyled">
                                     <li>
                                       <span></span>
                                       <span>
                                         SOC 2 Type 2 Certification for Cloud Security, CSA STAR using CSA’s CCM Framework
                                       </span>
                                     </li>
                                     <li>
                                       <span></span>
                                       <span>
                                         SOC 2 Type II Certification for Cloud Security using C5 Cloud Standard
                                       </span>
                                     </li>
                                     <li>
                                       <span></span>
                                       <span>
                                          SOC 2 Type 2 Audit for Cyber Risk
                                       </span>
                                     </li>
                                     <li>
                                       <span></span>
                                       <span>
                                       SOC 2 Type 2 Audits for Privacy is used for any specific privacy mandate or using the Trust Services Privacy Category formerly covered under AICPA’s Generally Accepted Privacy Principles(GAPP)
                                       </span>
                                     </li>
                                     <li>
                                       <span></span>
                                       <span>
                                       The AICPA SOC 2 Link The AICPA SOC 2 Guide More on SOC Reporting Ser
                                       </span>
                                     </li>

                                     <li>
                                       <span></span>
                                       <span> More on SOC Reporting Services</span>
                                     </li>
                                     <li>
                                       <span></span>
                                       <span>More on SOC 2 vs ISO/IEC 27001, 27701 PIMS.</span>
                                     </li>
                                 </ul>


                               

                            </div>
                            
                            
                        </div>
                       

                        
                    </div>
                </div>


                <div className="white-paper-comon-1 py-5">
                     <div className="container">
                         <h2 className="comon-head-main text-center"> For more 
                         details please read our White paper</h2>
                         <p className="text-center">
                            <Link href="/">
                               <span className="btn btn-comonlinke-1 mt-3"> View Details </span>
                            </Link>
                         </p>
                     </div>
                </div>



          </div>
          <Footer/>
        </>
    );
}
export default complianceauditT;