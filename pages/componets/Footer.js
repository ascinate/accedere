import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitterSquare, FaLinkedin,FaYoutube } from "react-icons/fa";


function Footer(){
    return(
        <>
            <div className="footer-part float-start w-100">
                <div className="container">
                   <div className="row row-cols-1 row-cols-lg-4 align-items-start">
                      <div className="col">
                          <Link href="/">
                              <span className="footer-logo">
                                 <h5 className="ft-comon-part"> Accedere </h5>

                              </span>
                          </Link>
                          <h5 className="text-white mt-4">  USA address  </h5>
                          <p className="col-lg-10">999, 18th St,
                          #3000, Denver,
                          Colorado 80202</p> 
                          <h5 className="text-white"> India address </h5>
                          <p className="col-lg-10">Spaces Inspire Hub, Western Heights,
                          J P Road 4 Bunglows, Andheri West,
                          Mumbai 400053</p> 
                          
                      </div>
                      <div className="col ">
                         <div className="comon-footer-s mt-4 mt-lg-0">
                            <h5 className="ft-comon-part">Investor Services </h5>
                            <ul className="list-unstyled services-ul-links mt-4">
                               <li>
                                 <Link href='/services/socattestreports'>
                                   <span> SOC Attest Reports </span>
                                 </Link>
                               </li>
                               <li>
                                  <Link href='/services/iso-certification-services'>
                                    <span>  ISO/IEC Certifications </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href='/services/federal-assessments'>
                                    <span> US Federal Assessments </span>
                                  </Link>
                                </li>
                                
                               <li>
                                 <Link href='/services/india-cert-assetsments'>
                                   <span> India Cert-In Assessments </span>
                                 </Link>
                               </li>
                               <li>
                                  <Link href='/services/privacy'>
                                    <span> Privacy Assessments </span>
                                  </Link>
                                </li>
                              
                               <li>
                                 <Link href='/services/penetration-testing'>
                                   <span> Vulnerability Assessment and Pen Test  </span>
                                 </Link>
                               </li>
                               
                               <li>
                                 <Link href='/services/cloudsecurity'>
                                   <span> Cloud Security Assessments </span>
                                 </Link>
                               </li>
                               <li>
                                 <Link href='/services/cybersecurity'>
                                   <span> Other Cyber Security Services </span>
                                 </Link>
                               </li>
                               
                               
                            </ul>
                         </div>
                      </div>
                      <div className="col d-lg-grid justify-content-lg-center">
                          <div className="comon-footer-s mt-4 mt-lg-0">
                                <h5 className="ft-comon-part"> Company  </h5>
                                <ul className="list-unstyled mt-4 services-ul-links">
                                      <li>
                                        <Link href="/about">
                                          <span> About </span>
                                        </Link>
                                      </li>
                                      <li>
                                            <Link href="/contact">
                                                <span> Contact </span>
                                            </Link>
                                      </li>
                                </ul>
                          </div>
                        
                      </div>

                      <div className="col d-lg-grid justify-content-lg-end">
                          <h5 className="ft-comon-part"> Social Connect </h5>
                          <ul className="list-unstyled d-flex align-items-center social-links mt-3">
                                      
                              <li>
                                <Link href="/">
                                   <a>
                                    <FaYoutube/>
                                   </a>
                                </Link>
                                  
                              </li>
                              <li>
                                <Link href="/">
                                    <a>
                                    <FaLinkedin/>
                                    </a>
                                </Link>
                                  
                              </li>
                          </ul>
                      </div>
                   </div>
                   <div className="d-md-flex align-items-center justify-content-between  mt-3 mb-3">
                       <ul className="list-unstyled trums m-0">
                            <li>
                                © Accedere
                            </li>
                              <li>
                                  <Link href="/">
                                      Privacy Policy
                                  </Link>
                              </li>
                              <li>
                                  <Link href="/">
                                    Sitemap
                                  </Link>
                              </li>
                              <li>
                                  <Link href="/">
                                      Terms
                                  </Link>
                              </li>
                        </ul>

                       <Link href="/"> 
                          <a className="btn p-0 text-white"> Investor Services </a>
                       </Link> 
                   </div>
                  

                   
                </div>
            </div>
        </>
    )
};
export default Footer;
