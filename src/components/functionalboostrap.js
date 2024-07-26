import Products from "./task3boostrap";
import Customcard from "./customcard";
const Data =()=>{
    return(
        <div>
        {Products.map((eachdata) => {
            return (
              <div key={eachdata.id}>
                <Customcard
                  key={eachdata.id}
                  image={eachdata.image}
                  id={eachdata.id}
                  title={eachdata.title}
                  price={eachdata.price}
                  description={eachdata.description}
                  category={eachdata.category}/>
                 
                
               
              </div>
            );
          })}
          </div>
    )
}

export default Data;