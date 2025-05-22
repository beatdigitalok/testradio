<!-- ==Vivo Radio== -->
vw = 280; 
vh =  70; 
vl = (screen.width-(screen.width/40)-vw);
vl = 30;
vt = (screen.height/80);
vt = 30;
vs = '';
vs+= 'width='+vw+','+'height='+vh+','+'left='+vl+','+'top='+vt;
vwh = 660;
vhh = 195;
vsh = '';
vsh+= 'width='+vwh+','+'height='+vhh+','+'left='+vl+','+'top='+vt;

<!-- ==Vivo TV== -->
tw = 500;
th = 320;
tl = (screen.width-(screen.width/20)-tw);
tl = 30;
tt = (screen.height/80);
tt = 30;
ts = '';
ts+= 'width='+tw+','+'height='+th+','+'left='+tl+','+'top='+tt;

<!-- ==Ventana Medio== -->
rw = (screen.width-(screen.width/10));
rh = (screen.height-(screen.height/5));
rl = (screen.width/20);
rt = (screen.height/35);
rs = '';
rs+= 'scrollbars'+','+'toolbar'+',';
rs+= 'width='+rw+','+'height='+rh+','+'left='+rl+','+'top='+rt;

<!-- ==Clases Texto== -->
cla ='';
cla+='<link rel="stylesheet" type="text/css" href="normalize.css">';
cla+='<style type=text/css>';
cl  =' body { border: 0; margin-left: auto; margin-right: auto; padding: 0; overflow: hidden; text-align: center; }';
cl  =' table,tr,td { border: none; padding: none; margin-left: auto; margin-right: auto; }';
cla+=' html, body { background-color: skyblue; width: 100%; height: 100%; }';
cla+=' iframe { border: none; padding: none; margin-left: auto; margin-right: auto; overflow: hidden; }';
cla+=' img { border: none; padding: none; margin-left: auto; margin-right: auto; display: block; }';
cla+=' img.imglogo { width: 60px; height: 30px; }';
cla+='.CT {';
cla+='  color: black;';
cla+='  font-family: tahoma, arial, helvetica, sans-serif;';
cla+='  font-size: 11px;';
cla+='  font-weight: bold;';
cla+='}';
cla+='</style>';

<!-- Global site tag (gtag.js) - Google Analytics -->
gua ='';
gua+='<script async src="https://www.googletagmanager.com/gtag/js?id=UA-6631333-2"></script>';
gua+='<script>';
gua+='  window.dataLayer = window.dataLayer || [];';
gua+='  function gtag(){dataLayer.push(arguments);}';
gua+='  gtag("js", new Date());';
gua+='';
gua+='  gtag("config", "UA-6631333-2");';
gua+='</script>';

<!-- ==Google Universal Analytics== -->
gu ='';
gu+='<script async src="https://www.googletagmanager.com/gtag/js?id=G-4ZN0R0F7M4"></script>';
gu+='<script>';
gu+='  window.dataLayer = window.dataLayer || [];';
gu+='  function gtag(){dataLayer.push(arguments);}';
gu+='  gtag("js", new Date());';
gu+='';
gu+='  gtag("config", "G-4ZN0R0F7M4");';
gu+='</script>';

<!-- ==RA Control== -->
rac = '';
rac+='<table width=310 height=30 bgcolor=darkgray>';
rac+='<tr>';
rac+='<td width=20></td>';
rac+='<td width=36><embed width=36 height=26 type="audio/x-pn-realaudio-plugin" console=one nojava=true controls="PlayButton"></embed></td>';
rac+='<td width=26><embed width=26 height=26 type="audio/x-pn-realaudio-plugin" console=one nojava=true controls="StopButton"></embed></td>';
rac+='<td width=40></td>';
rac+='<td width=142><embed width=142 height=26 type="audio/x-pn-realaudio-plugin" console=one nojava=true controls="VolumeSlider"></embed></td>';
rac+='<td width=26><embed width=26 height=26 type="audio/x-pn-realaudio-plugin" console=one nojava=true controls="MuteCtrl"></embed></td>';
rac+='<td width=20></td>';
rac+='</tr>';
rac+='</table>';

function RAradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoRA='a'+Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width=500 height=70 cellspacing=0 cellpadding=0>';
rr+='<tr><td width=110>';
 rr+='<table width=110 height=70 cellspacing=0 cellpadding=0><tr><td>';
 rr+='<img class="imglogo" src="./png/'+Logo+'.png">';
 rr+='</td></tr></table>';
rr+='</td><td width=390>';
 rr+='<table width=390 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<a class=CT>'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width=390 height=50 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<iframe name="reprod" width="390" height="50" src="arra.html?var1='+VivoRA+'" scrolling="no"></iframe>';
 rr+='</td></tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function WMradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{                            
VivoWM='a'+Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width=500 height=70 cellspacing=0 cellpadding=0>';
rr+='<tr><td width=110>';
 rr+='<table width=110 height=70 cellspacing=0 cellpadding=0><tr><td>';
 rr+='<img class="imglogo" src="./png/'+Logo+'.png">';
 rr+='</td></tr></table>';
rr+='</td><td width=340>';
 rr+='<table width=340 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<a class=CT>'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width=340 height=50 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<iframe name="reprod" width="340" height="50" src="arwm.html?var1='+VivoWM+'" scrolling="no"></iframe>';
 rr+='</td></tr></table>';
rr+='</td><td width=50>';
 rr+='<table width=50 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<a target=reprod href="arwm.html?var1='+VivoWM+'">';
 rr+='<img src="ic---dwm.gif" width=40 height=15 border=0></a>';
 rr+='</td></tr></table>';
 rr+='<table width=50 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<a target=reprod href="arjwwm.html?var1='+VivoWM+'">';
 rr+='<img src="ic---djw.gif" width=40 height=15 border=0></a>';
 rr+='</td></tr></table>';
 rr+='<table width=50 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<a target=reprod href="arwinext.html?var1='+VivoWM+'">';
 rr+='<img src="ic---dre.gif" width=40 height=15 border=0></a>';
 rr+='</td></tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function MParrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arh5arrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function MPradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='a'+Vivo; VivoRA='a';
if (Vivo.charAt(Vivo.length-1) == "/") {VivoRA+=Vivo+'listen.pls';}  else {VivoRA+=Vivo;}
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclaudio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5audio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function OGarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arh5arrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function OGradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='a'+Vivo; VivoRA='a';
if (Vivo.charAt(Vivo.length-1) == "/") {VivoRA+=Vivo+'listen.pls';}  else {VivoRA+=Vivo;}
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclaudio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5audio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function AAarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/php/arrd.php?id='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function AAradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='a'+Vivo; VivoRA='a';
if (Vivo.charAt(Vivo.length-1) == "/") {VivoRA+=Vivo+'listen.pls';}  else {VivoRA+=Vivo;}
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclaudio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5audio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function AACarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function AACradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoAA='a'+Vivo; VivoRA='a'; 
if (Vivo.charAt(Vivo.length-1) == "/") {VivoRA+=Vivo+'listen.pls';}  else {VivoRA+=Vivo;}
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclaudio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5audio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function ICEarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function ICEradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoAA='a'+Vivo; VivoRA='a'; 
if (Vivo.charAt(Vivo.length-1) == "/") {VivoRA+=Vivo+'listen.pls';}  else {VivoRA+=Vivo;}
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclaudio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5audio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function SWarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arbbparrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function SWaudio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='http://playerservices.streamtheworld.com/api/livestream-redirect/'+Vivo+'_SC';
VivoMPant='http://playerservices.streamtheworld.com/api/livestream-redirect/'+Vivo+'_SC.mp3';
VivoMPx='http://playerservices.streamtheworld.com/api/livestream-redirect/'+Vivo+'AAC_SC';
VivoMPxx='http://playerservices.streamtheworld.com/api/livestream-redirect/'+Vivo+'_SC.aac';
VivoMPxxx='http://playerservices.streamtheworld.com/api/livestream-redirect/'+Vivo+'.mp3';
VivoMPxxxx='http://playerservices.streamtheworld.com/api/livestream-redirect/'+Vivo+'AAC.aac';
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclaudio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5audio.html?var1='+VivoMP+'" scrolling="no"></iframe>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arbbp.html?var1='+VivoMP+'" scrolling="no"></iframe>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function MTarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function MTaudio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='http://retransmisorasenelpais.cienradios.com.ar:8000/'+Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclaudio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5audio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arhtml5.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function LTarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function LTradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='a'+Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="arcl.html?var1='+VivoMP+'" scrolling="no"></iframe>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arjw.html?var1='+VivoMP+'" scrolling="no"></iframe>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arlt.html?var1='+VivoMP+'" scrolling="no"></iframe>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function CLarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function CLradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='a'+Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="arcl.html?var1='+VivoMP+'" scrolling="no"></iframe>';
  r  ='<iframe name="reprod" width="100%" height="30" src="arlt.html?var1='+VivoMP+'" scrolling="no"></iframe>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function JWarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function JWradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='a'+Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="arjw.html?var1='+VivoMP+'" scrolling="no"></iframe>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function FParrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function FPradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='a'+Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="arjwrtmp.html?var1='+VivoMP+'" scrolling="no"></iframe>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function AASarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function AASradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='http://srv-stream.sisdera.com:8000/'+Vivo+'%3Ftype%3D.flv';
