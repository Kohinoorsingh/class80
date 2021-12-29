student_name_array=[];
function submit(){
    display_name_array=[];
    for (var i=1;i<=4;i++){
        var name=document.getElementById("name_of_the_student_"+i).value;
        console.log(name);
        student_name_array.push(name);
    }
    console.log(student_name_array);
    var length=student_name_array.length;
    console.log(length);

    for (var j=0;j<length;j++){
        display_name_array.push("<h4> name- "+student_name_array[j]+"</h4>");
        console.log(display_name_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_name_array;
    var remove_commas=display_name_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
}
function sorting(){
    student_name_array.sort();
    console.log(student_name_array);
    display_name_array_sorting=[];
    var length=student_name_array.length;
    console.log(length);

    for (var j=0;j<length;j++){
        display_name_array_sorting.push("<h4> name- "+student_name_array[j]+"</h4>");
        console.log(display_name_array_sorting);
    }
    var remove_commas=display_name_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}