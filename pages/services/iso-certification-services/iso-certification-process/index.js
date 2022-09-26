
import Image from "next/image";
import { BsXDiamondFill, BsDash,  } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Head from "next/head";


function isoprocess(){
    return(
        <>
          <Head>
             <title>Accedere - Our ISO Certification Process & Policies</title>
             <meta name="twitter:title" content="ISO 27701 Certification &amp; Assessments | Schellman &amp; Company"/>
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 ">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                               Our ISO Certification Process & Policies </h2>
                               <h5 className="text-white"> Audit Questions and Scoping: </h5>
                              <p className="text-white mt-4"> The ISO 27000 and ISO 27701 audit journey begins with the 
                              audit questionnaire, which helps Accedere in understanding the audit scope. It provides 
                              us basic information about the client&apos;s organization, its management system, size & types 
                              of operation. Audit questionnaire also helps the auditor & auditee in setting the assessment 
                              objectives regarding the scope, standards & specifications.
                              </p>

       

                              

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1 ">
                                    <Image src="/gd-group-discussion-tips.jpg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">


                       <h2 className="comon-head-main"> Agreement: </h2>

                        <p> Based on the scope & objectives of clients Accedere quotes an offer & enters into a 
                        detailed contract specifying the terms, assessment criteria, all relevant 
                        deliverables, etc. each agreement is customized to individual client needs. </p>


                        <h2 className="comon-head-main"> Stage 1 Audit: </h2>

                        <p> Stage 1 Audit is a part of the registration process and not an optional activity. 
                        During Stage 1, it is established whether the requirements of the standard(s) are being met by the 
                        auditee organization. This can be done by review of the available evidence. The goal of the Stage 1 
                        audit is to 
                        determine if the client's ISMS is developed sufficiently to be certified. </p>


                        <h2 className="comon-head-main"> Stage 2 Audit: </h2>

                        <p> The auditor team applies the defined standard & evaluates the effectiveness of the
                         Information Security Management System & processes. Changes to the auditee organization&apos;s
                          documentation since the previous visit are reviewed and outstanding non-conformance(s) are 
                          followed up. The auditee organization&apos;s ISMS is assessed according to the schedule and audit 
                          trails. Documents reviewed, personnel interviewed and other pertinent data are recorded. 
                          Non-conformances are raised after the proper investigation against activities found non-compliant. 
                        The Observations are issued identifying areas of improvement only. </p>


                        <h2 className="comon-head-main"> Certifcation Decision: </h2>

                        <p> After all the audit processes are completed and all major non-conformities of Stage 2 are 
                        closed, the Certification Body evaluates all the processes & its results to take the certification 
                        decision. The decision of the Certification Body is independent & not influenced by any auditor or 
                        audit team member involved in the audit of the particular client. The audit results will be 
                        provided to the client in the form of an audit report. The
                         certificate is issued to the client only when all requirements are fulfilled. </p>


                         <h2 className="comon-head-main"> Surveillance Audit: </h2>

                        <p> A surveillance audit shall be conducted at least once per year. SA is intended to verify the 
                        continued effective maintenance of the auditee organization&apos;s quality management system, 
                        satisfy the needs of the auditee
                         organization and maintain the integrity of the registration process as a whole. </p>


                         <h2 className="comon-head-main"> Re-Audit: </h2>

                         <p> At the end of each 3 years cycle, a recertification audit is carried out. 
                         The purpose of the recertification audit is to confirm the continued and effective 
                         management system as a whole is followed and the continued relevance and applicability of the 
                         scope of certification, commitment to enhance and maintain overall effectiveness and improvement 
                         of the management system, and whether the operations of a certified client contributes to the 
                         achievement of the client's policy and objective.
                          If all requirements are fulfilled a new certificate is issued. </p>

                          <h2 className="comon-head-main"> Extensions/Reduction/Change to Scope : </h2>

                          <p className="mb-5"> Audits for the change or extension in scope will be carried out in the same way as the 
                          initial audit. An Audit Report will be completed in the normal way and submitted to the 
                          Certification Committee for approval. If successful, a new certificate will be issued by Accedere. 
                          A special visit may be
                           carried out at the request of the client for additional accreditation.</p>

                        
                    </div>
                </div>


            
          </div>
          <Footer/>
        </>
    );
}
export default isoprocess;