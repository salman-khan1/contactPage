import Navigation from './components/Navigation/Navigation'
import './App.css'
import ContactHeader from './components/contactHeader/contactHeader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <>
      <Navigation/>
      <main className='main_container'>
        <ContactHeader/>
        <ContactForm/>
      </main>
    </>
  )
}

export default App
