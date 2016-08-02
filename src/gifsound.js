// ==UserScript==
// @name         Gifsound enhancement script
// @namespace    https://github.com/khaosoffcthulhu/GifsoundScript
// @grant        none
// @version      0.2.0
// @description  this script changes youtube embed in gifsound so you can easily open the video from gifsound.
//               It also adds a block with top 10 links from musicgifstation and animegifsound
//               The code is horible but it works
// @author       khaosoffcthulhu
// @match        https://gifsound.com/*
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
      script.addEventListener('load', function() {
          var script = document.createElement("script");
	      script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
	          document.body.appendChild(script);
		    }, false);
		      document.body.appendChild(script);
		      }

		      // the guts of this userscript
		      function main() {
		          //Some css changes
			      //$("html, body").css("background-color","grey");//maybe Gainsboro

			          var vidframe = $("#ytsound").children("iframe").get(0);
				      var vidlink = vidframe.getAttribute("src");
				          var output = vidlink.split("&");
					      var str_output = output[0]+"&"+ output[1]+"&"+ output[4];
					          vidframe.setAttribute("src", str_output);
						      //vidframe.remove();//testing purposes
						          vidframe.setAttribute("width", 350);
							      var cover = $("#vidcover").attr("style", "position: absolute; width: 350px; height: 250px; text-align: center; background-color: white;");
							          console.log(output);
								      console.log(str_output);

								          var linktable = $("[style='margin-bottom:20px']");
									      //console.log(linktable);
									          var linktable_tr = linktable.children("tbody").children("tr:eq(0)");
										      linktable_tr.css( "color", "green" );
										          var first_td = linktable_tr.children("td:eq(0)");
											      var second_td_str = linktable_tr.children("td:eq(1)");
											      	
													second_td_str.after("<td width=\"33%\" valign=\"top\" id=\"musicstation\"></td>");
														first_td.attr('width',"33%");
														    first_td.attr('id', "first_embed");
														    	second_td_str.attr( "width", "33%" );
															    second_td_str.attr( "id", "second_embed" );
															    	
																    var gifsound_embed = second_td_str.children(".rembeddit").html();
																        gifsound_embed = "<div class=\"rembeddit\" style=\"font-family:verdana,arial,helvetica,sans-serif;background-color: #FFFFFF;border: 1px solid #336699;\">" + gifsound_embed + "</div>";
																	    //alert(gifsound_embed.html());
																	        second_td_str.html(gifsound_embed);
																		    
																		        second_td_str.children("b").remove();
																			    second_td_str.children("span").remove();
																			       
																			           
																				     
																				         
																					     $.ajax(
																					     		{
																										url: '//www.reddit.com/r/animegifsound/hot/.embed?limit=10&t=all',
																													type: 'GET',
																																crossDomain: true,
																																			dataType: 'jsonp',
																																			            success: function(content) { $("#first_embed").html(content);},//$("[style='margin-bottom:20px']").children("tbody").children("tr:eq(0)").children("td:eq(0)")[0].innerHTML = content; },
																																				    			error: function() { alert('Failed!'); },  
																																									}
																																									    );
																																									        $.ajax(
																																												{
																																															url: '//www.reddit.com/r/musicgifstation/hot/.embed?limit=10&t=all',
																																																		type: 'GET',
																																																					crossDomain: true,
																																																								dataType: 'jsonp',
																																																								            success: function(content) { $("#musicstation").html(content);},
																																																									    			error: function() { alert('Failed!'); },  
																																																														}
																																																														    );    
																																																														        
																																																															}

																																																															// load jQuery and execute the main function
																																																															addJQuery(main);
