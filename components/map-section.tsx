export default function Map(){
  return(
    <section
    data-w-id="56980a19-7617-40e9-263c-ca33e0328dc0"
    // style={{ opacity: 0 }}
    className="section"
  >
    <div className="section-div">
      <h3 className="h3">
        Map
        <br />
      </h3>
      <div className="map-div">
        <div className="map-embed w-embed w-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.0968534512003!2d-80.19000877781623!3d25.789705387306302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b41d62c1a129%3A0x5d22afa00c6e07bc!2s1501%20Biscayne%20Blvd%2C%20Miami%2C%20FL%2033132!5e0!3m2!1sen!2sus!4v1689814742987!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>

  )
}