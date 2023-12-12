import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Container from "../../Components/Container/Container";
import toast from "react-hot-toast";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lqhl1wj', 'template_gv5dq37', form.current, 'IiKMFi9pDUk9AELt4')
            .then((result) => {
                console.log(result.text);
                toast.success("Message sent successfully")
                form.current.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Container>
            <div className="flex my-12 px-4 lg:px-0 ">
                <div className="flex-1 hidden md:flex">
                    <img className="h-[600px] object-cover"  src="https://i.ibb.co/HDTdGzT/login-Image.jpg" alt="" />
                </div>
                <div className="flex-1 border lg:p-10">
                    
                    <form ref={form} onSubmit={sendEmail} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" name="from_name" placeholder="Your Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <textarea name="message" className="textarea textarea-bordered h-32 mt-6" placeholder="Message"></textarea>

                        <div className="form-control mt-6">
                            <button className="btn text-white bg-[#ff6b00]">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;