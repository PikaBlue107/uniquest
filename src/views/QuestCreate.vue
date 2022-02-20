<template>
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
<div style="background-color:rgb(221, 169, 101);color:black;padding:10px;">
<h1>Create Quest</h1>
</div>
<div style="background-color:rgb(148, 129, 129);color:black;padding:60px;">
    <h2>Quest</h2>
<!-- these divs should be just a small block; mot sure how to make it just a small blockcolors temporary-->
<!-- added p, not sure if needed? They're just to be two floating input boxes-->

<div style="background-color:rgb(219, 193, 193);color:black;padding:20px;"><p><a href="create want.html">Do you want something?</a></p></div>
<br>
<div style="background-color:rgb(219, 193, 193);color:black;padding:20px;"><p><a href="create give.html">Are you giving something?</a></p></div>

</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

input[type=text] {
    width: 100px;
    box-sizing: border-box;
    border: 2px solid #cccccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    /* background-image: url('@/assets/search_icon.png'); */
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus
{
    width: 50%;
}
form {
    text-align: right;
}
img {
    height: 50%;
    width: 50%;
}
/* Remove the navbar's default margin-bottom and rounded borders */
.navbar {
    margin-bottom: 0;
    border-radius: 0;
}

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
.row.content {height: 450px}

/* Set gray background color and 100% height */
/*.sidenav {*/
/*    padding-top: 20px;*/
/*    background-color: #f1f1f1;*/
/*    height: 100%;*/
/*}*/

/* Set black background color, white text and some padding */
footer {
    background-color: #555;
    color: white;
    padding: 15px;
}

/* On small screens, set height to 'auto' for sidenav and grid */
/*@media screen and (max-width: 767px) {*/
/*    .sidenav {*/
/*        height: auto;*/
/*        padding: 15px;*/
/*    }*/
    .row.content {height:auto;
}
/* this is for the column box */
{
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
    float: right;
    width: 25%;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    align-content: center;
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
        width: 50%;
        display: block;
        margin-bottom: 10px;
        text-align: center;
        align-items: center;
        align-content: center;
    }
}

/* Style the counter cards */
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    /*background-color: #f1f1f1;*/
    position:relative;
    bottom: 0;
    right:0;
    clear:right;
}
.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -60px;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}

</style>