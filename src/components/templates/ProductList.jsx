import React from 'react'

function ProductList({products}) {
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
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList