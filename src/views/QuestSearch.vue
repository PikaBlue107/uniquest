<template>
    <div>
        <div>
        <div class="header">
        <h1>UniQuest</h1>
        <p>Created by Students for students</p>
    </div>
<!-- Insert navban Banner with Links that's just copy paste(?) :D-->

<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Logo</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </div>
</nav>

<h1>Search Quests</h1>

<div style="background-color:rgb(255, 246, 239);color:black;padding:20px;">
<!-- these divs should be just a small block; mot sure how to make it just a small blockcolors temporary-->
<!-- added p, not sure if needed? They're just to be two floating input boxes-->
<div class="topnav">
    <input type="text" placeholder="Search..">
  </div>  


  <label for="cars">Filter:</label>
  <select name="item" id="item">
    <option value="Books">Books</option>
    <option value="Study Buddy">Study Buddy</option>
    <option value="Art">Art</option>
    <option value="Food">Food</option>
    <option value="Tutoring">Tutoring</option>
    <option value="Tickets">Tickets</option>
    <option value="Other">Other</option>
  </select> 

  <br>

  <br>

<div class="row">
  <div class="column">
    <div class="card">
      <h3>Quest for tickets</h3>
      <p>Hi everyone! My name is Jane and I am looking for 2 tickets to the game this weekend! I am willing to reward you with home baked cookies and some boba.</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Quest for Study Buddy</h3>
      <p>Hi I'm Zack and I'm looking for a study buddy in Calc 1. If you are interested, I can reward you with some home-baked banana bread. Please fulfill my quest!</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Quest for biology tutor</h3>
      <p>Hello all! I am Katie and I am searching for a tutor for Bio 101. I am willing to pay $15/hr!</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Quest for art</h3>
      <p>Hey everyone! I'm Amy and I'm looking for some art to gift my friend for her birthday coming up. I am willing to pay up to $35! Help fulfill my quest!</p>
    </div>
  </div>
</div>

<br>

<button type="button">Save</button>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  methods: {
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    },

    filterFunction() {
      var input, filter, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      var div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        var txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    },
  },
};
</script>

<style>
Dropdown Button
.dropbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: #3e8e41;
}

/* 
#myInput {
  box-sizing: border-box;
  background-image: url("@/assets/search_icon.png");
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 14px 20px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
}

#myInput:focus {
  outline: 3px solid #ddd;
} */

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  border: 1px solid #ddd;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #ffd0a3;
}
</style>