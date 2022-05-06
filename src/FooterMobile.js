export default function FooterMobile () {
    const icons = ["home-sharp", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    return (
    <div class="barra-debaixo-mobile">
        {icons.map(icon => <div><ion-icon name={icon} ></ion-icon></div>)}
    </div>
    );    
}