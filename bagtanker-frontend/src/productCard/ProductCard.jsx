

export function ProductCard({address, city, energyLabel, estateImages, numRooms, floorSpace, price, type}) {

    function getVillaImage(imageArray) {
        const villaImage = imageArray.filter((item) => 
        item.image.description.includes('Villa'),
    );
        return villaImage
    }
    
    const villa = getVillaImage(estateImages);
    console.log("villa:", villa[0])
        return(
        <div>
            <figure>
                <img src={villa[0]?.image.filename}></img>
            </figure>
            <section>
                <span> 
                    <h5>{address}</h5> <p>{energyLabel.name}</p> 
                </span>
                <p>{`${city.name} ${city.zipcode}`}</p>
                <p> {type.name} </p>
                <p> {`${numRooms}, ${floorSpace}`} </p>
                <p> {} </p>
            </section>
            <h4> {price} DKK</h4>
        </div>
    )
}