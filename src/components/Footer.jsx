import './footer.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {

  setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM"
    if (hours > 12) {
      day_night = "PM";
      hours = hours - 12;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night; 
  });


  return (
    <footer>


      <div className="footer">

        <div className="clock">
          <div className="wrapper">
            <div className="display">
              <div id="time">12:00:00 PM</div>
            </div>
          </div>
        </div>


        <ul className="permalinks">
          
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>

        <div className="footer__socials">
          <a href="https://www.instagram.com/rohit7551singh"><AiOutlineInstagram /></a>
          <a href="https://twitter.com/RohitSi79372697?t=vW2eyU9d0zmZskV5NFXzZw&s=03"><AiOutlineTwitter /></a>
          <a href="https://www.linkedin.com/in/rohit-kumar-068514252/"><AiOutlineLinkedin /></a>
          <a href="https://github.com/rohitsingh32"><AiOutlineGithub /></a>
        </div>
          
        <div className="footer__copyright">
          <small>&copy; 2023.All right reserved</small>
        </div>

      </div>






    </footer>
  )
}

export default Footer
