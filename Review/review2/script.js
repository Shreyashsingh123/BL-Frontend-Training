const parent=document.getElementById('container1');
container1.addEventListener('click',(e)=>{
    const child=e.target;
    const body=document.getElementById('container1');
    body.style.backgroundColor=child.id;
});



const users = [
  { acc:1001, name:"Harsh",location:"Mirzapur", balance:12500, img:"https://tse2.mm.bing.net/th/id/OIP.Crq9sn3Qu3HyHwPJi2zW8QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},
  { acc:1002, name:"Virat", location:"Varanasi",balance:1555600, img:"https://th.bing.com/th/id/ODL.e213ea988e85462782d17a4736959c26?w=310&h=198&c=7&rs=1&bgcl=ffff14&r=0&o=6&dpr=1.3&pid=AlgoBlockDebug"},
  { acc:1003, name:"Vishal", balance:16900,location:"Prayagraj", img:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},
  { acc:1004, name:"Satyam", balance:13500,location:"Mathura", img:"https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"}
];

const container = document.getElementById("userContainer");
const userDetails = document.getElementById("userDetails");

function userdata(){
  container.innerHTML="";
  users.forEach((u,i)=>{
    container.innerHTML += `
      <div class="user-card">
        <img src="${u.img}">
        <h4>${u.name}</h4>
        <button onclick="viewDetails(${i})">View User Details</button>
      </div>
    `;
  });
}


function viewDetails(index){
    const u = users[index];
    userDetails.innerHTML = `
      <div class="details">
        <h3>User Details</h3>
        <p><b>Name:</b> ${u.name}</p>
        <p><b>Location:</b> ${u.location}</p> 
        <p><b>Account:</b> ${u.acc}</p>
        <p><b>Balance:</b> ₹${u.balance}</p>
  
        <input type="number" id="amount" placeholder="Enter amount">
        <button onclick="withdraw(${index})">Withdraw</button>
  
        <p id="msg"></p>
      </div>
    `;
  }

  
function withdraw(index){
  const amt = Number(document.getElementById("amount").value);
  const msg = document.getElementById("msg");

  if(amt<=0){
    msg.innerHTML="Invalid amount";
    msg.className="error";
    return;
  }

  if(amt > users[index].balance){
    msg.innerHTML="Insufficient Balance";
    msg.className="error";
    return;
  }

  users[index].balance -= amt;
  alert("Withdrawal Successful");
   
  userdata();
  viewDetails(index);
}

userdata();
