var socketIo = io()
socketIo.on("connect", () => {
    document.getElementById("estado").innerText = "Usuario conectado al servidor con exito"
})

socketIo.on("disconnect", () => {
    document.getElementById("estado").innerText = "Se ha caido el servidor"
});

socketIo.on("message", (info) => {
    console.log(info);
});