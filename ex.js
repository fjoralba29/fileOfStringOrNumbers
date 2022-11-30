import fsp from 'fs/promises';

const content = await fsp.readFile('./data.csv', 'utf-8');

async function fileDataType (content) {
    const dataFile = content.split('\r\n');  
    console.log(dataFile);
    let sum = 0;
    let count = 0; 
    for (let data of dataFile) {
        if (Number(data)) {
            count++;               
        }    
    }
    if (count = dataFile.length) {
        console.log("true"); 
    }
}

await fileDataType(content); 


// else if (typeof data === 'string') {
//             const uniqueStrings = dataFile.filter((value, index, array) => array.indexOf(value) === index);
//             console.log(uniqueStrings);
//             break;
//         }
        