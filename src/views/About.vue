<template>
  <div class="about">
    <div class="about-section">
  <h1>About Uniquest</h1>
    <p>
    Uniquest connects students across campuses for the purpose of trading goods and services. 
    Decide what you want and what you’re willing to give in return, 
    and be matched with other Uniquesters</p>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="/w3images/team1.jpg" alt="Melody" style="width:100%">
      <div class="container">
        <h2>Melody</h2>
        <p class="title">Programmer</p>
        <p>Back-End Programmer, Google Cloud API Whiz</p>
        <p>jane@example.com</p>
        <p><button class="button">Search</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team2.jpg" alt="Binta" style="width:100%">
      <div class="container">
        <h2>Binta</h2>
        <p class="title">Programmer</p>
        <p>Front-End Programmer</p>
        <p>bmouliom@uncc.edu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="Melissa" style="width:100%">
      <div class="container">
        <h2>Melissa</h2>
        <p class="title">Designer</p>
        <p>UI/UX Designer, Html Basic Coding </p>
        <p>mm11@live.unc.edu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="Kat" style="width:100%">
      <div class="container">
        <h2>Kat</h2>
        <p class="title">Designer</p>
        <p>Powerpoint and Framer Master</p>
        <p>kat.moskalik@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
  </div>
</template>


<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>