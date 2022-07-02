const row = 9
const col = 9

function gugudan(){
    for(let i=1; i<row+1; i++){
        for(let j=1; j<col+1; j++){
            console.log(`${i} * ${j} = ${i*j}`);
        }
    }
}

gugudan()