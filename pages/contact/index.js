import Navbar from "../componets/Navbar";
import Banner from "../componets/Banner";
import Footer from "../componets/Footer";
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";


function contact(){
    return(
        <>
          <Navbar/>
          <div className='contact-page-1 float-start w-100'>
               
              <div className="top-contact-div">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                            <div className="col">
                                <h2 className="comon-head-main text-white">Contact Us </h2>
                                <p className="text-white"> Our team is ready to assist you with any of your compliance, cybersecurity and privacy needs. 
                                Complete the contact form and our team will reach out within 24 hours.  </p>
                                
                                <div className="map-div-1 mt-4">
                                     <Image src="/googlemap.png"
                                     alt="am"
                                     layout="fill"
                                     />
                                </div>
                            </div>
                            <div className="col">
                                <h5 className="text-white"> Fill The Form Below </h5>
                                <form method="get" action="an">
                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Full Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Email" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Company Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone Number" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea type="text" className="form-control" placeholder="Your Query" required></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                             <input type="submit" className="btn sub-mit-bn" value="Submit"/>
                                        </div>

                                        

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                              
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>   
              </div> 
              <div className="next-contact-div">
                  <div className="container">
                      <div className="row row-cols-1 row-cols-lg-3">
                          <div className="col">
                             <div className="comon-cont-ft">
                                <h5> Headquarters </h5>
                                <p> 999, 18th St,
                                #3000, Denver,
                                Colorado 80202</p>

                                <p> Spaces Inspire Hub, Western Heights,
                                J P Road 4 Bunglows, Andheri West
                                Mumbai 400053 </p>
                             </div>
                          </div>
                          <div className="col d-lg-grid justify-content-lg-end">
                             <div className="comon-cont-ft">
                                <h5> Contact Us </h5>
                                <p>info@accedere.io</p>
                             </div>
                          </div>
                          <div className="col d-lg-grid justify-content-lg-end">
                             <div className="comon-cont-ft">
                                <h5> Follow Us </h5>
                                 <ul className="list-unstyled d-flex align-items-center">
                                    <Link href="/">
                                       <span className="comon-soc">
                                           <FaFacebookF/>
                                       </span>
                                    </Link>
                                    <Link href="/">
                                       <span className="comon-soc">
                                           <FaTwitter/>
                                       </span>
                                    </Link>
                                    <Link href="/">
                                       <span className="comon-soc">
                                           <FaYoutube/>
                                       </span>
                                    </Link>
                                 </ul>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <Footer/>
        </>
    );
}
export default contact;