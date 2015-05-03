$(document).ready(function(){

	var ifClick = 0;
	var target_last, target_now;

	$('li').click(function(event){
		
		if(ifClick==0)
		{			
			$('.wrap').fadeIn(250);
			$('.content').fadeIn(500);
			ifClick = 1;
			target_last = event.target;
			switch(event.target.id)
			{

				case "gallery": 
				{
					$('.content').load('gallery.html');
					break;
				}
				case "about": 
				{
					$('.content').load('about.html');
					break;
				}
				case "love": 
				{
					$('.content').load('vicvicvic.html');
					break;
				}
			}

		}
		else
		{
			
			console.log(target_last);
			if(this == target_last)
				{
					$('.wrap').fadeOut(250);
					$('.content').fadeOut(500);
					$('.content').load('vicvicvic.html');
				}
			else
					{
						switch(event.target.id)
						{

							case "gallery": 
							{
								$('.content').load('gallery.html');
								break;
							}
							case "about": 
							{
								$('.content').load('about.html');
								break;
							}
							case "vicvicvic": 
							{
								$('.content').load('vicvicvic.html');
								break;
							}
						}
				}
			ifClick = 0;
		}
	})

	$('body').on('click' , '.close', function(){
			$('.wrap').fadeOut(250);
			$('.content').fadeOut(500);
			$('.content').load('vicvicvic.html');
			ifClick = 0;
	})
});