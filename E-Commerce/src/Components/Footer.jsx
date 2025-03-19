import "../App.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
    const footerStyle = {
        width: "100vw",
        backgroundColor: "var(--primary-color)",
        color: "black",
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    };

    const containerStyle = {
        width: "90%",
        maxWidth: "1200px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
    };

    const socialIcons = {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        fontSize: "24px",
        marginTop: "10px",
        cursor: "pointer",
    };

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginTop: "10px",
    };

    const inputStyle = {
        padding: "10px",
        width: "80%",
        maxWidth: "300px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
    };

    const buttonStyle = {
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "black",
        color: "var(--primary-color)",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.3s",
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                
                {/* About Section */}
                <div>
                    <h3>About Us</h3>
                    <p>We are a leading company providing the best services in the industry. Our mission is to deliver high-quality solutions to our customers.</p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <ul style={{ listStyle: "none", padding: "0" }}>
                        <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Home</a></li>
                        <li><a href="#" style={{ color: "black", textDecoration: "none" }}>About</a></li>
                        <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Services</a></li>
                        <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p><FaPhone /> +123 456 7890</p>
                    <p><FaEnvelope /> contact@company.com</p>
                    <p><FaMapMarkerAlt /> 123 Street, City, Country</p>
                </div>

                <div>
                    <h3>Newsletter</h3>
                    <p>Subscribe to get the latest updates and offers.</p>
                    <div style={formStyle}>
                        <input type="email" placeholder="Enter your email" style={inputStyle} />
                        <button style={buttonStyle}>Subscribe</button>
                    </div>
                </div>
            </div>

            <div style={socialIcons}>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
            </div>

            <p style={{ marginTop: "20px", fontSize: "14px" }}>© 2025 Bonjour. All rights reserved.</p>
        </footer>
    );
};
