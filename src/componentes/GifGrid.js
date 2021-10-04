import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

	
	const {loading, data:images} = useFetchGifs(category);


		return (
		<>
			<h3 className='card animate__animated animate__fadeInDown'>{category}</h3>
			{loading && <p className='card animate__animated animate__flash'> Loading</p>}
			<div className='card-grid'>

					{images.map( img => 
							(
								<GifGridItem 
									key={img.id}
									{...img}
								/>
							)
						)
					}


			</div>
		</>
	)
}

export default GifGrid
