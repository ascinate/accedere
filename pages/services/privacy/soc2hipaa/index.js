
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

export default function soc2hipaa() {
  return (
    <div>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-4"> HIPAA Privacy Compliance </h2>

                       <p className="text-white"> The HIPAA Act was effective in 1996, the HITECH Act in 2009, 
                       and the Final Omnibus Rule in 2013 and despite years passed by, HIPAA Privacy compliance is 
                       still a challenge for many health care organizations. We have several breach incidents 
                       relating to PII and specifically PHI. Organizations are still facing challenges in 
                       compliance and most findings relate to basic security hygiene such as risk management, 
                       policies, data minimization, and encryption. Organizations are being fined in millions 
                       and their names appear in the Wall of Shame by HHS.</p>
                       
                      
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/sobn.jpg"
                          alt="comon-img"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

       
         

      
         <div className="para-grap-div py-5">
            <div className="container">
               <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                    <div className="col">
                        <figure className="right-img-nm">
                            <Image src="/soc-challages.jpg"
                            layout="fill"/>
                        </figure>
                    </div>
                    <div className="col">
                        <h2 className="comon-head-main"> HIPAA Cyber Challenges </h2>
                        <p> New technologies are evolving, and the health care industry has moved away from paper processes and now relies heavily on the use of electronic information systems to store and process the data. The cloud movement has an impact on the healthcare industry challenges too as the majority of 
                        organizations have moved to the cloud for its various benefits. </p>
                        

                        <p> Today, healthcare providers are using clinical applications such as computerized
                         physician order entry (CPOE) systems, electronic health records (EHR), and radiology, pharmacy,
                          and laboratory systems
                         majority hosted in some sort of cloud environment.</p>

                         <p> The cloud environment is not safe either. One of the top cloud risks is the 
                         misconfigured servers that can lead to data breaches. Another major risk is insecure APIs.
                          Organizations use API&apos;s to transfer data to the business partners without a secure architecture 
                          in place and without conducting a 
                         proper vendor due diligence and evaluating the data flow lifecycle risks.</p>

                         <p> As required under the HIPAA rules the healthcare organizations are required to have a
                          Business Associate Agreement with their vendors or the third-parties. It is equally
                          important to understand the data security controls with their business associates. </p>

                    </div>
               </div>
            </div>
         </div>

         <div className="para-grap-div py-5">
            <div className="container">
               <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                    
                    <div className="col">
                        <h2 className="comon-head-main"> 
                        HIPAA Compliance Requirements </h2>
                        <p> Health care entities and related business associates (BA e.g., health plans, health care 
                           clearinghouses, exchanges, health care providers, and organizations that conduct certain 
                           financial, research, and administrative functions) are being asked with increased frequency to d
                           emonstrate that they meet the common security and privacy requirements
                         of HIPAA that they have taken appropriate measures to:</p>
                        

                         <ul className="list-unstyled blue-arrow">
                         
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span> Secure their environment.
                            </span>
                         
                         </li>

                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span> Be vigilant in anticipating what might occur in the evolving security landscape. </span>
                         
                         </li>
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span> Implement appropriate measures to detect and react to existing and emerging threats. </span>
                         
                         </li>
                         <li>
                                 <span>
                                 <FaAngleRight/>
                              </span>
                           <span> Be resilient in their ability to recover operations when a security incident does occur. </span>
                        
                        </li>

                        <li>
                                 <span>
                                 <FaAngleRight/>
                              </span>
                           <span> Use encryption technologies to de-identify PII data.</span>
                        
                        </li>

                       </ul>

                    </div>

                    <div className="col">
                        <figure className="right-img-nm">
                            <Image src="/ad-comon1.jpg"
                            layout="fill"/>
                        </figure>
                    </div>
               </div>
            </div>
         </div>


         <div className="para-grap-div py-5">
            <div className="container">
               <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                    <div className="col">
                        <figure className="right-img-nm">
                            <Image src="/soc1-3.jpg"
                            layout="fill"/>
                        </figure>
                    </div>
                    <div className="col">
                        <h2 className="comon-head-main"> SOC 2 Type 2 for HIPAA </h2>
                        <p> The SOC 2 compliance report provides an assurance to the internal and external stakeholders of the organization, the specific controls implemented, and/or operating effectively for complying with privacy regulatory requirements. A single SOC 2 report can provide information about the organization&apos;s controls over protected health information (PHI) based on the HIPAA requirements and AICPA&apos;s Privacy Trust Services Criteria. These were formerly known 
                        as the Generally Accepted Privacy Principles(GAPP) by AICPA. </p>

                        <p> This SOC 2 examination can provide service organizations with the ability to increase 
                        transparency and communicate through a single deliverable to customers, business partners, 
                        and stakeholders both in and outside the healthcare sector. Healthcare covered entities 
                        should also demand a SOC 2 report from their business associates, CSP&apos;s to understand and to have assurance over the controls implemented and/or operating effectiveness of the controls at the business associate or CSP over PHI Data Security as well as Privacy.More on SOC Reporting Services. 
                        More on SOC 2 vs ISO/IEC 27001,27701 PIMS. </p>

                    </div>
               </div>
            </div>
         </div>

         

         <div className="middle-part-div py-5">
               <div className="container">
                  <h5 className="text-center col-lg-8 mx-auto"> For more details please read our White paper</h5>
                  <div className="col-lg-4 mx-auto d-table text-center">
                        <Link href="/">
                        
                           <span className="btn mt-4 btn-more-n">
                           View More
                           </span>
                        </Link>
                  </div>
               </div>
         </div>
   

    </div>
        
    <Footer/>
    </div>
  )
}
