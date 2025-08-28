/* JS Project Assignment Deliverables */

let appName = 'JS Project Deliverables';
let clickCount = 0;

/* Different functions */ 
function checkAccess(name, age, isMember){
  if(!name || name.trim().length === 0){
    return 'Enter your name.';
  }
  if(age >= 18 && isMember){
    return `Welcome, ${name}! You have full access.`;
  } else if(age >= 18 && !isMember){
    return `Hi ${name} — you are adult but not a member. Consider joining!`;
  } else if(age < 18 && isMember){
    return `Hello ${name} — you are a member but under 18; limited access granted.`;
  } else {
    return `Sorry ${name}, you must be at least 18 or become a member.`;
  }
}


function addItemToList(itemText){
  if(!itemText || itemText.trim() === '') return false;
  const ul = document.getElementById('todoList');
  const li = document.createElement('li');
  li.textContent = itemText;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.style.marginLeft = '0.6rem';
  removeBtn.addEventListener('click', () => li.remove());
  li.appendChild(removeBtn);
  ul.appendChild(li);
  return true;
}

function clearList(){
  const ul = document.getElementById('todoList');
  while(ul.firstChild){ ul.removeChild(ul.firstChild); }
}

function greetUser(name){
  return `Hello, ${name.trim()} — nice to meet you!`;
}

/* Different Loops */ 
const sampleArray = ['Alpha','Beta','Gamma','Delta'];

function populateWithFor(){
  const out = document.getElementById('loopOutput');
  out.textContent = 'Populating list (for loop): ';
  clearList();
  for(let i=0;i<sampleArray.length;i++){
    addItemToList(`${i+1}. ${sampleArray[i]} (for)`);
  }
}

function populateWithWhile(){
  const out = document.getElementById('loopOutput');
  out.textContent = 'Populating list (while loop): ';
  clearList();
  let i = 0;
  while(i < sampleArray.length){
    addItemToList(`${i+1}. ${sampleArray[i]} (while)`);
    i++;
  }
}

function populateWithForOf(){
  clearList();
  let idx = 1;
  for(const item of sampleArray){
    addItemToList(`${idx++}. ${item} (for...of)`);
  }
}

/* DOM Interactions */ 

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('checkBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    const age = parseInt(document.getElementById('ageInput').value, 10) || 0;
    const isMember = document.getElementById('memberCheckbox').checked;
    const result = checkAccess(name, age, isMember);
    document.getElementById('part1Output').textContent = result;
  });

  document.getElementById('addItemBtn').addEventListener('click', () => {
    const text = document.getElementById('itemInput').value;
    const ok = addItemToList(text);
    if(ok){ document.getElementById('itemInput').value = ''; } 
    else { alert('Please enter a valid item.'); }
  });

  document.getElementById('clearListBtn').addEventListener('click', clearList);
  document.getElementById('forLoopBtn').addEventListener('click', populateWithFor);
  document.getElementById('whileLoopBtn').addEventListener('click', populateWithWhile);
  document.getElementById('toggleThemeBtn').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
  const countDisplay = document.getElementById('countDisplay');
  document.getElementById('countBtn').addEventListener('click', () => {
    clickCount += 1;
    countDisplay.textContent = clickCount;
  });
  document.getElementById('sampleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    document.getElementById('formMessage').textContent = `Form submitted. We'll email you at ${email}.`;
    e.target.reset();
  });
  populateWithForOf();
  console.log(`${appName} loaded.`);
});