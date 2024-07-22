import paintingList from '../painting.json'
import Paintings from './Painting'


export  default function App (){
    const painting = paintingList[1]
    return <div><Paintings 
        title = {painting.title}
        author = {painting.author}
        price = {painting.price} />
    </div>
} 
