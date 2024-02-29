function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")

    var img = document.querySelector("#profile")
    var btn = document.getElementById("btnStyle")
    var dat = document.getElementById("data")

    var registro = new Date();

    dat = formatarData(registro)

    if(html.classList.contains("light")){
        img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0blvh6TIjoe7FOmBgLj8SQvBw00KiwWBKQ&usqp=CAU");
        document.getElementById("data").textContent = formatarData(registro)
        btn.classList.add ("btn-light")
    }else{
        btn.classList.remove ("btn-light")
        img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyUvPb4hz3NxNlwaY6BLTaeyCxvPT0IRoZA&usqp=CAU");
        document.getElementById("data").textContent = formatarData(registro)
    }


}

function formatarData(item) {
    var options ={
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }
    return item.toLocaleString("pt-BR", options)
}