import { addSiswa, loginAkun, registerKaryawan } from "./libs/soal";

const myArgs = process.argv.slice(2)
const command = myArgs[0]
const value = myArgs.slice(1)

switch (command) {
    case "register":
        registerKaryawan(value)
        break;
    case "login" :
        loginAkun(value)
        break;
    case "addSiswa" :
        addSiswa(value)
        break;
    default:
        break;
}

