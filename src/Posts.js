import React from 'react';

function Post (props) {

    const [heart, setHeart] = React.useState("heart-outline");
    const [color, setColor] = React.useState("line");
    const [num, setNum] = React.useState(props.number);

    function likeDislike () {
        if (heart === "heart-outline") {
            setHeart("heart");
            setColor("red");
            setNum(props.number + 1);
        }
        if (heart === "heart") {
            setHeart("heart-outline");
            setColor("line");
            setNum(props.number);
        }
    }

    function likePost () {
        setHeart("heart");
        setColor("red");
        setNum(props.number + 1);
    }

    return (
        <div class="post">
            <div class="usuario">
                <div class="username">
                    <div><img src={props.image} /></div>
                    <div><h3>{props.name}</h3></div>
                </div>
                <div><ion-icon name="ellipsis-horizontal-sharp"></ion-icon></div>
            </div>
            <div class="imagem" onClick={likePost}><img src={props.post} /></div>
            <div class="curtir">
                <div class="reacoes">
                    <div><ion-icon name={heart} class={color} onClick={likeDislike}></ion-icon></div>
                    <div><ion-icon name="chatbubble-outline"></ion-icon></div>
                    <div><ion-icon name="paper-plane-outline"></ion-icon></div>
                </div>
                <div><ion-icon name="bookmark-outline"></ion-icon></div>
            </div>
            <div class="likes">
                <div><img src={props.likedImage} /></div>
                <div>Curtido por <strong>{props.likedUser}</strong> e <strong>outras {num} pessoas</strong></div>
            </div>
            <div class="margem-post"></div>
        </div>
    );
}

export default function Posts () {
    const items = [
        {image: "./images/mitchell.jpg", name: "mitchellpritchett", post: "./images/post-mitchell.png", likedImage: "./images/cam.png", likedUser: "camtucker", number: 352},
        {image: "./images/gloria.png", name: "gloriapritchett", post: "./images/post-gloria.jpg", likedImage: "./images/phil.png", likedUser: "phildunphy", number: 387},
        {image: "./images/haley.jpg", name: "haleydunphy", post: "./images/post-haley.jpg", likedImage: "./images/alex.jpg", likedUser: "alexdunphy", number: 395},
        {image: "./images/phil.png", name: "phildunphy", post: "./images/post-phil.jpg", likedImage: "./images/luke.jpg", likedUser: "lukedunphy", number: 236}
    ];

    return (
        <div class="posts">
            {items.map(item => <Post image={item.image} name={item.name} post={item.post} likedImage={item.likedImage} likedUser={item.likedUser} number={item.number} />)}
        </div>
    );
}