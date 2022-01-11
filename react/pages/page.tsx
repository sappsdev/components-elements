import type { NextPage } from 'next'
import { useContext, useEffect } from 'react';
import { UserLayout } from '../layouts/user_layout'
const pageName: NextPage = () => {
  const { setPageName } = useContext( AuthContext );  
  useEffect(() => {
    ( async ()=> {
      setPageName("Page Name")
    })();
  }, []);  
  return (
    <Layout title="Tablero">
          <ComponentPage/>
    </Layout>
  )
}

export default pageName
