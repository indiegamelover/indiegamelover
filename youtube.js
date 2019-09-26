<style type='text/css'>
		p {margin-bottom:2em;}
		iframe,.ytLoader {display:block;margin:0 auto;width:50vw;height:37.5vw;border:0.5vw solid #ccc;}
		.ytLoader {position:relative;cursor:pointer;overflow:hidden;}
		.ytLoader>.cover {width:100%;height:auto;}
		.ytLoader>.playBtn {position:absolute;top:50%;left:50%;width:20%;height:auto;transform:translate(-50%,-50%);opacity:0.5;}
</style>
<script type='text/javascript'> 
		function youTubes_makeDynamic() {
			var $ytIframes = $('iframe[src*="youtube.com"]');
			$ytIframes.each(function (i,e) {
				var $ytFrame = $(e);
				var ytKey; var tmp = $ytFrame.attr('src').split(/\//); tmp = tmp[tmp.length - 1]; tmp = tmp.split('?'); ytKey = tmp[0];
				var $ytLoader = $('<div class="ytLoader">');
				$ytLoader.append($('<img class="cover" src="https://i.ytimg.com/vi/'+ytKey+'/hqdefault.jpg">'));
				$ytLoader.append($('<img class="playBtn" src="https://3.bp.blogspot.com/-OI0nhlpimc0/XYtTtF7UWjI/AAAAAAAAHeQ/Rscxb4wXLVU6iun9mT1Jpc8Tpa4zHo43wCLcBGAsYHQ/s1600/PlayButton100.png">'));
				$ytLoader.data('$ytFrame',$ytFrame);
				$ytFrame.replaceWith($ytLoader);
				$ytLoader.click(function () {
					var $ytFrame = $ytLoader.data('$ytFrame');
					$ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');
					$ytLoader.replaceWith($ytFrame);
				});
			});
		};
		$(document).ready(function () {youTubes_makeDynamic()});
</script>  