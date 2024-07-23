
import "./card.css"
import CustomProgressBar from "./bootstrap/progressbar";
 export const  ipl=[{
    title:"kkr",
    source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEXbw-4WCY6LSyEYo0j1Yim944IFWRxTAtsAl_xAD36PRXdDrQRZp-KK65aG_TBh2jaU&usqp=CAU",
    tropy:3,
},
{
    title:"rcb",
    source:"https://upload.wikimedia.org/wikipedia/en/0/0a/Royal_Challengers_Bengaluru_Logo.png",
    tropy:3,
},
{
    title:"rr",
    source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BievrSv-WAeMRI7PSIlT1xHWXmoyoMPbeg&s",
    tropy:7,

},


]




function Card() {
    // const Percentage=(input)=>{
    //   const Base=17
    //    let percentage = (input/Base)*100
    //   return percentage
    // }
    
    return (
      <div className="App">
        <h1 className='ipl'><center>IPL TEAMS</center></h1>
        <div className="cards-container">
          {ipl.map((ipl, index) => (
            <div className="card" key={index}>
              <img  src={ipl.source} alt={ipl.team} />
              <div className="info">
                <h2>{ipl.title}</h2>
                <p>Cups: {ipl.tropy}</p>
                {/* <CustomProgressBar scale={Percentage(team.cups)}/> */}
                <br/>
                {/* <button>{ipl.button}</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
  export default Card;
   
