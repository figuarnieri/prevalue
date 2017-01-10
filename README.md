# Prevalue
Pre value fixed on input.

##Install  
```html
<link rel="stylesheet" href="css/prevalue.css">  
<script src="js/jquery-3.1.1.js"></script>  
<script src="js/prevalue.js"></script>
```

##Use  
```html
<input class="input1" data-prevalue="R$" name="Valor1" id="Valor1">  
```
or  
```html
<input class="input2" data-prevalue-end="@gmail.com" name="Valor2" id="Valor2">  
```
or  
```html
<input class="input3" name="Valor3" id="Valor3">  
<script>$('.input2').prevalue({value: 'R$'});</script>
```
or  
```html
<input class="input4" name="Valor4" id="Valor4">  
<script>$('.input4').prevalue({value: '@gmail.com',end: true});</script>
```

##Exemple
<a href="https://cdn.rawgit.com/figuarnieri/prevalue/master/index.html" target="_blank">External Link</a>
