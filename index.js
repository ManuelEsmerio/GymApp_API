import app from "./app.js"

const main = () => {
    app.listen(app.get('port'),()=>{
        console.log(`Server listening on port ${app.get('port')}`);
    });
}


main()