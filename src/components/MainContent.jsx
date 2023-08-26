import Abaut from './Abaut';
import TechnologiesContainer from './TechnologiesContainer';
import Projects from './Projects';
import '../styles/components/mainContent.sass'


const MainContent = () => {
    return (
        <main id='main-content'>
            <Abaut />
            <TechnologiesContainer />
            <Projects />
        </main>
    )
}
export default MainContent;