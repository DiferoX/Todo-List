import displayProjectTask from "./index";

function addNewProject(date)
{
  /* ========== P R O J E C T S ========== */

  let allProjects = document.getElementById ('allProjects');
  let inputProjects = document.getElementById ('inputProjects');
  

  let firstProject = document.getElementById ('firstProject');
  firstProject.addEventListener ('click', function()
  {
    let h2Task = document.getElementById ('h2Task');
    h2Task.textContent = 'ToDo List';

    let dateProject = document.getElementById ('dateProject');
    dateProject.textContent = 'Fri Aug 05 2022 15:08:27 GMT-0500 (Colombia Standard Time)';

    let taskContent = document.getElementById ('taskContent');

    let display = document.getElementById ('allTasks');
    display.remove();

    let allTasks = document.createElement ('div');
    allTasks.setAttribute ('id', 'allTasks');
    taskContent.appendChild (allTasks);

    displayProjectTask(this.lastElementChild.textContent);
    //console.log (this.lastElementChild.textContent);
  });

  let projects = document.createElement ('div');
  projects.setAttribute ('class', 'projects');
  allProjects.appendChild (projects);
  projects.addEventListener ('click', function()
  {
    showTasks();
    displayProjectTask(this.childNodes[1].textContent);

    //console.log (this.childNodes);
  });

  let txtProject = document.createElement ('p');
  txtProject.textContent = stringUpperCase (inputProjects.value);
  projects.appendChild (txtProject);

  let dateProject = document.createElement ('h6');
  dateProject.textContent = date;
  projects.appendChild (dateProject);

  let imgProject = document.createElement ('img');
  imgProject.src = 'images/xmark.svg';
  imgProject.setAttribute ('class', 'imgProject');
  projects.appendChild (imgProject);
  imgProject.addEventListener('click', function()
  {
    let eraserDiv = this.parentNode;
    eraserDiv.remove();
  });

  showTasks();


  /* ========== T A S K ========== */

  function showTasks()
  {
    let h2Task = document.getElementById ('h2Task');
    h2Task.textContent = txtProject.textContent;

    let dateProject = document.getElementById ('dateProject');
    dateProject.textContent = date;

    let taskContent = document.getElementById ('taskContent');

    let display = document.getElementById ('allTasks');
    display.remove();

    let allTasks = document.createElement ('div');
    allTasks.setAttribute ('id', 'allTasks');
    taskContent.appendChild (allTasks);
  }

  function stringUpperCase(str)
  {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}

export default addNewProject;
