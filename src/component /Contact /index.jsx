function Contact() {
    return(
        <div className="contact">
                <div className="contact-container">
                    <section className="title-section">
                        <h1>get in<span> touch</span></h1>
                        <span className="title-bg">contact</span>
                    </section>

                    <div className="row">
                        <div className="left">
                            <h3 className="">Don't be shy !</h3>
                            <p className="">Feel free to get in touch with me. I am always open to discussing new
                                projects, creative ideas or opportunities to be part of your visions.</p>
                            <p className="">
                                <i className="fa fa-envelope-open position-absolute"></i>
                                <span className="d-block">mail me</span>steve@mail.com
                            </p>
                            <p className="open-sans-font custom-span-contact position-relative">
                                <i className="fa fa-phone-square position-absolute"></i>
                                <span className="d-block">call me</span>+216 21 184 010
                            </p>
                            <ul className="social list-unstyled pt-1 mb-5">
                                <li className="facebook"><a title="Facebook" href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li className="twitter"><a title="Twitter" href="#"><i
                                    className="fa fa-twitter"></i></a>
                                </li>
                                <li className="youtube"><a title="Youtube" href="#"><i
                                    className="fa fa-youtube"></i></a>
                                </li>
                                <li className="dribbble"><a title="Dribbble" href="#"><i className="fa fa-dribbble"></i></a>
                                </li>
                            </ul>
                        </div>

                        <div className="right">
                            <form className="contactform" method="post" action="php/process-form.php">
                                <div className="contactform">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <input type="text" name="name" placeholder="YOUR NAME"/>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <input type="email" name="email" placeholder="YOUR EMAIL"/>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <input type="text" name="subject" placeholder="YOUR SUBJECT"/>
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" placeholder="YOUR MESSAGE"></textarea>
                                            <button type="submit" className="button">
                                                <span className="button-text">Send Message</span>
                                                <span className="button-icon fa fa-send"></span>
                                            </button>
                                        </div>
                                        <div className="col-12 form-message">
                                            <span
                                                className="output_message text-center font-weight-600 text-uppercase"></span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Contact;