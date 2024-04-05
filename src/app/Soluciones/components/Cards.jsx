import data from '../dataCards'
import Card from './Card'

export default function Cards() {
  return (
    <div className='grid grid-cols-3 gap-6 w-[700px] h-[500px]'>
        {data.map(({img,title,color,parrafo}, index)=>{
            return (

                <Card 
                img={img}
                title={title}
                color={color}
                parrafo={parrafo}
                key={index}
                />
            )
        })}


    </div>
  )
}
