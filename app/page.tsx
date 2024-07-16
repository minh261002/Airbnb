import CategoriesList from '@/components/home/CategoriesList'
import PropertiesContainer from '@/components/home/PropertiesContainer'
import React from 'react'
import { Suspense } from 'react'
import LoadingCards from '@/components/card/LoadingCards'

const Home = ({
  searchParams
}: {
  searchParams: { category?: string, search?: string }
}) => {

  return (
    <section>
      <CategoriesList category={searchParams.category} search={searchParams.search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={searchParams.category} search={searchParams.search} />
      </Suspense>
    </section>
  )
}

export default Home