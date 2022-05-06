function Username (props) {
    return (
        <div class="meu-usuario">
            <div><img src={props.image} /></div>
            <div>
                <h3 class="cinza-escuro">{props.usuario}</h3>
                <h5 class="cinza-escuro">{props.nome}</h5>
            </div>
        </div>
    );
}

export default function User () {

    
    return (
        <Username image="images/claire.jpg" usuario="clairedunphy" nome="Claire Dunphy" />
    );
}
