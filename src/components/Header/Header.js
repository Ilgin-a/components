import { Link } from "react-router-dom";

export default function Header () {
    return (
        <div style={{textAlign:"center"}}>
            <h1>Components Projesi</h1>
            <nav>
                <Link to="/">Ana Sayfa</Link> &nbsp;
                <Link to="/hakkinda">Hakkında</Link> &nbsp;
                <Link to="/kontak">Kontak</Link> &nbsp;
                <Link to="/iletisim">İletişim</Link>
            </nav>
        </div>
    )
}

 