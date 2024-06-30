export default function EventTicket(){
  return(
    <section id="pricing" className="section dots no-margin-top">
      <div className="section-div">
        <section className="ticket-div">
          <div className="card-title">Event Ticket</div>
          <div className="main-text cards">
            One Time Access
            <br />
          </div>
          <div className="ticket-price-div">
            <h3 className="h3-white">Free</h3>
            <div className="main-text white">
              Ticket
              <br />
            </div>
          </div>
          <div className="ticket-details">
            <div className="main-text cards">
              Exclusive Entry to Event
              <br />
            </div>
            <div className="main-text cards">
              Reserved Seating
              <br />
            </div>
            <div className="main-text cards">
              Complimentary Refreshments
              <br />
            </div>
            <div className="main-text cards">
              Meet &amp; Greet with Speakers
              <br />
            </div>
          </div>
          <div className="eventbrite-button w-embed w-script">
            {/*  Noscript content for added SEO  */}
            {/* <noscript>
              &lt;a
              href="https://www.eventbrite.com/e/gptuesday-weekly-ai-meetup-tickets-656319979727"
              rel="noopener noreferrer" target="_blank"&gt;Buy Tickets on
              Eventbrite&lt;/a&gt;
            </noscript> */}
            {/*  You can customize this button any way you like  */}
            <a href="https://lu.ma/GPTuesday" target="_blank" rel="noopener noreferrer">
              <button
              id="eventbrite-widget-modal-trigger-656319979727"
              style={{
                color: "var(--white)",
                letterSpacing: ".5px",
                backgroundImage: "linear-gradient(270deg, #a717c0, #102baf 93%)",
                borderRadius: 99,
                marginTop: 20,
                padding: "20px 40px",
                fontSize: 18,
                fontWeight: 500,
                boxShadow: "0 0 16px 8px rgba(72, 127, 255, .23)"
              }}
            >
              Get Tickets
            </button>
            </a>
          </div>
        </section>
      </div>
    </section>
  )
}