import SocialNetworks from './socialNetworks';

import Avatar from '../img/deyvid.jpg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';


const SideBar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Deyvid Alves" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download corrículo</a>
        </aside>
    )
}
export default SideBar;