
import axios from "axios";
import React, { Component } from "react";


class Recipe extends Component{
    state ={
        Recipelist: [],
        loader:true,
        error:false,
    };
    componentDidMount(){
        this.fetchrecipie()
        console.log("hello from did mount")
    }
    
    fetchrecipie = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/recipes');
          
          const { status, data } = response;
          console.log(response)    
          if (status === 200) {
            this.setState({
              Recipelist: data.recipes,
              loader: false, // Set loader to false once data is fetched
            });
          }
        } catch (err) {
          console.error("Error fetching recipes:", err);
          this.setState({
            error: true,
            loader: false, // Set loader to false on error
          });
        }
      };
    
    
    render() {
        return(
            <>
        <h1>hello world</h1>
{console.log(this.state.Recipelist,"hello")}   
     {
            this.state.loader?
            <h4>please wait...</h4>
            :
            <>
            <h5>helo</h5>
             {this.state.Recipelist?.map ((eachrecipe) => {
                const{name,image,ingredient,instruction} = eachrecipe;
                return(
                    <>
                    
                <h4>{name}</h4>

                    


               
                
                </>
                )
            })
        } 

        
            </>
        }
        </>
        )
    }
}

    
       

export default  Recipe


// import React, { Component } from "react";
// import axios from "axios";
// import CustomImage from "./customimage";
// import Heading1 from "../heading1";
// import CustomList from "./customlist";

// class Recipe extends Component {
//   state = {
//     recipeList: [],
//     loading: true,
//     error: false,
//   };

//   componentDidMount() {
//     this.fetchRecipes();
//   }
//   fetchRecipes = async () => {
//       try {
//           const response = await axios.get('https://dummyjson.com/recipes');
//           const { status, data } = response;
          
//           if (status === 200) {
//               this.setState({
//                   recipeList: data.recipes,
//                   loading: false,
//                   error: false,
//                 });
//             } else {
//                 this.setState({
//                     loading: false,
//                     error: true,
//                 });
//             }
//         } catch (error) {
//             console.error("Error fetching recipes:", error);
//             this.setState({
//                 loading: false,
//                 error: true,
//             });
//         }
//         console.log(this.state.recipeList)
//     };
    
//     render() {
//         const { recipeList, loading, error } = this.state;
        
//     return (
//       <div>
//         <h1>Hello World</h1>

//         {/* Conditional rendering based on loading and error states */}
//         {loading && <h4>Please wait...</h4>}

//         {error && <p>Error fetching recipes.</p>}

//         {!loading && !error && (
//           <div>
//             {recipeList.map((recipe, index) => (
//               <div key={index}>
//                 <h4>{recipe.name}</h4>
//                 <CustomImage src={recipe.image} width={100} height={100} />
//                 <Heading1 title={`Ingredients required for dish ${recipe.name}`} />
//                 <CustomList list={recipe.ingredients} />
//                 <Heading1 title={`Instructions required for dish ${recipe.name}`} />
//                 <CustomList list={recipe.instructions} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Recipe;



