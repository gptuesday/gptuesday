interface SpeakerCardProps {
  name: string;
  title: string;
  date: string;
  linkedInURL: string | null;
  twitterURL: string | null;
  imageUrl: string;
}

export default function SpeakerCard(
  {
    name,
    title,
    date,
    linkedInURL,
    twitterURL,
    imageUrl
  }:SpeakerCardProps
){

  return(
    <>
      {/* Container */}
      <div className="">

        <div className="flex flex-col">
          <img src={imageUrl} alt="" className="w-[180px] h-[180px] md:w-[210px] md:h-[210px]" />
          <h3 className="text-2xl font-bold">{name}</h3>
          <p>{title}</p>
          <p>{date}</p>
        </div>
      </div>
    </>
  )
}