import CustomProgressbar from "./classcomponent/progressbar";
import "./card.css"

const res = (input) => {
    let num = 100;
    let amount = (input / num) * 100;
    return amount;
  };

const Customcard=(prop)=>{                                                                                                                                                                                             
    const{id,title,price,description,category,image}=prop
    return<div className="img">
        <p><img src={image} alt="image" width={100} height={100} /></p>
    <p>id:{id}</p>
    <p>title:{title}</p>
    <p>price:{price}</p>
    <p>description:{description}</p>
    <p>category:{category}</p>
    <CustomProgressbar scale={res(price)}></CustomProgressbar>
    </div>
}
export default Customcard;