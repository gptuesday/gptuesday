import AboutTheEvent from "@/components/about-the-event";
import DesktopNavigation from "@/components/desktop-navigation";
import EventGallery from "@/components/event-gallery";
import EventSponsors from "@/components/event-sponsors";
import EventTicket from "@/components/event-ticket";
import FoundingMembers from "@/components/founding-members";
import HomeHeroSection from "@/components/home-hero-section";
import Map from "@/components/map-section";
import SubscribeNow from "@/components/subscribe-now";

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })


export default function Home(){

  return(
    <main>
      <DesktopNavigation/>
      <HomeHeroSection/>
      <AboutTheEvent/>
      <EventTicket/>
      <FoundingMembers/>
      <EventGallery/>
      <EventSponsors/>
      <Map/>
      <SubscribeNow/>

  <section
    id="sessions"
    data-w-id="90fbd5a7-e4b3-d4af-b24c-3079fb960bbe"
    // style={{ opacity: 0 }}
    className="section hidden"
  >
    <div className="section-div">
      <h3 className="h3">
        <span className="blanka-span letter-spacing-3px">GPTuesday</span>{" "}
        Sessions
      </h3>
      <div className="calendar-div">
        <div
          id="w-node-aaf85074-e0f6-baf8-6919-ef5f0c7c4968-c7901c15"
          className="session-div"
        >
          <div className="sesssion-day">TUESDAY</div>
          <div className="sesssion-date">March 12</div>
        </div>
        <div
          id="w-node-d66d20e5-2d88-0cb5-4d92-180277415c4e-c7901c15"
          className="session-div"
        >
          <div className="sesssion-day">TUESDAY</div>
          <div className="sesssion-date">March 19</div>
        </div>
        <div
          id="w-node-_60298133-862d-1010-7cdf-e62c8380c860-c7901c15"
          className="session-div"
        >
          <div className="sesssion-day">TUESDAY</div>
          <div className="sesssion-date">March 26</div>
        </div>
        <div
          id="w-node-_8c91a813-a52c-bf80-8f69-d40f0487ad87-c7901c15"
          className="session-div"
        >
          <div className="sesssion-day">TUESDAY</div>
          <div className="sesssion-date">April 2</div>
        </div>
      </div>
    </div>
  </section>

{/* Why you should join? */}
  {/* <section id="join" className="section dots no-margin-bottom">
    <div className="section-div">
      <h3 className="h3">
        Why You Should Join?
        <br />
      </h3>
      <div className="cards-div">
        <div
          id="w-node-_1410e746-6664-0607-b28c-75c82e10e0e4-c7901c15"
          data-w-id="1410e746-6664-0607-b28c-75c82e10e0e4"
          className="card-div"
        >
          <div className="card-content-div">
            <div className="card-icon-div">
              <div className="card-number">01</div>
              <div className="cardicon">emoji_events</div>
            </div>
            <div className="card-title">
              Expand Your
              <br />
              Knowledge
            </div>
            <div className="main-text cards">
              Join <span className="blanka-span">GPTuesday</span> to learn from
              top AI experts. Gain insights, stay ahead of industry trends, and
              foster your intellectual growth in the world of artificial
              intelligence.
              <br />
            </div>
          </div>
          <div style={{ opacity: 0 }} className="card-bg" />
        </div>
        <div
          id="w-node-_9ceadc8c-080d-eee1-2553-d10ea3c17cf6-c7901c15"
          data-w-id="9ceadc8c-080d-eee1-2553-d10ea3c17cf6"
          className="card-div"
        >
          <div className="card-content-div">
            <div className="card-icon-div">
              <div className="card-number">02</div>
              <div className="cardicon">groups</div>
            </div>
            <div className="card-title">Network with Professionals</div>
            <div className="main-text cards">
              <span className="blanka-span">GPTuesday</span> offers the perfect
              platform to connect with AI enthusiasts from various fields. Share
              ideas, learn from others, and build valuable professional
              relationships.
              <br />
            </div>
          </div>
          <div style={{ opacity: 0 }} className="card-bg" />
        </div>
        <div
          id="w-node-_4acd317b-0c75-5734-89f4-ac58914a5ffd-c7901c15"
          data-w-id="4acd317b-0c75-5734-89f4-ac58914a5ffd"
          className="card-div"
        >
          <div className="card-content-div">
            <div className="card-icon-div">
              <div className="card-number">03</div>
              <div className="cardicon">Rocket_Launch</div>
            </div>
            <div className="card-title">Unlock Career Opportunities</div>
            <div className="main-text cards">
              Explore the many facets of a career in AI at{" "}
              <span className="blanka-span">GPTuesday</span>. Meet potential
              employers, discover new paths, and take the next step in your
              professional journey.
              <br />
            </div>
          </div>
          <div style={{ opacity: 0 }} className="card-bg" />
        </div>
      </div>
      <div
        data-w-id="7a556c9e-46a5-ee89-8523-902bad55dc49"
        style={{
          WebkitTransform:
            "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
        }}
        className="robot-div"
      >
        <div className="robot-embed w-embed w-script">
          <div
            id="spline"
            style={{
              animation:
                "2.2s ease-in-out 0s infinite normal none running bounce",
              display: "flex",
              position: "relative",
              pointerEvents: "none",
              paddingLeft: 38,
              paddingBottom: 0,
              marginBottom: 0,
              width: "auto !important",
              height: "237px !important"
            }}
          >
          </div>
        </div>
      </div>
    </div>
  </section> */}
    </main>
  );
}
