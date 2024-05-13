document.getElementById('addBtn').addEventListener('click', function() {
  const d = new Date();
  let text = d.toLocaleTimeString();
  if(Input.value ===''){
    alert('please enter task')
  }else{
    const taskText = Input.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <span>${text}</span>
        <button class="completebtn" style="background-color:green; border:1px solid green; marging:105px 0px;">Complete</button>
        <hr>
      `;
      taskList.appendChild(li);
      Input.value = '';
      li.querySelector(".completebtn").addEventListener('click', () => {
        li.remove(); 
      });
    }
  }
});



