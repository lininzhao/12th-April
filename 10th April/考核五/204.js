 //编写一个函数，实现文本输入框中选中的内容超过 5 个字符的时候，给出相应的提示。
    //期望：当前选中的内容已超过 5 个字符
    var text=document.getElementById('text');
    text.onselect=function(){
        var selectedtext=window.getSelection().toString();
        if(selectedtext.length>5){
            alert('当前选中内容超过5个字符');
        }
    }