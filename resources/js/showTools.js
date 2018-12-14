var openEnderContent = '&lt;p&gt;&lt;span style="color: #ff0000;"&gt;DDD&lt;/span&gt;!!!!!&lt;strong&gt;666666666666&lt;/strong&gt;&lt;/p&gt;';

$('#open_ender_output').html(
  // create an element where the html content as the string
  $('<div/>', {
    html: openEnderContent
  // get text content from element for decoded text  
  }).text()
)