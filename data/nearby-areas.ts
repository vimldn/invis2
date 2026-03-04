// Sub-locations and nearby areas for each city
// These are real neighbourhoods, suburbs, and nearby towns
// Pages won't exist for these — they appear as a grid to capture long-tail search

export interface NearbyArea {
  name: string;
  type: 'neighbourhood' | 'suburb' | 'nearby-town';
}

// Major cities get detailed neighbourhoods; smaller towns get nearby towns
export const nearbyAreas: Record<string, string[]> = {
  // ============ ENGLAND — Major Cities ============
  "London": [
    // Central
    "Mayfair", "Soho", "Covent Garden", "Marylebone", "Fitzrovia", "Bloomsbury", "Holborn", "City of London", "Barbican", "Clerkenwell",
    // North
    "Islington", "Camden", "Hampstead", "Highgate", "Muswell Hill", "Finchley", "Barnet", "Enfield", "Tottenham", "Wood Green", "Crouch End", "Archway", "Holloway", "Stoke Newington", "Walthamstow", "Hackney", "Dalston", "Shoreditch",
    // South
    "Brixton", "Clapham", "Battersea", "Wandsworth", "Tooting", "Balham", "Streatham", "Dulwich", "Peckham", "Camberwell", "Bermondsey", "Greenwich", "Lewisham", "Catford", "Bromley", "Croydon", "Sutton", "Wimbledon", "Putney", "Fulham",
    // East
    "Canary Wharf", "Stratford", "Bow", "Mile End", "Bethnal Green", "Whitechapel", "Limehouse", "Poplar", "Barking", "Dagenham", "Ilford", "Romford", "Havering", "Redbridge", "Newham",
    // West
    "Chelsea", "Kensington", "Notting Hill", "Hammersmith", "Chiswick", "Ealing", "Acton", "Shepherd's Bush", "Bayswater", "Paddington", "Richmond", "Twickenham", "Kingston", "Hounslow", "Brentford", "Uxbridge", "Harrow", "Wembley", "Edgware", "Stanmore",
  ],

  "Birmingham": [
    "Edgbaston", "Moseley", "Harborne", "Selly Oak", "Kings Heath", "Hall Green", "Acocks Green", "Small Heath", "Sparkhill", "Sparkbrook",
    "Erdington", "Sutton Coldfield", "Castle Bromwich", "Solihull", "Shirley", "Sheldon", "Yardley", "Handsworth", "Perry Barr", "Aston",
    "Digbeth", "Jewellery Quarter", "Ladywood", "Nechells", "Bordesley Green", "Bournville", "Northfield", "Longbridge", "Rubery", "Halesowen",
    "Dudley", "West Bromwich", "Smethwick", "Walsall", "Wolverhampton", "Tamworth", "Lichfield", "Cannock", "Bromsgrove", "Redditch",
  ],

  "Manchester": [
    "Didsbury", "Chorlton", "Withington", "Fallowfield", "Levenshulme", "Gorton", "Openshaw", "Ancoats", "Northern Quarter", "Deansgate",
    "Spinningfields", "Castlefield", "Salford", "Prestwich", "Whitefield", "Bury", "Rochdale", "Oldham", "Ashton-under-Lyne", "Stockport",
    "Cheadle", "Altrincham", "Sale", "Stretford", "Trafford", "Eccles", "Swinton", "Worsley", "Bolton", "Wigan",
    "Rusholme", "Moss Side", "Hulme", "Whalley Range", "Burnage", "Heaton Moor", "Heaton Chapel", "Reddish", "Denton", "Hyde",
  ],

  "Leeds": [
    "Headingley", "Chapel Allerton", "Roundhay", "Horsforth", "Meanwood", "Moortown", "Alwoodley", "Adel", "Otley", "Ilkley",
    "Morley", "Pudsey", "Bramley", "Armley", "Holbeck", "Hunslet", "Beeston", "Cross Gates", "Garforth", "Rothwell",
    "Wetherby", "Boston Spa", "Tadcaster", "Harrogate", "Knaresborough", "Guiseley", "Yeadon", "Shipley", "Baildon", "Bingley",
    "Kirkstall", "Burley", "Hyde Park", "Woodhouse", "Harehills", "Oakwood", "Shadwell", "Thorner", "Aberford", "Collingham",
  ],

  "Liverpool": [
    "Aigburth", "Allerton", "Anfield", "Childwall", "Crosby", "Everton", "Fazakerley", "Garston", "Huyton", "Kirkby",
    "Knotty Ash", "Litherland", "Maghull", "Mossley Hill", "Netherton", "Old Swan", "Orrell Park", "Sefton Park", "Speke", "Stanley",
    "Toxteth", "Walton", "Wavertree", "West Derby", "Woolton", "Bootle", "Formby", "Southport", "St Helens", "Widnes",
    "Birkenhead", "Wallasey", "Bebington", "Heswall", "Neston", "Ellesmere Port", "Prescot", "Rainhill", "Whiston", "Halewood",
  ],

  "Sheffield": [
    "Broomhill", "Crookes", "Ecclesall", "Fulwood", "Nether Edge", "Sharrow", "Walkley", "Hillsborough", "Dore", "Totley",
    "Meadowhall", "Attercliffe", "Darnall", "Heeley", "Gleadless", "Woodseats", "Norton", "Mosborough", "Beighton", "Handsworth",
    "Stocksbridge", "Chapeltown", "High Green", "Oughtibridge", "Worrall", "Stannington", "Loxley", "Kelham Island", "Netherthorpe", "Pitsmoor",
    "Rotherham", "Barnsley", "Doncaster", "Chesterfield", "Worksop", "Bakewell", "Matlock", "Buxton", "Hope Valley", "Hathersage",
  ],

  "Bristol": [
    "Clifton", "Redland", "Cotham", "Bishopston", "Stokes Croft", "St Pauls", "Montpelier", "Easton", "St George", "Brislington",
    "Bedminster", "Southville", "Knowle", "Totterdown", "Windmill Hill", "Hengrove", "Whitchurch", "Hartcliffe", "Stockwood", "Fishponds",
    "Horfield", "Henleaze", "Westbury-on-Trym", "Stoke Bishop", "Sneyd Park", "Shirehampton", "Avonmouth", "Portishead", "Clevedon", "Nailsea",
    "Long Ashton", "Keynsham", "Bath", "Thornbury", "Yate", "Filton", "Bradley Stoke", "Patchway", "Kingswood", "Mangotsfield",
  ],

  "Newcastle upon Tyne": [
    "Jesmond", "Gosforth", "Heaton", "Fenham", "Benwell", "Elswick", "Byker", "Walker", "Kenton", "Fawdon",
    "Kingston Park", "Ponteland", "Darras Hall", "Cramlington", "Blyth", "Ashington", "Morpeth", "Hexham", "Corbridge", "Prudhoe",
    "Gateshead", "Whickham", "Low Fell", "Dunston", "Team Valley", "Sunderland", "Washington", "South Shields", "North Shields", "Whitley Bay",
    "Tynemouth", "Wallsend", "Jarrow", "Hebburn", "Boldon", "Seaham", "Durham", "Chester-le-Street", "Consett", "Stanley",
  ],

  "Nottingham": [
    "West Bridgford", "Beeston", "Mapperley", "Sherwood", "Carlton", "Arnold", "Hucknall", "Bulwell", "Basford", "Hyson Green",
    "Sneinton", "St Anns", "The Park", "Lenton", "Radford", "Wollaton", "Bramcote", "Stapleford", "Long Eaton", "Eastwood",
    "Mansfield", "Newark", "Grantham", "Bingham", "Southwell", "Retford", "Worksop", "Ilkeston", "Ripley", "Heanor",
    "Gedling", "Netherfield", "Colwick", "Ruddington", "Keyworth", "Cotgrave", "Calverton", "Ravenshead", "Kimberley", "Awsworth",
  ],

  "Leicester": [
    "Oadby", "Wigston", "Knighton", "Stoneygate", "Clarendon Park", "Evington", "Humberstone", "Thurnby", "Scraptoft", "Hamilton",
    "Beaumont Leys", "Braunstone", "Western Park", "Aylestone", "Narborough", "Enderby", "Blaby", "Glen Parva", "South Wigston", "Countesthorpe",
    "Hinckley", "Loughborough", "Melton Mowbray", "Market Harborough", "Coalville", "Ashby-de-la-Zouch", "Syston", "Quorn", "Birstall", "Thurmaston",
    "Groby", "Ratby", "Glenfield", "Anstey", "Mountsorrel", "Sileby", "Barrow upon Soar", "Kibworth", "Fleckney", "Lutterworth",
  ],

  "Coventry": [
    "Earlsdon", "Styvechale", "Finham", "Cheylesmore", "Whitley", "Binley", "Walsgrave", "Wyken", "Bell Green", "Foleshill",
    "Radford", "Coundon", "Allesley", "Eastern Green", "Tile Hill", "Canley", "Westwood", "Baginton", "Kenilworth", "Warwick",
    "Leamington Spa", "Rugby", "Nuneaton", "Bedworth", "Bulkington", "Atherstone", "Stratford-upon-Avon", "Solihull", "Meridian", "Exhall",
  ],

  "Bradford": [
    "Saltaire", "Shipley", "Bingley", "Ilkley", "Keighley", "Silsden", "Haworth", "Queensbury", "Thornton", "Clayton",
    "Manningham", "Heaton", "Frizinghall", "Undercliffe", "Idle", "Thackley", "Apperley Bridge", "Calverley", "Pudsey", "Tong",
    "Great Horton", "Wibsey", "Low Moor", "Wyke", "Birkenshaw", "Cleckheaton", "Brighouse", "Elland", "Huddersfield", "Halifax",
  ],

  // ============ Additional Major Cities ============

  "Southampton": [
    "Shirley", "Portswood", "Bassett", "Highfield", "Bitterne", "Woolston", "Sholing", "Hedge End", "West End", "Botley",
    "Eastleigh", "Chandlers Ford", "Romsey", "Totton", "Hythe", "Marchwood", "Hamble", "Netley", "Bursledon", "Swaythling",
    "Lordshill", "Millbrook", "Freemantle", "St Denys", "Itchen", "Ocean Village", "Thornhill", "Harefield", "Maybush", "Redbridge",
  ],

  "Portsmouth": [
    "Southsea", "Old Portsmouth", "Fratton", "Copnor", "Hilsea", "Cosham", "Drayton", "Farlington", "North End", "Baffins",
    "Eastney", "Milton", "Landport", "Portsea", "Stamshaw", "Tipner", "Paulsgrove", "Wymering", "Havant", "Waterlooville",
    "Gosport", "Fareham", "Portchester", "Emsworth", "Hayling Island", "Lee-on-the-Solent", "Stubbington", "Titchfield", "Wickham", "Denmead",
  ],

  "Plymouth": [
    "Barbican", "Hoe", "Mutley", "Mannamead", "Peverell", "Crownhill", "Derriford", "Plympton", "Plymstock", "Saltash",
    "Torpoint", "Ivybridge", "Tavistock", "Liskeard", "Looe", "Kingsbridge", "Totnes", "Newton Ferrers", "Yealmpton", "Elburton",
    "Staddiscombe", "Honicknowle", "Eggbuckland", "Estover", "Southway", "Woolwell", "Roborough", "Tamerton Foliot", "St Budeaux", "Devonport",
  ],

  "Reading": [
    "Caversham", "Tilehurst", "Earley", "Woodley", "Lower Earley", "Shinfield", "Calcot", "Theale", "Purley on Thames", "Sonning",
    "Wokingham", "Bracknell", "Winnersh", "Twyford", "Henley-on-Thames", "Pangbourne", "Goring", "Whitley", "Southcote", "Coley",
    "Newbury", "Thatcham", "Basingstoke", "Maidenhead", "Marlow", "High Wycombe", "Tadley", "Burghfield", "Mortimer", "Swallowfield",
  ],

  "Brighton": [
    "Hove", "Kemptown", "Rottingdean", "Saltdean", "Peacehaven", "Newhaven", "Lewes", "Shoreham-by-Sea", "Lancing", "Worthing",
    "Preston Park", "Fiveways", "Hanover", "Seven Dials", "North Laine", "Patcham", "Hollingbury", "Moulsecoomb", "Bevendean", "Woodingdean",
    "Portslade", "Mile Oak", "Southwick", "Steyning", "Hassocks", "Hurstpierpoint", "Burgess Hill", "Haywards Heath", "Ditchling", "Falmer",
  ],

  "Oxford": [
    "Headington", "Cowley", "Summertown", "Jericho", "Botley", "Iffley", "Rose Hill", "Littlemore", "Blackbird Leys", "Marston",
    "Wolvercote", "Cutteslowe", "North Oxford", "East Oxford", "Osney", "Abingdon", "Didcot", "Bicester", "Witney", "Thame",
    "Woodstock", "Kidlington", "Eynsham", "Wallingford", "Wantage", "Banbury", "Carterton", "Chipping Norton", "Henley-on-Thames", "Faringdon",
  ],

  "Cambridge": [
    "Cherry Hinton", "Trumpington", "Newnham", "Chesterton", "Arbury", "Kings Hedges", "Milton", "Histon", "Impington", "Girton",
    "Bar Hill", "Cambourne", "Fulbourn", "Great Shelford", "Sawston", "Linton", "Haverhill", "Newmarket", "Ely", "St Ives",
    "Huntingdon", "St Neots", "Royston", "Saffron Walden", "Soham", "Littleport", "March", "Chatteris", "Whittlesey", "Ramsey",
  ],

  "York": [
    "Clifton", "Acomb", "Bishopthorpe", "Heslington", "Fulford", "Tang Hall", "Huntington", "Haxby", "Strensall", "Wigginton",
    "Rawcliffe", "Poppleton", "Copmanthorpe", "Dringhouses", "Woodthorpe", "Heworth", "Osbaldwick", "Dunnington", "Elvington", "Stamford Bridge",
    "Tadcaster", "Selby", "Malton", "Easingwold", "Thirsk", "Wetherby", "Boroughbridge", "Ripon", "Harrogate", "Knaresborough",
  ],

  // ============ SCOTLAND ============
  "Glasgow": [
    "West End", "Finnieston", "Partick", "Hyndland", "Hillhead", "Kelvinside", "Bearsden", "Milngavie", "Newton Mearns", "Giffnock",
    "Shawlands", "Pollokshields", "Queens Park", "Cathcart", "Clarkston", "Busby", "Thornliebank", "Barrhead", "Paisley", "Renfrew",
    "Bishopbriggs", "Kirkintilloch", "Lenzie", "Cumbernauld", "Airdrie", "Coatbridge", "Motherwell", "Hamilton", "East Kilbride", "Rutherglen",
    "Cambuslang", "Uddingston", "Bothwell", "Blantyre", "Bellshill", "Wishaw", "Clydebank", "Dumbarton", "Erskine", "Johnstone",
  ],

  "Edinburgh": [
    "New Town", "Old Town", "Stockbridge", "Morningside", "Bruntsfield", "Marchmont", "Tollcross", "Gorgie", "Dalry", "Haymarket",
    "Leith", "Portobello", "Cramond", "Corstorphine", "Murrayfield", "Blackhall", "Davidson's Mains", "Barnton", "South Queensferry", "Kirkliston",
    "Musselburgh", "Prestonpans", "Dalkeith", "Bonnyrigg", "Penicuik", "Loanhead", "Lasswade", "Gorebridge", "Livingston", "Bathgate",
    "Linlithgow", "Broxburn", "Currie", "Balerno", "Juniper Green", "Ratho", "Fairmilehead", "Liberton", "Gilmerton", "Craigmillar",
  ],

  "Aberdeen": [
    "Old Aberdeen", "Rosemount", "Mannofield", "Cults", "Bieldside", "Milltimber", "Peterculter", "Westhill", "Kingswells", "Dyce",
    "Bridge of Don", "Danestone", "Bucksburn", "Northfield", "Mastrick", "Summerhill", "Ferryhill", "Torry", "Kincorth", "Nigg",
    "Stonehaven", "Inverurie", "Ellon", "Banchory", "Portlethen", "Newtonhill", "Muchalls", "Balmedie", "Blackburn", "Kemnay",
  ],

  "Dundee": [
    "Broughty Ferry", "West End", "Lochee", "Stobswell", "Menzieshill", "Charleston", "Whitfield", "Fintry", "Douglas", "Barnhill",
    "Invergowrie", "Monifieth", "Carnoustie", "Arbroath", "Forfar", "Brechin", "Kirriemuir", "Newport-on-Tay", "Tayport", "Wormit",
  ],

  // ============ WALES ============
  "Cardiff": [
    "Canton", "Pontcanna", "Cathays", "Roath", "Penylan", "Cyncoed", "Heath", "Llanishen", "Rhiwbina", "Whitchurch",
    "Llandaff", "Radyr", "Fairwater", "Ely", "Caerau", "Grangetown", "Butetown", "Splott", "Adamsdown", "Riverside",
    "Penarth", "Dinas Powys", "Barry", "Cowbridge", "Bridgend", "Pontypridd", "Caerphilly", "Newport", "Cwmbran", "Llantrisant",
  ],

  "Swansea": [
    "Uplands", "Brynmill", "Sketty", "Killay", "Dunvant", "Mumbles", "Langland", "Caswell", "Bishopston", "Oystermouth",
    "Morriston", "Llansamlet", "Birchgrove", "Penlan", "Townhill", "Mayhill", "Cockett", "Fforestfach", "Gorseinon", "Pontarddulais",
    "Neath", "Port Talbot", "Llanelli", "Ammanford", "Pontardawe", "Clydach", "Ystalyfera", "Cwmafan", "Baglan", "Briton Ferry",
  ],

  // ============ NORTHERN IRELAND ============
  "Belfast": [
    "Botanic", "Stranmillis", "Malone", "Lisburn Road", "Ormeau", "Ravenhill", "Ballyhackamore", "Belmont", "Stormont", "Knock",
    "Finaghy", "Dunmurry", "Andersonstown", "Falls Road", "Shankill", "Crumlin Road", "Antrim Road", "Shore Road", "Newtownabbey", "Greenisland",
    "Holywood", "Bangor", "Dundonald", "Comber", "Carryduff", "Lisburn", "Hillsborough", "Moira", "Dromore", "Ballynahinch",
  ],
};

// Fallback: for cities not in the detailed map above, generate nearby areas from LOCATIONS data
export function getNearbyAreas(cityName: string): string[] {
  // First check detailed map
  if (nearbyAreas[cityName]) return nearbyAreas[cityName];

  // Otherwise return empty — the component will handle "no sub-locations" gracefully
  return [];
}
