import React from 'react';
import { getImgUrl } from '../../utils/getImageURL';


const ProductCart = ({product}) => {
    return (
        <div>
            <div className='bg-[#FAFAFA]'>
                <img src={getImgUrl(`${product.imageUrl}`)} alt=''/>
                
            </div>
        </div>
    );
};

export default ProductCart;