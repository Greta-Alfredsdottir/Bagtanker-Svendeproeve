// import { EstateCard } from "../Components/estateCard/EstateCard";
import { Slider } from "../Components/slider/slider";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../productCard/ProductCard";



export function Frontpage(){

    const {data, isLoading, error} = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + '/api/Products')


        console.log(data);
        
    return(
        <>
        <Slider />;
        {data?.map((item) =>{

            return (
                <ProductCard
                Title={item.title}
                Images={item.Images}
                price={item.price}
                
                />
                
            );
        } )}   
       </>
    );
}