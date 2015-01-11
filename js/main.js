$(document).ready(function(){
	
	$('#stars').hover(
		function() {
			$('#stars-text').css('display', 'inline-block');
			$(this).css('cursor', 'pointer');
		}, function() {
			$('#stars-text').css('display', 'none');
			$(this).css('cursor', 'normal');
		}
	);
	
	$('#stars').click(function() {
		makeStars();
		$('#stars-text').remove();
	});
	
});

/* returns a random rgb triple */
function randomRgb()
{
	var rgb = {
		r: 0,
		g: 0,
		b: 0
	};
	
	for (var i in rgb)
	{
		rgb[i] = Math.floor(Math.random() * 255);
	}
	
	$('#random').css('background-color', 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')');
	
	return rgb;
}

function makeStars()
{
	var width = $('#stars').width();
	var height = $('#stars').height();
	
	var xPos = $('#stars').position().left;
	var yPos = $('#stars').position().top;

	for (var i = 0; i < 500; i++)
	{
		var x = xPos + Math.floor(Math.random() * width);
		var y = yPos + Math.floor(Math.random() * height);
		
		var size = Math.floor(Math.random() * 4);
		
		var color = randomRgb();
		
		$('#stars').append('<div style="width: ' + size + 'px; height: ' + size + 'px; background-color: rgb(' + color.r + ',' + color.g + ',' + color.b + '); position: absolute; left: ' + x + 'px; top: ' + y + 'px;"></div>');
	}
}