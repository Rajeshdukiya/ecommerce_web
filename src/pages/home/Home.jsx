import React from 'react'
import Layout from '../../components/layout/Layout'

const Home = () => {
    const context = useContext(myContext)
    console.log(context) // {name: 'Kamal Nayan', class: '9 C'}
    // Destructure 
    const {name} = context
    console.log(name) // Kamal Nayan
  return (
    <Layout>
      <h1>Name : {name}</h1>
    </Layout>
  )
}

export default Home