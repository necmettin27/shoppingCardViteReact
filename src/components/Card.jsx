const Card = ({card,emptyCard}) => { 
    const total = card.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
    if(card.length ===0 ) return; 

    return (
    <div className="border ml-auto w-72 p-4  mt-2 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
        <ul>
            {card.map((item)=>(
                <li className="mt-2 flex justify-between" key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.price} TL</span>
                </li>
            ))} 
        </ul>
        <hr className="my-4 "/>
        <p className="font-semibold text-xl">Toplam: {total} TL</p>
        <button onClick={()=>emptyCard()} className="bg-red-500 py-2 px-4 text-white hover:bg-red-600 transition-all mt-4">Sepeti Boşalt</button>
    </div>
  )
}

export default Card