import MainContent from './components/MainContent'
import SideBar from './components/SideBar'

import './styles/components/app.sass'

const App = () => {

  return (
      <div id="portfolio">
        <h1>Deyvid Alves</h1>
        <SideBar />
        <MainContent />
      </div>
  )
}

export default App
