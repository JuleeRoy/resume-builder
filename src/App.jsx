import React from 'react'
import{Route,Routes} from 'react-router-dom'
import { Authentication, Home } from './pages'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
 import {ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
const App = () => {
const queryClient=new QueryClient();
  return(
    <QueryClientProvider client={queryClient}>
<Routes>
  <Route path='/*' element={<Home/>}/>
  <Route path='/auth' element={<Authentication/>}/>
</Routes>
<ToastContainer position='top-right' theme='dark'/>
{/* <ReactQueryDevtools initialIsOpen={false}/> */}
</QueryClientProvider>
  );

}

export default App