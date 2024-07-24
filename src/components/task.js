import { Data } from "./data"
import Card from "./card"
const Task=()=>{
    return (
        <div>
       {Data.map((each)=>{
        return(
            <div>
                 <Card key={each.id}  image={each.image} id={each.id} title={each.title} description={each.description} category={each.category}/>
            </div>
        )
       })}
        </div>
    )
}
export default Task