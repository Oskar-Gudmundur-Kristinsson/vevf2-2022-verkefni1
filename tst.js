import fs from "fs";



try {
    const path = process.cwd() + "/dist/index.html";
    function readF () {
        return new Promise((resolve, reject) => {
            fs.readFile(path, "utf-8", function (err, data) {
                if (err) throw err;
                for(let i = 0; i < 12; i++){
                    data = data.replace('<a href="./data/'+i+'">', '<a href="./data/'+i+'.html">')// eslint-disable-line quotes
                }
            
                //console.log(data) // eslint-disable-line no-console
                resolve(data);
            });
        });
    }
    async function wFile () {
        let newHTML = await readF();
        fs.writeFile(path, newHTML, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
                
            }
        });
    }
    wFile();
}catch (err) {
    console.error(err);
}

