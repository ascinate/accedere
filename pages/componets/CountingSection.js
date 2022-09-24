
import { FaPlus } from "react-icons/fa";


function CountingSection(){


    
    return(
        <>
          <div className="countaing-div py-5">
             <div className="container">
                  <h2 className='comon-head-main text-center text-center text-white mx-auto'>
                  Save Time & Money, Get Integrated Audits for SOC 2 and ISO/IEC under one brand
                  </h2>



                   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gy-5 g-lg-5 mt-0">
                        <div className="col">
                            <div className="comon-number1">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="counter-value" > 5k </h2>
                                    <span> <FaPlus/> </span>
                                </div>
                                    
                                <p> Cloud Audits Completed </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="comon-number1">
                            <div className="d-flex align-items-center justify-content-center">
                                <h2 className="counter-value" > 99%</h2>
                                <span> </span>
                            </div>
                                <p>  Repeat Clients </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="comon-number1" data-aos="fade-down">
                            <div className="d-flex align-items-center justify-content-center">
                                <h2 className="counter-value">500</h2>
                                <span> <FaPlus/> </span>
                            </div>
                                <p>  Global Clients  </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="comon-number1">
                            <div className="d-flex align-items-center justify-content-center">
                                <h2 className="counter-value">20</h2>
                                <span> <FaPlus/> </span>
                            </div>
                                <p>  Years of Experience in Cyber Security Space </p>
                            </div>
                        </div>
                   
   
                   </div>

             </div>
          </div>
        </>
    )
}
export default CountingSection;