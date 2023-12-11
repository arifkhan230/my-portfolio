import Container from "../../Components/Container/Container";
import nexgen1 from "../../assets/images/nexgen/nexgen-1.png"
import nexgen2 from "../../assets/images/nexgen/nexgen-2.png"
import nexgen3 from "../../assets/images/nexgen/nexgen-3.png"
import nexgen4 from "../../assets/images/nexgen/nexgen-4.png"
import nexgen5 from "../../assets/images/nexgen/nexgen-5.png"
import nexgen6 from "../../assets/images/nexgen/nexgen-6.png"
import wisdom1 from "../../assets/images/wisdom/wisdom-1.png"
import wisdom2 from "../../assets/images/wisdom/wisdom-2.png"
import wisdom3 from "../../assets/images/wisdom/wisdom-3.png"
import wisdom4 from "../../assets/images/wisdom/wisdom-4.png"
import wisdom5 from "../../assets/images/wisdom/wisdom-5.png"
import brand1 from "../../assets/images/brand/brand-1.png"
import brand2 from "../../assets/images/brand/brand-2.png"
import brand3 from "../../assets/images/brand/brand-3.png"
import brand4 from "../../assets/images/brand/brand-4.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const Projects = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    };

    return (
        <div className="my-10">
            {/* <Container>
                <Title>My Recent Projects</Title>
            </Container> */}
            {/* nexgen */}
            <Container>
                <div className="my-6 overflow-hidden px-4 lg:px-0">
                    <h2 className="text-2xl font-bold">NexGen</h2>
                    <hr />
                    <p className="mt-4">Inventory management system | 23 November 2023 - 30 November 2023.</p>
                    <p className="mt-4">NexGen is a dynamic inventory management system that empowers users to seamlessly create and manage their shops. Users transform into managers upon shop creation, gaining control over product addition, updates, and deletions. Managers access sales summaries and track shop income. Admins oversee the entire ecosystem, issuing notices to users, monitoring all manager-operated shops, viewing comprehensive product lists, and tracking overall income. NexGen offers a robust platform, ensuring efficient control and insights tailored to each role in the inventory management process.</p>
                </div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={nexgen1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={nexgen2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={nexgen3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={nexgen4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={nexgen5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={nexgen6} alt="" /></SwiperSlide>
                </Swiper>

                <div className="mt-6 px-4 lg:px-0">
                    <h2 className="text-xl font-bold mt-6 mb-2">Technologies used</h2>
                    <hr />
                    <div className="flex justify-between ">
                        <div><p className=" mt-4"><span className="text-lg font-semibold">Front-end:</span> HTML, CSS,Tailwind, JavaScript React,</p>
                            <p className=" mt-4"><span className="text-lg font-semibold">Back-End:</span> Express.js Node.js MongoDB,,</p>
                            <p className=" mt-4"><span className="text-lg font-semibold">Payment </span> Stripe.js react</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <a className="btn bg-[#ff6b00] text-white" href="https://inventory-management-ea297.web.app/">Preview</a>
                            <a className="btn bg-[#ff6b00] text-white" href="https://github.com/arifkhan230/inventory-management-system-client">Client Side Code</a>
                            <a className="btn bg-[#ff6b00] text-white" href="https://github.com/arifkhan230/inventory-management-system-server">Server Side Code</a>
                        </div>
                    </div>
                </div>
            </Container>

            {/* wisdom center */}
            <Container>
                <div className="my-12 overflow-hidden px-4 lg:px-0">
                    <h2 className="text-2xl font-bold">Wisdom Center</h2>
                    <hr />
                    <p className="mt-4">Library Management system | 4th November 2023 - 8th November 2023.</p>
                    <p className="mt-4">
                        Welcome to Wisdom Center, a user-friendly library management system that leverages Firebase authentication for a secure and personalized experience. Users can effortlessly register and log in to explore a diverse collection of books categorized into genres like history, cooking, religion, and business.

                        Navigate through different routes to view books and their details, enabling users to make informed choices. If a particular book captures their interest, users have the option to borrow it for a specified duration. The website incorporates a convenient cart feature, allowing users to keep track of their borrowed books and providing a seamless process for book returns.

                        Ensuring the security of user data, Wisdom Center employs JWT token protection for route access. This not only safeguards user information but also guarantees a reliable and protected environment for exploring and borrowing books.

                        Wisdom Center is not just a library management system; it's a platform designed to make the exploration and borrowing of books a straightforward and secure experience. Join us and embark on a journey of knowledge at Wisdom Center!</p>
                </div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={wisdom1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={wisdom2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={wisdom3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={wisdom4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={wisdom5} alt="" /></SwiperSlide>
                    {/* <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={nexgen6} alt="" /></SwiperSlide> */}
                </Swiper>

                <div className="mt-6 px-4 lg:px-0">
                    <h2 className="text-xl font-bold mt-6 mb-2">Technologies used</h2>
                    <hr />
                    <div className="flex justify-between">
                        <div><p className=" mt-4"><span className="text-lg font-semibold">Front-end:</span> HTML, CSS,Tailwind, JavaScript React,</p>
                            <p className=" mt-4"><span className="text-lg font-semibold">Back-End:</span> Express.js Node.js MongoDB,</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <a className="btn bg-[#ff6b00] text-white" href="https://flat-hill.surge.sh/">Preview</a>
                            <a className="btn bg-[#ff6b00] text-white" href="https://github.com/arifkhan230/wisdom-center-client">Client Side Code</a>
                            <a className="btn bg-[#ff6b00] text-white" href="https://github.com/arifkhan230/wisdom-center-server">Server Side Code</a>
                        </div>
                    </div>
                </div>
            </Container>

            {/* brand shop */}
            <Container>
                <div className="my-12 overflow-hidden px-4 lg:px-0">
                    <h2 className="text-2xl font-bold">Car Wonders</h2>
                    <hr />
                    <p className="mt-4">Automotive Brand Shop | 17 October 2023 - 20 October 2023.</p>
                    <p className="mt-4">

                        Welcome to Car Wonders, your go-to destination for premium automotive brands! Our website features six renowned car categories, each offering a curated selection of cars with detailed information. To enhance your experience, we've integrated Firebase authentication, ensuring that only logged-in users can access in-depth car details.

                        As a logged-in user, you have the privilege to explore, add cars to your cart, and even contribute to our platform by adding new products. The ability to update car details provides a dynamic and interactive experience tailored to your preferences.

                        Our homepage welcomes you with a user reviews section, providing valuable insights from fellow enthusiasts. Additionally, we showcase a stunning collection of beautiful cars, offering a visual treat for every automotive aficionado.

                        Car Wonders is more than an automotive brand shop; it's a community where users can explore, contribute, and connect over their shared passion for exceptional cars. Join us today and embark on a journey through the world of automotive wonders!</p>
                </div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={brand1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={brand2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={brand3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={brand4} alt="" /></SwiperSlide>
                    {/* <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={wisdom5} alt="" /></SwiperSlide> */}
                    {/* <SwiperSlide><img className="md:h-[600px] object-contain w-full" src={nexgen6} alt="" /></SwiperSlide> */}
                </Swiper>

                <div className="mt-6 px-4 lg:px-0">
                    <h2 className="text-xl font-bold mt-6 mb-2">Technologies used</h2>
                    <hr />
                    <div className="flex justify-between">
                        <div><p className=" mt-4"><span className="text-lg font-semibold">Front-end:</span> HTML, CSS,Tailwind, JavaScript React,</p>
                            <p className=" mt-4"><span className="text-lg font-semibold">Back-End:</span> Express.js Node.js MongoDB,</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <a className="btn bg-[#ff6b00] text-white" href="https://brand-shop-61ff2.web.app">Preview</a>
                            <a className="btn bg-[#ff6b00] text-white" href="https://github.com/arifkhan230/brand-shop-client">Client Side Code</a>
                            <a className="btn bg-[#ff6b00] text-white" href="https://github.com/arifkhan230/brand-shop-server">Server Side Code</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Projects;