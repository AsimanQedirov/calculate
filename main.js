function insert(_number){
    document.getElementById("text-input").value=document.getElementById("text-input").value+_number;
}
function minus(){
    document.getElementById("text-input").value= '-';
}
function clean(){
    document.getElementById("text-input").value= "";
}
function result(){
    var rest = document.getElementById("text-input").value;
    if(rest){
        document.getElementById("text-input").value=eval(rest);
    }

}