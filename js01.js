var images=0;
		function test(){
			var a=document.getElementsByTagName("body");
			var b=document.createElement("div");	
			a[0].appendChild(b);
			var c=document.createElement("table");
			b.appendChild(c);
			for(var j=0;j<3;j++){
				var d=document.createElement("tr");
				c.appendChild(d);
				for(var i=0;i<3;i++){
					var e=document.createElement("td");
					d.appendChild(e);
					var f=document.createElement("img");
					f.style="margin-left:70%;width:300px;height:200px";
					e.appendChild(f);
					f.src="image/"+(i+images)+".jpg" ;
				}
				images+=3;
			}
		}
