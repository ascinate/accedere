
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Clientlogo(){

    const settings = {
        dots: false,
        infinite: true,
        margin:30,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 668,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:2,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };
    return(
        <>
          <div className="client-logo-div-slide py-5">
             <div className="container">
                  <h2 className="comon-head-main text-center blue-color"> Trusted By Many Leading Cloud Service Providers  </h2>
                   <div className="client-logo-div-sec mt-5">
                   <Slider {...settings}>
                            
                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/saisystem.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>

                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/glance.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>


                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/Measured_Logo.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>

                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/al.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>

                        

                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/controlmap.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>

                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/ATCS-logo.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>

                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/ultria.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>

                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/calance.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>

                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/Picture23.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>


                        <div className="items-client-logo">
                            <div className="comon-logo-clients1">
                                <figure className="smm-all">
                                      <Image src="/mid_logo12079308175.svg"
                                      alt="Picture of the author"
                                      layout="fill"/>
                                </figure>
                                
                            </div>
                        </div>


                        
                        

                        


                        

                    </Slider>
                   </div>
             </div>
          </div>
        </>
    )
};
export default Clientlogo;

