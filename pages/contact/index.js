import Navbar from "../componets/Navbar";
import Banner from "../componets/Banner";
import SpecialFooter from "./SpecialFooter";
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";


function contact(){
    return(
        <>
        <div>
        <Head>
            <title>Accedere - Conatct</title>
            <meta name="description" content="Contact Us, Accedere"/>
            <meta name="keywords" content="SOC 2 Type 2, SOC 1 Type 2, SSAE 18, Cloud CCSK, CCM 4, CCAK, ISO 27001"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1  float-start w-100'>
              <div className="special-divn"></div> 
              <div className="top-contact-div contact-new">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                            <div className="col">
                                <h2 className="comon-head-main">Contact Us </h2>
                                <p > Our team is ready to assist you with any of your compliance, cybersecurity and privacy needs. 
                                Complete the contact form and our team will reach out within 24 hours.  </p>
                                
                                <div className="map-div-1 mt-4">
                                     <Image src="/googlemap.png"
                                     alt="am"
                                     layout="fill"
                                     />
                                </div>
                            </div>
                            <div className="col">
                                <h5> Fill The Form Below </h5>
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
              

          </div>
          <SpecialFooter/>
          </div>
        </>
    );
}
export default contact;