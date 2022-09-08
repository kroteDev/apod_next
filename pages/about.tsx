import { NextPage } from "next"



const About: NextPage = () => {
  return (
    <div className="container content-wrapper px-4 py-5">
      <h1 className="mb-8 font-bold text-4xl">ABOUT</h1>
      <p className="my-3 text-base">
        Hello Everyone , my name is Bruno(<a href="https://www.krotedev.com.br" target="_blank" rel="noreferrer" className="underline text-nasa-blue font-bold">kröteDev</a>), I'Am a developer who does design on free time and loves bacon 🥓. 
      </p>
      <p className="my-3 text-base">
        <b>Astronomy Picture of the Day</b> or APOD is One of the most popular websites at NASA. Is a Work Supported by nasa under ward No. 80NSSC17M0076</p>
      <p className="my-3 text-base">
        I do not own the images you see here. This Website was build using one of the NASA Api's the APOD Api. You can find more about <a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">here</a>. 
      </p>
      <p className="my-3 text-base">
        To know more about APOD and Nasa please <a href="https://apod.nasa.gov/apod/lib/about_apod.html" target="_blank" rel="noreferrer" className="underline text-nasa-blue font-bold">click here</a>.
      </p>
  </div>
  )
}

export default About