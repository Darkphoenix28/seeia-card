import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Work from './components/Work'
import Document from './components/Document'
import Support from './components/Support'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="orange-sweep" aria-hidden="true" />
        <Mission />
        <Work />
        <Document />
        <div className="support-sweep" aria-hidden="true" />
        <Support />
      </main>
      <Footer />
    </>
  )
}

