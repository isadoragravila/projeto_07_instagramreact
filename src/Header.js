// fazer a pasta das imagens

export default function Header () {
    return (
    <div class="topo">
        <div class="barra-topo">
            <div class="logo">
                <div><ion-icon name="logo-instagram"></ion-icon></div>
                <div class="borda"></div>
                <div><img src="images/logo.png" /></div>
            </div>
            <div class="busca">
                <div><p>Pesquisar</p></div>
            </div>
            <div class="icones">
                <div><ion-icon name="paper-plane-outline"></ion-icon></div>
                <div><ion-icon name="compass-outline"></ion-icon></div>
                <div><ion-icon name="heart-outline"></ion-icon></div>
                <div><ion-icon name="person-outline"></ion-icon></div>
            </div>
        </div>
    </div>
    );    
}