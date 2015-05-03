$(document).ready(function(){

	var ifClick = 0;
	var target_last, target_now;

	$('li').click(function(event){
		
		if(ifClick==0)
		{			
			$('.wrap').fadeIn(500);
			$('.content').fadeIn(1000);
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
					console.log('a');
					break;
				}
				case "love": 
				{
					console.log('l');
					break;
				}
			}

		}
		else
		{
			
			console.log(target_last);
			if(this == target_last)
				{
					$('.wrap').fadeOut(500);
					$('.content').fadeOut(1000);
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
			$('.wrap').fadeOut(500);
			$('.content').fadeOut(1000);
			ifClick = 0;
	})
});