import Header from "./components/Header";
import Body from "./components/Body";
import Aside from "./components/Aside";
import Section from "./components/Section";
import Img from "./components/Img";
const Home = () => {
    return (
        <div>
            <Body />
            <div>
                <Header className="header-container" />
            </div>
            <div>
                <Aside className="aside-container" />
                <Aside className="aside-container1" />
            </div>

             <section>
                <Section />
             
                <Img className="img1"/>
                <Img className="img2"/>
                <Img className="img3"/>
                <Img className="img4"/>
                
                
             </section>
        </div>

    )
}

export default Home;