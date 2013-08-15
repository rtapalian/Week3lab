
			/*Richard Tapalian
				Lab 3
				08/07/2013
			*/
			/*The ad_metadata are the values in the JSON for the five ads*/
			var ad_metadata = {
				'ad0' : "This is the best ad it is advertising nothing",
				'ad1' : "Shop for all of your stereo needs at Best Buy",
				'ad2' : "Mcdonalds Home of the Big Mac",
				'ad3' : "New England Institute of Technology",
				'ad4' : "Celtics Official Website"
			};
			
			/*call the main function rand_ad_display*/
			rand_ad_display();
			
			
			function rand_ad_display (){
				
				var ad_div = document.getElementById("ad");/*accessing the div*/
				var ad_keys = [];/*array to call the JSON by number*/
				var ad_key = "";
				/*the for in loop adds the ad_metadata keys to the array*/
				for( ad_key in ad_metadata ) {
				ad_keys.push(ad_key);
			}	
			
				var ad_keys_len = ad_keys.length;/*gets the length of the array*/
				var rand_ad_key = getRandAdKey(ad_keys_len);/*calls the function to get the random value for ads*/
				var ad_key_value=ad_keys[rand_ad_key];/*calls the number between 0 and 4 from the random value*/
				var ad_metadata_value=ad_metadata[ad_key_value];/*gets the string from the corresponding key*/
				ad_div.innerHTML=ad_metadata_value;/*replaces the ad_div with the appropriate ad*/
				
				
				var str = ad_metadata_value; /*new variable var made to equal the string of the ad*/
				document.title = str.substr(0,15);/*replaces the main title with the first 15 letters of the ad*/
			
			}
			
			
			/*This is the function to get a random number that is based on the number of JSON objects
			rounded down to the next integer*/
			function getRandAdKey(len) {
				return Math.floor (Math.random()*len);
			
			}
			
			
			
		
