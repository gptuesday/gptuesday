export default function HomeHeroSection(){
  return(

      <section
      data-w-id="4cf1c9b7-0434-2520-9cee-9a5a6e088bdb"
      // style={{ opacity: 0 }}
      className="hero-section"
    >
      <div className="section-div">
        <div className="hero-div">
          <h1 className="h1 font-bold">
            WELCOME TO <span className="blanka-span">GPTUESDAY</span>
          </h1>
          <h2 className="h2 font-bold">AI-themed Weekly Meetup</h2>
          {/* <h3 className="h3-white italics">Next Session in</h3>
          <div className="countdown-div">
            <div
              id="w-node-a9537432-e97e-d73d-793b-58ed79d41059-c7901c15"
              className="countdown-embed w-embed w-script"
            >
              <div className="countdown-div">
                <div className="countdown-item" id="days" />
                <div className="countdown-item" id="hours" />
                <div className="countdown-item" id="minutes" />
                <div className="countdown-item" id="seconds" />
              </div>
            </div>
            <div className="clock-text">Days</div>
            <div className="clock-text">Hours</div>
            <div className="clock-text">Minutes</div>
            <div className="clock-text">Seconds</div>
            <div className="countdown-item hidden">00</div>
          </div> */}
          <a href="https://lu.ma/GPTuesday" className="gradient-button w-button" target="_blank">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}