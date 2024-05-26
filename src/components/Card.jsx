import React, { useState } from "react";

const Card = ({id, name, image, info, price, removeTour})=>{
    const [read, setRead] = useState(false);
    const description = read ? info : `${info.substring(0, 200)}....`;

    const handleRead = () => {
        setRead(!read);
    }

    return(
        <div className="w-[400px] max-h-max m-3 p-4 flex flex-col rounde-lg items-center shadow-lg">
            <img src={image} className="w-[380px] aspect-square object-cover" />

            <div className="my-5 mx-2 ">
            <div>
                <h3 className="text-2xl text-orange-500 font-semibold">₹ {price}</h3>
                <h3 className="text-xl font-bold">{name}</h3>
            </div>

            <div>
                <p className="font-light">
                {description}
                <span className="text-sky-500 cursor-pointer text-lg text-semibold" onClick={handleRead}>
                    {read? ` Show Less`: ` Read More`}
                </span>
                </p>
            </div>
            </div>

        <button className="bg-red-200 px-7 py-2 rounded-xl border-2 border-red-500 hover:bg-red-500 hover:text-white" onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    );
};

export default Card;