VivoRA='http://srv-stream.sisdera.com:8000/'+Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width=500 height=70 cellspacing=0 cellpadding=0>';
rr+='<tr><td width=110>';
 rr+='<table width=110 height=70 cellspacing=0 cellpadding=0><tr><td>';
 rr+='<img class="imglogo" src="./png/'+Logo+'.png">';
 rr+='</td></tr></table>';
rr+='</td><td width=340>';
 rr+='<table width=340 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
  rr+='<a class=CT>'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width=340 height=50 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<iframe name="reprod" width="340" height="50" src="arrtmp.htm?var1='+VivoMP+'" scrolling="no"></iframe>';
 rr+='</td></tr></table>';
rr+='</td><td width=50>';
 rr+='<table width=50 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<a target=reprod href="arrtmp.htm?var1='+VivoMP+'">';
 rr+='<img src="ic---dfp.gif" width=40 height=15 border=0></a>';
 rr+='</td></tr></table>';
 rr+='<table width=50 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<a target=reprod href="arraudio.htm?var1='+VivoRA+'">';
 rr+='<img src="ic---dra.gif" width=40 height=15 border=0></a>';
 rr+='</td></tr></table>';
 rr+='<table width=50 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<a target=reprod href="arwinext.html?var1='+VivoRA+'">';
 rr+='<img src="ic---dre.gif" width=40 height=15 border=0></a>';
 rr+='</td></tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function SHDradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width=500 height=50 cellspacing=0 cellpadding=0><tr>';
r  ='<td width=220></td><td width=280>';
rr+='<td width=280>';
 rr+='<table width=280 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
  rr+='<a class=CT>'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width=280 height=30 cellspacing=0 cellpadding=0>';
 rr+='<tr><td width=10>';
 rr+='</td><td valign=top width=50>';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png">';
 rr+='</td><td width=220>';
  rr+='<td><iframe name="reprod" width=100% height="30" src="'+Vivo+'" scrolling="no"></iframe>';
 rr+='</td></tr></table>';
rr+='</td>';
rr+='</tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function USradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width=280 height=50 cellspacing=0 cellpadding=0><tr>';
rr+='<td width=280>';
 rr+='<table width=280 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
  rr+='<a class=CT>'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width=280 height=30 cellspacing=0 cellpadding=0>';
 rr+='<tr><td width=65>';
 rr+='</td><td valign=top width=50>';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png">';
 rr+='</td><td width=100>';
  rr+='<iframe name="reprod" width="100" height="30" src="arus.html?var1='+Vivo+'" scrolling="no"></iframe>';
 rr+='</td><td width=65>';
 rr+='</td></tr></table>';
rr+='</td>';
rr+='</tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function LVarrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function LVradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width=500 height=70 cellspacing=0 cellpadding=0>';
rr+='<tr><td width=110>';
 rr+='<table width=110 height=70 cellspacing=0 cellpadding=0><tr><td>';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png">';
 rr+='</td></tr></table>';
