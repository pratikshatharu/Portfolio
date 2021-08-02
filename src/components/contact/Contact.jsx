import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: '',
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname}`);

    };

    return (
        <>
            <section className="section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="text-success">Contact Me</h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, modi!</p>
                            <h5>Register here</h5>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit} className="shadow">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="Email@gmail.com" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                    <input type="number" class="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" required />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" name="message" value={data.message} onChange={InputEvent} rows="4" placeholder="Type your message..." required></textarea>
                                </div>

                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label class="form-check-label" for="invalidCheck2">
                                            Agree to terms and conditions
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" className="btn btn-outline-primary mb-3" >Submit</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </>

    );
}
export default Contact;


