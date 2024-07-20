



const  Iplcard =(prop)=>{
    const  {data}=prop
    console.log(data)


    return(
        <>
        {
            
            data.map(eachteam=>{
            const{title,source,tropy}=eachteam
            // console.log(title,source,tropy)
                return(
                    <>
                <h1>{title}</h1>
                 <img src={source} width={"150"} height={"150"}></img>
                <h2>{tropy}</h2>
                    </>
                )

            })
        }

        </>


    )
}
export default Iplcard