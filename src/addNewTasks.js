import { projectsArray } from ".";

function addNewTask(TxtTask, trueFalse, priority, date)
{
  let allTasks = document.getElementById ('allTasks');
  //let inputAddTask = document.getElementById ('inputAddTask');

  let cardToDo = document.createElement ('div');
  cardToDo.setAttribute ('class', 'cardToDo');
  if (priority === 'High')
  {
    cardToDo.style.backgroundImage = 'linear-gradient(to top left, red, crimson, darkred, rgb(190, 50, 50), darkred)';
  }
  else
  {
    cardToDo.style.backgroundImage = 'linear-gradient(to top left, purple, rgb(0, 120, 175), rgb(0, 0, 100), rgb(0, 0, 100), rgb(0, 0, 100))';
  }

  let inputTask = document.createElement ('input');
  inputTask.setAttribute ('class', 'inputTask');
  inputTask.setAttribute ('id', 'inputTask');
  inputTask.value = TxtTask;
  inputTask.disabled = true;
  inputTask.addEventListener ('change', function()
  {
    let divParent = this.nextSibling;
    let divfirstChild = divParent.firstChild;
    let txtDateTask = divfirstChild.childNodes[0].textContent;

    projectsArray.forEach (object => 
    {
      object.task.forEach(element => 
      {
        if (element.date === txtDateTask)
        {
          element.txt = inputTask.value;
        }
      });
    });
  
    imgTaskUnlock.style.display = 'none';
    imgTasklock.style.display = 'block';
    inputTask.disabled = true;
  });

  let checkbox = document.createElement('input');
  checkbox.setAttribute ('class', 'checkbox');
  checkbox.setAttribute ('id', 'checked');
  checkbox.type = 'checkbox';
  
  if (trueFalse === true)
  {
    checkbox.checked = true;
    inputTask.style.textDecoration = 'line-through';
    inputTask.style.color = '#555';
  }
  else
  {
    checkbox.checked = false;
    inputTask.style.textDecoration = 'none';
    inputTask.style.color = 'white';
  }

  checkbox.addEventListener ('change', function()
  {
    let divParent = this.parentNode;
    let divlastChild = divParent.lastChild;
    let txtDateTask = divlastChild.childNodes[0].textContent
    
    //console.log (divlastChild.childNodes[0].textContent);
    
    projectsArray.forEach (object => 
    {
      object.task.forEach(element => 
      {
        if (element.date === txtDateTask)
        {
          if (element.check === false)
          {
            element.check = true;
          }
          else
          {
            element.check = false;
          }
          //console.log (element.txt, element.check);
        }
      });
    });

    if (checkbox.checked === true)
    {
      inputTask.style.textDecoration = 'line-through';
      inputTask.style.color = '#555';
    }
    else
    {
      inputTask.style.textDecoration = 'none';
      inputTask.style.color = 'white';
    }
  });

  let dateTask = document.createElement ('p');
  dateTask.setAttribute ('id', 'dateTask');
  dateTask.textContent = date;

  let imgToDo = document.createElement ('div');
  imgToDo.setAttribute ('class', 'imgToDo');

  let imgTaskUnlock = document.createElement ('img');
  imgTaskUnlock.src = 'images/unlock.svg';
  imgTaskUnlock.setAttribute ('class', 'imgTaskUnlock');
  imgTaskUnlock.style.display = 'none';
  imgTaskUnlock.addEventListener ('click', function()
  {
    imgTaskUnlock.style.display = 'none';
    imgTasklock.style.display = 'block';
    inputTask.disabled = true;
  });

  let imgTasklock = document.createElement ('img');
  imgTasklock.src = 'images/lock.svg';
  imgTasklock.setAttribute ('class', 'imgTasklock');
  imgTasklock.addEventListener ('click', function()
  {
    imgTaskUnlock.style.display = 'block';
    imgTasklock.style.display = 'none';
    inputTask.disabled = false;
  });

  let imgTask = document.createElement ('img');
  imgTask.src = 'images/trash.svg';
  imgTask.setAttribute ('class', 'imgTask');
  imgTask.addEventListener ('click', function()
  {
    /*
    let divParent = this.parentNode;
    let divfirstChild = divParent.firstChild;
    let txtDateTask = divlastChild.childNodes[0].textContent;

    projectsArray.forEach (object => 
    {
      object.task.forEach(element => 
      {
        if (element.date === txtDateTask)
        {
          if (element.check === false)
          {
            element.check = true;
          }
          else
          {
            element.check = false;
          }
          console.log (object.task);
        }
      });
    });
    */
    
    let div = this.parentNode;
    let eraserDiv = div.parentNode;
    eraserDiv.remove();
  });


  allTasks.appendChild (cardToDo);

  cardToDo.appendChild (checkbox);
  cardToDo.appendChild (inputTask);
  cardToDo.appendChild (imgToDo);

  imgToDo.appendChild (dateTask);
  imgToDo.appendChild (imgTaskUnlock);
  imgToDo.appendChild (imgTasklock);
  imgToDo.appendChild (imgTask);


  return inputAddTask.value;
}

export default addNewTask;
