import { ProduktCard } from "../Components/estateCard/EstateCard";
import { Slider } from "../Components/slider/slider";
import { useFetch } from "../hooks/useFetch";


export function Frontpage(){

    const {data, isLoading, error} = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + '/api/estates')


        console.log(data);
        
    return(
        <>
        <Slider />;
        {data?.map((item) =>{

            return (
                <EstateCard
                address={item.address}
                city={item.city}
                energyLabel={item.energyLabel}
                estateImages={item.estateImages}
                numRooms={item.numRooms}
                floorSpace={item.floorSpace}
                price={item.price}
                type={item.type}
                />
                
            );
        } )}   
       </>
    );
}