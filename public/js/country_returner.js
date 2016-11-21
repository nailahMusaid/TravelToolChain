function findWithAttr(countries, name, value) {
    var index=-1;
	for(var i=0;i<countries.length;i++)
  		if(countries[i].name===value){index=i;break;}
  	return i;
}

function country_names(profile){
	// Figure out which people you match
	// Make an object which is a list of country-score pairs
	// if you match a person, add 1 to your score of every country they visited
	// return the top 3 scoring countries as places to visit
	var countries = [
		{
			name: "Spain",
			score: 0,
			pin_url: "nope"
		},
		{
			name: "Nepal",
			score: 0,
			pin_url: ""
		},
		{
			name: "USA",
			score: 0,
			pin_url: ""
		},
		{name: "UK",
		score: 0,
		pin_url: ""},
		{name: "Canada",
		score: 0,
		pin_url: ""},
		{name: "Belgium",
		score: 0,
		pin_url: ""},
		{name: "Lebanon",
		score: 0,
		pin_url: ""},
		{name: "Egypt",
		score: 0,
		pin_url: ""},
		{name: "Qatar",
		score: 0,
		pin_url: ""},
		{name: "Turkey",
		score: 0,
		pin_url: ""},
		{name: "Pakistan",
		score: 0,
		pin_url: ""},
		{name: "India",
		score: 0,
		pin_url: ""},
		{name: "Italy",
		score: 0,
		pin_url: ""},
		{name: "Austria",
		score: 0,
		pin_url: ""},
		{name: "Sri Lanka",
		score: 0,
		pin_url: ""},
		{name: "South Africa",
		score: 0,
		pin_url: ""},
		{name: "Netherlands",
		score: 0,
		pin_url: ""},
		{name: "Hungary",
		score: 0,
		pin_url: ""},
		{name: "Czech Republic",
		score: 0,
		pin_url: ""},
		{name: "Philippines",
		score: 0,
		pin_url: ""},
		{name: "Germany",
		score: 0,
		pin_url: ""},
		{name: "Singapore",
		score: 0,
		pin_url: ""},
		{name: "Bolivia",
		score: 0,
		pin_url: ""},
		{name: "Finland",
		score: 0,
		pin_url: ""},
		{name: "Oman",
		score: 0,
		pin_url: ""}
	];



	var matches = {
		Lama: 0,
		Supriya: 0,
		Khadeeja: 0,
		Myera: 0,
		Annie: 0,
		Taj: 0,
		Lina: 0,
		Nisa: 0
	};

	var openness = profile.personality[0].percentile;
	var concientious = profile.personality[1].percentile;
	var extraversion = profile.personality[2].percentile;
	var agreeable = profile.personality[3].percentile;
	var neurotic = profile.personality[4].percentile;

	// Lama matches
	if(openness > 0.92 && openness < 100.00){ matches.Lama += 1;}
	if(concientious > 0.64 && concientious < 0.74){matches.Lama += 1;}
	if(extraversion > 0.75 && extraversion < 0.85){matches.Lama += 1;}
	if(agreeable > 0.58 && agreeable < 0.68){matches.Lama += 1;}
	if(neurotic > 0.48 && neurotic < 0.58){matches.Lama += 1;}

	// Supriya matches
	if(openness > 0.94 && openness < 1.00){ matches.Supriya += 1;}
	if(concientious > 0.65 && concientious < 0.75){matches.Supriya += 1;}
	if(extraversion > 0.22 && extraversion < 0.32){matches.Supriya += 1;}
	if(agreeable > 0.05 && agreeable < 0.15){matches.Supriya += 1;}
	if(neurotic > 0.64 && neurotic < 0.74){matches.Supriya += 1;}

	//Khadeeja matches
	if(openness > 0.93 && openness < 1.00){ matches.Khadeeja += 1;}
	if(concientious > 0.62 && concientious < 0.72){matches.Khadeeja += 1;}
	if(extraversion > 0.35 && extraversion < 0.45){matches.Khadeeja += 1;}
	if(agreeable > 0.13 && agreeable < 0.23){matches.Khadeeja += 1;}
	if(neurotic > 0.65 && neurotic < 0.75){matches.Khadeeja += 1;}

	//Myera matches
	if(openness > 0.54 && openness < 0.64){ matches.Myera += 1;}
	if(concientious > 0.29 && concientious < 0.39){matches.Myera += 1;}
	if(extraversion > 0.02 && extraversion < 0.12){matches.Myera += 1;}
	if(agreeable > 0.61 && agreeable < 0.71){matches.Myera += 1;}
	if(neurotic > 0.08 && neurotic < 0.18){matches.Myera += 1;}

	//Annie matches
	if(openness > 0.85 && openness < 0.95){ matches.Annie += 1;}
	if(concientious > 0.70 && concientious < 0.80){matches.Annie += 1;}
	if(extraversion > 0.01 && extraversion < 0.11){matches.Annie += 1;}
	if(agreeable > 0.00 && agreeable < 0.10){matches.Annie += 1;}
	if(neurotic > 0.17 && neurotic < 0.27){matches.Annie += 1;}

	//Taj matches
	if(openness > 0.94 && openness < 1.00){ matches.Taj += 1;}
	if(concientious > 0.46 && concientious < 0.56){matches.Taj += 1;}
	if(extraversion > 0.17 && extraversion < 0.27){matches.Taj += 1;}
	if(agreeable > 0.08 && agreeable < 0.18){matches.Taj += 1;}
	if(neurotic > 0.52 && neurotic < 0.62){matches.Taj += 1;}

	//Lina matches
	if(openness > 0.94 && openness < 1.00){ matches.Lina += 1;}
	if(concientious > 0.09 && concientious < 0.19){matches.Lina += 1;}
	if(extraversion > 0.04 && extraversion < 0.14){matches.Lina += 1;}
	if(agreeable > 0.00 && agreeable < 0.09){matches.Lina += 1;}
	if(neurotic > 0.32 && neurotic < 0.42){matches.Lina += 1;}

	//Nisa matches
	if(openness > 0.93 && openness < 1.00){ matches.Nisa += 1;}
	if(concientious > 0.17 && concientious < 0.27){matches.Nisa += 1;}
	if(extraversion > 0.29 && extraversion < 0.39){matches.Nisa += 1;}
	if(agreeable > 0.00 && agreeable < 0.10){matches.Nisa += 1;}
	if(neurotic > 0.22 && neurotic < 0.32){matches.Nisa += 1;}

	if(matches.Lama >= 1){
		countries[findWithAttr(countries, name, "USA")].score += 1;
		countries[findWithAttr(countries, name, "Canada")].score += 1;
		countries[findWithAttr(countries, name, "Belgium")].score += 1;
		countries[findWithAttr(countries, name, "Lebanon")].score += 1;
		countries[findWithAttr(countries, name, "Egypt")].score += 1;
	}

	if(matches.Supriya >= 2){
		countries[findWithAttr(countries, name, "Spain")].score += 1;
		countries[findWithAttr(countries, name, "Turkey")].score += 1;
		countries[findWithAttr(countries, name, "Italy")].score += 1;
	}

	if(matches.Khadeeja >= 2){
		countries[findWithAttr(countries, name, "Qatar")].score += 1;
		countries[findWithAttr(countries, name, "Turkey")].score += 1;
		countries[findWithAttr(countries, name, "Nepal")].score += 1;
		countries[findWithAttr(countries, name, "Pakistan")].score += 1;
		countries[findWithAttr(countries, name, "USA")].score += 1;
		countries[findWithAttr(countries, name, "UK")].score += 1;
		countries[findWithAttr(countries, name, "Italy")].score += 1;
		countries[findWithAttr(countries, name, "Spain")].score += 1;
	}

	if(matches.Myera >= 2){
		countries[findWithAttr(countries, name, "Lebanon")].score += 1;
		countries[findWithAttr(countries, name, "Czech Republic")].score += 1;
		countries[findWithAttr(countries, name, "Austria")].score += 1;
		countries[findWithAttr(countries, name, "Hungary")].score += 1;
		countries[findWithAttr(countries, name, "Sri Lanka")].score += 1;
		countries[findWithAttr(countries, name, "South Africa")].score += 1;
		countries[findWithAttr(countries, name, "Pakistan")].score += 1;
		countries[findWithAttr(countries, name, "UK")].score += 1;
		countries[findWithAttr(countries, name, "USA")].score += 1;
		countries[findWithAttr(countries, name, "Netherlands")].score += 1;
		countries[findWithAttr(countries, name, "Italy")].score += 1;
		countries[findWithAttr(countries, name, "France")].score += 1;
		countries[findWithAttr(countries, name, "Spain")].score += 1;
		countries[findWithAttr(countries, name, "Germany")].score += 1;
		countries[findWithAttr(countries, name, "Philippines")].score += 1;
	}

	if(matches.Taj >= 2){
		countries[findWithAttr(countries, name, "Czech Republic")].score += 1;
		countries[findWithAttr(countries, name, "Nepal")].score += 1;
		countries[findWithAttr(countries, name, "Sri Lanka")].score += 1;
		countries[findWithAttr(countries, name, "India")].score += 1;
	}
	if(matches.Lina >= 2){
		countries[findWithAttr(countries, name, "Oman")].score += 1;
		countries[findWithAttr(countries, name, "Lebanon")].score += 1;
		countries[findWithAttr(countries, name, "India")].score += 1;
		countries[findWithAttr(countries, name, "Spain")].score += 1;
	}

	if(matches.Annie >= 2){
		countries[findWithAttr(countries, name, "Singapore")].score += 1;
		countries[findWithAttr(countries, name, "Philippines")].score += 1;
		countries[findWithAttr(countries, name, "Czech Republic")].score += 1;
		countries[findWithAttr(countries, name, "Hungary")].score += 1;
		countries[findWithAttr(countries, name, "Bolivia")].score += 1;
		countries[findWithAttr(countries, name, "Finland")].score += 1;
		countries[findWithAttr(countries, name, "Nepal")].score += 1;
	}
	

	//Now, sort our array of objects based on their scores

	var length = countries.length;
	var items = countries;
  	for (var i = 0; i < length; i++) { //Number of passes
    	for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
      		//Compare the adjacent positions
     		if(items[j].score > items[j+1].score) {
	        	//Swap the numbers
	        	var tmp = items[j];  //Temporary variable to hold the current number
	        	items[j] = items[j+1]; //Replace current number with adjacent number
	        	items[j+1] = tmp; //Replace adjacent number with current number
      		}
    	}        
  	}

  	var countries_of_choice = [];
  	countries_of_choice.push(countries[length-1]);
  	countries_of_choice.push(countries[length-2]);
  	countries_of_choice.push(countries[length-3]);
  	return countries_of_choice;
}


