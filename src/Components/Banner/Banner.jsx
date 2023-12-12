import Container from "../Container/Container";
import profile from "../../assets/images/my-profile.png"
import resume from "../../../public/resume.pdf"


const Banner = () => {
    return (
        <div className="bg-orange-50 min-h-[70vh] px-4 md:px-0">
            <Container>
                <div className="flex flex-col-reverse md:flex-row gap-10 ">
                    <div className="lg:w-2/3 flex flex-col justify-center items-start space-y-4">
                        <h3 className="text-3xl font-medium">Hello! I’m</h3>
                        <h2 className="text-5xl font-bold">Md Arif khan</h2>
                        <h3 className="text-4xl font-semibold">A Professional MERN Stack Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quis ratione quos nostrum error minima dolores, aut voluptatem consequuntur omnis, neque quod. Consectetur amet quia, quae veritatis tempora maxime consequuntur?</p>
                        <a href="https://drive.google.com/uc?export=download&id=17bH1ohv1cppzZl05bv4rFbjOVVE34Q20" download>
                            <button className="btn bg-[#ff6b00] mt-4 text-white">Download Resume</button>
                        </a>
                    </div>
                    <div className="lg:w-1/3 flex justify-center items-center">
                        <img className="w-full h-[600px]" src={profile} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;