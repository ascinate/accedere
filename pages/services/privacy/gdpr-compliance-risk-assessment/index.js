
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import ComonSlide from "../../../componets/ComonSlide";
import Head from "next/head";


function gdrpage(){
    return(
        <>
       
        <Head>
            <title>Accedere -  GDPR Assessments</title>
            <meta name="twitter:title" content="GDPR Compliance Risk Assessment | Accedere &amp; Company"/>
          
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              GDPR Assessments </h2>
                              <p className="text-white mt-4"> Privacy has grabbed the attention of Boards of Directors
                               (BoD&apos;s) across regions as organizations look to comply with new privacy regulations and 
                               compliance mandates such as GDPR, CCPA-California Privacy Act, Colorado Privacy Act, New
                                York Privacy Act, India Data Protection Bill, and other US Privacy laws as well as other
                                 Global Privacy mandates and others. Privacy is the new buzzword, and the potential impact is 
                                 very real. Personal data were processed for political and economic reasons without users&apos; consent, 
                                 as happened in the Cambridge Analytics event. In view of such recent incidents, the failure of 
                                 the EU Safe Harbor and the Privacy Shield to provide real protection, privacy laws are now 
                                 changing and have become more stringent. The magnitude of recent GDPR fines 
                              have added to the Privacy complexity.
                              </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1">
                                    <Image src="/soc-2.jpg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-1 g-lg-5 flex-column-reverse flex-lg-row">
                            
                           
                            <div className="col">
            
                                <p className="mt-0">After GDPR, new privacy laws are enacted such as the US California
                                 Consumer Privacy Act (CCPA California Privacy), and the Brazilian General Data Protection 
                                 Law (LGPD), India Data Protection Bill, and many more are planned. Despite new regulations, 
                                 the health care privacy requirement of HIPAA continues to have several breaches and violations
                                  every year and the HIPAA HITECH fines continue to rise. It may be prudent for organizations to 
                                  be more proactive and adapt measures for privacy governance to comply with such laws. Tools such 
                                  as COBIT, ISO 27701, SOC 2 for Privacy can provide assurance to internal and external stakeholders 
                                  as well as can help in the governance, risk management of the overall privacy program, and ensure compliance of HIPAA, GDPR, CCPA California Privacy, and other privacy mandates such as Colorado Privacy Act, New York Privacy Act, India Data Protection Bill,
                                 and other US Privacy & Global Privacy laws.</p>


                                <p> The majority of organizations until recently have been using the mainly legal team to
                                 manage privacy compliance. Since GDPR the situation has evolved, as privacy now is not just
                                  managing cookies or opt-ins or opt-outs. Privacy compliance requires a holistic and collaborative
                                   approach with team members from Business, IT, Security, Legal, and others. 
                                A siloed approach does not work.</p>

                                <p> Organizations need a Privacy Governance Program with a top-down approach to manage
                                 privacy risks and compliance challenges. One IAPP privacy report indicated that less
                                  than 50% of the organizations have an internal or external assurance for privacy. When 
                                  there are no internal or external privacy audits, organizations may not have knowledge of 
                                  their privacy maturity and they may only understand the hard way when they have a data breach. 
                                  The same report also suggested that 90% of organizations use third parties (vendors) to store or 
                                  process data. Some of
                                 these vendors may also be Cloud Service Providers (CSPs).</p>

                                 <p> The cloud environment is not safe either. One of the top cloud
                                  risks is the misconfigured servers that lead to data breaches. 
                                  Another major risk is insecure APIs. Organizations use APIs to transfer
                                   data to the business partners without a secure architecture in place,
                                    and without conducting a proper vendor due
                                  diligence or evaluating the data flow lifecycle risks.</p> 

                                  <p> With the above-mentioned privacy mandates and other new expected mandates and stringent 
                                  compliance requirements, organizations are feeling more challenging times ahead. The sheer number 
                                  of privacy & GDPR fines being levied has created enough scare amongst 
                                  the Board of Directors of large organizations.</p>

                                  <p>  Concepts such as Privacy by Design, Data Minimization, Data De-identification using Anonymization, or Pseudonymization encryption 
                                  methods are causing several implementation challenges.</p>
                                  <p className="mb-5"> To overcome the privacy challenges, organizations need to establish a Privacy 
                                  Governance Program with a senior person taking responsibility for the program by involving all 
                                  organization stakeholders. Several tools such as privacy assessment tools, the NIST Privacy 
                                  Framework discussed in our white paper can be very helpful in Privacy Governance. Organizations such as IAPP and ISCAA also offer many Privacy programs that help in overcoming Privacy Challenges. A periodic internal and external independent audit should be made mandatory by organizations to understand the level of maturity
                                   and of compliance towards the applicable privacy mandates.</p>

                                
                            </div>
                           
                        </div>
                       

                        
                    </div>
                </div>

             

            
          </div>
          <Footer/>
        </>
    );
}
export default gdrpage;