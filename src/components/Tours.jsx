import React from "react";
import Card from "./Card";

const Tours = ({tours, removeTour})=>{
    return(
        <div className="min-h-screen flex items-center justify-center flex-col">
        <div>
      <h1 className="text-5xl font-bold m-6 px-16 py-4 border-blue-500 rounded-[20px] border-[7px] border-dashed">Plan With Love</h1>
        </div>
        <div className="flex items-center justify-center flex-wrap max-w-[1300px] m-auto">
        {
            tours.map((tour) => {
                return <Card {...tour} removeTour={removeTour}/>
            })
        }
        </div>
        </div>
    )
}

export default Tours;