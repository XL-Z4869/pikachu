const string = `
.skin * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.skin *:before,
.skin *:after {
    box-sizing: border-box;
}


.skin{
    position: absolute;
    top:100px;
    background-color: #FFE600;
    min-width:50vh;}

li {
    list-style: none;
}

.nose {
    position: absolute;
    top: 98px;
    left: 50%;
    margin-left: -14px;
    width: 0px;
    height: 0px;
    border: 14px solid black;
    border-color: black transparent transparent;
    border-radius: 45%;
    z-index: 10;
}

@keyframes noseRotate {
    0% {
        transform: rotate(0);
    }
    25% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(5deg);
    }
    100% {
        transform: rotate(0);
    }
}

.nose:hover {
    animation: noseRotate 0.5s 2;
}

.eye {
    position: absolute;
    top: 60px;
    left: 50%;
    margin-left: -32px;
    width: 64px;
    height: 64px;
    background-color: #2E2E2E;
    border: 1px solid black;
    border-radius: 50%;
}

.eye.left {
    transform: translateX(-110px);
}

.eye:after {
    content: "";
    position: absolute;
    left: 11px;
    top: 1px;
    width: 28px;
    height: 28px;
    background-color: white;
    border: 2px solid #000;
    border-radius: 50%;
}

.eye.right {
    transform: translateX(110px);
}

.mouth {
    position: relative;
    top: 125px;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
    width: 300px;
    height: 200px;
}

.mouth .up {
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -50px;
    width: 80px;
    height: 35px;
    background-color: #FFE600;
    border: 3px solid black;
    border-top: 0;
    border-right: 0;
    z-index: 5;
    border-radius: 0 0 0 98%;
}

.mouth .up::after {
    content: "";
    /* border: 1px solid #9B000A; */
    position: absolute;
    top: -5px;
    left: 12px;
    width: 10px;
    height: 10px;
    z-index: 20;
    background-color: #FFE600;
}

.mouth .up.left {
    transform: translateX(-32px) rotate(-30deg);
}

.mouth .up.right {
    transform: translateX(52px) rotateY(180deg) rotate(-30deg);
}

.mouth .down {
    position: absolute;
    top: -440px;
    left: 50%;
    margin-left: -75px;
    width: 150px;
    height: 600px;
    overflow: hidden;
    background-color: #9B000A;
    border: 3px solid black;
    border-radius: 178px/680px;
}

.mouth .down::after {
    position: absolute;
    content: "";
    top: 466px;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    height: 340px;
    background-color: #FF485F;
    border-radius: 200px/280px;
}

.cheek {
    position: absolute;
    top: 160px;
    left: 50%;
    margin-left: -40px;
    width: 80px;
    height: 80px;
    border: 3px solid black;
    background-color: red;
    border-radius: 100%;
}

.cheek.left {
    transform: translateX(-160px);
}

.cheek.right {
    transform: translateX(160px);
}`


export default string