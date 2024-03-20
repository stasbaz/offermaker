import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules';
import arrowRight from '../images/arrowRight.svg'
import customer from '../images/customer.png'

function Reviews() {
    return (
        <div className='reviews_section'>
            <div className="start_container">
                <h2 className='reviews_title'>What Clients Say</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={true}
                    pagination={{ clickable: true, }}
                    navigation={{
                        prevEl: '.buttonPrev',
                        nextEl: '.buttonNext',
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="reviews_block">
                            <img src={customer} alt='customer' className='customer_img' />
                            <div className="review_info">
                                <h3 className='cuctomer_title'>Tim Fong</h3>
                                <p className='cuctomer_subtitle'>TFS Project manager </p>
                                <p className='customer_text'>Our client, a UK perfume retailer, has over 200 offline stores and an online presence introduced with the main website. Perfume retailer, has over 200 offline stores and an online presence introduced with the main website. </p>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="reviews_block">
                            <img src={customer} alt='customer' className='customer_img' />
                            <div className="review_info">
                                <h3 className='cuctomer_title'>Tim Fong</h3>
                                <p className='cuctomer_subtitle'>TFS Project manager </p>
                                <p className='customer_text'>Our client, a UK perfume retailer, has over 200 offline stores and an online presence introduced with the main website. Perfume retailer, has over 200 offline stores and an online presence introduced with the main website. </p>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="reviews_block">
                            <img src={customer} alt='customer' className='customer_img' />
                            <div className="review_info">
                                <h3 className='cuctomer_title'>Tim Fong</h3>
                                <p className='cuctomer_subtitle'>TFS Project manager </p>
                                <p className='customer_text'>Our client, a UK perfume retailer, has over 200 offline stores and an online presence introduced with the main website. Perfume retailer, has over 200 offline stores and an online presence introduced with the main website. </p>
                            </div>
                        </div>

                    </SwiperSlide>

                </Swiper>
                <img src={arrowRight} alt='arrowRight' className='swiper_button buttonNext' />
            </div>
        </div>
    )
}

export default Reviews
