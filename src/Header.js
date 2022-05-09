export default function Header () {
    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
    <div class="topo">
        <div class="barra-topo">
            <div class="logo">
                <div><ion-icon name="logo-instagram"></ion-icon></div>
                <div class="borda"></div>
                <div><img src="./images/logo.png" /></div>
            </div>
            <div class="busca">
                <div><p>Pesquisar</p></div>
            </div>
            <div class="icones">
                {icons.map(icon => <div><ion-icon name={icon} ></ion-icon></div>)}
            </div>
        </div>
    </div>
    );    
}