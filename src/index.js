import addNewProject from "./addNewProject";
import addNewTask from "./addNewTasks";


export let projectsArray = [];


/* ========== P R O J E C T S ========== */

let addProjects = document.getElementById ('addProjects');
let inputProjects = document.getElementById ('inputProjects');

let showAddProjects = document.getElementById ('showAddProjects');
showAddProjects.addEventListener ('click', function()
{
  showAddProjects.style.display = 'none';
  addProjects.style.display = 'flex';
});

let btnAceptProject = document.getElementById ('btnAceptProject');
btnAceptProject.addEventListener ('click', function()
{
  showAddProjects.style.display = 'flex';
  addProjects.style.display = 'none';

  let newDateProject = String(new Date());
  addNewProject(newDateProject);
    
  projectsArray.push ({title: inputProjects.value, date: newDateProject, task: []});

  //console.log (projectsArray);

  inputProjects.value = '';
});

let btnCancelProject = document.getElementById ('btnCancelProject');
btnCancelProject.addEventListener ('click', function()
{
  inputProjects.value = '';
  showAddProjects.style.display = 'flex';
  addProjects.style.display = 'none';
});


/* ========== T A S K ========== */

let addTask = document.getElementById ('addTask');
let showAddToDo = document.getElementById ('showAddToDo');
showAddToDo.addEventListener ('click', function()
{
  showAddToDo.style.display = 'none';
  addTask.style.display = 'flex';
});

let inputAddTask = document.getElementById ('inputAddTask');

let btnAceptTask = document.getElementById ('btnAceptTask');
btnAceptTask.addEventListener ('click', function()
{
  showAddToDo.style.display = 'flex';
  addTask.style.display = 'none';

  let inputUpperCase = stringUpperCase (inputAddTask.value);
  let newDateTask = String(new Date());
  addNewTask (inputUpperCase, false, newDateTask);
  let getDateProject = document.getElementById ('dateProject');

  projectsArray.forEach (object => 
  {
    if (object.date === getDateProject.textContent)
    {
      object.task.push ({txt: inputAddTask.value, check: false, date: newDateTask});
    }
  });
  inputAddTask.value = '';
});

let btnCancelTask = document.getElementById ('btnCancelTask');
btnCancelTask.addEventListener ('click', function()
{
  inputAddTask.value = '';
  showAddToDo.style.display = 'flex';
  addTask.style.display = 'none';
});

function displayProjectTask(a)
{
  projectsArray.forEach (object => 
  {    
    if (object.date === (a[1].textContent))
    {
      object.task.forEach(element => 
      {
        addNewTask(element.txt, element.check, element.date);
      });
    }
  });
}

function stringUpperCase(str)
{
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default displayProjectTask;
