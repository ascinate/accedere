
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";


function ComplianceAudit(){
    return(
        <>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> Why is SOC 1 Type 2 Used?  </h2>
                              <p className="text-white mt-4"> One of the most important reports for third-party (vendor) data security, and SOX compliance is the SOC 1 Type 2 Attestation (some call Audit). 
                              </p>
                             <p className="text-white mt-4"> The SOC 1 Type 2 attest report provides for compliance and assurance of the financial data processing for ICFR (Internal Controls over Financial Reporting) of the service provider and may fulfill the need for SOX compliance. SOC 1 Attestation is popularly known as SOC 1 Audit (by clients),SOC 1 Engagement,SOC 1 Examination, 
                             SOC 1 Certification (by clients), SOC 1 Compliance.</p>
                             <p className="text-white mt-4"> SOC 1 compliance reports are part of AICPA&apos;s SSAE 18 Attest Standard that is used for the SOC 1, SOC 2, and SOC 3 reports. Since 1992, these reports have been known as SAS 70 reports. In 2011 the SOC 1 was brought under SSAE 16 Standard and SOC 2 under AT 101. Finally, in 2017 the SSAE 16 along with other SSAE standards got merged into one SSAE 18, bringing all SOC 1, SOC 2, and SOC 3 reports under SSAE 18. This is the main
                              difference between SSAE 16 vs SSAE 18 pertaining to SOC 1 Type 2 compliance reports. </p>
                             <p className="text-white mt-4"> The AT-C section 320 section provides guidance on &apos;Reporting on an Examination of Controls at a Service Organization Relevant 
                             to User Entities&apos; Internal Control Over Financial Reporting&apos;. </p>
                           </div>
                           <div className="col">
                               <figure className="mn-big-div">
                                    <Image src="/soc1-1.jpg" alt="about"
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
                        <h2 className="comon-head-main text-center"> SOC 1 Type 2 Compliance Audit FAQ </h2> 
                        <div className="row row-cols-1 row-cols-lg-2 align-items-center g-lg-5 mt-0">
                            <div className="col">
                                 <figure className="mn-big-div3">
                                        <Image src="/why1.jpg" alt="about"
                                        width={700}
                                        height={900}
                                        layout="responsive"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main"> What does SOC 1 Type 2 Mean? </h2>
                                 <p className="mt-4"> SOC now stands for System and Organization Controls. The definition got changed in 2017 from the earlier one as Service Organization Controls as these compliance reports were mainly being used for vendor(third-party) compliance audits as these organizations were service organizations. The auditor 
                                 auditing these service organizations is called Service Auditor (SOC Auditor). </p>
                                 <p> SOC 1 Type 2 compliance report provides for operating effectiveness of controls over a period minimum 6 months or maximum 12 months in contrast to certifications such as ISO 27001 that provides a certificate which is valid for 3 years. For missing periods or periods immediately after the report, 
                                 some User Entities or User Auditors may insist on a SOC Bridge Letter.</p>
                            </div>
                        </div>
                       

                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 align-items-center g-lg-5 mt-0">
                            <div className="col">
                                <h2 className="comon-head-main "> SOC 1 Type 2 Report Comprise of? </h2>
                                <p className="mt-4"> Scope for SOC 1 Type 2 compliance report usually depends on the number of controls reported on. The SOC 1 Type 2 report comprises of all the applicable controls for the control objectives in scope, that are reported by the SOC Auditor (Service Auditor). The SOC 1 Type 2 report is now of 4 sections, Section 1 is the Auditors Opinion, Section II is the Management Assertion, Section III is the Description Criteria or System Description and Section IV is a detailed list of controls as per applicable control objectives along with the results of the auditors&apos; test of controls. Unlike a SOC 2 Type 2 report, SOC 1 does not cover the Trust Services Criteria of Security(Common Criteria), Availability, Confidentiality, Processing Integrity, and Privacy 
                                (formerly known as the Generally Accepted Privacy Principles-GAPP) by AICPA. </p>
                                <p> To issue a SOC 1 compliance report for a public (listed)
                                 entity, the CPA Firm must be registered with the PCAOB. </p>
                                 <p> SOC 1 vs SOC 2 the major difference is the kind of data being processed or stored by the 
                                 service organization. If it is financial data for ICFR a SOC 1
                                  report is used. In all other cases, a SOC 2 report is used. </p>

                                <p> The SOC 1 report can be qualified or unqualified. </p>

                                <p> A SOC 1 report can be shared only with Management of the Service Organization,
                                 User Entities, and User Auditors against an NDA, or a confidentiality agreement. 
                                AICPA allows use of the SOC logo on client website. </p>

                                <Link href="/">
                                   <span className="btn btn-comonlinke-1 d-table">
                                       The AICPA SOC 1 Link
                                   </span>
                                </Link>

                                <Link href="/">
                                    <span className="btn btn-comonlinke-1 d-table mt-3">
                                    The AICPA SOC 1 Guide
                                    </span>
                                </Link>

                                <Link href="/">
                                    <span className="btn link-color d-table mt-3">
                                    More on SOC Reporting Services.
                                    </span>
                                </Link>

                                <Link href="/">
                                    <span className="btn link-color d-table mt-3">
                                       More on SOC 2 vs ISO 27701
                                    </span>
                                </Link>

                            </div>
                            <div className="col">
                                 <figure className="mn-big-div4">
                                        <Image src="/soc1-2.jpg" alt="about"
                                        width={700}
                                        height={900}
                                        layout="responsive"
                                        />
                                </figure>
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
export default ComplianceAudit;