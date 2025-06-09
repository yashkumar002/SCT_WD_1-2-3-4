
function addTask() {
  const taskText = document.getElementById('taskText').value;
  const taskDateTime = document.getElementById('taskDateTime').value;
  if (!taskText) return;
/* Created By Yash kumar Banjare... */
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.className = 'task-item';

  li.innerHTML = `
    <span>${taskText} <small>(${taskDateTime})</small></span>
    <div>
      <button onclick="completeTask(this)">✔</button>
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;

  taskList.appendChild(li);
  document.getElementById('taskText').value = '';
  document.getElementById('taskDateTime').value = '';
}
/* Created By Yash kumar Banjare... */
function completeTask(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle('completed');
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const span = li.querySelector('span');
  const currentText = span.textContent.split('(')[0].trim();
  const newText = prompt('Edit task:', currentText);
  if (newText !== null && newText.trim() !== '') {
    const dateMatch = span.textContent.match(/\(.*\)/);
    const datePart = dateMatch ? dateMatch[0] : '';
    span.innerHTML = `${newText} <small>${datePart}</small>`;
  }
}
/* Created By Yash kumar Banjare... */

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}


function addTask() {
  const taskText = document.getElementById('taskText').value;
  const taskDateTime = document.getElementById('taskDateTime').value;
  if (!taskText) return;

  const li = document.createElement('li');
  li.className = 'task-item';

  li.innerHTML = `
    <span>${taskText} <small>(${taskDateTime})</small></span>
    <div>
      <button onclick="completeTask(this)">✔</button>
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;
/* Created By Yash kumar Banjare... */
  document.getElementById('taskList').appendChild(li);
  document.getElementById('taskText').value = '';
  document.getElementById('taskDateTime').value = '';
  updateTaskCounts();
}

function completeTask(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle('completed');
  updateTaskCounts();
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const span = li.querySelector('span');
  const currentText = span.textContent.split('(')[0].trim();
  const newText = prompt('Edit task:', currentText);
  if (newText !== null && newText.trim() !== '') {
    const dateMatch = span.textContent.match(/\(.*\)/);
    const datePart = dateMatch ? dateMatch[0] : '';
    span.innerHTML = `${newText} <small>${datePart}</small>`;
  }
}
/* Created By Yash kumar Banjare... */
function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
  updateTaskCounts();
}

function filterTasks(type) {
  const tasks = document.querySelectorAll('.task-item');
  tasks.forEach(task => {
    const isCompleted = task.classList.contains('completed');
    if (type === 'all') {
      task.style.display = 'flex';
    } else if (type === 'completed') {
      task.style.display = isCompleted ? 'flex' : 'none';
    } else if (type === 'pending') {
      task.style.display = isCompleted ? 'none' : 'flex';
    }
  });
}
/* Created By Yash kumar Banjare... */

function updateTaskCounts() {
  const tasks = document.querySelectorAll('.task-item');
  const completed = document.querySelectorAll('.task-item.completed');
  const total = tasks.length;
  const done = completed.length;
  const pending = total - done;

  document.getElementById('totalCount').textContent = total;
  document.getElementById('completedCount').textContent = done;
  document.getElementById('pendingCount').textContent = pending;
}

/* Created By Yash kumar Banjare... */
