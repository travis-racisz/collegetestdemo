import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div style={{overflow: 'hidden', height: '100vh', margin: '0'}}>
      <iframe src="https://www.flexiquiz.com/SC/N/f200ef81-267d-4ab4-bf5b-eb3b4e19e317?i=t" style = {{minWidth: "100vw", borderWidth: 0, height: '100vh', width: "100vw", overflowY: "hidden", margin:'0'}}></iframe>
      <div style={{backgroundColor: "#f4f4f4", width: '100vw', height: '20px', margin:'0', position: 'absolute', bottom:'0'}}> 


      </div>
    </div>
  )
}

export default Home
