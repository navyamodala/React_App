import React from "react"


const Name = (props) => {
    const { d } = props
    console.log(d)


    return (
        <>

            {d.map((ele) => (

         
                    <div >
                        <h1>{ele.name}</h1>
                        <h1>{ele.age}</h1>
                    </div>)
            )}

        </>
    )

}
export default Name