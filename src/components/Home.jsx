import Logo from "../assets/cheetah.png";
import img from '../assets/cheetah-loader.gif'
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import TextSection from "./TextSection";
import HomeCard from "./HomeCard";
import HeroSection from "./HeroSection";
import VpnSection from "./VpnSection";
import WhyUs from "./WhyUs";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="flex h-[100vh] flex-col">
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center">
                    <div className="flex flex-col items-center mt-10">
                        <img src={img} alt='animation' className="w-1/3 hidden md:block" />
                        <Link to='/'>
                            <img className="w-[172px] md:w-[272px] mb-8 -mt-28" src={Logo} alt='logo' />
                        </Link>
                    </div>
                    <SearchInput />
                    <TextSection />
                    <HomeCard />
                    <HeroSection />
                    <VpnSection />
                    <WhyUs />
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default Home;
