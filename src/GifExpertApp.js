import React, { useState } from 'react'
import AddCategory from './componentes/AddCategory'
import GifGrid from './componentes/GifGrid'

const GifExpertApp = props => {
	const [Categories, setCategories] = useState([])

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories}/>
			<hr/>
			<ol>
				{
					Categories.map((category) => (
						<GifGrid 
							key={category}
							category={category}
						/>
					))
				}
			</ol>
		</>
	)
}



export default GifExpertApp
