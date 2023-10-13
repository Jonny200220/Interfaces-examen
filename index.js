let listElements = document.querySelectorAll('.list_button--click')

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        // console.log('Alerta');

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu =  listElement.nextElementSibling;
        console.log(menu);
    })
})
