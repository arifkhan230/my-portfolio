import Container from "../Container/Container";
import Title from "../Title/Title";


const Skills = () => {
    return (
        <div className="my-20">
            <Container>
                <Title>My Skills</Title>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title mb-4">JavaScript</h2>
                            <div className="flex gap-4">
                                <p>80%</p>
                            <progress className="progress" value={20} max="100"></progress>
                            </div>
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