function Clothes({anyClothes}) {
    return (
        <div className="products">
            {anyClothes.map((item => {
                const {id, name, price, image} = item;
                return (
                    <div key={id} className="product-card">
                         <img src={image} width='400px' height='500px' alt="items"/>
            
                        <div> 
                        <h3>{id}. {name}</h3>
                        <h4>${price}</h4>
                        </div>
                    </div>
                )
            }))}

            
        </div>
    )

}
export default Clothes;