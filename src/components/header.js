import "../css/styles.css"
import battery from "../img/battery.png"
import signal from "../img/signal.png"
import wifi from "../img/wifi.png"
import menu from "../img/menu.png"
import cart from "../img/cart.png"
import bell from "../img/bell.png"

function Header(){
    return(
        <div className="rectangle-1">

            <div className="rectangle-2">
                <p className="time">9:41</p> 
                <img src={signal} className="signal" alt="Signal"></img>   
                <img src={wifi} className="wifi" alt="Wifi"></img>
                <img src={battery} className="battery" alt="Battery"></img>
                <img src={menu} className="menu" alt="Menu"></img>
                <img src={cart} className="cart" alt="Cart"></img>
                <img src={bell} className="bell" alt="Bell"></img>
            </div>

            <p className="title">About Diana</p>
            <p className="sub">A platform that looks out for you</p>
            <p className="about">Diana empowers you to understand how your body works so you can look and feel your best.</p>
            <hr className="line"></hr>
            <p className="philosophy">Our Philosophy</p>
            <p className="title2"> Sustainable wellness is a big-picture, inside out approach </p>
            <p className="mission"> Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.<br></br> <br></br> That’s why we’ve created an integrated ecosystem of: </p>
            <p className="ecosystem">
                Consciously formulated products that deliver feel-good results fast.
                <br></br>
                In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body.
                <br></br>
                In-app consultation portals that connect you with compassionate wellness experts.
                <br></br>
            </p>
            <p className="consider">Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.</p>
        </div>
        
        // <div className="rectangle-3"></div>

    );
}

export default Header;