import addNewProject from "./addNewProject";
import addNewTask from "./addNewTasks";


export let projectsArray = [];

projectsArray.push (
{
  title: 'ToDo List',
  date: 'Fri Aug 05 2022 15:08:27 GMT-0500 (Colombia Standard Time)',
  task: [
          {txt: 'bla bla bla 1', check: true, priority: 'High', date: 'Fri Aug 05 2022 15:09:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 2', check: true, priority: 'High', date: 'Fri Aug 05 2022 15:10:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 10', check: false, priority: 'High', date: 'Fri Aug 05 2022 15:18:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 13', check: false, priority: 'High', date: 'Fri Aug 05 2022 15:21:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 14', check: true, priority: 'High', date: 'Fri Aug 05 2022 15:22:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 3', check: true, priority: 'Low', date: 'Fri Aug 05 2022 15:11:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 4', check: false, priority: 'Low', date: 'Fri Aug 05 2022 15:12:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 5', check: false, priority: 'Low', date: 'Fri Aug 05 2022 15:13:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 6', check: true, priority: 'Low', date: 'Fri Aug 05 2022 15:14:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 7', check: true, priority: 'Low', date: 'Fri Aug 05 2022 15:15:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 8', check: false, priority: 'Low', date: 'Fri Aug 05 2022 15:16:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 9', check: true, priority: 'Low', date: 'Fri Aug 05 2022 15:17:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 11', check: true, priority: 'Low', date: 'Fri Aug 05 2022 15:19:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 12', check: true, priority: 'Low', date: 'Fri Aug 05 2022 15:20:00 GMT-0500 (Colombia Standard Time)'},
          {txt: 'bla bla bla 15', check: false, priority: 'Low', date: 'Fri Aug 05 2022 15:23:00 GMT-0500 (Colombia Standard Time)'},
        ]
});


/* ========== P R O J E C T S ========== */

displayProjectTask("Fri Aug 05 2022 15:08:27 GMT-0500 (Colombia Standard Time)");


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

  let priorityHigh = document.getElementById ('priorityHigh');
  let priority = '';
  if (priorityHigh.checked === true)
  {
    priority = 'High';
  }
  else
  {
    priority = 'Low';
  }

  let inputUpperCase = stringUpperCase (inputAddTask.value);
  let newDateTask = String(new Date());
  addNewTask (inputUpperCase, false, priority, newDateTask);
  let getDateProject = document.getElementById ('dateProject');

  projectsArray.forEach (object => 
  {
    if (object.date === getDateProject.textContent)
    {
      if (priorityHigh.checked === true)
      {
        object.task.unshift ({txt: inputAddTask.value, check: false, priority: 'High', date: newDateTask});
      }
      else
      {
        object.task.push ({txt: inputAddTask.value, check: false, priority: 'Low', date: newDateTask});
      }
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
    if (object.date === (a))
    {
      object.task.forEach(element => 
      {
        addNewTask(element.txt, element.check, element.priority, element.date);
      });
    }
  });
}

function stringUpperCase(str)
{
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showTasksMenu()
{
  let taskContent = document.getElementById ('taskContent');

  let display = document.getElementById ('allTasks');
  display.remove();

  let allTasks = document.createElement ('div');
  allTasks.setAttribute ('id', 'allTasks');
  taskContent.appendChild (allTasks);
}


/* ========== M E N U ========== */
let btnOption = 1;

let btnAll = document.getElementById ('btnAll');
btnAll.addEventListener ('click', function()
{
  btnOption = 1;
  showTasksMenu();
  let dateProject = document.getElementById ('dateProject');
  
  projectsArray.forEach (object => 
  {
    if (object.date === dateProject.textContent)
    {
      object.task.forEach(element => 
      {
        addNewTask(element.txt, element.check, element.priority, element.date);
      });
    }
  });
});

let btnPending = document.getElementById ('btnPending');
btnPending.addEventListener ('click', function()
{
  btnOption = 2;
  showTasksMenu();
  let dateProject = document.getElementById ('dateProject');
  
  projectsArray.forEach (object => 
  {
    if (object.date === dateProject.textContent)
    {
      object.task.forEach(element => 
      {
        if (element.check === false)
        {
          addNewTask(element.txt, element.check, element.priority, element.date);
        }
      });
    }
  });
});

let btnCompleted = document.getElementById ('btnCompleted');
btnCompleted.addEventListener ('click', function()
{
  btnOption = 3;
  showTasksMenu();
  let dateProject = document.getElementById ('dateProject');
  
  projectsArray.forEach (object => 
  {
    if (object.date === dateProject.textContent)
    {
      object.task.forEach(element => 
      {
        if (element.check === true)
        {
          addNewTask(element.txt, element.check, element.priority, element.date);
        }
      });
    }
  });
});

let btnPriorityHigh = document.getElementById ('btnPriorityHigh');
btnPriorityHigh.addEventListener ('click', function()
{
  showTasksMenu();
  let dateProject = document.getElementById ('dateProject');
  if (btnOption === 1)
  {
    projectsArray.forEach (object => 
    {
      if (object.date === dateProject.textContent)
      {
        object.task.forEach(element => 
        {
          if (element.priority === 'High')
          {
            addNewTask(element.txt, element.check, element.priority, element.date);
          }
        });
      }
    });
  }
  else if (btnOption === 2)
  {
    projectsArray.forEach (object => 
    {
      if (object.date === dateProject.textContent)
      {
        object.task.forEach(element => 
        {
          if ((element.check === false) && (element.priority === 'High'))
          {
            addNewTask(element.txt, element.check, element.priority, element.date);
          }
        });
      }
    });
  }
  else
  {
    projectsArray.forEach (object => 
    {
      if (object.date === dateProject.textContent)
      {
        object.task.forEach(element => 
        {
          if ((element.check === true) && (element.priority === 'High'))
          {
            addNewTask(element.txt, element.check, element.priority, element.date);
          }
        });
      }
    });
  }
});

let btnPriorityLow = document.getElementById ('btnPriorityLow');
btnPriorityLow.addEventListener ('click', function()
{
  showTasksMenu();
  let dateProject = document.getElementById ('dateProject');
  if (btnOption === 1)
  {
    projectsArray.forEach (object => 
    {
      if (object.date === dateProject.textContent)
      {
        object.task.forEach(element => 
        {
          if (element.priority === 'Low')
          {
            addNewTask(element.txt, element.check, element.priority, element.date);
          }
        });
      }
    });
  }
  else if (btnOption === 2)
  {
    projectsArray.forEach (object => 
    {
      if (object.date === dateProject.textContent)
      {
        object.task.forEach(element => 
        {
          if ((element.check === false) && (element.priority === 'Low'))
          {
            addNewTask(element.txt, element.check, element.priority, element.date);
          }
        });
      }
    });
  }
  else
  {
    projectsArray.forEach (object => 
    {
      if (object.date === dateProject.textContent)
      {
        object.task.forEach(element => 
        {
          if ((element.check === true) && (element.priority === 'Low'))
          {
            addNewTask(element.txt, element.check, element.priority, element.date);
          }
        });
      }
    });
  }
});


export default displayProjectTask;
