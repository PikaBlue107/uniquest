<template>
    <div>
        <div class="header">
        <h1>UniQuest</h1>
        <p>Created by Students for students</p>
    </div>
<!-- Insert navbar Banner with Links that's just copy paste(?) :D-->

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

<h1 style="text-align: center;"> Profile </h1>

<!-- the profile picture + personal details-->


<div class="card">
    <img src="pearlhacks logo mini.png" alt="Username" style="width:100%">
    <h1>Example Username</h1>
    <p class="title">Example Quester</p>
  
    <a href="#"><i class="fa fa-dribbble"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <p><button>Contact</button></p>
  </div>

<!-- my quests-->

<h1 style="text-align: center;">My Quests</h1>
  <div class="container">
  <div class="card">
    <p class="title">Example Quest</p>
    <p>Quest Description</p>
    <p><button>Abandon?</button></p>
  </div>

  
  <div class="card">
    <p class="title">Example Quest</p>
    <p>Quest Description</p>
    <p><button>Abandon?</button></p>
  </div>

</div>

 <!-- quest log-->
 <h1 style="text-align: center;">Questlog</h1>

 <div class="row">
    <div class="column">
      <div class="card">
        <p class="title">Example Quest</p>
        <p>Quest Description</p>
        <p><button>Abandon?</button></p>
      </div>
    </div>
  
    <div class="column">
        <div class="card">
          <p class="title">Example Quest</p>
          <p>Quest Description</p>
          <p><button>Abandon?</button></p>
        </div>
      </div>
    
      <div class="column">
        <div class="card">
          <p class="title">Example Quest</p>
          <p>Quest Description</p>
          <p><button>Abandon?</button></p>
        </div>
      </div>
    
      <div class="column">
        <div class="card">
          <p class="title">Example Quest</p>
          <p>Quest Description</p>
          <p><button>Abandon?</button></p>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
  }
  
  .title {
    color: grey;
    font-size: 18px;
  }
  
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }
  
  button:hover, a:hover {
    opacity: 0.7;
  }

  /* the quest log
  might be better to do column cards?
  */

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
  .row {margin: 0 -5px;}
  
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
  /*
  .container {
      display: flex;}*/
</style>