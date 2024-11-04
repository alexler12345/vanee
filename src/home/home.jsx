import { Menubar } from "../menu_Bar/menuBar";
import { Title } from "../assets/title/title";
import { Contacts } from "../assets/contacts/contacts";
import { Map } from "../assets/map/map";
import { Time } from "../assets/time/time";
import { Slideshow } from "../assets/slideShow/slideShow";
import { Footer } from "../footer/footer";
export function Home() {

    return(
        <>
        
        <Menubar />
        <Title />
        <Contacts />
        <Map />
        <Slideshow />
        <Footer i ={1}/>
        
        </>
    );
}