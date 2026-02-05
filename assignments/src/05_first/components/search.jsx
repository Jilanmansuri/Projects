import { useEffect, useState } from "react"

function ProductSearch() {
    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const filteredProducts = products.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Search product..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search"
            />

            <div className="products">
                {filteredProducts.map(item => (
                    <div className="card" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductSearch
