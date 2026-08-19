export function ProductCard({ Title, Images, price }) {

    function getImage(imageArray) {
        const image = imageArray?.filter((item) =>
            item.image?.description?.includes('')
        );

        return image;
    }

    const image = getImage(Images);

    return (
        <div>
            <figure>
                <img src={image?.[0]?.image?.filename} />
            </figure>

            <h4>{price} DKK</h4>
        </div>
    );
}
