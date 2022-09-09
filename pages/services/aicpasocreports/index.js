
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";

export default function aicpasocreports() {
  return (
    <div>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-4"> AICPA SOC 1, 2, 3 Reports  </h2>
                       <p className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                       typesetting, remaining essentially unchanged.</p>
                       <p className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                       typesetting, remaining essentially unchanged.</p>
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
                <h2 className="comon-head-main text-center"> AICPA SOC 1, 2, 3 Reports Services </h2>
                <p className="text-center col-lg-7 mx-auto"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard 
                dummy text ever </p>
                <div className="row row-cols-1 row-cols-lg-4 gy-lg-5 mt-0">
                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-reporting-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.png"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC Reporting Services </h5>
                               <p>One of the most important reports for a third party (vendor) data security and SOX compliance is the SOC Report, SOC 1 Report or SOC 2 Type 2 Report.
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-1-type-2-compliance-audit">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.png"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC 1 Type 2 Compliance Audit </h5>
                               <p>One of the most important reports for a third party (vendor) data security and SOX compliance is the SOC Report, SOC 1 Report or SOC 2 Type 2 Report.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-2-type-2-compliance-audit">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.png"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC 2 Type 2 Compliance Audit </h5>
                               <p>One of the most important reports for a third party (vendor) data security and SOX compliance is the SOC Report, SOC 1 Report or SOC 2 Type 2 Report.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/aicpasocreports/soc2cloud">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7818296.png"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC Reports for Cloud Security </h5>
                               <p>One of the most important reports for a third party (vendor) data security and SOX compliance is the SOC Report, SOC 1 Report or SOC 2 Type 2 Report.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/aicpasocreports/soc2privacy">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4248625.png"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC Reports for Privacy </h5>
                               <p>One of the most important reports for a third party (vendor) data security and SOX compliance is the SOC Report, SOC 1 Report or SOC 2 Type 2 Report.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/aicpasocreports/soc4cyber">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1067263.png"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC Reports for Cyber Risk </h5>
                               <p>One of the most important reports for a third party (vendor) data security and SOX compliance is the SOC Report, SOC 1 Report or SOC 2 Type 2 Report.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-supply-chain">
                          <div className="comon-services-part">
                              <figure>
                                  <Image src="/5074591.png"
                                  layout="fill"
                                  />
                              </figure>
                              <h5> SOC for Supply Chain </h5>
                              <p>One of the most important reports for a third party (vendor) data security and SOX compliance is the SOC Report, SOC 1 Report or SOC 2 Type 2 Report.
                              </p> 
                              <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>


                    
                </div> 
            </div>
         </div>

         <div className="comon-next-gray-bg py-5">
            <div className="container">
               <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                    <div className="col">
                        <figure className="right-img-nm">
                            <Image src="/ad-comon1.jpg"
                            layout="fill"/>
                        </figure>
                    </div>
                    <div className="col">
                        <h2 className="comon-head-main">  Get more from Reports </h2>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry&apos;s standard </p>
                        <ul className="list-unstyled">
                            <li>
                               <span className="conmo-icon">
                               <BsXDiamondFill/>
                               </span>
                               <span>
                               Lorem Ipsum has been the industry&apos;s standard 
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               It is a long established fact that a reader will be distracted
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               Lorem Ipsum has been the industry&apos;s standard 
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                  <BsXDiamondFill/>
                               </span>
                               <span>
                               It is a long established fact that a reader will be distracted
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               Lorem Ipsum has been the industry&apos;s standard 
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                  <BsXDiamondFill/>
                               </span>
                               <span>
                               It is a long established fact that a reader will be distracted
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <span>
                               Lorem Ipsum has been the industry&apos;s standard 
                               </span>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                  <BsXDiamondFill/>
                               </span>
                               <span>
                               It is a long established fact that a reader will be distracted
                               </span>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
         </div>
   

    </div>
        
    <Footer/>
    </div>
  )
}
