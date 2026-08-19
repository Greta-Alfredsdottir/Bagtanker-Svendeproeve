

export function ProductCard({Title, Images, price}) {

    function getImage(imageArray) {
        const Image = imageArray.filter((item) => 
        item.image.description.includes(''),
    );
        return Image
    }
    
    const image = getImage(Images);
    
        return(
        <div>
            <figure>
                <img src={image[0]?.image.filename}></img>
            </figure>
           
            <h4> {price} DKK</h4>
        </div>
    )
}