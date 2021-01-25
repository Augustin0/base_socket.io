const { io } = require("../init");
io.on("connection", (user) => {
    console.log(`Usuario conectado ${(user)}`);
    user.on("disconnect", () => {
        console.log("Usuario desconetado");
    });

    user.on("message", (info, calback) => {

        user.broadcast.emit("message", info)




    })
})