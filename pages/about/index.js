import Navbar from "../componets/Navbar";
import Banner from "../componets/Banner";
import Footer from "../componets/Footer";
import Clientlogo from "../componets/Clientlogo";
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import Head from "next/head";


function about(){
    return(
        <>
        <div>
        <Head>
            <title>Accedere - About</title>
            <meta name="description" content="SOC 1,2,3 Compliance Auditor,SOC 2 Auditor,SOC Auditor,GDPR CCPA Privacy Auditor,ISO 27001 Auditor,ISO 27701 Auditor"/>
            <meta name="keywords" content="Privacy Auditors, SOC 2 for privacy Auditor, SOC Auditors, Service Auditors, SOX Auditors, SSAE 16 auditors, SSAE 18 Auditors, SOC 2 Auditors, SOC 1 Auditors, SAS 70 SOC Auditors, SSAE 16 Auditors, SOC 1 Type 2 Auditors, SOC 2 Type 2 Auditors, CCPA Auditors, Privacy auditors, cloud security alliance auditors, PCAOB Auditors, CPA Auditors, ISO-ISMS auditors, ISO 27001 Auditors, Cloud CCSK, CCM 4, CCAK, Colorado SOC Auditors"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                                <h2 className="comon-head-main text-white"> Company Overview </h2>
                                <p className="mt-4 text-white"> Accedere is Colorado CPA Firm with License no FRM.5000337 specializing 
                                in Cybersecurity with a major focus on AICPA SSAE 18 Attestation (formerly SSAE 16), SOC 1,
                                 SOC 2 Type 2 and SOC 3 Compliance Reports, ISO/IEC Audits for Data Security & Privacy,Cloud 
                                 Security, Privacy Compliance (HIPAA, GDPR, CCPA, etc.) and Data Security Audit Services.
                                  We are an ISO/IEC Certification Body, SOX, Privacy, SSAE 18, SOC Auditors (Service Auditors)
                                   registered with PCAOB, and Cloud Security 
                                Alliance as Auditors for their STAR program. </p>

                                <p className="mt-2 text-white"> Ashwin Chaudhary is the CEO of Accedere. He is a CPA from Colorado, 
                                MBA, CITP, CISA, CISM, CGEIT, CRISC, CISSP, CDPSE, CCSK, PMP, ISO27001 LA, ITILv3 certified 
                                cybersecurity professional with over 19 years of cybersecurity/privacy and 34 years of industry
                                 experience. He has managed many cybersecurity projects covering SOC reporting, Privacy, IoT, 
                                 SCADA and Industrial Control System (ICS), Governance Risk, and Compliance. He has expertise in 
                                 implementing frameworks and compliance mandates such as ISO/IEC Audits for 
                                Data Security & Privacy, IEC 62443/ISA99, NERC-CIP, NIST 800-82, COBIT, etc. </p>
 
                                <p className="mt-2 text-white"> He also has hands-on deployment experience with projects covering 
                                implementation of the Security Operations Centre (SOC), 
                                Security Tools, etc. Ashwin has several publications to his credit. </p>

                                <p className="mt-2 text-white"> Cybersecurity frameworks, standards and certifications canbe
                                 quite complicated to understand, making it difficult toidentify which framework, 
                                standard or certification an organization should aim to achieve. </p>

                                <p className="mt-2 text-white"> Accedereis your one stop solution for all your Cyber Security,
                                 Cloud Assessments and Privacy Audit requirements. We provide assurance services to our 
                                 clients globally for cybersecurity compliance. Being a Colorado CPA firm registered with 
                                 PCAOB with a focus on cloud security and privacy, and empaneled CSA auditors we can conduct cloud
                                 assessments for CSA STAR Attestation and Certifications. </p>

                                 <p className="mt-2 text-white"> We&apos;re one of the only few organizations worldwide which can 
                                 Audit you for your Cloud environment including SOC Reports and ISO/IEC Certifications.
                                  Get audited for SOC 1 / SOC 2 / SOC 3 and ISO/IEC 27000 standards under one brand and 
                                  save your organization&apos;s time, money & efforts. Our services give clients a holistic
                                   approach to their 
                                 Cybersecurity, Data security & Privacy needs.  </p>

                           </div>
                           <div className="col">
                                <figure className="ab-top1">
                                     <Image src="/about-company.jpg" alt="about"
                                     layout="fill"
                                     />
                                </figure>
                           </div>
                        </div>
                         
                    </div>
               </div>

               <div className="ourvaule-div mt-0">
                   <div className="container">
                      <div className="row row-cols-1 row-cols-lg-2">
                         <div className="col">
                            <figure className="ab-top2 risk-1">
                                <Image src="/value-img.jpg" alt="about"
                            
                                layout="fill"
                                />
                            </figure>
                         </div>
                         <div className="col">
                            <h2 className="comon-head-main"> Why Choose Us: </h2>

                          
                            <ul className="list-unstyled mt-4 blue-arrow">
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Colorado Licensed CPA Firm</span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> PCAOB Registered Auditors </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> CSA STAR Empaneled Auditors </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> ISO/IEC Accredited Certification Body </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Cert-In Empaneled Auditors </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> SOC 1, 2 and 3 Reports, SOC Report for Cloud Security & SOC Report for Privacy </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Cloud Vulnerability Assessment and Penetration Testing (Cloud VAPT) </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Cloud Network Architecture Review & Cloud Configurations Architecture Review </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Data Localization / Cloud Data Security and Privacy </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Dockers / Kubernetes and Cloud Supply Chain Security </span>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>
               </div>

               <div className="our-customer-div py-5">
                  <div className="container">
                      <div className="row row-cols-1 row-cols-lg-2 flex-lg-row flex-column-reverse">
                          
                          <div className="col">
                              <h2 className="comon-head-main text-white"> Our Mission </h2>
                              <p className="text-white"> Our mission is provide quality audit and assessment services to prevent data breaches and to improve our clients cyber maturity.
                              </p>
                          </div>

                          <div className="col">
                                <h2 className="comon-head-main text-white"> Our Vision </h2>
                                <p className="text-white"> 
                                Our vision is to see a better world free of cybercrime and free of nefarious use of data and systems.
                                </p>
                          </div>
                      </div>
                  </div>
               </div>

               <div className="aboout-newa mt-5">
                  <div className="container">
                     <h2 className="comon-head-main"> Our Value Proposition </h2>
                     <p> Knowing how much extra value our services can deliver, many clients find that it makes sense to take steps to ensure a more successful outcome, including hiring experts who are skilled in helping organizations be more thorough and thoughtful in how they approach their engagement. Preparing for a SOC engagement or Cybersecurity assessment is a matter of clear thinking and smart planning. Working with a cybersecurity specialist such as ours, helps you dig into unknown areas. 
                     Some advantages of working with us are:</p>
                     <ul className="list-unstyled blue-arrow why-divbn mt-4">
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Colorado Licensed CPA Firm listed with PCAOB and Cloud Security Alliance
                        </span>
                          </li>
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        One-stop end to end process for SOC Reporting & Attest Services
                        </span>
                        </li>
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Project management methodology consistently applied to each engagement
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Efficient service delivery with minimal disruption to operations
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Our engagements are executed by senior experienced professionals
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Several years of Information Security & Cybersecurity experience
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Effective time management to complete assignments
                        </span>
                        </li>


                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Ongoing support, We are with you whenever you need us
                        </span>
                        </li>

                        


                       

                    </ul>


                    <h2 className="comon-head-main"> Our Customers </h2>
                     <p> Accedere has worked with many large customers that are globally well known names as well as SMB customers. 
                     Our customers belong to the following verticals</p>
                     <ul className="list-unstyled blue-arrow why-divbn mt-4">
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Cloud services such as IaaS, PaaS, SaaS, etc.
                        </span>
                          </li>
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Banking and Financial Services
                        </span>
                        </li>
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Technology and Consulting services
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Construction and Infrastructure
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Energy
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Telecom
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Data Centre Services
                        </span>
                        </li>


                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Healthcare and many more
                        </span>
                        </li>

                        


                       

                    </ul>
                  </div>
               </div>

               <Clientlogo/>
               

         </div>
          <Footer/>
          </div>
        </>
    );
}
export default about;