rr+='</td><td width=390>';
 rr+='<table width=390 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
  rr+='<a class=CT>'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width=390 height=50 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center>';
 rr+='<td><iframe name="reprod" width="390" height="50" src="arlv.html?var1='+Vivo+'" scrolling="no"></iframe>';
 rr+='</td></tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function IParrd(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width="280" height="50" cellspacing="0" cellpadding="0"><tr><td>';
 rr+='<table width="100%" height="20" cellspacing="0" cellpadding="0"><tr><td align="center">';
  rr+='<a class="CT">'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width="100%" height="30" cellspacing="0" cellpadding="0"><tr>';
 rr+='<td width="20"></td>';
 rr+='<td width="50" valign="top">';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png"></td>';
 rr+='<td width="190">';
  rr+='<iframe name="reprod" width="100%" height="30" src="https://radiosargentina.com.ar/arclarrd.html?var1='+Vivo+'" scrolling="no"></iframe></td>';
 rr+='<td width="20"></td>';
 rr+='</tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function IPradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width=500 height=70 cellspacing=0 cellpadding=0>';
rr+='<tr><td width=110>';
 rr+='<table width=110 height=70 cellspacing=0 cellpadding=0><tr><td>';
  rr+='<img class="imglogo" src="./png/'+Logo+'.png">';
 rr+='</td></tr></table>';
rr+='</td><td width=390>';
 rr+='<table width=390 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
  rr+='<a class=CT>'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width=390 height=50 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<iframe name="reprod" width="390" height="50" src="arip.html?var1='+Vivo+'" scrolling="no"></iframe>';
 rr+='</td></tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function DPYradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<table width=500 height=70 cellspacing=0 cellpadding=0>';
rr+='<tr><td width=110>';
 rr+='<table width=110 height=70 cellspacing=0 cellpadding=0><tr><td>';
 rr+='<img class="imglogo" src="./png/'+Logo+'.png">';
 rr+='</td></tr></table>';
rr+='</td><td width=390>';
 rr+='<table width=390 height=20 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center><td>';
 rr+='<a class=CT>'+Nomb+' '+Frec+' - '+Ciud+'</a>';
 rr+='</td></tr></table>';
 rr+='<table width=390 height=50 cellspacing=0 cellpadding=0>';
 rr+='<tr align=center>';
 rr+='<td><iframe name="reprod" width="390" height="50" src="http://www.desdeparaguay.com/images/play.swf?radio='+Vivo+'&permitir=07202812022014626630"></iframe>';
 rr+='</td></tr></table>';
rr+='</td></tr></table>';
rr+='</body>';

rr+='</html>';
var win = window.open("","vivora",vs);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function LCaudio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
Vivo ='http://stream.us.gslb.liquidcompass.net/'+Vivo;
AACradio(Nomb,Frec,Ciud,Prov,Logo,Vivo);
return
}

function LIVaudio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
Vivo ='http://www.live365.com/play/'+Vivo;
WMradio(Nomb,Frec,Ciud,Prov,Logo,Vivo);
return
}

function SNaudio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
Vivov ='http://nick9.surfernetwork.com/'+Vivo;
Vivo ='http://crystalout.surfernetwork.com:8001/'+Vivo+'_MP3';
MPradio(Nomb,Frec,Ciud,Prov,Logo,Vivo);
return
}

function ESPNradio(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
Vivo ='mms://a183.l1318236841.c13182.l.lm.akamaistream.net/D/183/13182/v0001/reflector:'+Vivo;
WMradio(Nomb,Frec,Ciud,Prov,Logo,Vivo);
return
}

function RAabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=310 height=250 bgcolor=darkgray>';
rr+='<tr><td height=10></td></tr>';
rr+='<tr>';
rr+='<td width=25></td>';
rr+='<td width=250 bgcolor=black align=center><embed width=240 height=210 type="audio/x-pn-realaudio-plugin" console=one nojava=true controls="ImageWindow"></embed></td>';
rr+='<td width=25></td>';
rr+='</tr>';
rr+='<tr><td height=10></td></tr>';
rr+='</table>';
rr+='<table width=330 height=20>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' - '+Ciud+'</a></b></td>';
rr+='</tr>';
rr+='</table>';
rr+='<table width=310 height=30 bgcolor=darkgray>';
rr+='<tr>';
rr+='<td align=center><embed width=300 height=30 type="audio/x-pn-realaudio-plugin" console=one nojava=true controls="StatusBar" src="'+Vivo+'" autostart="true"></embed></td>';
rr+='</tr>';
rr+='</table>';
rr+=rac;
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function WMabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoWM='a'; VivoWM+=Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="arwmtv.html?var1='+VivoWM+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function FPabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoFP='a'; VivoFP+=Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="arfwtv.html?var1='+VivoFP+'" scrolling="no"></iframe>';
r  ='<iframe name="repro" width="480" height="270" src="arfptv.html?var1='+VivoFP+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function IPabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="ariptv.html?var1='+Vivo+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function FVabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoLT='a'; VivoLT+=Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="arfvtv.html?var1='+VivoLT+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function USabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe width="480" height="270" src="../php/arus.php?id='+Vivo+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function LVabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="arlvtv.html?var1='+Vivo+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function LTabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoLT='a'; VivoLT+=Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="arcltv.html?var1='+VivoLT+'" scrolling="no"></iframe>';
r  ='<iframe name="repro" width="480" height="270" src="arjstv.html?var1='+VivoLT+'" scrolling="no"></iframe>';
r  ='<iframe name="repro" width="480" height="270" src="arjwtv.html?var1='+VivoLT+'" scrolling="no"></iframe>';
r  ='<iframe name="repro" width="480" height="270" src="arlttv.html?var1='+VivoLT+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function CLabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoLT='a'; VivoLT+=Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="arcltv.html?var1='+VivoLT+'" scrolling="no"></iframe>';
r  ='<iframe name="repro" width="480" height="270" src="arjwtv.html?var1='+VivoLT+'" scrolling="no"></iframe>';
r  ='<iframe name="repro" width="480" height="270" src="arlttv.html?var1='+VivoLT+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function SGabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="arsgtv.html?var1='+Vivo+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function FOabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="arfotv.html?var1='+Vivo+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function YTabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="./php/aryt.php?id='+Vivo+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function SHDabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="'+Vivo+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function MPabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoMP='a'; VivoMP+=Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
 rr+='<iframe name="repro" width="480" height="270" src="arhtml5audio.html?var1='+VivoMP+'" scrolling="no"></iframe></td>';
 r  ='<iframe name="repro" width="480" height="270" src="arhtml5.html?var1='+VivoMP+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function OGabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoOG='a'; VivoOG+=Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
 rr+='<iframe name="repro" width="480" height="270" src="arhtml5audio.html?var1='+VivoOG+'" scrolling="no"></iframe></td>';
 r  ='<iframe name="repro" width="480" height="270" src="arhtml5.html?var1='+VivoOG+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function ICEabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
VivoICE='a'; VivoICE+=Vivo;
rr ='';
rr+='<!DOCTYPE html>';
rr+='<html lang="es">';
rr+='<head>';
rr+='<meta charset="ISO-8859-1">';
rr+='<title>'+Nomb+' - '+Frec+'</title>';
rr+=cla;
rr+=gua;
rr+='</head>';

rr+='<body>';
rr+='<center>';
rr+='<table width=480 height=5><tr><td>';
rr+='</td></tr></table>';
rr+='<table width=480 height=270><tr><td>';
rr+='<iframe name="repro" width="480" height="270" src="arice.html?var1='+VivoICE+'" scrolling="no"></iframe>';
rr+='</td></tr></table>';
rr+='<table width=480 height=25>';
rr+='<tr align=center>';
rr+='<td><b><a class=CT>'+Nomb+' '+Frec+' - '+Ciud+' - '+Prov+'</a></b></td>';
rr+='</td></tr></table>';
rr+='</center>';
rr+='</body>';

rr+='</html>';
var win = window.open("", "vivotv",ts);
if (!win.opener) win.opener = self;
if (win.focus != null) win.focus();
with (win.document) {
  open("text/html", "replace");
  write(rr);
  close();
 }
return
}

function ITV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
Vivo ='mms://a1100.l2234351369.c22343.n.lm.akamaistream.net/D/1100/22343/v0001/reflector:'+Vivo;
WMabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo);
return
}

function BTV(Nomb,Frec,Ciud,Prov,Logo,Vivo)
{
Vivo ='rtmp://cp116697.live.edgefcs.net/live/BnazlkNDpCIcD-QkfyZCQKlRiiFnVa5I_640_360_1000@18679';
FPabreTV(Nomb,Frec,Ciud,Prov,Logo,Vivo);
return
}