/* eslint-disable react/no-unescaped-entities */
import Container from "../../Components/Container/Container";
import Title from "../../Components/Title/Title";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const About = () => {
    return (
        <div className="my-10">
            <Container>
                {/* <Title> <h1 className="text-3xl">About me</h1></Title> */}
                <div className="flex flex-col md:flex-row gap-6 border">
                    <div className="flex-1 px-4 p-10">
                        <h2 className="text-2xl font-bold text-center my-6">About Me </h2>
                        <p className="text-justify">Hello, I'm Arif Khan, a MERN stack web developer from Moulvibazar, Bangladesh. I recently completed my BBA in Accounting from the National University. My passion lies in continuous learning, with a focus on becoming a proficient full-stack developer. I am committed to delivering innovative solutions and creating exceptional web experiences. Thank you for visiting my portfolio, and I look forward to contributing to the ever-evolving world of web development.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            {/* card-1 */}
                            <div className="card bg-gray-200 rounded shadow">
                                <div className="card-body">
                                    <h2 className="card-title text-xl font-bold">Education</h2>
                                    <p>Bachelor of Business Administration</p>
                                    <p>Major: Accounting(2017-2021)</p>
                                    <p>From National University</p>
                                    
                                </div>
                            </div>
                            {/* card-2 */}
                            <div className="card bg-gray-200 rounded shadow">
                                <div className="card-body">
                                    <h2 className="card-title text-xl font-bold">Skills</h2>
                                    <p>JavaScript, React.js</p>
                                    <p>HTML, CSS</p>
                                    <p>Node.js Express.js</p>
                                    
                                </div>
                            </div>
                            {/* card-3 */}
                            <div className="card bg-gray-200 rounded shadow">
                                <div className="card-body">
                                    <h2 className="card-title text-xl font-bold">Experience</h2>
                                    <p className="text-lg font-bold">One year learning Experience.</p>
                                </div>
                            </div>
                            {/* card-4 */}
                            <div className="card bg-gray-200 rounded shadow">
                                <div className="card-body">
                                    <h2 className="card-title text-xl font-bold">Contact Info</h2>
                                    <div className="flex items-center gap-2">
                                        <FaPhoneSquareAlt></FaPhoneSquareAlt>
                                        <p>+88 01764230122</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdEmail></MdEmail>
                                        <p>arifkhan49804@gmail.com</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                            <img src="https://matias-personal.netlify.app/assets/personal-infothumb-2653662e.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;