$(document).ready(function(){
			console.log("inside document ready");
			var $ul=$("#unorderList");
			var toDisplay={
				"url":"http://139.59.71.164:8002/upload/links?category=thanksgiving",
				"method":"GET",
				"dataType":"html",
			success:function(res){
					//alert(res);
					
					var i;
					var count=0;//counts no of images displayed
					//console.log(res.data);
					result= JSON.parse(res);
					//console.log(result.data);
					for (i=0;i<result.data.length;i++){
						//$("#picture").append(result.data[i].selfLink);
						var $img=$('<img>');
						$img.attr("src",result.data[i].selfLink);
						$img.attr("id","img_"+count);
						$img.css({"width":"350px","height":"250px"});
						$img.addClass("img-thumbnail");
						$img.addClass("img-responsive");
						$img.addClass("pxy-auto");
						$ul.append($img);
						count++;
						}
						//alert(count);
						$img.mousedown(function(event){
							if (event.which===3 || event.which===1)
								{
									//alert("right click!");
									var id=event.target.id;
									console.log("id:"+id);
								}		
						});
				},
			fail:function(){
					alert("cannot retrieve your pictures");
				}
			};//end of toDisplay
			$.ajax(toDisplay);
			
			$("#uploadFile").click(function()
			{
				var $selectedFile=document.getElementById("fileHolder").files;
				for (var i=0,f;f=$selectedFile[i];i++){
					console.log($selectedFile[i]);
					var $nameOfFile=$selectedFile[i].name;
				
				var uploadThis={
					"url":"http://139.59.71.164:8002/upload",
					"method":"POST",
					"data":{"name":$nameOfFile},
					success:function(res){
						console.log(res);
					},
					fail:function(){
						alert("Uploading the image failed");
					}
				};//end of uploadThis
				$.ajax(uploadThis);
				}
			});//end of click
		});//end for $(document).ready
		