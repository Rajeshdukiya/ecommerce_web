import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
// import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'

const Home = () => {
    // const context = useContext(myContext)
    // console.log(context) // {name: 'Kamal Nayan', class: '9 C'}
    // // Destructure 
    // const {name} = context
    // console.log(name) // Kamal Nayan
  return (
    <Layout>
     <HeroSection/>
     <Filter/>
     <ProductCard/>
    </Layout>
  )
}

export default Home