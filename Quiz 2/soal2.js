var data = {
    name: 'Bondra',
    nilai:70,
    kelas:'Adonis',
    isLogin:true
}
    
    
const updateData = (update) => {
    let newData = {
        ...data,
        ...update
    }
    return newData
}
    
console.log(updateData({ isLogin: false }))
console.log(updateData({nilai: 65, kelas: 'Laravel'}))