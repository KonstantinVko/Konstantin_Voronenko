console.log('first')

setTimeout(() => {
    console.log('timer! ')

    setTimeout(() => {
        console.log('inside timer')
        setInterval(()=>{
            console.log('intervals')
        })
    }, 5000)
}, 2000)