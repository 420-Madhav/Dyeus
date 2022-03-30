import "../css/styles.css"
import fb from "../img/fb.png"
import twitter from "../img/twitter.png"
import mail from "../img/mail.png"
import right from "../img/right.png"
import sachet from "../img/sachet.png"
import rose from "../img/rose.png"
import doctor from "../img/doctor.png"
import calendar from "../img/Calendar.png"
import g1 from "../img/g1.png"
import g2 from "../img/g2.png"
import g3 from "../img/g3.png"
import g4 from "../img/g4.png"
import tt from "../img/tt.png"

function Body(){
    return(
        <div className="App">
            <div className="rectangle-3">
                <h2 className="what">What makes us different?</h2>
                <p className="reimagining">Reimagining and rewiring self-care</p>
                <p className="you">
                    You care about conscious consumption, and so do we.
                    <br></br> <br></br>
                    When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best
                    <br></br> <br></br>
                    We collaborate with researchers and doctors to
                    <br></br> 
                    <ul>
                        <li>Help you get granular about your health and self-care with personalized insights, and </li>
                        <br></br>
                        <li>Equip you with simple, sustainable products that get the job done </li>
                    </ul>
                    <br></br>
                    No to-the-moon-and-back claims in this neck of the woods.
                    <br></br> <br></br>
                    We’re just solving real problems for real people here.
                </p>
            </div>

            <div className="rectangle-4">
                <p className="liberate">Liberate your everyday wellness</p>
                <p className="shop">Shop our self-care products</p>
                <p className="gentle">Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.</p>
                <img src={rose} alt="rose" className="rose"></img>
                <div className="rectangle-14">
                    <p className="upgrade">Upgrade your self care</p>
                </div>
                <p className="nasties">#NoNasties, we promise!</p>
            </div>

            <div className="rectangle-5">
                <p className="track">Track your mood</p>
                <p className="all">All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. </p>
                <div className="rectangle-15">
                    <p className="track2">Track your mood on the app</p>
                </div>
            </div>

            <img src={g1} className="g1" alt="photo1"></img>
            <img src={g2} className="g2" alt="photo2"></img>
            <img src={g3} className="g3" alt="photo3"></img>
            <img src={g4} className="g4" alt="photo4"></img>

            <div className="rectangle-6">
                <p className="period">Track your period</p>
                <p className="stay">Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. </p>
                <div className="rectangle-16">
                    <p className="track3">Track your period on the app</p>
                </div>
            </div>

            <img src={calendar} alt="calendar" className="calendar"></img>

            <div className="rectangle-7">
                <p className="consult">Consult with wellness experts</p>
                <p className="set">Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.</p>
                <div className="rectangle-13">
                    <p className="consultation">Get a consultation</p>
                </div>
            </div>

            <img src={doctor} alt="doctor" className="doctor"></img>

            <div className="rectangle-8">
                <p className="personalised">Get your personalised period box</p>
                <img src={sachet} className="sachet" alt="Period Box"></img>
                <p className="get">Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. </p>
                <div className="rectangle-17">
                    <p className="create">
                        Create your box on the app
                    </p>
                    <img src={right} alt="Chevron Right" className="right0"></img>
                </div>
            </div>
        
            <div className="rectangle-9">
                <p className="with">With Diana, you’re in control of your health, your every day, and your story.</p>
            </div>

            <div className="rectangle-10">
                {/* <img src={fb} className="fb" alt="Facebook"></img>
                <img src={twitter} className="twitter" alt="Twitter"></img> */}
                <p className="products">
                    Products
                    <img src={right} className="right1" alt="Chevron Right"></img>
                </p>
                <p className="ourScience">
                    Our Science
                    <img src={right} className="right2" alt="Chevron Right"></img>
                </p>
                <p className="vision">
                    Vison & Mission
                    <img src={right} className="right3" alt="Chevron Right"></img>    
                </p>
                <p className="aboutUs">
                    About Us
                    <img src={right} className="right4" alt="Chevron Right"></img>
                </p>
                <hr className="line2"></hr>
                <p className="subscribe">Subscribe to our newsletter</p>
                <div className="rectangle-11">
                    <p className="enter">Enter your email...</p>
                </div>
                <div className="rectangle-12">
                    <img src={mail} className="mail" alt="Mail"></img>
                    <p className="activate">Activate</p>
                </div>
            </div>
            <img src={fb} className="fb" alt="fb"></img>
            <img src={tt} className="twitter" alt="twitter"></img>
        </div>
    );
}

export default Body;