var data = {
    name: 'Bondra',
    nilai: 70,
    kelas: 'Adonis',
    isLogin: true
}

const updateData = (update) => {
    let newData = {
        ...data,
        ...update
    }
    return newData
}

// TEST CASES
console.log(updateData({ isLogin: false }))
// Output : { name: 'Bondra', nilai: 70, kelas: 'Adonis', isLogin: false }
console.log(updateData({ nilai: 65, kelas: 'Laravel' }))
// Output: { name: 'Bondra', nilai: 65, kelas: 'Laravel', isLogin: true }