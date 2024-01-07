//Footer component for a gallery-like web application

import "../Styles/Footer.css"
import instagram from "../Images/instagram.png"
import tiktok from "../Images/tiktok.png"
import facebook from "../Images/facebook.png"
import pinterest from "../Images/pinterest.png"

export default function Footer () {

    return (
        <>
        <div className="footer-container">
            <div>
                <div className="footer-left">
                    <div className="footer-logo">Snapster</div>
                    <div>
                        <div className="all-footer-links">
                            <div className="footer-link">Contact Us</div>
                            <div className="footer-link">About Us</div>
                            <div className="footer-link">FAQs</div>
                            <div className="footer-link">Privacy and policy</div>
                        </div>
                        <div className="footer-copyright">&copy;2023snapster. All rights reserved</div>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="all-footer-icons">
                    {/*icons in the footer */}
                    <img src={instagram} className="footer-icon" />
                    <img src={tiktok} className="footer-icon" />
                    <img src={facebook} className="footer-icon" />
                    <img src={pinterest} className="footer-icon" />
                </div>
                <div className="footer-copyright">Support: snapster@gmail.com</div>
            </div>
        </div>
        </>
    )
}