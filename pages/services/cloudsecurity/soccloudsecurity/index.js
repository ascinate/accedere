
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";


function soccloudsecurity(){
    return(
        <>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> Cloud Container Security / Kubernetes </h2>
                              <h5 className="text-white mt-3"> When we discuss cloud supply chain, containerization is the thing which is been
                               looked at for micro-services.</h5>
                              <p className="text-white mt-4"> A containerization is a form of virtualization where all the components of the application are packed into a single container image, later which can run in the same or shared operating system as an isolated user. The isolated container image is encapsulated with all the requirements
                               which are necessary to run an application.
                              </p>

                              <p className="text-white">  Docker is an open-source suite for developing, shipping, and running applications that helps to reduce the delay between writing code and running it in a production environment. It helps to separate applications from the
                               infrastructure to boost the software delivery process.</p>

                               <p className="text-white"> Kubernetes is an open-source orchestration platform for managing all the automation and scaling. Kubernetes groups containers that make up an application into logical units for easy management and discovery.
                               </p>
     
                           </div>
                           <div className="col">
                               <figure className="cmr-small-pic">
                                    <Image src="/AdobeStock_257556825.webp" alt="about"
                                  
                                    layout='fill'
                                    />
                               </figure>
                           </div>
                        </div>

                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2  g-lg-5 mt-0">
                            <div className="col">
                                 <figure className="cmr-small-pic">
                                        <Image src="/what-is-cloud-security01.jpg" alt="about"
                                        layout='fill'
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                 <p className="mt-0"> Container security is equally important as traditional 
                                 infrastructure security, A security compromise puts customer data at risk and potentially exposes a business to millions of dollars in fines, lost productivity,
                                  reduced sales, and potential dissolution. </p>

                                     
                            <ul className="list-unstyled blue-arrow mt-3">
                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span>	Everything is stored/contained in a single package </span>
                            
                            </li>
                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span> Applications are isolated on the operating systems. </span>
                            
                            </li>
                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span>	User-friendly and runs anywhere: electronic devices, data centers, or on the cloud. </span>
                            
                            </li>
                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span> Uses fewer resources than a virtual machine.</span>
                            
                            </li>

                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span> Evaluate that all the stages of the supply chain are performed by an 
                                authenticated trusted party such that
                                 it can be verified cryptographically and/or automated where possible.</span>
                            
                            </li>

                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span>	Container image will run the same way every time, whenever it is run. </span>
                            
                            </li>

                           
                      </ul>

         
                                
                            </div>
                        </div>
                       
                        <p className="mb-5"> 
                        Docker & Kubernetes are open-source, and we don&apos;t want to trust anyone with an open-source application just because it is provided by any big companies having its 
                        back or origin. Everything is shared in a single package in an image, it has its own 
                        limitation and security challenges. Traditionally, we had the firewall IDS, and IPS 
                        which are not the same for containerization security and open-source system because
                         they are inside the system in a trusted zone itself. They are within the firewall and 
                         application perimeter so we are trusting them that is why we cannot run it over IDS/IPS like we use to do in traditional security. We need to have a different approach to container security.
                        </p>
                        
                    </div>
                </div>

                


          </div>
          <Footer/>
        </>
    );
}
export default soccloudsecurity;