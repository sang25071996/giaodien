// $(document).ready(function(){
// 	$('#menu2').click(function(){
// 	$('#menu2').hide();
// });
//});
$("a[href='#menu1'], #tab-menu1, #character").click(function(){
    $('#menu2').hide();
    $('#menu1').show("slow");
    $('html,body').scrollTo('.filter-character');
});
$("a[href='#menu2'], #tab-menu2, #artwork").click(function(){
    $('#menu1').hide();
    $('#menu2').show("slow");
    $('html,body').scrollTo('.filter-character');
});