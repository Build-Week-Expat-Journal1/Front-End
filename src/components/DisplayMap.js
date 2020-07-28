// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import Display from "./components/Display"


// const DisplayMap = () => {
    
//     const [items, setItems] = useState([]);

//     useEffect (()=> {
//         axios
//         .get(``)
//         .then(res => {
//             console.log ("this is the res from DisplayMap", res);
//             setItems(res.data.results);
//         })
//         .catch(err =>{
//             console.log ("well..shit", err)
//         });
//         }, []);


//         return(
//             <div className = "DisplayMap">
//                 <h2 className = "DisplayMapHeader">Discover</h2>
//                 {items.map(travel => (
//                     <Display
//                     key = {travel.id}
//                     />
//                 ))}
//             </div>
//         );

//     };

//     export default DisplayMap;
