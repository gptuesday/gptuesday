export default function AboutTheEvent(){
  return(
    <section className="w-[1100px] m-auto my-10">
      <div className="flex flex-wrap p-5">
        <img src="/img/gptuesday-crewai-group.jpeg" alt="about-gptuesday-image" className="w-full max-w-[750px] m-auto rounded-lg mb-5"/>
        <div>
          <h3 className="h3">About The Event</h3>
          <div className="main-text">
            <span className="blanka-span">GPTuesday</span> is a weekly AI meetup
            connecting professionals, enthusiasts, students, and novices. Each
            week, we host engaging sessions with AI experts, sharing insights
            and predictions about the future of the field. Alongside learning
            opportunities, <span className="blanka-span">GPTuesday</span> serves
            as a networking hub, encouraging discussions and collaboration.
            Whether you're an industry professional, a student exploring AI, or
            a business leader, <span className="blanka-span">GPTuesday</span>{" "}
            offers a unique opportunity to grow and connect. Join us and become
            part of our vibrant community!
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}