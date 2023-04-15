import React from 'react'

const ProductItem = ({product,card,setCard}) => {
    const findProduct = card.find((item)=>item.id === product.id);

    const addToCard = (product) => {
        //setCard([...card,product])
        setCard((prevState)=>[...prevState,product])
    } 
 
  return (
    <div className='border p-4 m-2 rounded-lg shadow-lg'>
        <img className='w-full h-48 object-cover rounded-t-lg' src={product.image}  alt="productImage" />
        <div>
            <h2 className='text-xl font-semibold my-2'>{product.name}</h2>
            <p className='text-gray-500 my-2'>{product.price}</p>
            <button 
                onClick={()=>addToCard(product)} 
                className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full ${findProduct && "opacity-50 cursor-no-drop"}`}
                disabled={findProduct}
            >
                Sepete Ekle
            </button>
        </div>
    </div>
  )
}

export default ProductItem