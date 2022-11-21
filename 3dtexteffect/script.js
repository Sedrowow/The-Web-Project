$(document).ready(function(){
  $(".removed").each(function(){
    var description = $(this).attr("title");
    var element = $("<aside>"+description+"</aside>");
    var top = $(this).position().top;
    $(this).append(element);
    $(element).css('top',top);
    $(this).hover(function(){
      $(this).data('title', this.title).prop('title', null);
      $(this).find("aside").fadeIn('fast');
    },function(){
      $(this).prop('title', $(this).data('title'));
      $(this).find("aside").fadeOut('fast');
    })
  })
});