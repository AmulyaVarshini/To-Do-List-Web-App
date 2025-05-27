document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') addTask();
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
      li.className = 'task-item';
  
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const buttonGroup = document.createElement('div');
      buttonGroup.className = 'task-buttons';
  
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.className = 'complete-btn';
      completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      buttonGroup.appendChild(completeBtn);
      buttonGroup.appendChild(deleteBtn);
  
      li.appendChild(taskSpan);
      li.appendChild(buttonGroup);
  
      taskList.appendChild(li);
      taskInput.value = '';
      taskInput.focus();
    }
  });
  