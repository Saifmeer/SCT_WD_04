let add = document.querySelector('button');

add.addEventListener('click', function (e) {
    let inputText = document.querySelector('input').value;
    let message = document.createElement('p');
    message.className = 'message';
    message.appendChild(document.createTextNode(inputText));
    let cheakBox = document.createElement('input')
    cheakBox.type = 'checkbox'
    cheakBox.className = 'checkBox'
    message.appendChild(cheakBox)
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete'
    message.appendChild(deleteButton);
    let main = document.querySelector('#main');
    main.appendChild(message);
    document.querySelector('input').value = '';

    deleteButton.addEventListener('click', function () {

        main.removeChild(message);
         
    })

     cheakBox.addEventListener('change', function(){

   
if (this.checked) {
   message.classList.add('completed');
}else{
    message.classList.remove('completed');
}
       
    })

});