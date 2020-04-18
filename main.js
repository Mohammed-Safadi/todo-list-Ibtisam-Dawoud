$(document).ready(function()
{
    $(".add-to-task").on('click',function(e)
    {
    	e.preventDefault();
    	var task = $(".input_task").val();

    	if(task)
    	{
           $(".ul_list").append('<li><span>'+task+'</span><span class="btuShow"><a href="#" class="btuDone">Mark as Done</a>|  <a href="#" class="btuDelete">Delete</a></span></li>');
       
       }     
      	
   });


   
    $(document).on('click','.btuDone',function()
    {
    	$(this).parent().parent('li').addClass('done');

    });  



     $(document).on('click','.btuDelete',function()
     {
    	$(this).parent().parent('li').fadeOut();
    	
    });

});