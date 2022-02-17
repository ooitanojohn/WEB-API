
//①jQuery基本事項の復習
$(function () {

})//function

//②外部htmlファイル読み込み演習
$(function () {
    //②外部htmlファイル読み込み演習（その①）
    $("#button01").click(function(){
        $.ajax({
            url:'load.html',
            dataType:'html'
        })
        .done(function(html){
                alert("OKOK!");
                $("#sample01").html(html);
        })
        .fail(function(html){
                alert("NG...");
        })
    });

    //ボタンクリックで非同期通信

    //②外部htmlファイル読み込み演習（その②）
    $("#box1 select").change(function(){
        var changeVal = $(this).val();
        console.log(changeVal)
        $.ajax({
            //url:'page1.html',
            url:changeVal+'.html',
            dataType:'html'
        })
        .done(function(data){
            console.log(data)
            $("#box2In").html(data);
        })//done
        .fail(function(data){
            alert("NG!")
        })//fail
    });

    //セレクトボックス選択で非同期通信

})//function
