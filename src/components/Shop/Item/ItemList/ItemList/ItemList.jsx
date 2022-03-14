import React from "react"
import { Item } from "../../Item/Item"

export const ItemList = ({ products }) => {
	return (
		<>
			<div className="row">
				{products.map((product) => (
					<Item
						id={product.id}
						title={product.title}
						price={product.price}
						brand={product.brand}
						img={product.picUrl}
						key={product.id}
					/>
				))}
			</div>
		</>
	)
}
