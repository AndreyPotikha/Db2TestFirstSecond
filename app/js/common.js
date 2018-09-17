let checkFilm = true;
let checkPeople = true;
let checkPlanets = true;
let checkSpecies = true;
let checkStarships = true;
let checkVehicles = true;

// SHOW BLOCK OF ENTITY

$('#films').on('click', function() {
	if (checkFilm) {
		$('#films-info').css('display', 'flex');
		$('#people-info').css('display', 'none');
		$('#planets-info').css('display', 'none');
		$('#species-info').css('display', 'none');
		$('#starships-info').css('display', 'none');
		$('#vehicles-info').css('display', 'none');

		$('#films').css('transform', 'scale(1.1)');
		$('#peoples').css('transform', 'scale(1)');
		$('#planets').css('transform', 'scale(1)');
		$('#species').css('transform', 'scale(1)');
		$('#starships').css('transform', 'scale(1)');
		$('#vehicles').css('transform', 'scale(1)');

		checkFilm = false;
		checkPeople = true;
		checkPlanets = true;
		checkSpecies = true;
		checkStarships = true;
		checkVehicles = true;

		$('#table').empty();
	} else{
		$('#films-info').css('display', 'none');
		checkFilm = true;
	}
})

$('#peoples').on('click', function() {
	if (checkPeople) {
		$('#people-info').css('display', 'flex');
		$('#films-info').css('display', 'none');
		$('#planets-info').css('display', 'none');
		$('#species-info').css('display', 'none');
		$('#starships-info').css('display', 'none');
		$('#vehicles-info').css('display', 'none');

		$('#films').css('transform', 'scale(1)');
		$('#peoples').css('transform', 'scale(1.1)');
		$('#planets').css('transform', 'scale(1)');
		$('#species').css('transform', 'scale(1)');
		$('#starships').css('transform', 'scale(1)');
		$('#vehicles').css('transform', 'scale(1)');

		checkPeople = false;
		checkFilm = true;
		checkPlanets = true;
		checkSpecies = true;
		checkStarships = true;
		checkVehicles = true;
		$('#table').empty();
	} else{
		$('#people-info').css('display', 'none');
		checkPeople = true;
	}
})

$('#planets').on('click', function() {
	if (checkPlanets) {
		$('#planets-info').css('display', 'flex');
		$('#films-info').css('display', 'none');
		$('#people-info').css('display', 'none');
		$('#species-info').css('display', 'none');
		$('#starships-info').css('display', 'none');
		$('#vehicles-info').css('display', 'none');

		$('#films').css('transform', 'scale(1)');
		$('#peoples').css('transform', 'scale(1)');
		$('#planets').css('transform', 'scale(1.1)');
		$('#species').css('transform', 'scale(1)');
		$('#starships').css('transform', 'scale(1)');
		$('#vehicles').css('transform', 'scale(1)');

		checkPlanets = false;
		checkFilm = true;
		checkPeople = true;
		checkSpecies = true;
		checkStarships = true;
		checkVehicles = true;
		$('#table').empty();
	} else{
		$('#planets-info').css('display', 'none');
		checkPlanets = true;
	}
})

$('#species').on('click', function() {
	if (checkSpecies) {
		$('#species-info').css('display', 'flex');
		$('#films-info').css('display', 'none');
		$('#people-info').css('display', 'none');
		$('#planets-info').css('display', 'none');
		$('#starships-info').css('display', 'none');
		$('#vehicles-info').css('display', 'none');

		$('#films').css('transform', 'scale(1)');
		$('#peoples').css('transform', 'scale(1)');
		$('#planets').css('transform', 'scale(1)');
		$('#species').css('transform', 'scale(1.1)');
		$('#starships').css('transform', 'scale(1)');
		$('#vehicles').css('transform', 'scale(1)');

		checkSpecies = false;
		checkFilm = true;
		checkPeople = true;
		checkPlanets = true;
		checkStarships = true;
		checkVehicles = true;
		$('#table').empty();
	} else{
		$('#species-info').css('display', 'none');
		checkSpecies = true;
	}
})

$('#starships').on('click', function() {
	if (checkStarships) {
		$('#starships-info').css('display', 'flex');
		$('#films-info').css('display', 'none');
		$('#people-info').css('display', 'none');
		$('#planets-info').css('display', 'none');
		$('#species-info').css('display', 'none');
		$('#vehicles-info').css('display', 'none');

		$('#films').css('transform', 'scale(1)');
		$('#peoples').css('transform', 'scale(1)');
		$('#planets').css('transform', 'scale(1)');
		$('#species').css('transform', 'scale(1)');
		$('#starships').css('transform', 'scale(1.1)');
		$('#vehicles').css('transform', 'scale(1)');

		checkStarships = false;
		checkFilm = true;
		checkPeople = true;
		checkPlanets = true;
		checkSpecies = true;
		checkVehicles = true;
		$('#table').empty();
	} else{
		$('#starships-info').css('display', 'none');
		checkStarships = true;
	}
})

$('#vehicles').on('click', function() {
	if (checkVehicles) {
		$('#vehicles-info').css('display', 'flex');
		$('#films-info').css('display', 'none');
		$('#people-info').css('display', 'none');
		$('#planets-info').css('display', 'none');
		$('#species-info').css('display', 'none');
		$('#starships-info').css('display', 'none');

		$('#films').css('transform', 'scale(1)');
		$('#peoples').css('transform', 'scale(1)');
		$('#planets').css('transform', 'scale(1)');
		$('#species').css('transform', 'scale(1)');
		$('#starships').css('transform', 'scale(1)');
		$('#vehicles').css('transform', 'scale(1.1)');

		checkVehicles = false;
		checkFilm = true;
		checkPeople = true;
		checkPlanets = true;
		checkSpecies = true;
		checkStarships = true;
		$('#table').empty();
	} else{
		$('#vehicles-info').css('display', 'none');
		checkcheckVehiclesFilm = true;
	}
})

// ADD ENTITY

$(document).ready(function() {
  $.ajax({
		url: 'https://swapi.co/api/films/',
		type: "GET",
		success: function(resp) {
			let films = resp.results;
			films.forEach(function(val, item) {
				console.log(val.url);
					$("#film-list").append("<div class='elem' id='" + val.url + "'><p id='site-name'>" + val.title + "</p><div class='arrow'></div></div>");
			})
		},
		error: function() {
			console.log('=(');
		}
	});
   $.ajax({
		url: 'https://swapi.co/api/people/',
		type: "GET",
		success: function(resp) {
			let people = resp.results;
			people.forEach(function(val, item) {
					$("#people-list").append("<div class='elem' id='" + val.url + "'><p id='site-name'>" + val.name + "</p><div class='arrow'></div></div>");
			})
		},
		error: function() {
			console.log('=(');
		}
	});
 $.ajax({
		url: 'https://swapi.co/api/planets/',
		type: "GET",
		success: function(resp) {
			let planets = resp.results;
			planets.forEach(function(val, item) {
					$("#planets-list").append("<div class='elem' id='" + val.url + "'><p id='site-name'>" + val.name + "</p><div class='arrow'></div></div>");
			})
		},
		error: function() {
			console.log('=(');
		}
	});
 $.ajax({
		url: 'https://swapi.co/api/species/',
		type: "GET",
		success: function(resp) {
			let species = resp.results;
			species.forEach(function(val, item) {
					$("#species-list").append("<div class='elem' id='" + val.url + "'><p id='site-name'>" + val.name + "</p><div class='arrow'></div></div>");
			})
		},
		error: function() {
			console.log('=(');
		}
	});
 $.ajax({
		url: 'https://swapi.co/api/starships/',
		type: "GET",
		success: function(resp) {
			let starships = resp.results;
			starships.forEach(function(val, item) {
					$("#starships-list").append("<div class='elem' id='" + val.url + "'><p id='site-name'>" + val.name + "</p><div class='arrow'></div></div>");
			})
		},
		error: function() {
			console.log('=(');
		}
	});
 $.ajax({
		url: 'https://swapi.co/api/vehicles/',
		type: "GET",
		success: function(resp) {
			let vehicles = resp.results;
			vehicles.forEach(function(val, item) {
					$("#vehicles-list").append("<div class='elem' id='" + val.url + "'><p id='site-name'>" + val.name + "</p><div class='arrow'></div></div>");
			})
		},
		error: function() {
			console.log('=(');
		}
	});

 // ADD DETAILS OF ENTITY

 $('.info').delegate('div > div > div', 'click', function () {

        if (!checkFilm) {
        	let getId = event.target.id;
        	
        	$('#film-info').css('display', 'block');
        	$('#people-idetailed-info').css('display', 'none');
        	$('#planets-detailed-info').css('display', 'none');
        	$('#species-idetailed-info').css('display', 'none');
        	$('#starships-idetailed-info').css('display', 'none');
        	$('#vehicles-idetailed-info').css('display', 'none');

			$("#film-info-characters").empty();
			$("#film-info-planets").empty();
			$("#film-info-starships").empty();
			$("#film-info-vehicles").empty();
			$("#film-info-species").empty();
        	 $.ajax({
				url: getId,
				type: "GET",
				success: function(resp) {
					let filmsCharacters = resp.characters;
					let filmsPlanets = resp.planets;
					let filmsStarships = resp.starships;
					let filmsVehicles = resp.vehicles;
					let filmsSpecies = resp.species;


						filmsCharacters.forEach(function(val, item) {
								$("#film-info-characters").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						filmsPlanets.forEach(function(val, item) {
								$("#film-info-planets").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						filmsStarships.forEach(function(val, item) {
								$("#film-info-starships").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						filmsVehicles.forEach(function(val, item) {
								$("#film-info-vehicles").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						filmsSpecies.forEach(function(val, item) {
								$("#film-info-species").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});
				},
				error: function() {
					console.log('=(');
				}
			});


        } else if (!checkPeople) {
        	let getId = event.target.id;

        	$('#people-idetailed-info').css('display', 'block');
        	$('#film-info').css('display', 'none');
        	$('#planets-detailed-info').css('display', 'none');
        	$('#species-idetailed-info').css('display', 'none');
        	$('#starships-idetailed-info').css('display', 'none');
        	$('#vehicles-idetailed-info').css('display', 'none');

        	$("#people-idetailed-info-films").empty();
			$("#people-idetailed-info-species").empty();
			$("#people-idetailed-info-vehicles").empty();
			$("#people-idetailed-info-starships").empty();

        	 $.ajax({
				url: getId,
				type: "GET",
				success: function(resp) {
					let peopleFilms = resp.films;
					let peopleSpecies = resp.species;
					let peopleVehicles = resp.vehicles;
					let peopleStarships = resp.starships;


						peopleFilms.forEach(function(val, item) {
								$("#people-idetailed-info-films").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						peopleSpecies.forEach(function(val, item) {
								$("#people-idetailed-info-species").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						peopleVehicles.forEach(function(val, item) {
								$("#people-idetailed-info-vehicles").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						peopleStarships.forEach(function(val, item) {
								$("#people-idetailed-info-starships").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});
				},
				error: function() {
					console.log('=(');
				}
			});


        } else if (!checkPlanets) {
        	let getId = event.target.id;

        	$('#planets-detailed-info').css('display', 'block');
        	$('#film-info').css('display', 'none');
        	$('#people-idetailed-info').css('display', 'none');
        	$('#species-idetailed-info').css('display', 'none');
        	$('#starships-idetailed-info').css('display', 'none');
        	$('#vehicles-idetailed-info').css('display', 'none');

        	$("#planets-detailed-info-residents").empty();
			$("#planets-detailed-info-films").empty();

        	 $.ajax({
				url: getId,
				type: "GET",
				success: function(resp) {
					let planetsResidents = resp.residents;
					let planetsFilms = resp.films;


						planetsResidents.forEach(function(val, item) {
								$("#planets-detailed-info-residents").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						planetsFilms.forEach(function(val, item) {
								$("#planets-detailed-info-films").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});
				},
				error: function() {
					console.log('=(');
				}
			});


        } else if (!checkSpecies) {
        	let getId = event.target.id;

        	$('#species-idetailed-info').css('display', 'block');
        	$('#film-info').css('display', 'none');
        	$('#people-idetailed-info').css('display', 'none');
        	$('#planets-detailed-info').css('display', 'none');
        	$('#starships-idetailed-info').css('display', 'none');
        	$('#vehicles-idetailed-info').css('display', 'none');

        	$("#species-idetailed-info-people").empty();
			$("#species-idetailed-info-films").empty();

        	 $.ajax({
				url: getId,
				type: "GET",
				success: function(resp) {
					let speciesPeople = resp.people;
					let speciesFilms = resp.films;


						speciesPeople.forEach(function(val, item) {
								$("#species-idetailed-info-people").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						speciesFilms.forEach(function(val, item) {
								$("#species-idetailed-info-films").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});
				},
				error: function() {
					console.log('=(');
				}
			});


        } else if (!checkStarships) {
        	let getId = event.target.id;

        	$('#starships-idetailed-info').css('display', 'block');
        	$('#film-info').css('display', 'none');
        	$('#people-idetailed-info').css('display', 'none');
        	$('#planets-detailed-info').css('display', 'none');
        	$('#species-idetailed-info').css('display', 'none');
        	$('#vehicles-idetailed-info').css('display', 'none');

			$("#starships-idetailed-info-films").empty();

        	 $.ajax({
				url: getId,
				type: "GET",
				success: function(resp) {
					let starshipsFilms = resp.films;


						starshipsFilms.forEach(function(val, item) {
								$("#starships-idetailed-info-films").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});
				},
				error: function() {
					console.log('=(');
				}
			});


        } else if (!checkVehicles) {
        	let getId = event.target.id;

        	$('#vehicles-idetailed-info').css('display', 'block');
        	$('#film-info').css('display', 'none');
        	$('#people-idetailed-info').css('display', 'none');
        	$('#planets-detailed-info').css('display', 'none');
        	$('#species-idetailed-info').css('display', 'none');
        	$('#starships-idetailed-info').css('display', 'none');

        	$("#vehicles-idetailed-info-pilots").empty();
			$("#vehicles-idetailed-info-films").empty();

        	 $.ajax({
				url: getId,
				type: "GET",
				success: function(resp) {
					let vehiclesPilots = resp.pilots;
					let vehiclesFilms = resp.films;

						vehiclesPilots.forEach(function(val, item) {
								$("#vehicles-idetailed-info-pilots").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});

						vehiclesFilms.forEach(function(val, item) {
								$("#vehicles-idetailed-info-films").append("<li id=''><a href='#' id = ''>" + val + "</a></li>");
						});
				},
				error: function() {
					console.log('=(');
				}
			});
        }
        
    });

	// let getId = event.target.id;
	// console.log(getId);
  })


// SORT

$(document).ready(function () {
	let $select = $('#sort-by-name');
	$select.on('change', function() {
  	 if (!checkFilm) {
  	 	let arr = [];
		 $("#film-list > div > p").each(function() {
 	 		arr.push($(this).text());
		  })
  	 		if ($("#sort-by-name option:selected").text() === 'Sort by name up') {
  	 			arr.sort(compareUp);
				let counter = 0;
				$("#film-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		} else if ($("#sort-by-name option:selected").text() === 'Sort by name down') {
  	 			arr.sort(compareDown);
				let counter = 0;
				$("#film-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		}
  	 
	} else if(!checkPeople) {
		let arr = [];
		 $("#people-list > div > p").each(function() {
 	 		arr.push($(this).text());
		  })
  	 		if ($("#sort-by-name option:selected").text() === 'Sort by name up') {
  	 			arr.sort(compareUp);
				let counter = 0;
				$("#people-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		} else if ($("#sort-by-name option:selected").text() === 'Sort by name down') {
  	 			arr.sort(compareDown);
				let counter = 0;
				$("#people-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		}
	} else if(!checkPlanets) {
		let arr = [];
		 $("#planets-list > div > p").each(function() {
 	 		arr.push($(this).text());
		  })
  	 		if ($("#sort-by-name option:selected").text() === 'Sort by name up') {
  	 			arr.sort(compareUp);
				let counter = 0;
				$("#planets-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		} else if ($("#sort-by-name option:selected").text() === 'Sort by name down') {
  	 			arr.sort(compareDown);
				let counter = 0;
				$("#planets-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		}
	} else if(!checkSpecies) {
		let arr = [];
		 $("#species-list > div > p").each(function() {
 	 		arr.push($(this).text());
		  })
  	 		if ($("#sort-by-name option:selected").text() === 'Sort by name up') {
  	 			arr.sort(compareUp);
				let counter = 0;
				$("#species-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		} else if ($("#sort-by-name option:selected").text() === 'Sort by name down') {
  	 			arr.sort(compareDown);
				let counter = 0;
				$("#species-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		}
	} else if(!checkStarships) {
		let arr = [];
		 $("#starships-list > div > p").each(function() {
 	 		arr.push($(this).text());
		  })
  	 		if ($("#sort-by-name option:selected").text() === 'Sort by name up') {
  	 			arr.sort(compareUp);
				let counter = 0;
				$("#starships-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		} else if ($("#sort-by-name option:selected").text() === 'Sort by name down') {
  	 			arr.sort(compareDown);
				let counter = 0;
				$("#starships-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		}
	} else if(!checkVehicles) {
		let arr = [];
		 $("#vehicles-list > div > p").each(function() {
 	 		arr.push($(this).text());
		  })
  	 		if ($("#sort-by-name option:selected").text() === 'Sort by name up') {
  	 			arr.sort(compareUp);
				let counter = 0;
				$("#vehicles-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		} else if ($("#sort-by-name option:selected").text() === 'Sort by name down') {
  	 			arr.sort(compareDown);
				let counter = 0;
				$("#vehicles-list > div > p").each(function() {
						$(this).text(arr[counter]);
						counter++;
					 })
  	 		}
	}
});
});

function compareUp(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function compareDown(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
}

// SEARCH

$(document).ready(function() {
$('#search').keyup(debounce(function() {
		$('#planets-info').css('display', 'none');
		$('#films-info').css('display', 'none');
		$('#people-info').css('display', 'none');
		$('#species-info').css('display', 'none');
		$('#starships-info').css('display', 'none');
		$('#vehicles-info').css('display', 'none');
		checkFilm = true;
		checkPeople = true;
		checkPlanets = true;
		checkSpecies = true;
		checkStarships = true;
		checkVehicles = true;

		$('#table').empty();

		$("#film-list > div > p").each(function() {
	        	if(($(this).text().replace(/\s+/g, ' ').toLowerCase())
	        		.indexOf($('#search').val().replace(/ +/g, ' ').toLowerCase()) + 1) {
 	 					$("#table").append("<li id=''><a href='#' id = ''>" + $(this).text() + "</a></li>");
			}
		  	});
		$("#people-list > div > p").each(function() {
	        	if(($(this).text().replace(/\s+/g, ' ').toLowerCase())
	        		.indexOf($('#search').val().replace(/ +/g, ' ').toLowerCase()) + 1) {
 	 					$("#table").append("<li id=''><a href='#' id = ''>" + $(this).text() + "</a></li>");
			}
		  	});
		$("#planets-list > div > p").each(function() {
	        	if(($(this).text().replace(/\s+/g, ' ').toLowerCase())
	        		.indexOf($('#search').val().replace(/ +/g, ' ').toLowerCase()) + 1) {
 	 					$("#table").append("<li id=''><a href='#' id = ''>" + $(this).text() + "</a></li>");
			}
		  	});
		$("#species-list > div > p").each(function() {
	        	if(($(this).text().replace(/\s+/g, ' ').toLowerCase())
	        		.indexOf($('#search').val().replace(/ +/g, ' ').toLowerCase()) + 1) {
 	 					$("#table").append("<li id=''><a href='#' id = ''>" + $(this).text() + "</a></li>");
			}
		  	});
		$("#starships-list > div > p").each(function() {
	        	if(($(this).text().replace(/\s+/g, ' ').toLowerCase())
	        		.indexOf($('#search').val().replace(/ +/g, ' ').toLowerCase()) + 1) {
 	 					$("#table").append("<li id=''><a href='#' id = ''>" + $(this).text() + "</a></li>");
			}
		  	});
		$("#vehicles-list > div > p").each(function() {
	        	if(($(this).text().replace(/\s+/g, ' ').toLowerCase())
	        		.indexOf($('#search').val().replace(/ +/g, ' ').toLowerCase()) + 1) {
 	 					$("#table").append("<li id=''><a href='#' id = ''>" + $(this).text() + "</a></li>");
			}
		  	});

}, 300));

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
	
})



