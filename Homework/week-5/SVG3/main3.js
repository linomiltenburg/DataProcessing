/* use this to test out your function */
window.onload = function() {

// list which contains the data for each country
var data = [["AFG", "3.13554616440454"], ["ALB", "-0.147831247146874"], ["DZA", "1.94808888782918"], ["ASM", "-0.161023346987729"], ["AGO", "3.33156741325142"], ["ATG", "1.03487530705441"], ["ARG", "1.04980926143269"], ["ARM", "0.348282811655418"], ["ABW", "0.447318551966645"], ["AUS", "1.72289521851643"], ["AUT", "0.45593747231891"], ["AZE", "1.32876382733755"], ["The\"", "BHS"], ["BHR", "2.08850552032738"], ["BGD", "1.19988286442375"], ["BRB", "0.347930380767262"], ["BLR", "-0.0950520217311779"], ["BEL", "0.726031655132031"], ["BLZ", "2.25689110643714"], ["BEN", "2.72747256042734"], ["BMU", "0.362431076141512"], ["BTN", "1.55359954324877"], ["BOL", "1.58022680887137"], ["BIH", "-0.101583030403432"], ["BWA", "2.04225992425485"], ["BRA", "0.935181982037551"], ["BRN", "1.50793895336745"], ["BGR", "-0.579220596364389"], ["BFA", "2.96043989971957"], ["BDI", "3.35884601687826"], ["CPV", "1.14676632635777"], ["KHM", "1.62554554951901"], ["CMR", "2.52674162262418"], ["CAN", "1.19118432966877"], ["CYM", "1.65119174494934"], ["CAF", "1.93652167505049"], ["TCD", "3.33406897340631"], ["CHI", "0.526374244170223"], ["CHL", "1.08201920515786"], ["CHN", "0.487231117971201"], ["COL", "1.01744880528768"], ["COM", "2.44060090158682"], ["Dem. Rep.\"", "ZAR"], ["Rep.\"", "COG"], ["CRI", "1.15966975196247"], ["CIV", "2.3904618964095"], ["HRV", "-0.305655944795909"], ["CUB", "0.168188789054051"], ["CUW", "0.829929595036991"], ["CYP", "1.12728698014579"], ["CZE", "0.139925655740972"], ["DNK", "0.376272242619955"], ["DJI", "1.32956029983194"], ["DMA", "0.395564054051722"], ["DOM", "1.26743233316616"], ["ECU", "1.58329154406498"], ["Arab Rep.\"", "EGY"], ["SLV", "0.28076840256955"], ["GNQ", "2.99252250281702"], ["ERI", "2.12086260081849"], ["EST", "-0.357944411443807"], ["ETH", "2.56264085647389"], ["FRO", "-0.204366072057645"], ["FJI", "0.784506904683876"], ["FIN", "0.475809486683209"], ["FRA", "0.453799462538199"], ["PYF", "1.06971350735028"], ["GAB", "2.26856584882221"], ["The\"", "GMB"], ["GEO", "0.163805676221493"], ["DEU", "-1.69134895621081"], ["GHA", "2.44127262672884"], ["GRC", "-0.27405510422755"], ["GRL", "-0.14072121935205"], ["GRD", "0.385664418442414"], ["GUM", "1.20434619601414"], ["GTM", "2.10066630671696"], ["GIN", "2.72332710077322"], ["GNB", "2.42688621174717"], ["GUY", "0.333753420997873"], ["HTI", "1.40885159325372"], ["HND", "1.49397750354525"], ["China\"", "HKG"], ["HUN", "-0.516437606548041"], ["ISL", "0.532100734916982"], ["IND", "1.28583203721824"], ["IDN", "1.31061001922409"], ["Islamic Rep.\"", "IRN"], ["IRQ", "3.00616064753757"], ["IRL", "0.220500758776072"], ["IMY", "0.831152939827935"], ["ISR", "1.84615132126711"], ["ITA", "0.269541239520996"], ["JAM", "0.294657238442507"], ["JPN", "-0.200320558786153"], ["JOR", "2.19226317027572"], ["KAZ", "1.40835255679721"], ["KEN", "2.67520666311141"], ["KIR", "1.8535001135717"], ["Dem. Rep.\"", "PRK"], ["Rep.\"", "KOR"], ["KSV", "0.79212751139101"], ["KWT", "5.41975088763288"], ["KGZ", "1.66523655939962"], ["LAO", "1.65332954398466"], ["LVA", "-1.24035915329271"], ["LBN", "1.17996264486895"], ["LSO", "1.1921571529919"], ["LBR", "2.67451548898469"], ["LBY", "-0.083502662134347"], ["LIE", "0.692780427346098"], ["LTU", "-1.34120198821595"], ["LUX", "2.40154189982875"], ["China\"", "MAC"], ["FYR\"", "MKD"], ["MDG", "2.79671093972952"], ["MWI", "3.06305957030848"], ["MYS", "1.55909296321426"], ["MDV", "1.81412131614855"], ["MLI", "2.98098557494676"], ["MLT", "0.762696599023741"], ["MHL", "0.231930448819915"], ["MRT", "2.51601414262101"], ["MUS", "0.277321025514609"], ["MEX", "1.4071495144712"], ["Fed. Sts.\"", "FSM"], ["MDA", "-0.0131188896045369"], ["MCO", "0.576463194637812"], ["MNG", "1.76980891849007"], ["MNE", "0.0841474080023094"], ["MAR", "1.38052420554849"], ["MOZ", "2.82189810279192"], ["MMR", "0.799532281009548"], ["NAM", "2.27221620103119"], ["NPL", "1.17513955527782"], ["NLD", "0.370055034770235"], ["NCL", "1.56253179030808"], ["NZL", "0.548220797298334"], ["NIC", "1.18526095820849"], ["NER", "3.98694686495837"], ["NGA", "2.69268373284324"], ["MNP", "0.150167089074287"], ["NOR", "1.31344098868985"], ["OMN", "9.93204475863661"], ["PAK", "2.12084736871807"], ["PLW", "0.725306598261685"], ["PAN", "1.66403417351215"], ["PNG", "2.17156801187023"], ["PRY", "1.34775977436034"], ["PER", "1.3314146175279"], ["PHL", "1.59157306573233"], ["POL", "-0.000239076003298365"], ["PRT", "-0.405421787747567"], ["PRI", "-1.21408734682618"], ["QAT", "5.62174462810365"], ["ROM", "-0.445177936198383"], ["RUS", "0.168301590750173"], ["RWA", "2.44162683912427"], ["WSM", "0.779628485577476"], ["SMR", "0.753505416684141"], ["STP", "2.17378933060089"], ["SAU", "2.42824061643758"], ["SEN", "3.11852864040974"], ["SRB", "-0.485299545092705"], ["SYC", "0.980980190128322"], ["SLE", "2.24655147431771"], ["SGP", "2.45246235389098"], ["SXM", "3.54058281882925"], ["SVK", "0.170183855326072"], ["SVN", "0.210024305900448"], ["SLB", "2.11894090111294"], ["SOM", "2.28796843459542"], ["ZAF", "1.51735849256521"], ["SSD", "4.37933811842944"], ["ESP", "0.0649259625617232"], ["LKA", ".."], ["KNA", "1.22272920856574"], ["LCA", "0.89514380171451"], ["MAF", "1.11736635283587"], ["VCT", "-0.00640219504048757"], ["SDN", "2.12850183954679"], ["SUR", "0.968852816204413"], ["SWZ", "1.57407535830761"], ["SWE", "0.739763272434863"], ["CHE", "1.06181932886789"], ["SYR", "1.67652943924961"], ["TJK", "2.25710120734508"], ["TZA", "3.18024411960534"], ["THA", "0.389614385271226"], ["TMP", "2.5176820602427"], ["TGO", "2.69555434712383"], ["TON", "0.360488244237759"], ["TTO", "0.507330234470042"], ["TUN", "0.966848702117276"], ["TUR", "1.22186365749016"], ["TKM", "1.28934655520654"], ["TCA", "2.19158669406544"], ["TUV", "0.162403608573458"], ["UGA", "3.27408587776378"], ["UKR", "-0.247099230432045"], ["ARE", "2.46313972142663"], ["GBR", "0.695315842711388"], ["USA", "0.763927409799426"], ["URY", "0.328587839545291"], ["UZB", "1.47209998811321"], ["VUT", "2.29773030255894"], ["RB\"", "VEN"], ["VNM", "1.0564445479776"], ["VIR", "-0.482330520653023"], ["WBG", "3.00626405051232"], ["Rep.\"", "YEM"], ["ZMB", "3.04213897084648"], ["ZWE", "2.15052321047874"]]

// country codes
var country_codes =
    [["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "Åland Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia, Plurinational State of"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Congo"],
    ["cd", "COD", "Congo, the Democratic Republic of the"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Côte d'Ivoire"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Curaçao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran, Islamic Republic of"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "Korea, Democratic People's Republic of"],
    ["kr", "KOR", "Korea, Republic of"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Lao People's Democratic Republic"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova, Republic of"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nl", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "Réunion"],
    ["ro", "ROU", "Romania"],
    ["ru", "RUS", "Russian Federation"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barthélemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syrian Arab Republic"],
    ["tw", "TWN", "Taiwan, Province of China"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania, United Republic of"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
    ["vn", "VNM", "Viet Nam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];

for (i = 0, n = data.length; i < n; i++){
  for (j = 0, k = country_codes.length; j < k; j++){
    if (data[i][0] == country_codes[j][1]){
      data[i][0] = country_codes[j][0]
      id = data[i][0]
      value = data[i][1]
      console.log(id, value)

      // give a country a certain color when value under -1
      if (value <= -1){
        color = "#a63603"
        changeColor(id, color)
      }
      // give a country a certain color when value between -1 and 0
      if (value > -1 && value <= 0){
        color = "#e6550d"
        changeColor(id, color)
      }
      // give a country a certain color when value between 0 and 1
      if (value > 0 && value <= 1){
        color = "#9ecae1"
        changeColor(id, color)
      }
      // give a country a certain color when value between 1 and 2
      if (value > 1 && value <= 2){
        color = "#6baed6"
        changeColor(id, color)
      }
      // give a country a certain color when value between 2 and 3
      if (value > 2 && value <= 3){
        color = "#3182bd"
        changeColor(id, color)
      }
      // give a country a certain color when value between 3 and 4
      if (value > 3){
        color = "#08519c"
        changeColor(id, color)
      }
    }
  }
}
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
  element_id = document.getElementById(id)
  // when id has g-tag take the path within the g-tag
  if (element_id.nodeName == "g"){
    country = element_id.getElementsByTagName("path")

  for (l = 0, m = country.length; l < m; l++){
      country[l].style.fill = color
    }
  }

  else if (element_id.nodeName != "g"){
    element_id.style.fill = color
  }
}
