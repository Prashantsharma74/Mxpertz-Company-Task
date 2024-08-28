import React from 'react'
import { useSelector } from 'react-redux';
function WordExplorer() {

    const { selectedProduct } = useSelector(state => state.products)
    const data = selectedProduct.Wordexplore;
    const [firstItems, ...restItems] = data

    if(data.length === 0){
        return (
            <h1>No Data Found...</h1>
        )
    }

    const { Storytitle, Storyttext, Synonyms, Antonyms, Noun } = firstItems

    return (
        <>
            <p className='drag'>Drag Pictures to the matching Workds, light up correct pairs, shake for a retry.</p>
            <div className='sections'>
                <div className='first-div'>
                    <div>
                        <h2 className='correction'>{Storytitle}<sup style={{ "color": "white", "fontSize": "0.8vw" }}>(${Noun})</sup></h2>
                        <p className='para'>{Storyttext}</p>
                        <img className='teach' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjumsTfQFbNsyxoohI0tRqn3xxBuONZ3MYnw&s" alt="" />
                        <span>
                            <p className='danger'>Synonyms:- &nbsp;</p>
                            <p >{Synonyms}</p>
                        </span>
                        <span>
                            <p className='green'>Antonyms:- &nbsp;</p>
                            <p>{Antonyms}</p>
                        </span>
                    </div>
                    <span className='icons-span'>
                        <i class="fa-solid fa-arrow-left icons"></i>
                        <i class="fa-solid fa-arrow-right icons"></i>
                    </span>
                </div>
                <div className='second-div'>
                    {restItems.map((explorer, index) => (
                        <div className="card h-4" key={index}>
                            <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" className="card-img-top" alt="..." />
                            <p>{explorer.Storyttext}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WordExplorer
