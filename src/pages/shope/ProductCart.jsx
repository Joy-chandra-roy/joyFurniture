import React from 'react';
import { getImgUrl } from '../../utils/getImageURL';
import Rating from '../../components/Rating';
import { AiFillPlusCircle } from "react-icons/ai";


const ProductCart = ({product}) => {
    return (
        <div>
            <div className='bg-white/55'>
                <img src={getImgUrl(`${product.imageUrl}`)} alt=''/>
            </div>
            <div className='p-6 bg-white dark:bg-black shadow-sm'>
                <h4 className='text-base mb-1'>{product.category}</h4>
                <h3 className='font-semibold text-xl'>{product.name}</h3>
                <Rating rating={product.rating}/>

                <div className='mt-10 flex items-center justify-between'>
                    <p className='text-secondary dark:text-white font-bold text-xl'><sup>$</sup> <span>{product.price}</span></p>
                    <button className='text-3xl cursor-pointer hover:bg-black/50 rounded-full p-1'><AiFillPlusCircle /></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;