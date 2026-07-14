
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())




function App() {
  
  return (
    <>
                                       <Suspense
                       fallback={
                   <div className="loading">
                    <div className="spinner"></div>

                 <h2 className="dots">
                   🌍 Loading Countries
                    </h2>

            <p>Please wait while we fetch the latest country data...</p>
      </div>
  }
>
  <Countries countriesPromise={countriesPromise} />
</Suspense>
    </>
  )
}

export default App
