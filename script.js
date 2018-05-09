$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
     return false;
   });
 });

 var e = document.getElementById('homehover');
 e.onmouseover = function() {
   document.getElementById('popup').style.display = 'block';
 }

 e.onmouseout = function() {
   document.getElementById('popup').style.display = 'none';
 }

 var e = document.getElementById('abouthover');
 e.onmouseover = function() {
   document.getElementById('popup').style.display = 'block';
 }

 e.onmouseout = function() {
   document.getElementById('popup').style.display = 'none';
 }

 var e = document.getElementById('projectshover');
 e.onmouseover = function() {
   document.getElementById('popup').style.display = 'block';
 }

 e.onmouseout = function() {
   document.getElementById('popup').style.display = 'none';
 }

 var e = document.getElementById('contacthovershover');
 e.onmouseover = function() {
   document.getElementById('popup').style.display = 'block';
 }

 e.onmouseout = function() {
   document.getElementById('popup').style.display = 'none';
 }
