import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid =  ({category}) => {

    const  { images, isLoading } = useFetchGifs( category )

    console.log({isLoading });
    
    return (
        <>
            <h2>{ category }</h2>
            { isLoading && ( <h4>Cargando...</h4> ) }

            <div className='card-grid'>
                { images.map( (image) => (
                    <GifItem 
                        key={ image.id } 
                        {...image}
                    /> 
                    // <li key={id}>{title}</li>
                ) )}

            </div>

        </>
    )
}
