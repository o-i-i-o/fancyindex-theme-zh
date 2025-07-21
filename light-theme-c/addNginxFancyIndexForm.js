// addNginxFancyIndexForm.js
// Add a small form to filter through the output of Nginx FancyIndex page
// © 2017, Lilian Besson (Naereen) and contributors,
// open-sourced under the MIT License, https://lbesson.mit-license.org/
// hosted on GitHub, https://GitHub.com/Naereen/Nginx-Fancyindex-Theme
var form = document.createElement('form');
var input = document.createElement('input');

input.name = 'filter';
input.id = 'search';
input.placeholder = '点击此处搜索当前列表文件';

form.appendChild(input);

// document.querySelector('h1').after(form);
// 插入到.header-container中，而不是h1后面
document.querySelector('.header-container').appendChild(form);

var listItems = [].slice.call(document.querySelectorAll('#list tbody tr'));

input.addEventListener('keyup', function () {
    var i,
        e = "^(?=.*\\b" + this.value.trim().split(/\s+/).join("\\b)(?=.*\\b") + ").*$",
        n = RegExp(e, "i");
    listItems.forEach(function(item) {
        item.removeAttribute('hidden');
    });
    listItems.filter(function(item) {
        i = item.querySelector('td').textContent.replace(/\s+/g, " ");
        return !n.test(i);
    }).forEach(function(item) {
  	    item.hidden = true;
    });
});
