import data from './dataCardsBeneficios'
import Card from './Card'

export default function Cards() {
  return (
    <div className='grid md:grid-cols-2 gap-6 w-[700px] h-full justify-center items-center'>
        {data.map(({img,title,color,parrafo,color_img, color_test, color_parrafo}, index)=>{
            return (

                <Card 
                img={img}
                title={title}
                color={color}
                parrafo={parrafo}
                key={index}
                color_img= {color_img}
                color_test={color_test}
                color_parrafo={color_parrafo}
                />
            )
        })}


    </div>
  )
}
