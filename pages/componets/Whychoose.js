import Link from "next/link";
import { BsCheckLg, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

function Whychoose(){
    return(
        <>
         <div className="chooser-div1">
           <div className="container">
               <div className="row row-cols-1 row-cols-md-2 align-items-center flex-column-reverse flex-md-row">
                   <div className="col">
                        <h4 className="comon-head-sub mt-5 mt-lg-0"> why choose us</h4>
                        <h2 className="comon-head-main"> Accedere covers end-to-end  <span className="d-block">
                        Cybersecurity Assessments / Audit </span> </h2>

                        <ul className="list-unstyled mt-4">
                            <li>
                               <span className="iconm">
                                  <BsCheckLg/>
                               </span>
                               <span>
                                Colorado Licensed CPA Firm
                               </span>
                            </li>
                            <li>
                               <span className="iconm">
                                  <BsCheckLg/>
                               </span>
                               <span>
                                  PCAOB Registered Auditors
                               </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                   CSA STAR Empaneled Auditors
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                   ISO/IEC Accredited Certification Body
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                   Cert-In Empaneled Auditors
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                   SOC 1, 2 and 3 Reports, SOC Report for Cloud Security &SOC Report for Privacy
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                   Cloud Vulnerability Assessment and Penetration Testing (Cloud VAPT)
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                  Cloud Network Architecture Review&Cloud Configurations Architecture Review
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                   Data Localization / Cloud Data Security and Privacy
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                    Dockers / Kubernetes and Cloud Supply Chain Security
                                </span>
                            </li>
                                

                            
                        </ul>

                        <Link href="/about">
                           <span className="btn about-btn mt-3"> Read more About <BsArrowRightShort/> </span>
                        </Link>
                   </div>
                   <div className="col">
                        <figure className="why-imgs2">
                            <Image src="/why1.svg" alt="why"
                            layout="fill" />
                        </figure>
                   </div>
               </div>
           </div>
           
        </div>
        </>
    )
};
export default Whychoose;
