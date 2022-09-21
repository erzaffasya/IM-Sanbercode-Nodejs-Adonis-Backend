export const sapa = (nama) => {
  return  `Halo Selamat pagi , ${nama}`
}

export const myobj = (name,clas,score) =>{
    return {
        name,
        clas,
        score
    }
}

const data = [
    { name: "Ahmad", kelas: "adonis"},
    { name: "Regi", kelas: "laravel"},
    { name: "Bondra", kelas: "adonis"},
    { name: "Iqbal", kelas: "vuejs" },
    { name: "Putri", kelas: "Laravel" }
  ]
export const filterdata = (kelas) => {
  for (let i = 0; i < data.length; i++) {
    
 
    return data.filter((el) => el['kelas'].toLowercase().includes(query.toLowercase()))
 }

}