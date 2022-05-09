function Story (props) {
    return (
        <div class="story">
            <img src="./images/stories_background.jpg" />
            <div class="imagem-story"><img src={props.image} /></div>
            <p>{props.name}</p>
        </div>
    );
}

export default function Stories () {
    const storyUsers = [
        {name: "alexdunphy" , image: "./images/alex.jpg"},
        {name: "gloriaprit..." , image: "./images/gloria.png"},
        {name: "phildunphy" , image: "./images/phil.png"},
        {name: "camtucker" , image: "./images/cam.png"},
        {name: "haleydunphy" , image: "./images/haley.jpg"},
        {name: "mitchellpri..." , image: "./images/mitchell.jpg"},
        {name: "mannydel..." , image: "./images/manny.jpg"},
        {name: "lukedunphy" , image: "./images/luke.jpg"},
        {name: "username" , image: "./images/usuario1.png"},
    ];
    
    return (
        <div class="stories">
            {storyUsers.map(user => <Story name={user.name} image={user.image} />)}
            <div class="seta-stories"><ion-icon name="chevron-forward-circle-sharp"></ion-icon></div>
        </div>
    );
}