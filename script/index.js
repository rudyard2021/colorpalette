printf = console.log;

window.onload = () =>{
    for(let key in color){
        let container = callContainer(
            getClassName(key)
        );

        printf(container);
        for(let keyColor in color[key]){
            textColor = color[key][keyColor];
            node = createContainer(textColor);
            container.appendChild(node);
        }
    }
};

function callContainer(className){
    let node = document.getElementsByClassName(className)
    if (node.length > 0){
        return node[0];
    }else{
        printf(`No es un nodo ${className}`);
    }
    return null;
}

function getClassName(name){
    name = spinalCase(name);
    name = `color-${name}`;
    return name;
}

function createContainer(text){
    let nodeFather = document.createElement("div");
    let nodeSon = document.createElement("p");
    let nodeText = document.createTextNode(text);
    nodeSon.appendChild(nodeText);
    nodeFather.appendChild(nodeSon);

    nodeFather.setAttribute("class", "container3");
    nodeFather.style.backgroundColor = text;
    nodeFather.style.height = "6.5%";

    nodeSon.style.textAlign = "center";
    nodeSon.style.color = text;
    addEvents(nodeFather, nodeSon, text);

    return nodeFather;
}

function addEvents(node, nodeSon, color){
    node.addEventListener("mouseenter", (e)=>{
        nodeSon.style.color = "snow";
    });

    node.addEventListener("mouseleave", (e)=>{
        nodeSon.style.color = color;
    });


}
