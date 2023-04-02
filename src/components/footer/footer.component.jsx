
import logo from '../../assets/footer-logo.svg';
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__heading'>
                <h1 className='footer__heading__gradient-text'>Be ahead of the game by stepping into the future early.</h1>
            </div>
            <div className='footer__btn'>
                <p>Request Early Access</p>
            </div>

            <div className='footer__links'>
                <div className='footer__links__logo'>
                    <img src={logo} alt="clarifai-logo" />
                    <p>Seeing is Believing with Clarifai's AI Vision, <br /> All Rights Reserved</p>
                </div>
                <div className='footer__links__container'>
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='footer__links__container'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='footer__links__container'>
                    <h4>Get in touch</h4>
                    <p>123 Main St, Anytown, USA 12345</p>
                    <p>+1 (555) 123-4567</p>
                    <p>support@clarifai.com</p>
                </div>
            </div>
            <div className='footer__copyright'>
                <p>@2023 Clarifai. All right reserved.</p>
            </div>
        </div>
    )
}

export default Footer;