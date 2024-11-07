document.getElementById('btnAx').addEventListener('click',()=>{
    const cod = 3090
    if(document.getElementById('senha').value==cod){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')

    }
})