if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./SW.js")
        .then((reg) => console.log("Registro Service Worker Exitoso"))
        .catch((err) => console.log(err));
}