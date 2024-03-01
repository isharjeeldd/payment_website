import Business from './components/Business'
import CallToAction from './components/CallToAction'
import Clients from './components/Clients'
import Companies from './components/Companies'
import Deal from './components/Deal'
import Hero from './components/Hero'
import Invoicing from './components/Invoicing'
import MainLayout from './components/MainLayout'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Clients />
        <Business />
        <Invoicing />
        <Deal />
        <Testimonials />
        <Companies />
        <CallToAction />
      </MainLayout>
    </>
  )
}

export default App
