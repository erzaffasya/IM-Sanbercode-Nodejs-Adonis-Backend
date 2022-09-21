import {sapa,myobj,filterdata} from './libs/soal'

const args = process.argv.slice(2);

const command = args[0];
//case1
switch (command){
    case 'sapa':
        let nama = args[1]
        console.log(sapa(nama));
        break;
    //case2
    case 'myobj':
    const params = args.slice(1);
    let [name,clas,score] = params
    console.log(myobj(name,clas,score));
        break;
    
    case 'filterdata':
        let kelas = args[1]
        console.log(filterdata(kelas))
    
        default:
            break;

}



