import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import api from '../../services/axiosConfing';

function ProductList({products}) {
    console.log('products prop:', products);

    const queryClient = useQueryClient();

    
    const mutation = useMutation({
        mutationFn: async (id) => {
            console.log('درخواست حذف برای:', id);
            const response = await api.delete(`/products/${id}`);
            return response.data;
        },
        
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        },
        onError: (error) => {
            console.log('خطای حذف:', error); 
        }  
        
    })
    
    function deleteHandler(id){
        console.log('در حال حذف', id);
        mutation.mutate(id)
    }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>نام کالا</th>
                    <th>موجودی</th>
                    <th>قیمت</th>
                    <th>شناسه کالا</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => 
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{product.id}</td>
                        <td><button onClick={() => deleteHandler(product.id)}>🗑️</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList