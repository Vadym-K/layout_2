//--map--//

function initialize() {
	var mapOptions = {
		zoom: 15,
		styles: [{
			"elementType": "geometry",
			"stylers": [{
				"color": "#212121"
			}]
		}, {
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#fff"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#fff"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#bdbdbd"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#fff"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#fff"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#fff"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#fff"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#000000"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#8a8a8a"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#373737"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#3c3c3c"
			}]
		}, {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [{
				"color": "#4e4e4e"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		}, {
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#181818"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#3d3d3d"
			}]
		}],
		center: new google.maps.LatLng(38.7078322, -77.0185837)
	}

	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
	var image = 'img/map-marker.png';
	var myLatLng = new google.maps.LatLng(38.7087, -77.023);
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
	var contentString = '<h2>Hey , We are here!<h2>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	marker.addListener('click', function() {
		map.setZoom(20);
		map.setCenter(marker.getPosition());
	});
}
google.maps.event.addDomListener(window, 'load', initialize);



// var markersData = [{
// 	lat: 52.42719999,
// 	lng: 16.93710111,
// 	name: "Hey there",
// 	address: "adress"
// }];


// var map, infoWindow;

// function initMap() {
// 	var centerLatLng = new google.maps.LatLng(52.42765752, 16.95549407);
// 	var mapOptions = {
// 		center: centerLatLng,
// 		styles: [{
// 			"featureType": "water",
// 			"elementType": "all",
// 			"stylers": [{
// 				"hue": "000"
// 			}, {
// 				"saturation": 55
// 			}, {
// 				"lightness": -6
// 			}, {
// 				"visibility": "on"
// 			}]
// 		}, {
// 			"featureType": "water",
// 			"elementType": "labels",
// 			"stylers": [{
// 				"hue": "#000"
// 			}, {
// 				"saturation": 55
// 			}, {
// 				"lightness": -6
// 			}, {
// 				"visibility": "off"
// 			}]
// 		}, {
// 			"featureType": "poi.park",
// 			"elementType": "all",
// 			"stylers": [{
// 				"hue": "000"
// 			}, {
// 				"saturation": -70
// 			}, {
// 				"lightness": 20
// 			}, {
// 				"visibility": "on"
// 			}]
// 		}, {
// 			"featureType": "landscape",
// 			"elementType": "geometry",
// 			"stylers": [{
// 				"hue": "grey"
// 			}, {
// 				"saturation": -100
// 			}, {
// 				"lightness": 40
// 			}, {
// 				"visibility": "on"
// 			}]
// 		}, {
// 			"featureType": "landscape",
// 			"elementType": "labels",
// 			"stylers": [{
// 				"hue": "#ffffff"
// 			}, {
// 				"saturation": -100
// 			}, {
// 				"lightness": 100
// 			}, {
// 				"visibility": "off"
// 			}]
// 		}, {
// 			"featureType": "road",
// 			"elementType": "geometry",
// 			"stylers": [{
// 				"hue": "red"
// 			}, {
// 				"saturation": -10
// 			}, {
// 				"lightness": 10
// 			}, {
// 				"visibility": "on"
// 			}]
// 			// }, {
// 			// 	"featureType": "road",
// 			// 	"elementType": "labels",
// 			// 	"stylers": [{
// 			// 		"hue": "#000"
// 			// 	}, {
// 			// 		"saturation": -70
// 			// 	}, {
// 			// 		"lightness": -10
// 			// 	}, {
// 			// 		"visibility": "on"
// 			// 	}]
// 		}, {
// 			"featureType": "road.arterial",
// 			"elementType": "geometry",
// 			"stylers": [{
// 				"hue": "#ffcc00"
// 			}, {
// 				"saturation": 100
// 			}, {
// 				"lightness": -20
// 			}, {
// 				"visibility": "simplified"
// 			}]
// 		}, {
// 			"featureType": "road.highway",
// 			"elementType": "geometry",
// 			"stylers": [{
// 				"hue": "#ffcc00"
// 			}, {
// 				"saturation": 100
// 			}, {
// 				"lightness": -2
// 			}, {
// 				"visibility": "on"
// 			}]
// 		}, {
// 			"featureType": "poi.school",
// 			"elementType": "all",
// 			"stylers": [{
// 				"hue": "#d7e4e4"
// 			}, {
// 				"saturation": -100
// 			}, {
// 				"lightness": 50
// 			}, {
// 				"visibility": "on"
// 			}]
// 		}],
// 		zoom: 13
// 	};
// 	map = new google.maps.Map(document.getElementById("map"), mapOptions);

// 	infoWindow = new google.maps.InfoWindow();
// 	google.maps.event.addListener(map, "click", function() {
// 		// infoWindow.close - закрываем информационное окно.
// 		infoWindow.close();
// 	});

// 	for (var i = 0; i < markersData.length; i++) {
// 		var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
// 		var name = markersData[i].name;
// 		var address = markersData[i].address;

// 		addMarker(latLng, name, address);
// 	}
// }


// function addMarker(latLng, name, address) {
// 	var marker = new google.maps.Marker({
// 		position: latLng,
// 		map: map,
// 		icon: 'img/marker.png',
// 		title: name
// 	});

// 	google.maps.event.addListener(marker, "click", function() {
// 		var contentString = '<div class="infowindow">' +
// 			'<h3>' + name + '</h3>' +
// 			'<p>' + address + '</p>' +
// 			'</div>';
// 		infoWindow.setContent(contentString);
// 		infoWindow.open(map, marker);
// 	});
// }

//--btn menu--//

let wrapper = document.querySelector('.wrapper');
let btnMenu = document.querySelector('.btn-menu');
let removeBtnMenu = document.querySelectorAll('.remove');

btnMenu.addEventListener('click', openMenu);

function openMenu() {
	wrapper.classList.toggle('active');
}

function removeBtn() {
	wrapper.classList.remove('active');
}

for (let i = 0; i < removeBtnMenu.length; i++) {
	removeBtnMenu[i].addEventListener("click", removeBtn);
};


//--anchor--//

$(function() {
	$("a.ancLinks").click(function() {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

		$('html,body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
});

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 800) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	});
});


//--sticky header--//

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();
	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
	var scrolled = $(this).scrollTop();
	if (scrolled >= 200) {
		$('nav').addClass('sticky-header');
	}
	if (scrolled <= 200) {
		$('nav').removeClass('sticky-header');
	}
});


//--active link sticky header--//

var activeLink = ".navbar";

function onScroll() {
	var scroll_top = $(document).scrollTop();
	$(activeLink + " a").each(function() {
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(activeLink + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

$(function() {
	$(document).on("scroll", onScroll);
});