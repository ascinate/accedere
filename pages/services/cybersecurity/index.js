
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
                <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-4"> Cybersecurity  </h2>
                       <p className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                       typesetting, remaining essentially unchanged.</p>
                       <p className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                       typesetting, remaining essentially unchanged.</p>
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/cyber1.jpg"
                          alt="syber"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
                <h2 className="comon-head-main text-center"> Cybersecurity Services </h2>
                <p className="text-center col-lg-7 mx-auto"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever </p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/cybersecurity/lotsecurity">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1320500.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> IoT Security </h5>
                               <p> As per Gartner &apos;The IoT will continue to deliver new opportunities for digital business innovation for the next decade
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/cybersecurity/scadaics">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SCADA | ICS </h5>
                               <p> Operations technology (OT) is the term used in industrial operations and is comprised...
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/cybersecurity/soc">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1797588.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Blockchain </h5>
                               <p>Average time to detect an attack (Dwell time) hovers about 200 days as reported...
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
