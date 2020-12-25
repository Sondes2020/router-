import React from 'react'
import Rate from './Rate'

const MovieSearch = ({setsearchByName, setserchByRate, serchByRate}) => {
    return (
        <div className="inputt">
           <div className="input">
            <input type="text" placeholder=" Movie Name To Search"
            onChange={(e)=> setsearchByName(e.target.value)} />
            </div> 
            <div>
            <Rate setserchByRate={setserchByRate} rating={serchByRate} />
            </div>
            
        </div>
    )
}

export default MovieSearch