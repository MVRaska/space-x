
//  Napravite SpaceX aplikaciju s navedenim view-ovima: HomeView, LaunchesView, RocketsView,
// ShipsView.
// Definišite rute u App.js.
// II.

// Napravite komponentu Navbar koja će sadržati logo i navigacione tabove.
// Dodajte logo iz /assets/SpaceX-Logo.svg u Navbar. Klikom na logo korisnik treba da bude
// preusmeren na HomeView.
// Navbar će sadržati podkomponentu NavTabs.
// NavTabs će imati podkomponente NavTabsItem kojima se prosleđuju vrednosti "Launches",
// "Rockets", "Ships".
// U NavTabsItem komponenti koristićemo Link komponentu za rutu koja se dobija iz props-a value.

// III.

// Kreiranje Axios instance sa baznom URL-om https://api.spacexdata.com/v4/.
// U HomeView, prilikom renderovanja, pozvati GET za endpoint /company i sačuvati rezultat u stanju
// (state).
// Napraviti folder "company" unutar već postojećeg foldera "components". U tom folderu kreirati
// komponentu "Company".
// Proslediti komponenti "Company" informacije o kompaniji (companyInfo) dobijene iz prethodnog poziva i
// izlistati sledeće informacije: ime, osnivač, broj zaposlenih, sedište i linkove.
// U LaunchesView, pozvati GET za endpoint /launches i proslediti rezultat kao prop child komponenti
// "LaunchesList". (napomena! slice-uj te na 10 item-a dobijeni niz pre nego da prosledite)
// Komponenta "LaunchesList" treba imati svoju podkomponentu "LaunchesListItem", kojoj se prosleđuje
// pojedinačan lansiranje.
// "LaunchesListItem" treba da prikaže ime, sliku (dobijenu iz odgovora) i detalje o lansiranju.
// Napomena: Detaljnije informacije o endpoint-ima i formatu odgovora možete pronaći u dokumentaciji na:
// https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs

// IV
// Kreirajte komponentu Loading koristeći Spinner iz foldera assets.
// Napravite Error komponentu koja će sadržati tekst "Something went wrong" i dugme "Please try again"
// sa ikonicom iz assets Refresh.
// Dodajte stanje (state) za Loading i Error u komponentu HomeView i LaunchesView.

// Prilikom poziva axios.get('something'), ažurirajte odgovarajuće stanje (loading, error) u skladu sa
// odgovorom ili greškom.
// Ispisite odgovarajucu komponentu (Loading, Error, ComponentChild) u odnosnu na state-a (loading,
// error)


// import logoSvg from '../../Space-LogoX.svg';
import {ReactComponent as Logo} from '../../assets/SpaceX-Logo.svg';
import { useNavigate } from 'react-router-dom';
import {NavTabs} from '.';


const Navbar = () => {
    const navigate = useNavigate();

    return <div className="navbar">
        <Logo fill='white' onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
        <NavTabs />
    </div>
}

export default Navbar;