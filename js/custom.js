      $(document).ready(function(){
         $('body').on('click', 'a', function(){
           if($(this).attr('href') != '#'){	
              chrome.tabs.create({url: $(this).attr('href')});
              return true;
           }
           else{
           	return true;
           }
         });
      }); 