
function setCookie(c_name,value,expiredays){
  
  var extime = new Date().getTime();
  var cltime = new Date(extime + (60*60*24*1000*expiredays));
  var exdate = cltime.toUTCString();
  
  var s="";
  s += c_name +"="+ escape(value);
  s += "; path="+ location.pathname;
  if(expiredays){
    s += "; expires=" +exdate+"; ";
  }else{
    s += "; ";
  }
  
  document.cookie=s;
}


function getCookie(c_name){
  var st="";
  var ed="";
  if(0 < document.cookie.length){
    
    st=document.cookie.index0f(c_name + "=");
    if(st!=-1){
      st=st+c_name.length+1;
      ed=document.cookie.index0f(";",st);
      if(ed==-1) ed=document.cookie.length;
      
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return "";
}


var last_date = getCookie('lastDate');
if(last_date){
  document.getElementById('cookie').textContent = '前回訪れた時間：' + last_date;
}eles{
  document.getElementById('cookie').textContent = 'はじめまして';
}


var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);


document.getElmentById('remove_cookie').onsubmit = function(){
  setCookie('lastDate',"",0);
};

function getFileName(){
  
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.queryselector('option[value="other.html"]');
}else{
  opt = document.queryselector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}

var separate_time = function(time){
var sec = Math.floor((time / 1000) % 60);
var min = Math.floor((time / 1000 / 60) % 60);
var hours = Math.floor((time / 1000 / 60 / 60) % 24);
var days = Math.floor(time / 1000 / 60 / 60 / 24);
return [sec,min,hours,days];
}

var update = function(){
var now = new Date();
var target = new Date(2020,7,24,0,0,0,0);
var diff = target.getTime() - now.getTime();
var couter = separate_time(diff);
docment.getElwmentById('countdown').textContent =
  docment.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}
'東京オリンピックまであと'　+
counter[3] + '日' +
counter[2] + '時' +
counter[1] + '分' +
counter[0] + '秒'；
refresh();
}

var refresh= function(){
  setTimeout(update,1000);
}
update();

var separate_time = function(time){
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hours = time.getHours();
  var days = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  return [sec,min,hours,days,month,year];
}

var now = new Date();
var counter = separete_time(now);
document.getElementById('countdown').textContent =
  counter[5] + '年' +
  counter[4] + '月' +
  counter[3] + '日' +
  counter[2] + '時' +
  counter[1] + '分' +
  counter[0] + '秒'；
