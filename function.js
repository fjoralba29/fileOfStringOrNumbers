async function fileDataType (content) {
    const dataFile = content.split('\r\n');  
    console.log(dataFile);
    let sum = 0;
    for (let data of dataFile) {
        
        let pattern = /[0-9]/g;
        if (data.match(pattern)) {
            data = data * 1; 
            sum = sum + data; 
            console.log(sum);  
        }
        else if (typeof data === 'string') {
            const uniqueStrings = dataFile.filter((value, index, array) => array.indexOf(value) === index);
            console.log(uniqueStrings);
            break;
        }
        
    }
}

export default fileDataType; 