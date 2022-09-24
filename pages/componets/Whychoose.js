import Link from "next/link";
import { BsCheckLg, BsArrowRightShort, BsChevronRight } from "react-icons/bs";

import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

function Whychoose(){
    return(
        <>
         <div className="chooser-div1">
           <div className="container">
               <div className="row row-cols-1 row-cols-md-2 align-items-center flex-column-reverse flex-md-row">
                   <div className="col">
                        <h2 className="mt-5 mt-lg-0 comon-head-main blue-color"> why choose us</h2>
                        <h4 className="comon-head-main"> Accedere covers end-to-end  <span className="d-block">
                        Cybersecurity Assessments / Audit:  </span> </h4>

                        <ul className="list-unstyled mt-4">
                            <li>
                               <span className="iconm">
                                  <FaAngleRight/>
                               </span>
                               <span>
                                Colorado Licensed CPA Firm
                               </span>
                            </li>
                            <li>
                               <span className="iconm">
                                  <FaAngleRight/>
                               </span>
                               <span>
                                  PCAOB Registered Auditors
                               </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <FaAngleRight/>
                                </span>
                                <span>
                                   CSA STAR Empaneled Auditors
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <FaAngleRight/>
                                </span>
                                <span>
                                   ISO/IEC Accredited Certification Body
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <FaAngleRight/>
                                </span>
                                <span>
                                   Cert-In Empaneled Auditors
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <FaAngleRight/>
                                </span>
                                <span>
                                   SOC 1, 2 and 3 Reports, SOC Report for Cloud Security &SOC Report for Privacy
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <FaAngleRight/>
                                </span>
                                <span>
                                   Cloud Vulnerability Assessment and Penetration Testing (Cloud VAPT)
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <FaAngleRight/>
                                </span>
                                <span>
                                  Cloud Network Architecture Review&Cloud Configurations Architecture Review
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <FaAngleRight/>
                                </span>
                                <span>
                                   Data Localization / Cloud Data Security and Privacy
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <FaAngleRight/>
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
