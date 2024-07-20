const CustomList= ({list})=>{
    return(
        <ol>
        {list.map((eachitem)=>{
            <li>eachitem</li>
        })}
        </ol>
    )
}
    
export default CustomList;