import Container from "../../Components/Container/Container";
import Title from "../../Components/Title/Title";
import nexgen1 from "../../assets/images/nexgen/nexgen-1.png"
import nexgen2 from "../../assets/images/nexgen/nexgen-2.png"
import nexgen3 from "../../assets/images/nexgen/nexgen-3.png"
import nexgen4 from "../../assets/images/nexgen/nexgen-4.png"
import nexgen5 from "../../assets/images/nexgen/nexgen-5.png"
import nexgen6 from "../../assets/images/nexgen/nexgen-6.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const Projects = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <Container>
                <Title>My Recent Projects</Title>
            </Container>

            <Container>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="h-[600px] w-full" src={nexgen1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="h-[600px] w-full"  src={nexgen2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="h-[600px] w-full"  src={nexgen3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="h-[600px] w-full"  src={nexgen4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="h-[600px] w-full"  src={nexgen5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="h-[600px] w-full"  src={nexgen6} alt="" /></SwiperSlide>
                </Swiper>
            </Container>
        </div>
    );
};

export default Projects;