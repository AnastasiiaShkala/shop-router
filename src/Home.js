import { useState } from "react";
import { dataClothes } from "./dataClothes";
import Buttons from './Buttons';
import Clothes from './Clothes';


function Home() {

    const [clothesOne, setClothesOne] = useState(dataClothes);
    const chosenClothes = (searchTerm) => {
      const newClothes = dataClothes.filter(element => element.searchTerm === searchTerm);
      setClothesOne(newClothes);
    }
    return (
        <div>
      
       <div className='cont'> 
       <h2 className='back'>Free Standard Shipping</h2>
       </div>
       <div>
        <Buttons filteredClothes={chosenClothes}/>
       </div>
       <div>
        <Clothes anyClothes={clothesOne}/>
       </div>
       
       </div>
      );
} 
export default Home;