import User from "./User";
import Suggestions from "./Suggestions";

export default function Sidebar () {
    return (
        <div class="sidebar">
            <User />
            <Suggestions />
            <div class="final-sidebar">
                <div class="espaco"></div>
                <p class="cinza-claro">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
                <div class="espaco"></div>
                <p class="cinza-claro">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}