function Suggestion (props) {
    return (
        <div class="outras-sugestoes">
            <div class="esquerda">
                <div><img src={props.image} /></div>
                <div>
                    <h3 class="cinza-escuro">{props.name}</h3>
                    <p class="cinza">{props.status}</p>
                </div>
            </div>
            <div class="seguir"><h6 class="azul">Seguir</h6></div>
        </div>
    );
}

export default function Suggestions () {
    const itens = [
        {image: "./images/dylan.jpg", name: "dylan", status: "Segue você"},
        {image: "./images/andy.png", name: "andybailey", status: "Segue você"},
        {image: "./images/pepper-saltzman.png", name: "peppersaltzman", status: "Segue você"},
        {image: "./images/gil-thorpe.png", name: "gilthorpe", status: "Segue você"},
        {image: "./images/sonia-ramirez.png", name: "soniaramirez", status: "Novo no instagram"},
    ];
    
    return (
        <div>
            <div class="sugestoes">
                <div><h6 class="cinza">Sugestões para você</h6></div>
                <div><h6 class="cinza-escuro">Ver tudo</h6></div>
            </div>
            {itens.map ((item) => (<Suggestion image={item.image} name={item.name} status={item.status} />))}
        </div>
    );
}