var simon = {
  "word_count": 5444,
  "processed_language": "en",
  "personality": [
    {
      "trait_id": "big5_openness",
      "name": "Openness",
      "category": "personality",
      "percentile": 0.9996897075085921,
      "children": [
        {
          "trait_id": "facet_adventurousness",
          "name": "Adventurousness",
          "category": "personality",
          "percentile": 0.578994590567636
        },
        {
          "trait_id": "facet_artistic_interests",
          "name": "Artistic interests",
          "category": "personality",
          "percentile": 0.9931930483479964
        },
        {
          "trait_id": "facet_emotionality",
          "name": "Emotionality",
          "category": "personality",
          "percentile": 0.8925787430078674
        },
        {
          "trait_id": "facet_imagination",
          "name": "Imagination",
          "category": "personality",
          "percentile": 0.9676845409493304
        },
        {
          "trait_id": "facet_intellect",
          "name": "Intellect",
          "category": "personality",
          "percentile": 0.9999694602731307
        },
        {
          "trait_id": "facet_liberalism",
          "name": "Authority-challenging",
          "category": "personality",
          "percentile": 0.9998025965718293
        }
      ]
    },
    {
      "trait_id": "big5_conscientiousness",
      "name": "Conscientiousness",
      "category": "personality",
      "percentile": 0.23926429323553905,
      "children": [
        {
          "trait_id": "facet_achievement_striving",
          "name": "Achievement striving",
          "category": "personality",
          "percentile": 0.5348876447022489
        },
        {
          "trait_id": "facet_cautiousness",
          "name": "Cautiousness",
          "category": "personality",
          "percentile": 0.8967914236603831
        },
        {
          "trait_id": "facet_dutifulness",
          "name": "Dutifulness",
          "category": "personality",
          "percentile": 0.5646613933118331
        },
        {
          "trait_id": "facet_orderliness",
          "name": "Orderliness",
          "category": "personality",
          "percentile": 0.14280198152733753
        },
        {
          "trait_id": "facet_self_discipline",
          "name": "Self-discipline",
          "category": "personality",
          "percentile": 0.06607163068488409
        },
        {
          "trait_id": "facet_self_efficacy",
          "name": "Self-efficacy",
          "category": "personality",
          "percentile": 0.4831837583316666
        }
      ]
    },
    {
      "trait_id": "big5_extraversion",
      "name": "Extraversion",
      "category": "personality",
      "percentile": 0.10021907153651399,
      "children": [
        {
          "trait_id": "facet_activity_level",
          "name": "Activity level",
          "category": "personality",
          "percentile": 0.5040914363992618
        },
        {
          "trait_id": "facet_assertiveness",
          "name": "Assertiveness",
          "category": "personality",
          "percentile": 0.5519512396739329
        },
        {
          "trait_id": "facet_cheerfulness",
          "name": "Cheerfulness",
          "category": "personality",
          "percentile": 0.0017069384047163072
        },
        {
          "trait_id": "facet_excitement_seeking",
          "name": "Excitement-seeking",
          "category": "personality",
          "percentile": 0.20622261691417232
        },
        {
          "trait_id": "facet_friendliness",
          "name": "Outgoing",
          "category": "personality",
          "percentile": 0.014949617712060548
        },
        {
          "trait_id": "facet_gregariousness",
          "name": "Gregariousness",
          "category": "personality",
          "percentile": 0.0005642150812160684
        }
      ]
    },
    {
      "trait_id": "big5_agreeableness",
      "name": "Agreeableness",
      "category": "personality",
      "percentile": 0.04810075032352251,
      "children": [
        {
          "trait_id": "facet_altruism",
          "name": "Altruism",
          "category": "personality",
          "percentile": 0.8671745023866493
        },
        {
          "trait_id": "facet_cooperation",
          "name": "Cooperation",
          "category": "personality",
          "percentile": 0.7537426117340902
        },
        {
          "trait_id": "facet_modesty",
          "name": "Modesty",
          "category": "personality",
          "percentile": 0.301785550564815
        },
        {
          "trait_id": "facet_morality",
          "name": "Uncompromising",
          "category": "personality",
          "percentile": 0.5275997625940442
        },
        {
          "trait_id": "facet_sympathy",
          "name": "Sympathy",
          "category": "personality",
          "percentile": 0.9944325314972009
        },
        {
          "trait_id": "facet_trust",
          "name": "Trust",
          "category": "personality",
          "percentile": 0.6461363428536455
        }
      ]
    },
    {
      "trait_id": "big5_neuroticism",
      "name": "Emotional range",
      "category": "personality",
      "percentile": 0.4261761210215961,
      "children": [
        {
          "trait_id": "facet_anger",
          "name": "Fiery",
          "category": "personality",
          "percentile": 0.35414319373229897
        },
        {
          "trait_id": "facet_anxiety",
          "name": "Prone to worry",
          "category": "personality",
          "percentile": 0.6639228299476094
        },
        {
          "trait_id": "facet_depression",
          "name": "Melancholy",
          "category": "personality",
          "percentile": 0.9080027185564373
        },
        {
          "trait_id": "facet_immoderation",
          "name": "Immoderation",
          "category": "personality",
          "percentile": 0.25184853821170167
        },
        {
          "trait_id": "facet_self_consciousness",
          "name": "Self-consciousness",
          "category": "personality",
          "percentile": 0.9671983230146387
        },
        {
          "trait_id": "facet_vulnerability",
          "name": "Susceptible to stress",
          "category": "personality",
          "percentile": 0.6420700178503461
        }
      ]
    }
  ],
  "needs": [
    {
      "trait_id": "need_challenge",
      "name": "Challenge",
      "category": "needs",
      "percentile": 0.015121679264156862
    },
    {
      "trait_id": "need_closeness",
      "name": "Closeness",
      "category": "needs",
      "percentile": 0.0550074587442177
    },
    {
      "trait_id": "need_curiosity",
      "name": "Curiosity",
      "category": "needs",
      "percentile": 0.956593316364319
    },
    {
      "trait_id": "need_excitement",
      "name": "Excitement",
      "category": "needs",
      "percentile": 0.01348770452431125
    },
    {
      "trait_id": "need_harmony",
      "name": "Harmony",
      "category": "needs",
      "percentile": 0.031219183944246554
    },
    {
      "trait_id": "need_ideal",
      "name": "Ideal",
      "category": "needs",
      "percentile": 0.1173217199693743
    },
    {
      "trait_id": "need_liberty",
      "name": "Liberty",
      "category": "needs",
      "percentile": 0.06473248314657709
    },
    {
      "trait_id": "need_love",
      "name": "Love",
      "category": "needs",
      "percentile": 0.13165084864684978
    },
    {
      "trait_id": "need_practicality",
      "name": "Practicality",
      "category": "needs",
      "percentile": 0.028574429740486795
    },
    {
      "trait_id": "need_self_expression",
      "name": "Self-expression",
      "category": "needs",
      "percentile": 0.18267220689911556
    },
    {
      "trait_id": "need_stability",
      "name": "Stability",
      "category": "needs",
      "percentile": 0.05817181873211619
    },
    {
      "trait_id": "need_structure",
      "name": "Structure",
      "category": "needs",
      "percentile": 0.17090501628253268
    }
  ],
  "values": [
    {
      "trait_id": "value_conservation",
      "name": "Conservation",
      "category": "values",
      "percentile": 0.008790356156020196
    },
    {
      "trait_id": "value_openness_to_change",
      "name": "Openness to change",
      "category": "values",
      "percentile": 0.5367084425161446
    },
    {
      "trait_id": "value_hedonism",
      "name": "Hedonism",
      "category": "values",
      "percentile": 0.021944750913727384
    },
    {
      "trait_id": "value_self_enhancement",
      "name": "Self-enhancement",
      "category": "values",
      "percentile": 0.059063200176334596
    },
    {
      "trait_id": "value_self_transcendence",
      "name": "Self-transcendence",
      "category": "values",
      "percentile": 0.30866570783090774
    }
  ],
  "consumption_preferences": [
    {
      "consumption_preference_category_id": "consumption_preferences_shopping",
      "name": "Purchasing Preferences",
      "consumption_preferences": [
        {
          "consumption_preference_id": "consumption_preferences_automobile_ownership_cost",
          "name": "Likely to be sensitive to ownership cost when buying automobiles",
          "score": 0.5
        },
        {
          "consumption_preference_id": "consumption_preferences_automobile_safety",
          "name": "Likely to prefer safety when buying automobiles",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_automobile_resale_value",
          "name": "Likely to prefer resale value when buying automobiles",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_clothes_quality",
          "name": "Likely to prefer quality when buying clothes",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_clothes_style",
          "name": "Likely to prefer style when buying clothes",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_clothes_comfort",
          "name": "Likely to prefer comfort when buying clothes",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_influence_brand_name",
          "name": "Likely to be influenced by brand name when making product purchases",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_influence_utility",
          "name": "Likely to be influenced by product utility when making product purchases",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_influence_online_ads",
          "name": "Likely to be influenced by online ads when making product purchases",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_influence_social_media",
          "name": "Likely to be influenced by social media when making product purchases",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_influence_family_members",
          "name": "Likely to be influenced by family when making product purchases",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_spur_of_moment",
          "name": "Likely to indulge in spur of the moment purchases",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_credit_card_payment",
          "name": "Likely to prefer using credit cards for shopping",
          "score": 1
        }
      ]
    },
    {
      "consumption_preference_category_id": "consumption_preferences_health_and_activity",
      "name": "Health & Activity Preferences",
      "consumption_preferences": [
        {
          "consumption_preference_id": "consumption_preferences_eat_out",
          "name": "Likely to eat out frequently",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_fast_food_frequency",
          "name": "Likely to eat fast food frequently",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_gym_membership",
          "name": "Likely to have a gym membership",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_adventurous_sports",
          "name": "Likely to like adventurous sports",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_outdoor",
          "name": "Likely to like outdoor activities",
          "score": 0.5
        }
      ]
    },
    {
      "consumption_preference_category_id": "consumption_preferences_environmental_concern",
      "name": "Environmental Concern Preferences",
      "consumption_preferences": [
        {
          "consumption_preference_id": "consumption_preferences_concerned_environment",
          "name": "Likely to be concerned about the environment",
          "score": 1
        }
      ]
    },
    {
      "consumption_preference_category_id": "consumption_preferences_entrepreneurship",
      "name": "Entrepreneurship Preferences",
      "consumption_preferences": [
        {
          "consumption_preference_id": "consumption_preferences_start_business",
          "name": "Likely to consider starting a business in next few years",
          "score": 0
        }
      ]
    },
    {
      "consumption_preference_category_id": "consumption_preferences_movie",
      "name": "Movie Preferences",
      "consumption_preferences": [
        {
          "consumption_preference_id": "consumption_preferences_movie_romance",
          "name": "Likely to like romance movies",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_movie_adventure",
          "name": "Likely to like adventure movies",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_movie_horror",
          "name": "Likely to like horror movies",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_movie_musical",
          "name": "Likely to like musical movies",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_movie_historical",
          "name": "Likely to like historical movies",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_movie_science_fiction",
          "name": "Likely to like science-fiction movies",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_movie_war",
          "name": "Likely to like war movies",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_movie_drama",
          "name": "Likely to like drama movies",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_movie_action",
          "name": "Likely to like action movies",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_movie_documentary",
          "name": "Likely to like documentary movies",
          "score": 1
        }
      ]
    },
    {
      "consumption_preference_category_id": "consumption_preferences_music",
      "name": "Music Preferences",
      "consumption_preferences": [
        {
          "consumption_preference_id": "consumption_preferences_music_rap",
          "name": "Likely to like rap music",
          "score": 0.5
        },
        {
          "consumption_preference_id": "consumption_preferences_music_country",
          "name": "Likely to like country music",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_music_r_b",
          "name": "Likely to like R&B music",
          "score": 0.5
        },
        {
          "consumption_preference_id": "consumption_preferences_music_hip_hop",
          "name": "Likely to like hip hop music",
          "score": 0.5
        },
        {
          "consumption_preference_id": "consumption_preferences_music_live_event",
          "name": "Likely to attend live musical events",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_music_playing",
          "name": "Likely to have experience playing music",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_music_latin",
          "name": "Likely to like Latin music",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_music_rock",
          "name": "Likely to like rock music",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_music_classical",
          "name": "Likely to like classical music",
          "score": 1
        }
      ]
    },
    {
      "consumption_preference_category_id": "consumption_preferences_reading",
      "name": "Reading Preferences",
      "consumption_preferences": [
        {
          "consumption_preference_id": "consumption_preferences_read_frequency",
          "name": "Likely to read often",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_read_motive_enjoyment",
          "name": "Likely to read for enjoyment",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_read_motive_information",
          "name": "Likely to read for information",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_books_entertainment_magazines",
          "name": "Likely to read entertainment magazines",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_books_non_fiction",
          "name": "Likely to read non-fiction books",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_read_motive_mandatory",
          "name": "Likely to do mandatory reading only",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_read_motive_relaxation",
          "name": "Likely to read for relaxation",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_books_financial_investing",
          "name": "Likely to read financial investment books",
          "score": 0
        },
        {
          "consumption_preference_id": "consumption_preferences_books_autobiographies",
          "name": "Likely to read autobiographical books",
          "score": 1
        }
      ]
    },
    {
      "consumption_preference_category_id": "consumption_preferences_volunteering",
      "name": "Volunteering Preferences",
      "consumption_preferences": [
        {
          "consumption_preference_id": "consumption_preferences_volunteer",
          "name": "Likely to volunteer for social causes",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_volunteering_time",
          "name": "Likely to have spent time volunteering",
          "score": 1
        },
        {
          "consumption_preference_id": "consumption_preferences_volunteer_learning",
          "name": "Likely to volunteer to learn about social causes",
          "score": 1
        }
      ]
    }
  ],
  "warnings": []
}

console.log(country_names(simon));