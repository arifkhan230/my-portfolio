import Container from "../Container/Container";
import Title from "../Title/Title";
import js from "../../assets/images/logos/javascript-39404.png"
import ProgressBar from "@ramonak/react-progress-bar";


const Skills = () => {
    return (
        <div className="my-20">
            <Container>
                <Title>My Skills</Title>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-10 lg:grid-cols-4">
                    {/* javaScript */}
                    <div className="card bg-base-100 shadow rounded">
                        <figure className="px-10 pt-10">
                            <img  src={js} alt="JavaScript" className="w-24 h-24 rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold mb-4">JavaScript</h2>
                            <ProgressBar width={200}  completed={80} maxCompleted={100} />
                            {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                    {/* React */}
                    <div className="card bg-base-100 shadow rounded">
                        <figure className="px-10 pt-10">
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" className="rounded-xl w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold mb-4">React</h2>
                            <ProgressBar width={200}  completed={85} maxCompleted={100} />
                            {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                    {/* HTML */}
                    <div className="card bg-base-100 shadow rounded">
                        <figure className="px-10 pt-10">
                            <img  src="https://www.shareicon.net/download/2016/08/01/639868_development.ico" alt="HTML" className="rounded-xl w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold mb-4">HTML</h2>
                            <ProgressBar width={200}  completed={90} maxCompleted={100} />
                            {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                    {/* CSS */}
                    <div className="card bg-base-100 shadow rounded">
                        <figure className="px-10 pt-10">
                            <img  src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="CSS" className=" rounded-xl w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold mb-4">CSS</h2>
                            <ProgressBar width={200}  completed={85} maxCompleted={100} />
                            {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                    {/* NODE js */}
                    <div className="card bg-base-100 shadow rounded">
                        <figure className="px-10 pt-10">
                            <img  src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" alt="NodeJs" className="rounded-xl w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold mb-4">Node.js</h2>
                            <ProgressBar width={200}  completed={65} maxCompleted={100} />
                            {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                    {/* express js */}
                    <div className="card bg-base-100 shadow rounded">
                        <figure className="px-10 pt-10">
                            <img  src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" alt="ExpressJS" className="rounded-xl w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold mb-4">Express.js</h2>
                            <ProgressBar width={200}  completed={70} maxCompleted={100} />
                            {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                    {/* mongodb */}
                    <div className="card bg-base-100 shadow rounded">
                        <figure className="px-10 pt-10">
                            <img  src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="MongoDB" className="rounded-xl w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold mb-4">MongoDB</h2>
                            <ProgressBar width={200}  completed={60} maxCompleted={100} />
                            {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                    {/* Tailwind */}
                    <div className="card bg-base-100 shadow rounded">
                        <figure className=" pt-10">
                            <img  src="https://asset.brandfetch.io/idKJ12s-EY/idI9erPtdw.jpeg" alt="Tailwind" className="rounded-xl w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold mb-4">Tailwind</h2>
                            <ProgressBar width={200}  completed={80} maxCompleted={100} />
                            {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Skills;