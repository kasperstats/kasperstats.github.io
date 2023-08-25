class Player
{
	// Properties that do not require GET accessors.
	Area;
	Name;
	Code;
	PA = 0;
	AB = 0;
	Singles = 0;
	Doubles = 0;
	Triples = 0;
	HR = 0;
	SF = 0;
	BB = 0;
	IBB = 0;
	HBP = 0;
	BasesGained = 0;
	Runs = 0;
	RAR
	SlashPlus = 0;
		
	// Properties that require GET accessors.
	GetFullName() { return this.Area + " " + this.Name; }
	GetHits() { return this.Singles + this.Doubles + this.Triples + this.HR; }
	GetTotalBases() { return this.Singles + (2 * this.Doubles) + (3 * this.Triples) + (4 * this.HR); }
	GetHitsPerRun() { return this.GetHits() / this.Runs; }
	
	GetAVG() { return this.GetHits() / this.AB; }
	GetOBP() { return (this.GetHits() + this.BB + this.IBB) / (this.AB + this.BB + this.IBB + this.HBP + this.SF); }	
	GetSLG() { return this.GetTotalBases() / this.AB; }
	GetOPS() { return this.GetOBP() + this.GetSLG(); }	
	
	constructor(area, name, code)
	{
		this.Area = area;
		this.Name = name;
		this.Code = code;	
	}
}

function FormatRateStat(num) 
{
	if (num < 1) {
		return num.toFixed(3).slice(1);
	} else {
		const integerPart = Math.floor(num);
		const fractionalPart = (num % 1) * 1000;
		return (integerPart + fractionalPart / 1000).toFixed(3);
	}
}

function Round(num)
{
	return num.toFixed(3);
}
		

const MLB_Teams = 
[
	new Team("Arizona", "Diamondbacks", "ARI"),
	new Team("Atlanta", "Braves", "ATL"),
	new Team("Baltimore", "Orioles", "BAL"),
	new Team("Boston", "Red Sox", "BOS"),
	new Team("Chicago", "Cubs", "CHC"),
	new Team("Chicago", "White Sox", "CWS"),
	new Team("Cincinnati", "Reds", "CIN"),
	new Team("Cleveland", "Guardians", "CLE"),
	new Team("Colorado", "Rockies", "COL"),
	new Team("Detroit", "Tigers", "DET"),
	new Team("Houston", "Astros", "HOU"),
	new Team("Kansas City", "Royals", "KCR"),
	new Team("Los Angeles", "Angels", "LAA"),
	new Team("Los Angeles", "Dodgers", "LAD"),
	new Team("Miami", "Marlins", "MIA"),
	new Team("Milwaukee", "Brewers", "MIL"),
	new Team("Minnesota", "Twins", "MIN"),
	new Team("New York", "Mets", "NYM"),
	new Team("New York", "Yankees", "NYY"),
	new Team("Oakland", "Athletics", "OAK"),
	new Team("Philadelphia", "Phillies", "PHI"),
	new Team("Pittsburgh", "Pirates", "PIT"),
	new Team("San Diego", "Padres", "SDP"),
	new Team("Seattle", "Mariners", "SEA"),
	new Team("San Francisco", "Giants", "SFG"),
	new Team("St. Louis", "Cardinals", "STL"),
	new Team("Tampa Bay", "Rays", "TBR"),
	new Team("Texas", "Rangers", "TEX"),
	new Team("Toronto", "Blue Jays", "TOR"),
	new Team("Washington", "Nationals", "WSH"),			
];
			