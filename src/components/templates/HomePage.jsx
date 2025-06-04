import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../../services/axiosConfing';
import Login from './Login'
import ProductList from './ProductList'


function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  return (
    <>  
    {isLoggedIn ? (
    <>
    {isLoading && <p>در حال دریافت اطلاعات...</p>}
    {error && <p>خطا در دریافت اطلاعات</p>}
    {data && <ProductList products={data.data} />}
    </>
    ) : (
    <Login onSuccess={() => setIsLoggedIn(true)} />
    )}

     
    </>
    
  )
}

export default HomePage