import "../styles/Landing.css";
import bgVideo from "../assets/landingbackground.mp4";
import Logo from "../assets/Logo.svg";
import GoogleLogo from "../assets/GoogleLogo.svg";
import AppleLogo from "../assets/AppleLogo.svg";
import StravaLogo from "../assets/StravaLogo.svg";
import orDivider from "../assets/orSeparator.svg";
import TextField from "@mui/material/TextField";

export default function LandingPage() {
    return (
        <div className="landing-wrapper">
            <video className="bg-video" autoPlay loop muted playsInline>
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="bg-overlay" /> {/* Overlay for the video */}

            <div className="landing-content">
                <div className="hero-content">
                    <h1>Ready to Ingest?</h1>
                    <p>Get meal suggestions based on macros, powered by your training data, track recovery smarter.</p>
                    <ul className="checklist">
                        <li>Personalized Meal Suggestions</li>
                        <li>Syncs with Strava</li>
                        <li>Smart macro tracking</li>
                        <li>Explore community recipes</li>
                    </ul>
                    <button className="learn-btn">Learn More!</button>
                </div>
            

                <aside className="auth-col">
                    <div className="auth-card">
                        <img src={Logo} alt="Ingestr" className="logo" />
                        <button className="auth-btn"><img src={GoogleLogo} />Sign up with Google</button>
                        <button className="auth-btn"><img src={AppleLogo} />Sign up with Apple</button>
                        <button className="auth-btn"><img src={StravaLogo} />Sign up with Strava</button>
                        <img src={orDivider} />
                        <div className="email-input">
                            <TextField
                                id="outlined-required"
                                label="Email"
                                defaultValue="Sign Up with Email"
                            />
                            <button className="go-btn">Go!</button>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="right-spacer" />
        </div>
    )
}