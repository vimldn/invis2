export const LOCATIONS: Record<string, string[]> = {
  "England": [
    // Major Cities
    "London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Sheffield", "Bristol", 
    "Newcastle upon Tyne", "Nottingham", "Leicester", "Coventry", "Bradford", "Hull", 
    "Southampton", "Portsmouth", "Plymouth", "Reading", "Derby", "Stoke-on-Trent",
    "Wolverhampton", "Brighton", "Milton Keynes", "Swindon", "Northampton", "Luton",
    "York", "Peterborough", "Oxford", "Cambridge", "Gloucester", "Exeter", "Ipswich",
    "Bournemouth", "Norwich", "Slough", "Middlesbrough", "Sunderland", "Basildon",
    
    // Large Towns
    "Blackpool", "Preston", "Bolton", "Huddersfield", "Southend-on-Sea", "Chelmsford",
    "Colchester", "Doncaster", "Rochdale", "Rotherham", "Warrington", "Wigan",
    "Stockport", "Oldham", "Barnsley", "Dudley", "Walsall", "Telford", "Crawley",
    "Gillingham", "Hastings", "Worthing", "Eastbourne", "Maidstone", "Canterbury",
    
    // Medium Towns
    "Blackburn", "Burnley", "Bath", "Darlington", "Grimsby", "Hartlepool", "Carlisle",
    "Chester", "Lancaster", "Lincoln", "Mansfield", "Scunthorpe", "Shrewsbury",
    "Stafford", "Stoke", "Wakefield", "Watford", "Worcester", "Wrexham", "Ashford",
    "Basingstoke", "Bedford", "Birkenhead", "Bracknell", "Bury", "Cheltenham",
    "Chesterfield", "Crewe", "Dartford", "Gateshead", "Halifax", "Harlow", "Harrogate",
    "Hemel Hempstead", "High Wycombe", "Kidderminster", "King's Lynn", "Leamington Spa",
    "Loughborough", "Lowestoft", "Macclesfield", "Maidenhead", "Margate", "Middlesbrough",
    
    // Smaller Towns & Boroughs
    "Aylesbury", "Banbury", "Barrow-in-Furness", "Batley", "Beverley", "Bexley",
    "Bognor Regis", "Boston", "Bridgwater", "Bromsgrove", "Burton upon Trent",
    "Bury St Edmunds", "Camberley", "Cannock", "Chatham", "Chichester", "Chorley",
    "Clacton-on-Sea", "Coalville", "Corby", "Dewsbury", "Dover", "Ealing", "Ellesmere Port",
    "Epsom", "Esher", "Fareham", "Farnborough", "Folkestone", "Grantham", "Gravesend",
    "Great Yarmouth", "Grays", "Guildford", "Halesowen", "Havant", "Hereford",
    "Hinckley", "Horsham", "Kettering", "Kingswood", "Letchworth", "Lichfield",
    "Littlehampton", "Loughton", "Macclesfield", "Maldon", "Melton Mowbray", "Newbury",
    "Newcastle-under-Lyme", "Newhaven", "Newton Abbot", "Nuneaton", "Oldbury",
    "Orpington", "Paignton", "Poole", "Rayleigh", "Redditch", "Redhill", "Reigate",
    "Richmond", "Romford", "Royal Tunbridge Wells", "Rugby", "Runcorn", "Salisbury",
    "Scarborough", "Sevenoaks", "Shoreham-by-Sea", "Skegness", "Solihull", "South Shields",
    "Southport", "St Albans", "St Helens", "Stafford", "Staines", "Stevenage",
    "Stockton-on-Tees", "Stratford-upon-Avon", "Stroud", "Sutton Coldfield", "Tamworth",
    "Taunton", "Thetford", "Tonbridge", "Torquay", "Truro", "Uxbridge", "Walton-on-Thames",
    "Warwick", "Weymouth", "Widnes", "Winchester", "Woking", "Wokingham", "Yeovil"
  ],
  
  "Scotland": [
    // Major Cities
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", 
    
    // Large Towns
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Kirkcaldy",
    "Dunfermline", "Ayr", "Perth", "Kilmarnock", "Inverness", "Greenock", "Coatbridge",
    
    // Medium Towns
    "Glenrothes", "Airdrie", "Stirling", "Falkirk", "Irvine", "Dumfries", "Motherwell",
    "Rutherglen", "Wishaw", "Clydebank", "Bearsden", "Cambuslang", "Newton Mearns",
    "Bishopbriggs", "Musselburgh", "Arbroath", "Elgin", "Bellshill", "Dumbarton",
    
    // Smaller Towns
    "Renfrew", "Bathgate", "Grangemouth", "Kirkintilloch", "Forfar", "Stenhousemuir",
    "Alloa", "Blantyre", "Bonnyrigg", "Broxburn", "Buckhaven", "Carnoustie",
    "Chapelhall", "Cowdenbeath", "Denny", "Erskine", "Galashiels", "Giffnock",
    "Gourock", "Hawick", "Johnstone", "Kelso", "Larkhall", "Lenzie", "Lerwick",
    "Linlithgow", "Lossiemouth", "Montrose", "Nairn", "Penicuik", "Peterhead",
    "Port Glasgow", "Prestwick", "Rosyth", "St Andrews", "Stepps", "Stonehaven",
    "Stranraer", "Troon", "Viewpark", "Whitburn", "Wick"
  ],
  
  "Wales": [
    // Major Cities & Large Towns
    "Cardiff", "Swansea", "Newport", "Wrexham", "Barry", "Cwmbran", "Pontypridd",
    "Port Talbot", "Llanelli", "Neath", "Bridgend", "Caerphilly", "Merthyr Tydfil",
    
    // Medium Towns
    "Rhondda", "Aberdare", "Penarth", "Pontypool", "Colwyn Bay", "Ebbw Vale",
    "Maesteg", "Bargoed", "Bangor", "Caernarfon", "Aberystwyth", "Carmarthen",
    "Haverfordwest", "Newtown", "Pembroke", "Porthcawl", "Prestatyn", "Rhyl",
    
    // Smaller Towns
    "Abertillery", "Abergavenny", "Ammanford", "Blackwood", "Blaina", "Brynmawr",
    "Buckley", "Chepstow", "Connah's Quay", "Flint", "Gelligaer", "Gorseinon",
    "Holyhead", "Llandudno", "Llantrisant", "Milford Haven", "Mold", "Mountain Ash",
    "Neath", "Nelson", "Pembroke Dock", "Penmaenmawr", "Porthmadog", "Risca",
    "Shotton", "Tonypandy", "Tredegar", "Ystrad Mynach"
  ],
  
  "Northern Ireland": [
    // Major Cities
    "Belfast", "Derry", "Londonderry", "Lisburn", "Newtownabbey",
    
    // Large Towns
    "Bangor", "Craigavon", "Castlereagh", "Ballymena", "Newry", "Carrickfergus",
    "Newtownards", "Coleraine", "Omagh", "Larne", "Banbridge", "Enniskillen",
    
    // Medium & Smaller Towns
    "Antrim", "Armagh", "Ballymoney", "Ballynahinch", "Cookstown", "Downpatrick",
    "Dungannon", "Holywood", "Limavady", "Lurgan", "Magherafelt", "Newcastle",
    "Portrush", "Portadown", "Portaferry", "Portstewart", "Strabane", "Warrenpoint"
  ]
};

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getCityBySlug(slug: string): string | undefined {
  const allCities = Object.values(LOCATIONS).flat();
  return allCities.find(city => toSlug(city) === slug);
}

export function getRegionForCity(cityName: string): string | undefined {
  for (const [region, cities] of Object.entries(LOCATIONS)) {
    if (cities.includes(cityName)) return region;
  }
  return undefined;
}

export function getAllCitySlugs(): string[] {
  return Object.values(LOCATIONS).flat().map(city => toSlug(city));
}
