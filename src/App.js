import React, {useState, useEffect} from 'react';

function App() {
  const [data, setdata] = useState(" ");

async function getQuote() {

    const response = await fetch("https://api.quotable.io/random")
  const data = await response.json()
  setdata(data)
    
}
  useEffect(() => {
    document.getElementById("quote").innerHTML = `<p>${data.content}</p>  
                                                  <hr>
                                                  <i>${data.author}</i>`
  })
 
  return (
    <div className="container-fluid bg-info " id="container">
      <div className="container-fluid " id="header">
        <h2>Daily Quotes</h2>
        <p>A Word is Enough for the Wise</p>


        <p>Get your daily quotes to lead the day</p>

        <h6>Click the button for your quotes</h6>
        <span><button className="btn btn-default "
          id="button" onClick={getQuote}><a href="#" data-toggle="tooltip"
            data-placement="top" title="Click the button for Your quote ">Quote</a></button></span>
      </div>
      <div className="container" id="quote">

      </div>
    </div>


  )
    
}
//  async function getQuote () {

//   const response = await fetch("https://api.quotable.io/random")
// const data = await response.json()
// console.log(`${data.content}`)
// console.log(`${data.author}`)
// document.getElementById("quote").innerHTML = `<p>${data.content}</p>  
//                                                   <hr>
//                                                   <i>${data.author}</i>`
// }


    
      
  


 

export default App;


