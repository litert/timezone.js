/**
 * Copyright 2020 Angus.Fenying <fenying@litert.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const TIME_ZONES: Record<string, ITimeZone> = {
    "africa/abidjan": {
        "name": "Africa/Abidjan",
        "description": "",
        "location": "CI",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/accra": {
        "name": "Africa/Accra",
        "description": "",
        "location": "GH",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/addis_ababa": {
        "name": "Africa/Addis_Ababa",
        "description": "",
        "location": "ET",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "africa/algiers": {
        "name": "Africa/Algiers",
        "description": "",
        "location": "DZ",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/asmara": {
        "name": "Africa/Asmara",
        "description": "",
        "location": "ER",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "africa/asmera": {
        "name": "Africa/Asmera",
        "description": "",
        "location": null,
        "offset": 180,
        "dstOffset": 180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "africa/bamako": {
        "name": "Africa/Bamako",
        "description": "",
        "location": "ML",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "africa/bangui": {
        "name": "Africa/Bangui",
        "description": "",
        "location": "CF",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Lagos"
    },
    "africa/banjul": {
        "name": "Africa/Banjul",
        "description": "",
        "location": "GM",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "africa/bissau": {
        "name": "Africa/Bissau",
        "description": "",
        "location": "GW",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/blantyre": {
        "name": "Africa/Blantyre",
        "description": "",
        "location": "MW",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Maputo"
    },
    "africa/brazzaville": {
        "name": "Africa/Brazzaville",
        "description": "",
        "location": "CG",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Lagos"
    },
    "africa/bujumbura": {
        "name": "Africa/Bujumbura",
        "description": "",
        "location": "BI",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Maputo"
    },
    "africa/cairo": {
        "name": "Africa/Cairo",
        "description": "",
        "location": "EG",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/casablanca": {
        "name": "Africa/Casablanca",
        "description": "",
        "location": "MA",
        "offset": 60,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/ceuta": {
        "name": "Africa/Ceuta",
        "description": "Ceuta, Melilla",
        "location": "ES",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/conakry": {
        "name": "Africa/Conakry",
        "description": "",
        "location": "GN",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "africa/dakar": {
        "name": "Africa/Dakar",
        "description": "",
        "location": "SN",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "africa/dar_es_salaam": {
        "name": "Africa/Dar_es_Salaam",
        "description": "",
        "location": "TZ",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "africa/djibouti": {
        "name": "Africa/Djibouti",
        "description": "",
        "location": "DJ",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "africa/douala": {
        "name": "Africa/Douala",
        "description": "",
        "location": "CM",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Lagos"
    },
    "africa/el_aaiun": {
        "name": "Africa/El_Aaiun",
        "description": "",
        "location": "EH",
        "offset": 60,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/freetown": {
        "name": "Africa/Freetown",
        "description": "",
        "location": "SL",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "africa/gaborone": {
        "name": "Africa/Gaborone",
        "description": "",
        "location": "BW",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Maputo"
    },
    "africa/harare": {
        "name": "Africa/Harare",
        "description": "",
        "location": "ZW",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Maputo"
    },
    "africa/johannesburg": {
        "name": "Africa/Johannesburg",
        "description": "",
        "location": "ZA",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/juba": {
        "name": "Africa/Juba",
        "description": "",
        "location": "SS",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/kampala": {
        "name": "Africa/Kampala",
        "description": "",
        "location": "UG",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "africa/khartoum": {
        "name": "Africa/Khartoum",
        "description": "",
        "location": "SD",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/kigali": {
        "name": "Africa/Kigali",
        "description": "",
        "location": "RW",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Maputo"
    },
    "africa/kinshasa": {
        "name": "Africa/Kinshasa",
        "description": "Dem. Rep. of Congo (west)",
        "location": "CD",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Lagos"
    },
    "africa/lagos": {
        "name": "Africa/Lagos",
        "description": "West Africa Time",
        "location": "NG",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/libreville": {
        "name": "Africa/Libreville",
        "description": "",
        "location": "GA",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Lagos"
    },
    "africa/lome": {
        "name": "Africa/Lome",
        "description": "",
        "location": "TG",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "africa/luanda": {
        "name": "Africa/Luanda",
        "description": "",
        "location": "AO",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Lagos"
    },
    "africa/lubumbashi": {
        "name": "Africa/Lubumbashi",
        "description": "Dem. Rep. of Congo (east)",
        "location": "CD",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Maputo"
    },
    "africa/lusaka": {
        "name": "Africa/Lusaka",
        "description": "",
        "location": "ZM",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Maputo"
    },
    "africa/malabo": {
        "name": "Africa/Malabo",
        "description": "",
        "location": "GQ",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Lagos"
    },
    "africa/maputo": {
        "name": "Africa/Maputo",
        "description": "Central Africa Time",
        "location": "MZ",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/maseru": {
        "name": "Africa/Maseru",
        "description": "",
        "location": "LS",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Johannesburg"
    },
    "africa/mbabane": {
        "name": "Africa/Mbabane",
        "description": "",
        "location": "SZ",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Johannesburg"
    },
    "africa/mogadishu": {
        "name": "Africa/Mogadishu",
        "description": "",
        "location": "SO",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "africa/monrovia": {
        "name": "Africa/Monrovia",
        "description": "",
        "location": "LR",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/nairobi": {
        "name": "Africa/Nairobi",
        "description": "",
        "location": "KE",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/ndjamena": {
        "name": "Africa/Ndjamena",
        "description": "",
        "location": "TD",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/niamey": {
        "name": "Africa/Niamey",
        "description": "",
        "location": "NE",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Lagos"
    },
    "africa/nouakchott": {
        "name": "Africa/Nouakchott",
        "description": "",
        "location": "MR",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "africa/ouagadougou": {
        "name": "Africa/Ouagadougou",
        "description": "",
        "location": "BF",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "africa/porto-novo": {
        "name": "Africa/Porto-Novo",
        "description": "",
        "location": "BJ",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Lagos"
    },
    "africa/sao_tome": {
        "name": "Africa/Sao_Tome",
        "description": "",
        "location": "ST",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/timbuktu": {
        "name": "Africa/Timbuktu",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "africa/tripoli": {
        "name": "Africa/Tripoli",
        "description": "",
        "location": "LY",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/tunis": {
        "name": "Africa/Tunis",
        "description": "",
        "location": "TN",
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "africa/windhoek": {
        "name": "Africa/Windhoek",
        "description": "",
        "location": "NA",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/adak": {
        "name": "America/Adak",
        "description": "Aleutian Islands",
        "location": "US",
        "offset": -600,
        "dstOffset": -540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/anchorage": {
        "name": "America/Anchorage",
        "description": "Alaska (most areas)",
        "location": "US",
        "offset": -540,
        "dstOffset": -480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/anguilla": {
        "name": "America/Anguilla",
        "description": "",
        "location": "AI",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/antigua": {
        "name": "America/Antigua",
        "description": "",
        "location": "AG",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/araguaina": {
        "name": "America/Araguaina",
        "description": "Tocantins",
        "location": "BR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/buenos_aires": {
        "name": "America/Argentina/Buenos_Aires",
        "description": "Buenos Aires (BA, CF)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/catamarca": {
        "name": "America/Argentina/Catamarca",
        "description": "Catamarca (CT); Chubut (CH)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/comodrivadavia": {
        "name": "America/Argentina/ComodRivadavia",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Argentina/Catamarca"
    },
    "america/argentina/cordoba": {
        "name": "America/Argentina/Cordoba",
        "description": "Argentina (most areas: CB, CC, CN, ER, FM, MN, SE, SF)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/jujuy": {
        "name": "America/Argentina/Jujuy",
        "description": "Jujuy (JY)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/la_rioja": {
        "name": "America/Argentina/La_Rioja",
        "description": "La Rioja (LR)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/mendoza": {
        "name": "America/Argentina/Mendoza",
        "description": "Mendoza (MZ)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/rio_gallegos": {
        "name": "America/Argentina/Rio_Gallegos",
        "description": "Santa Cruz (SC)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/salta": {
        "name": "America/Argentina/Salta",
        "description": "Salta (SA, LP, NQ, RN)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/san_juan": {
        "name": "America/Argentina/San_Juan",
        "description": "San Juan (SJ)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/san_luis": {
        "name": "America/Argentina/San_Luis",
        "description": "San Luis (SL)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/tucuman": {
        "name": "America/Argentina/Tucuman",
        "description": "Tucumán (TM)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/argentina/ushuaia": {
        "name": "America/Argentina/Ushuaia",
        "description": "Tierra del Fuego (TF)",
        "location": "AR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/aruba": {
        "name": "America/Aruba",
        "description": "",
        "location": "AW",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Curacao"
    },
    "america/asuncion": {
        "name": "America/Asuncion",
        "description": "",
        "location": "PY",
        "offset": -240,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/atikokan": {
        "name": "America/Atikokan",
        "description": "EST - ON (Atikokan); NU (Coral H)",
        "location": "CA",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/atka": {
        "name": "America/Atka",
        "description": "",
        "location": null,
        "offset": -600,
        "dstOffset": -540,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Adak"
    },
    "america/bahia": {
        "name": "America/Bahia",
        "description": "Bahia",
        "location": "BR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/bahia_banderas": {
        "name": "America/Bahia_Banderas",
        "description": "Central Time - Bahía de Banderas",
        "location": "MX",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/barbados": {
        "name": "America/Barbados",
        "description": "",
        "location": "BB",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/belem": {
        "name": "America/Belem",
        "description": "Pará (east); Amapá",
        "location": "BR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/belize": {
        "name": "America/Belize",
        "description": "",
        "location": "BZ",
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/blanc-sablon": {
        "name": "America/Blanc-Sablon",
        "description": "AST - QC (Lower North Shore)",
        "location": "CA",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/boa_vista": {
        "name": "America/Boa_Vista",
        "description": "Roraima",
        "location": "BR",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/bogota": {
        "name": "America/Bogota",
        "description": "",
        "location": "CO",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/boise": {
        "name": "America/Boise",
        "description": "Mountain - ID (south); OR (east)",
        "location": "US",
        "offset": -420,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/buenos_aires": {
        "name": "America/Buenos_Aires",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Argentina/Buenos_Aires"
    },
    "america/cambridge_bay": {
        "name": "America/Cambridge_Bay",
        "description": "Mountain - NU (west)",
        "location": "CA",
        "offset": -420,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/campo_grande": {
        "name": "America/Campo_Grande",
        "description": "Mato Grosso do Sul",
        "location": "BR",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/cancun": {
        "name": "America/Cancun",
        "description": "Eastern Standard Time - Quintana Roo",
        "location": "MX",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/caracas": {
        "name": "America/Caracas",
        "description": "",
        "location": "VE",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/catamarca": {
        "name": "America/Catamarca",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Argentina/Catamarca"
    },
    "america/cayenne": {
        "name": "America/Cayenne",
        "description": "",
        "location": "GF",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/cayman": {
        "name": "America/Cayman",
        "description": "",
        "location": "KY",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Panama"
    },
    "america/chicago": {
        "name": "America/Chicago",
        "description": "Central (most areas)",
        "location": "US",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/chihuahua": {
        "name": "America/Chihuahua",
        "description": "Mountain Time - Chihuahua (most areas)",
        "location": "MX",
        "offset": -420,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/coral_harbour": {
        "name": "America/Coral_Harbour",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Atikokan"
    },
    "america/cordoba": {
        "name": "America/Cordoba",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Argentina/Cordoba"
    },
    "america/costa_rica": {
        "name": "America/Costa_Rica",
        "description": "",
        "location": "CR",
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/creston": {
        "name": "America/Creston",
        "description": "MST - BC (Creston)",
        "location": "CA",
        "offset": -420,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/cuiaba": {
        "name": "America/Cuiaba",
        "description": "Mato Grosso",
        "location": "BR",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/curacao": {
        "name": "America/Curacao",
        "description": "",
        "location": "CW",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/danmarkshavn": {
        "name": "America/Danmarkshavn",
        "description": "National Park (east coast)",
        "location": "GL",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/dawson": {
        "name": "America/Dawson",
        "description": "MST - Yukon (west)",
        "location": "CA",
        "offset": -420,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/dawson_creek": {
        "name": "America/Dawson_Creek",
        "description": "MST - BC (Dawson Cr, Ft St John)",
        "location": "CA",
        "offset": -420,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/denver": {
        "name": "America/Denver",
        "description": "Mountain (most areas)",
        "location": "US",
        "offset": -420,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/detroit": {
        "name": "America/Detroit",
        "description": "Eastern - MI (most areas)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/dominica": {
        "name": "America/Dominica",
        "description": "",
        "location": "DM",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/edmonton": {
        "name": "America/Edmonton",
        "description": "Mountain - AB; BC (E); SK (W)",
        "location": "CA",
        "offset": -420,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/eirunepe": {
        "name": "America/Eirunepe",
        "description": "Amazonas (west)",
        "location": "BR",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/el_salvador": {
        "name": "America/El_Salvador",
        "description": "",
        "location": "SV",
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/ensenada": {
        "name": "America/Ensenada",
        "description": "",
        "location": null,
        "offset": -480,
        "dstOffset": -420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Tijuana"
    },
    "america/fort_nelson": {
        "name": "America/Fort_Nelson",
        "description": "MST - BC (Ft Nelson)",
        "location": "CA",
        "offset": -420,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/fort_wayne": {
        "name": "America/Fort_Wayne",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Indiana/Indianapolis"
    },
    "america/fortaleza": {
        "name": "America/Fortaleza",
        "description": "Brazil (northeast: MA, PI, CE, RN, PB)",
        "location": "BR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/glace_bay": {
        "name": "America/Glace_Bay",
        "description": "Atlantic - NS (Cape Breton)",
        "location": "CA",
        "offset": -240,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/godthab": {
        "name": "America/Godthab",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -120,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Nuuk"
    },
    "america/goose_bay": {
        "name": "America/Goose_Bay",
        "description": "Atlantic - Labrador (most areas)",
        "location": "CA",
        "offset": -240,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/grand_turk": {
        "name": "America/Grand_Turk",
        "description": "",
        "location": "TC",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/grenada": {
        "name": "America/Grenada",
        "description": "",
        "location": "GD",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/guadeloupe": {
        "name": "America/Guadeloupe",
        "description": "",
        "location": "GP",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/guatemala": {
        "name": "America/Guatemala",
        "description": "",
        "location": "GT",
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/guayaquil": {
        "name": "America/Guayaquil",
        "description": "Ecuador (mainland)",
        "location": "EC",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/guyana": {
        "name": "America/Guyana",
        "description": "",
        "location": "GY",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/halifax": {
        "name": "America/Halifax",
        "description": "Atlantic - NS (most areas); PE",
        "location": "CA",
        "offset": -240,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/havana": {
        "name": "America/Havana",
        "description": "",
        "location": "CU",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/hermosillo": {
        "name": "America/Hermosillo",
        "description": "Mountain Standard Time - Sonora",
        "location": "MX",
        "offset": -420,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/indiana/indianapolis": {
        "name": "America/Indiana/Indianapolis",
        "description": "Eastern - IN (most areas)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/indiana/knox": {
        "name": "America/Indiana/Knox",
        "description": "Central - IN (Starke)",
        "location": "US",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/indiana/marengo": {
        "name": "America/Indiana/Marengo",
        "description": "Eastern - IN (Crawford)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/indiana/petersburg": {
        "name": "America/Indiana/Petersburg",
        "description": "Eastern - IN (Pike)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/indiana/tell_city": {
        "name": "America/Indiana/Tell_City",
        "description": "Central - IN (Perry)",
        "location": "US",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/indiana/vevay": {
        "name": "America/Indiana/Vevay",
        "description": "Eastern - IN (Switzerland)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/indiana/vincennes": {
        "name": "America/Indiana/Vincennes",
        "description": "Eastern - IN (Da, Du, K, Mn)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/indiana/winamac": {
        "name": "America/Indiana/Winamac",
        "description": "Eastern - IN (Pulaski)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/indianapolis": {
        "name": "America/Indianapolis",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Indiana/Indianapolis"
    },
    "america/inuvik": {
        "name": "America/Inuvik",
        "description": "Mountain - NT (west)",
        "location": "CA",
        "offset": -420,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/iqaluit": {
        "name": "America/Iqaluit",
        "description": "Eastern - NU (most east areas)",
        "location": "CA",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/jamaica": {
        "name": "America/Jamaica",
        "description": "",
        "location": "JM",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/jujuy": {
        "name": "America/Jujuy",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Argentina/Jujuy"
    },
    "america/juneau": {
        "name": "America/Juneau",
        "description": "Alaska - Juneau area",
        "location": "US",
        "offset": -540,
        "dstOffset": -480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/kentucky/louisville": {
        "name": "America/Kentucky/Louisville",
        "description": "Eastern - KY (Louisville area)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/kentucky/monticello": {
        "name": "America/Kentucky/Monticello",
        "description": "Eastern - KY (Wayne)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/knox_in": {
        "name": "America/Knox_IN",
        "description": "",
        "location": null,
        "offset": -360,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Indiana/Knox"
    },
    "america/kralendijk": {
        "name": "America/Kralendijk",
        "description": "",
        "location": "BQ",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Curacao"
    },
    "america/la_paz": {
        "name": "America/La_Paz",
        "description": "",
        "location": "BO",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/lima": {
        "name": "America/Lima",
        "description": "",
        "location": "PE",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/los_angeles": {
        "name": "America/Los_Angeles",
        "description": "Pacific",
        "location": "US",
        "offset": -480,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/louisville": {
        "name": "America/Louisville",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Kentucky/Louisville"
    },
    "america/lower_princes": {
        "name": "America/Lower_Princes",
        "description": "",
        "location": "SX",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Curacao"
    },
    "america/maceio": {
        "name": "America/Maceio",
        "description": "Alagoas, Sergipe",
        "location": "BR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/managua": {
        "name": "America/Managua",
        "description": "",
        "location": "NI",
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/manaus": {
        "name": "America/Manaus",
        "description": "Amazonas (east)",
        "location": "BR",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/marigot": {
        "name": "America/Marigot",
        "description": "",
        "location": "MF",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/martinique": {
        "name": "America/Martinique",
        "description": "",
        "location": "MQ",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/matamoros": {
        "name": "America/Matamoros",
        "description": "Central Time US - Coahuila, Nuevo León, Tamaulipas (US border)",
        "location": "MX",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/mazatlan": {
        "name": "America/Mazatlan",
        "description": "Mountain Time - Baja California Sur, Nayarit, Sinaloa",
        "location": "MX",
        "offset": -420,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/mendoza": {
        "name": "America/Mendoza",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Argentina/Mendoza"
    },
    "america/menominee": {
        "name": "America/Menominee",
        "description": "Central - MI (Wisconsin border)",
        "location": "US",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/merida": {
        "name": "America/Merida",
        "description": "Central Time - Campeche, Yucatán",
        "location": "MX",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/metlakatla": {
        "name": "America/Metlakatla",
        "description": "Alaska - Annette Island",
        "location": "US",
        "offset": -540,
        "dstOffset": -480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/mexico_city": {
        "name": "America/Mexico_City",
        "description": "Central Time",
        "location": "MX",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/miquelon": {
        "name": "America/Miquelon",
        "description": "",
        "location": "PM",
        "offset": -180,
        "dstOffset": -120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/moncton": {
        "name": "America/Moncton",
        "description": "Atlantic - New Brunswick",
        "location": "CA",
        "offset": -240,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/monterrey": {
        "name": "America/Monterrey",
        "description": "Central Time - Durango; Coahuila, Nuevo León, Tamaulipas (most areas)",
        "location": "MX",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/montevideo": {
        "name": "America/Montevideo",
        "description": "",
        "location": "UY",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/montreal": {
        "name": "America/Montreal",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Toronto"
    },
    "america/montserrat": {
        "name": "America/Montserrat",
        "description": "",
        "location": "MS",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/nassau": {
        "name": "America/Nassau",
        "description": "",
        "location": "BS",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/new_york": {
        "name": "America/New_York",
        "description": "Eastern (most areas)",
        "location": "US",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/nipigon": {
        "name": "America/Nipigon",
        "description": "Eastern - ON, QC (no DST 1967-73)",
        "location": "CA",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/nome": {
        "name": "America/Nome",
        "description": "Alaska (west)",
        "location": "US",
        "offset": -540,
        "dstOffset": -480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/noronha": {
        "name": "America/Noronha",
        "description": "Atlantic islands",
        "location": "BR",
        "offset": -120,
        "dstOffset": -120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/north_dakota/beulah": {
        "name": "America/North_Dakota/Beulah",
        "description": "Central - ND (Mercer)",
        "location": "US",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/north_dakota/center": {
        "name": "America/North_Dakota/Center",
        "description": "Central - ND (Oliver)",
        "location": "US",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/north_dakota/new_salem": {
        "name": "America/North_Dakota/New_Salem",
        "description": "Central - ND (Morton rural)",
        "location": "US",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/nuuk": {
        "name": "America/Nuuk",
        "description": "Greenland (most areas)",
        "location": "GL",
        "offset": -180,
        "dstOffset": -120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/ojinaga": {
        "name": "America/Ojinaga",
        "description": "Mountain Time US - Chihuahua (US border)",
        "location": "MX",
        "offset": -420,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/panama": {
        "name": "America/Panama",
        "description": "",
        "location": "PA",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/pangnirtung": {
        "name": "America/Pangnirtung",
        "description": "Eastern - NU (Pangnirtung)",
        "location": "CA",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/paramaribo": {
        "name": "America/Paramaribo",
        "description": "",
        "location": "SR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/phoenix": {
        "name": "America/Phoenix",
        "description": "MST - Arizona (except Navajo)",
        "location": "US",
        "offset": -420,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/port-au-prince": {
        "name": "America/Port-au-Prince",
        "description": "",
        "location": "HT",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/port_of_spain": {
        "name": "America/Port_of_Spain",
        "description": "",
        "location": "TT",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/porto_acre": {
        "name": "America/Porto_Acre",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Rio_Branco"
    },
    "america/porto_velho": {
        "name": "America/Porto_Velho",
        "description": "Rondônia",
        "location": "BR",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/puerto_rico": {
        "name": "America/Puerto_Rico",
        "description": "",
        "location": "PR",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/punta_arenas": {
        "name": "America/Punta_Arenas",
        "description": "Region of Magallanes",
        "location": "CL",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/rainy_river": {
        "name": "America/Rainy_River",
        "description": "Central - ON (Rainy R, Ft Frances)",
        "location": "CA",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/rankin_inlet": {
        "name": "America/Rankin_Inlet",
        "description": "Central - NU (central)",
        "location": "CA",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/recife": {
        "name": "America/Recife",
        "description": "Pernambuco",
        "location": "BR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/regina": {
        "name": "America/Regina",
        "description": "CST - SK (most areas)",
        "location": "CA",
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/resolute": {
        "name": "America/Resolute",
        "description": "Central - NU (Resolute)",
        "location": "CA",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/rio_branco": {
        "name": "America/Rio_Branco",
        "description": "Acre",
        "location": "BR",
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/rosario": {
        "name": "America/Rosario",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Argentina/Cordoba"
    },
    "america/santa_isabel": {
        "name": "America/Santa_Isabel",
        "description": "",
        "location": null,
        "offset": -480,
        "dstOffset": -420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Tijuana"
    },
    "america/santarem": {
        "name": "America/Santarem",
        "description": "Pará (west)",
        "location": "BR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/santiago": {
        "name": "America/Santiago",
        "description": "Chile (most areas)",
        "location": "CL",
        "offset": -240,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/santo_domingo": {
        "name": "America/Santo_Domingo",
        "description": "",
        "location": "DO",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/sao_paulo": {
        "name": "America/Sao_Paulo",
        "description": "Brazil (southeast: GO, DF, MG, ES, RJ, SP, PR, SC, RS)",
        "location": "BR",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/scoresbysund": {
        "name": "America/Scoresbysund",
        "description": "Scoresbysund/Ittoqqortoormiit",
        "location": "GL",
        "offset": -60,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/shiprock": {
        "name": "America/Shiprock",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Denver"
    },
    "america/sitka": {
        "name": "America/Sitka",
        "description": "Alaska - Sitka area",
        "location": "US",
        "offset": -540,
        "dstOffset": -480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/st_barthelemy": {
        "name": "America/St_Barthelemy",
        "description": "",
        "location": "BL",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/st_johns": {
        "name": "America/St_Johns",
        "description": "Newfoundland; Labrador (southeast)",
        "location": "CA",
        "offset": -210,
        "dstOffset": -150,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/st_kitts": {
        "name": "America/St_Kitts",
        "description": "",
        "location": "KN",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/st_lucia": {
        "name": "America/St_Lucia",
        "description": "",
        "location": "LC",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/st_thomas": {
        "name": "America/St_Thomas",
        "description": "",
        "location": "VI",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/st_vincent": {
        "name": "America/St_Vincent",
        "description": "",
        "location": "VC",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/swift_current": {
        "name": "America/Swift_Current",
        "description": "CST - SK (midwest)",
        "location": "CA",
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/tegucigalpa": {
        "name": "America/Tegucigalpa",
        "description": "",
        "location": "HN",
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/thule": {
        "name": "America/Thule",
        "description": "Thule/Pituffik",
        "location": "GL",
        "offset": -240,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/thunder_bay": {
        "name": "America/Thunder_Bay",
        "description": "Eastern - ON (Thunder Bay)",
        "location": "CA",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/tijuana": {
        "name": "America/Tijuana",
        "description": "Pacific Time US - Baja California",
        "location": "MX",
        "offset": -480,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/toronto": {
        "name": "America/Toronto",
        "description": "Eastern - ON, QC (most areas)",
        "location": "CA",
        "offset": -300,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/tortola": {
        "name": "America/Tortola",
        "description": "",
        "location": "VG",
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/vancouver": {
        "name": "America/Vancouver",
        "description": "Pacific - BC (most areas)",
        "location": "CA",
        "offset": -480,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/virgin": {
        "name": "America/Virgin",
        "description": "",
        "location": null,
        "offset": -240,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Port_of_Spain"
    },
    "america/whitehorse": {
        "name": "America/Whitehorse",
        "description": "MST - Yukon (east)",
        "location": "CA",
        "offset": -420,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/winnipeg": {
        "name": "America/Winnipeg",
        "description": "Central - ON (west); Manitoba",
        "location": "CA",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/yakutat": {
        "name": "America/Yakutat",
        "description": "Alaska - Yakutat",
        "location": "US",
        "offset": -540,
        "dstOffset": -480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "america/yellowknife": {
        "name": "America/Yellowknife",
        "description": "Mountain - NT (central)",
        "location": "CA",
        "offset": -420,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/casey": {
        "name": "Antarctica/Casey",
        "description": "Casey",
        "location": "AQ",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/davis": {
        "name": "Antarctica/Davis",
        "description": "Davis",
        "location": "AQ",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/dumontdurville": {
        "name": "Antarctica/DumontDUrville",
        "description": "Dumont-d'Urville",
        "location": "AQ",
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/macquarie": {
        "name": "Antarctica/Macquarie",
        "description": "Macquarie Island",
        "location": "AU",
        "offset": 600,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/mawson": {
        "name": "Antarctica/Mawson",
        "description": "Mawson",
        "location": "AQ",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/mcmurdo": {
        "name": "Antarctica/McMurdo",
        "description": "New Zealand time - McMurdo, South Pole",
        "location": "AQ",
        "offset": 720,
        "dstOffset": 780,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Pacific/Auckland"
    },
    "antarctica/palmer": {
        "name": "Antarctica/Palmer",
        "description": "Palmer",
        "location": "AQ",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/rothera": {
        "name": "Antarctica/Rothera",
        "description": "Rothera",
        "location": "AQ",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/south_pole": {
        "name": "Antarctica/South_Pole",
        "description": "",
        "location": null,
        "offset": 720,
        "dstOffset": 780,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Auckland"
    },
    "antarctica/syowa": {
        "name": "Antarctica/Syowa",
        "description": "Syowa",
        "location": "AQ",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/troll": {
        "name": "Antarctica/Troll",
        "description": "Troll",
        "location": "AQ",
        "offset": 0,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "antarctica/vostok": {
        "name": "Antarctica/Vostok",
        "description": "Vostok",
        "location": "AQ",
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "arctic/longyearbyen": {
        "name": "Arctic/Longyearbyen",
        "description": "",
        "location": "SJ",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Oslo"
    },
    "asia/aden": {
        "name": "Asia/Aden",
        "description": "",
        "location": "YE",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Asia/Riyadh"
    },
    "asia/almaty": {
        "name": "Asia/Almaty",
        "description": "Kazakhstan (most areas)",
        "location": "KZ",
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/amman": {
        "name": "Asia/Amman",
        "description": "",
        "location": "JO",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/anadyr": {
        "name": "Asia/Anadyr",
        "description": "MSK+09 - Bering Sea",
        "location": "RU",
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/aqtau": {
        "name": "Asia/Aqtau",
        "description": "Mangghystaū/Mankistau",
        "location": "KZ",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/aqtobe": {
        "name": "Asia/Aqtobe",
        "description": "Aqtöbe/Aktobe",
        "location": "KZ",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/ashgabat": {
        "name": "Asia/Ashgabat",
        "description": "",
        "location": "TM",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/ashkhabad": {
        "name": "Asia/Ashkhabad",
        "description": "",
        "location": null,
        "offset": 300,
        "dstOffset": 300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Ashgabat"
    },
    "asia/atyrau": {
        "name": "Asia/Atyrau",
        "description": "Atyraū/Atirau/Gur'yev",
        "location": "KZ",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/baghdad": {
        "name": "Asia/Baghdad",
        "description": "",
        "location": "IQ",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/bahrain": {
        "name": "Asia/Bahrain",
        "description": "",
        "location": "BH",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Asia/Qatar"
    },
    "asia/baku": {
        "name": "Asia/Baku",
        "description": "",
        "location": "AZ",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/bangkok": {
        "name": "Asia/Bangkok",
        "description": "Indochina (most areas)",
        "location": "TH",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/barnaul": {
        "name": "Asia/Barnaul",
        "description": "MSK+04 - Altai",
        "location": "RU",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/beirut": {
        "name": "Asia/Beirut",
        "description": "",
        "location": "LB",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/bishkek": {
        "name": "Asia/Bishkek",
        "description": "",
        "location": "KG",
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/brunei": {
        "name": "Asia/Brunei",
        "description": "",
        "location": "BN",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/calcutta": {
        "name": "Asia/Calcutta",
        "description": "",
        "location": null,
        "offset": 330,
        "dstOffset": 330,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Kolkata"
    },
    "asia/chita": {
        "name": "Asia/Chita",
        "description": "MSK+06 - Zabaykalsky",
        "location": "RU",
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/choibalsan": {
        "name": "Asia/Choibalsan",
        "description": "Dornod, Sükhbaatar",
        "location": "MN",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/chongqing": {
        "name": "Asia/Chongqing",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Shanghai"
    },
    "asia/chungking": {
        "name": "Asia/Chungking",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Shanghai"
    },
    "asia/colombo": {
        "name": "Asia/Colombo",
        "description": "",
        "location": "LK",
        "offset": 330,
        "dstOffset": 330,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/dacca": {
        "name": "Asia/Dacca",
        "description": "",
        "location": null,
        "offset": 360,
        "dstOffset": 360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Dhaka"
    },
    "asia/damascus": {
        "name": "Asia/Damascus",
        "description": "",
        "location": "SY",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/dhaka": {
        "name": "Asia/Dhaka",
        "description": "",
        "location": "BD",
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/dili": {
        "name": "Asia/Dili",
        "description": "",
        "location": "TL",
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/dubai": {
        "name": "Asia/Dubai",
        "description": "",
        "location": "AE",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/dushanbe": {
        "name": "Asia/Dushanbe",
        "description": "",
        "location": "TJ",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/famagusta": {
        "name": "Asia/Famagusta",
        "description": "Northern Cyprus",
        "location": "CY",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/gaza": {
        "name": "Asia/Gaza",
        "description": "Gaza Strip",
        "location": "PS",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/harbin": {
        "name": "Asia/Harbin",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Shanghai"
    },
    "asia/hebron": {
        "name": "Asia/Hebron",
        "description": "West Bank",
        "location": "PS",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/ho_chi_minh": {
        "name": "Asia/Ho_Chi_Minh",
        "description": "Vietnam (south)",
        "location": "VN",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/hong_kong": {
        "name": "Asia/Hong_Kong",
        "description": "",
        "location": "HK",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/hovd": {
        "name": "Asia/Hovd",
        "description": "Bayan-Ölgii, Govi-Altai, Hovd, Uvs, Zavkhan",
        "location": "MN",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/irkutsk": {
        "name": "Asia/Irkutsk",
        "description": "MSK+05 - Irkutsk, Buryatia",
        "location": "RU",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/istanbul": {
        "name": "Asia/Istanbul",
        "description": "",
        "location": "TR",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Istanbul"
    },
    "asia/jakarta": {
        "name": "Asia/Jakarta",
        "description": "Java, Sumatra",
        "location": "ID",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/jayapura": {
        "name": "Asia/Jayapura",
        "description": "New Guinea (West Papua / Irian Jaya); Malukus/Moluccas",
        "location": "ID",
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/jerusalem": {
        "name": "Asia/Jerusalem",
        "description": "",
        "location": "IL",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/kabul": {
        "name": "Asia/Kabul",
        "description": "",
        "location": "AF",
        "offset": 270,
        "dstOffset": 270,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/kamchatka": {
        "name": "Asia/Kamchatka",
        "description": "MSK+09 - Kamchatka",
        "location": "RU",
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/karachi": {
        "name": "Asia/Karachi",
        "description": "",
        "location": "PK",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/kashgar": {
        "name": "Asia/Kashgar",
        "description": "",
        "location": null,
        "offset": 360,
        "dstOffset": 360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Urumqi[note 1]"
    },
    "asia/kathmandu": {
        "name": "Asia/Kathmandu",
        "description": "",
        "location": "NP",
        "offset": 345,
        "dstOffset": 345,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/katmandu": {
        "name": "Asia/Katmandu",
        "description": "",
        "location": null,
        "offset": 345,
        "dstOffset": 345,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Kathmandu"
    },
    "asia/khandyga": {
        "name": "Asia/Khandyga",
        "description": "MSK+06 - Tomponsky, Ust-Maysky",
        "location": "RU",
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/kolkata": {
        "name": "Asia/Kolkata",
        "description": "",
        "location": "IN",
        "offset": 330,
        "dstOffset": 330,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/krasnoyarsk": {
        "name": "Asia/Krasnoyarsk",
        "description": "MSK+04 - Krasnoyarsk area",
        "location": "RU",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/kuala_lumpur": {
        "name": "Asia/Kuala_Lumpur",
        "description": "Malaysia (peninsula)",
        "location": "MY",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/kuching": {
        "name": "Asia/Kuching",
        "description": "Sabah, Sarawak",
        "location": "MY",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/kuwait": {
        "name": "Asia/Kuwait",
        "description": "",
        "location": "KW",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Asia/Riyadh"
    },
    "asia/macao": {
        "name": "Asia/Macao",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Macau"
    },
    "asia/macau": {
        "name": "Asia/Macau",
        "description": "",
        "location": "MO",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/magadan": {
        "name": "Asia/Magadan",
        "description": "MSK+08 - Magadan",
        "location": "RU",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/makassar": {
        "name": "Asia/Makassar",
        "description": "Borneo (east, south); Sulawesi/Celebes, Bali, Nusa Tengarra; Timor (west)",
        "location": "ID",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/manila": {
        "name": "Asia/Manila",
        "description": "",
        "location": "PH",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/muscat": {
        "name": "Asia/Muscat",
        "description": "",
        "location": "OM",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Asia/Dubai"
    },
    "asia/nicosia": {
        "name": "Asia/Nicosia",
        "description": "Cyprus (most areas)",
        "location": "CY",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/novokuznetsk": {
        "name": "Asia/Novokuznetsk",
        "description": "MSK+04 - Kemerovo",
        "location": "RU",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/novosibirsk": {
        "name": "Asia/Novosibirsk",
        "description": "MSK+04 - Novosibirsk",
        "location": "RU",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/omsk": {
        "name": "Asia/Omsk",
        "description": "MSK+03 - Omsk",
        "location": "RU",
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/oral": {
        "name": "Asia/Oral",
        "description": "West Kazakhstan",
        "location": "KZ",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/phnom_penh": {
        "name": "Asia/Phnom_Penh",
        "description": "",
        "location": "KH",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Asia/Bangkok"
    },
    "asia/pontianak": {
        "name": "Asia/Pontianak",
        "description": "Borneo (west, central)",
        "location": "ID",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/pyongyang": {
        "name": "Asia/Pyongyang",
        "description": "",
        "location": "KP",
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/qatar": {
        "name": "Asia/Qatar",
        "description": "",
        "location": "QA",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/qostanay": {
        "name": "Asia/Qostanay",
        "description": "Qostanay/Kostanay/Kustanay",
        "location": "KZ",
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/qyzylorda": {
        "name": "Asia/Qyzylorda",
        "description": "Qyzylorda/Kyzylorda/Kzyl-Orda",
        "location": "KZ",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/rangoon": {
        "name": "Asia/Rangoon",
        "description": "",
        "location": null,
        "offset": 390,
        "dstOffset": 390,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Yangon"
    },
    "asia/riyadh": {
        "name": "Asia/Riyadh",
        "description": "",
        "location": "SA",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/saigon": {
        "name": "Asia/Saigon",
        "description": "",
        "location": null,
        "offset": 420,
        "dstOffset": 420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Ho_Chi_Minh"
    },
    "asia/sakhalin": {
        "name": "Asia/Sakhalin",
        "description": "MSK+08 - Sakhalin Island",
        "location": "RU",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/samarkand": {
        "name": "Asia/Samarkand",
        "description": "Uzbekistan (west)",
        "location": "UZ",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/seoul": {
        "name": "Asia/Seoul",
        "description": "",
        "location": "KR",
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/shanghai": {
        "name": "Asia/Shanghai",
        "description": "Beijing Time",
        "location": "CN",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/singapore": {
        "name": "Asia/Singapore",
        "description": "",
        "location": "SG",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/srednekolymsk": {
        "name": "Asia/Srednekolymsk",
        "description": "MSK+08 - Sakha (E); North Kuril Is",
        "location": "RU",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/taipei": {
        "name": "Asia/Taipei",
        "description": "",
        "location": "TW",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/tashkent": {
        "name": "Asia/Tashkent",
        "description": "Uzbekistan (east)",
        "location": "UZ",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/tbilisi": {
        "name": "Asia/Tbilisi",
        "description": "",
        "location": "GE",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/tehran": {
        "name": "Asia/Tehran",
        "description": "",
        "location": "IR",
        "offset": 210,
        "dstOffset": 270,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/tel_aviv": {
        "name": "Asia/Tel_Aviv",
        "description": "",
        "location": null,
        "offset": 120,
        "dstOffset": 180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Jerusalem"
    },
    "asia/thimbu": {
        "name": "Asia/Thimbu",
        "description": "",
        "location": null,
        "offset": 360,
        "dstOffset": 360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Thimphu"
    },
    "asia/thimphu": {
        "name": "Asia/Thimphu",
        "description": "",
        "location": "BT",
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/tokyo": {
        "name": "Asia/Tokyo",
        "description": "",
        "location": "JP",
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/tomsk": {
        "name": "Asia/Tomsk",
        "description": "MSK+04 - Tomsk",
        "location": "RU",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/ujung_pandang": {
        "name": "Asia/Ujung_Pandang",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Makassar"
    },
    "asia/ulaanbaatar": {
        "name": "Asia/Ulaanbaatar",
        "description": "Mongolia (most areas)",
        "location": "MN",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/ulan_bator": {
        "name": "Asia/Ulan_Bator",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Ulaanbaatar"
    },
    "asia/urumqi": {
        "name": "Asia/Urumqi",
        "description": "Xinjiang Time",
        "location": "CN",
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/ust-nera": {
        "name": "Asia/Ust-Nera",
        "description": "MSK+07 - Oymyakonsky",
        "location": "RU",
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/vientiane": {
        "name": "Asia/Vientiane",
        "description": "",
        "location": "LA",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Asia/Bangkok"
    },
    "asia/vladivostok": {
        "name": "Asia/Vladivostok",
        "description": "MSK+07 - Amur River",
        "location": "RU",
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/yakutsk": {
        "name": "Asia/Yakutsk",
        "description": "MSK+06 - Lena River",
        "location": "RU",
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/yangon": {
        "name": "Asia/Yangon",
        "description": "",
        "location": "MM",
        "offset": 390,
        "dstOffset": 390,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/yekaterinburg": {
        "name": "Asia/Yekaterinburg",
        "description": "MSK+02 - Urals",
        "location": "RU",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "asia/yerevan": {
        "name": "Asia/Yerevan",
        "description": "",
        "location": "AM",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "atlantic/azores": {
        "name": "Atlantic/Azores",
        "description": "Azores",
        "location": "PT",
        "offset": -60,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "atlantic/bermuda": {
        "name": "Atlantic/Bermuda",
        "description": "",
        "location": "BM",
        "offset": -240,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "atlantic/canary": {
        "name": "Atlantic/Canary",
        "description": "Canary Islands",
        "location": "ES",
        "offset": 0,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "atlantic/cape_verde": {
        "name": "Atlantic/Cape_Verde",
        "description": "",
        "location": "CV",
        "offset": -60,
        "dstOffset": -60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "atlantic/faeroe": {
        "name": "Atlantic/Faeroe",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 60,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Atlantic/Faroe"
    },
    "atlantic/faroe": {
        "name": "Atlantic/Faroe",
        "description": "",
        "location": "FO",
        "offset": 0,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "atlantic/jan_mayen": {
        "name": "Atlantic/Jan_Mayen",
        "description": "",
        "location": null,
        "offset": 60,
        "dstOffset": 120,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/Oslo"
    },
    "atlantic/madeira": {
        "name": "Atlantic/Madeira",
        "description": "Madeira Islands",
        "location": "PT",
        "offset": 0,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "atlantic/reykjavik": {
        "name": "Atlantic/Reykjavik",
        "description": "",
        "location": "IS",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "atlantic/south_georgia": {
        "name": "Atlantic/South_Georgia",
        "description": "",
        "location": "GS",
        "offset": -120,
        "dstOffset": -120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "atlantic/st_helena": {
        "name": "Atlantic/St_Helena",
        "description": "",
        "location": "SH",
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Abidjan"
    },
    "atlantic/stanley": {
        "name": "Atlantic/Stanley",
        "description": "",
        "location": "FK",
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/act": {
        "name": "Australia/ACT",
        "description": "",
        "location": null,
        "offset": 600,
        "dstOffset": 660,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Sydney"
    },
    "australia/adelaide": {
        "name": "Australia/Adelaide",
        "description": "South Australia",
        "location": "AU",
        "offset": 570,
        "dstOffset": 630,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/brisbane": {
        "name": "Australia/Brisbane",
        "description": "Queensland (most areas)",
        "location": "AU",
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/broken_hill": {
        "name": "Australia/Broken_Hill",
        "description": "New South Wales (Yancowinna)",
        "location": "AU",
        "offset": 570,
        "dstOffset": 630,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/canberra": {
        "name": "Australia/Canberra",
        "description": "",
        "location": null,
        "offset": 600,
        "dstOffset": 660,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Sydney"
    },
    "australia/currie": {
        "name": "Australia/Currie",
        "description": "Tasmania (King Island)",
        "location": "AU",
        "offset": 600,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/darwin": {
        "name": "Australia/Darwin",
        "description": "Northern Territory",
        "location": "AU",
        "offset": 570,
        "dstOffset": 570,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/eucla": {
        "name": "Australia/Eucla",
        "description": "Western Australia (Eucla)",
        "location": "AU",
        "offset": 525,
        "dstOffset": 525,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/hobart": {
        "name": "Australia/Hobart",
        "description": "Tasmania (most areas)",
        "location": "AU",
        "offset": 600,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/lhi": {
        "name": "Australia/LHI",
        "description": "",
        "location": null,
        "offset": 630,
        "dstOffset": 660,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Lord_Howe"
    },
    "australia/lindeman": {
        "name": "Australia/Lindeman",
        "description": "Queensland (Whitsunday Islands)",
        "location": "AU",
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/lord_howe": {
        "name": "Australia/Lord_Howe",
        "description": "Lord Howe Island",
        "location": "AU",
        "offset": 630,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/melbourne": {
        "name": "Australia/Melbourne",
        "description": "Victoria",
        "location": "AU",
        "offset": 600,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/north": {
        "name": "Australia/North",
        "description": "",
        "location": null,
        "offset": 570,
        "dstOffset": 570,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Darwin"
    },
    "australia/nsw": {
        "name": "Australia/NSW",
        "description": "",
        "location": null,
        "offset": 600,
        "dstOffset": 660,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Sydney"
    },
    "australia/perth": {
        "name": "Australia/Perth",
        "description": "Western Australia (most areas)",
        "location": "AU",
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/queensland": {
        "name": "Australia/Queensland",
        "description": "",
        "location": null,
        "offset": 600,
        "dstOffset": 600,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Brisbane"
    },
    "australia/south": {
        "name": "Australia/South",
        "description": "",
        "location": null,
        "offset": 570,
        "dstOffset": 630,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Adelaide"
    },
    "australia/sydney": {
        "name": "Australia/Sydney",
        "description": "New South Wales (most areas)",
        "location": "AU",
        "offset": 600,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "australia/tasmania": {
        "name": "Australia/Tasmania",
        "description": "",
        "location": null,
        "offset": 600,
        "dstOffset": 660,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Hobart"
    },
    "australia/victoria": {
        "name": "Australia/Victoria",
        "description": "",
        "location": null,
        "offset": 600,
        "dstOffset": 660,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Melbourne"
    },
    "australia/west": {
        "name": "Australia/West",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Perth"
    },
    "australia/yancowinna": {
        "name": "Australia/Yancowinna",
        "description": "",
        "location": null,
        "offset": 570,
        "dstOffset": 630,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Australia/Broken_Hill"
    },
    "brazil/acre": {
        "name": "Brazil/Acre",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Rio_Branco"
    },
    "brazil/denoronha": {
        "name": "Brazil/DeNoronha",
        "description": "",
        "location": null,
        "offset": -120,
        "dstOffset": -120,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Noronha"
    },
    "brazil/east": {
        "name": "Brazil/East",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Sao_Paulo"
    },
    "brazil/west": {
        "name": "Brazil/West",
        "description": "",
        "location": null,
        "offset": -240,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Manaus"
    },
    "canada/atlantic": {
        "name": "Canada/Atlantic",
        "description": "",
        "location": null,
        "offset": -240,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Halifax"
    },
    "canada/central": {
        "name": "Canada/Central",
        "description": "",
        "location": null,
        "offset": -360,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Winnipeg"
    },
    "canada/eastern": {
        "name": "Canada/Eastern",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Toronto"
    },
    "canada/mountain": {
        "name": "Canada/Mountain",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Edmonton"
    },
    "canada/newfoundland": {
        "name": "Canada/Newfoundland",
        "description": "",
        "location": null,
        "offset": -210,
        "dstOffset": -150,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/St_Johns"
    },
    "canada/pacific": {
        "name": "Canada/Pacific",
        "description": "",
        "location": null,
        "offset": -480,
        "dstOffset": -420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Vancouver"
    },
    "canada/saskatchewan": {
        "name": "Canada/Saskatchewan",
        "description": "",
        "location": null,
        "offset": -360,
        "dstOffset": -360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Regina"
    },
    "canada/yukon": {
        "name": "Canada/Yukon",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Whitehorse"
    },
    "cet": {
        "name": "CET",
        "description": "",
        "location": null,
        "offset": 60,
        "dstOffset": 120,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "chile/continental": {
        "name": "Chile/Continental",
        "description": "",
        "location": null,
        "offset": -240,
        "dstOffset": -180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Santiago"
    },
    "chile/easterisland": {
        "name": "Chile/EasterIsland",
        "description": "",
        "location": null,
        "offset": -360,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Easter"
    },
    "cst6cdt": {
        "name": "CST6CDT",
        "description": "",
        "location": null,
        "offset": -360,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "cuba": {
        "name": "Cuba",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Havana"
    },
    "eet": {
        "name": "EET",
        "description": "",
        "location": null,
        "offset": 120,
        "dstOffset": 180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "egypt": {
        "name": "Egypt",
        "description": "",
        "location": null,
        "offset": 120,
        "dstOffset": 120,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Africa/Cairo"
    },
    "eire": {
        "name": "Eire",
        "description": "",
        "location": null,
        "offset": 60,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/Dublin"
    },
    "est": {
        "name": "EST",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "est5edt": {
        "name": "EST5EDT",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "etc/gmt": {
        "name": "Etc/GMT",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+0": {
        "name": "Etc/GMT+0",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Etc/GMT"
    },
    "etc/gmt+1": {
        "name": "Etc/GMT+1",
        "description": "",
        "location": null,
        "offset": -60,
        "dstOffset": -60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+10": {
        "name": "Etc/GMT+10",
        "description": "",
        "location": null,
        "offset": -600,
        "dstOffset": -600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+11": {
        "name": "Etc/GMT+11",
        "description": "",
        "location": null,
        "offset": -660,
        "dstOffset": -660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+12": {
        "name": "Etc/GMT+12",
        "description": "",
        "location": null,
        "offset": -720,
        "dstOffset": -720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+2": {
        "name": "Etc/GMT+2",
        "description": "",
        "location": null,
        "offset": -120,
        "dstOffset": -120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+3": {
        "name": "Etc/GMT+3",
        "description": "",
        "location": null,
        "offset": -180,
        "dstOffset": -180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+4": {
        "name": "Etc/GMT+4",
        "description": "",
        "location": null,
        "offset": -240,
        "dstOffset": -240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+5": {
        "name": "Etc/GMT+5",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+6": {
        "name": "Etc/GMT+6",
        "description": "",
        "location": null,
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+7": {
        "name": "Etc/GMT+7",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+8": {
        "name": "Etc/GMT+8",
        "description": "",
        "location": null,
        "offset": -480,
        "dstOffset": -480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt+9": {
        "name": "Etc/GMT+9",
        "description": "",
        "location": null,
        "offset": -540,
        "dstOffset": -540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-0": {
        "name": "Etc/GMT-0",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Etc/GMT"
    },
    "etc/gmt-1": {
        "name": "Etc/GMT-1",
        "description": "",
        "location": null,
        "offset": 60,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-10": {
        "name": "Etc/GMT-10",
        "description": "",
        "location": null,
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-11": {
        "name": "Etc/GMT-11",
        "description": "",
        "location": null,
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-12": {
        "name": "Etc/GMT-12",
        "description": "",
        "location": null,
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-13": {
        "name": "Etc/GMT-13",
        "description": "",
        "location": null,
        "offset": 780,
        "dstOffset": 780,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-14": {
        "name": "Etc/GMT-14",
        "description": "",
        "location": null,
        "offset": 840,
        "dstOffset": 840,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-2": {
        "name": "Etc/GMT-2",
        "description": "",
        "location": null,
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-3": {
        "name": "Etc/GMT-3",
        "description": "",
        "location": null,
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-4": {
        "name": "Etc/GMT-4",
        "description": "",
        "location": null,
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-5": {
        "name": "Etc/GMT-5",
        "description": "",
        "location": null,
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-6": {
        "name": "Etc/GMT-6",
        "description": "",
        "location": null,
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-7": {
        "name": "Etc/GMT-7",
        "description": "",
        "location": null,
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-8": {
        "name": "Etc/GMT-8",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt-9": {
        "name": "Etc/GMT-9",
        "description": "",
        "location": null,
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/gmt0": {
        "name": "Etc/GMT0",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Etc/GMT"
    },
    "etc/greenwich": {
        "name": "Etc/Greenwich",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/GMT"
    },
    "etc/uct": {
        "name": "Etc/UCT",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/UTC"
    },
    "etc/universal": {
        "name": "Etc/Universal",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/UTC"
    },
    "etc/utc": {
        "name": "Etc/UTC",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "etc/zulu": {
        "name": "Etc/Zulu",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/UTC"
    },
    "europe/amsterdam": {
        "name": "Europe/Amsterdam",
        "description": "",
        "location": "NL",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/andorra": {
        "name": "Europe/Andorra",
        "description": "",
        "location": "AD",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/astrakhan": {
        "name": "Europe/Astrakhan",
        "description": "MSK+01 - Astrakhan",
        "location": "RU",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/athens": {
        "name": "Europe/Athens",
        "description": "",
        "location": "GR",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/belfast": {
        "name": "Europe/Belfast",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 60,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/London"
    },
    "europe/belgrade": {
        "name": "Europe/Belgrade",
        "description": "",
        "location": "RS",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/berlin": {
        "name": "Europe/Berlin",
        "description": "Germany (most areas)",
        "location": "DE",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/bratislava": {
        "name": "Europe/Bratislava",
        "description": "",
        "location": "SK",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Prague"
    },
    "europe/brussels": {
        "name": "Europe/Brussels",
        "description": "",
        "location": "BE",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/bucharest": {
        "name": "Europe/Bucharest",
        "description": "",
        "location": "RO",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/budapest": {
        "name": "Europe/Budapest",
        "description": "",
        "location": "HU",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/busingen": {
        "name": "Europe/Busingen",
        "description": "Busingen",
        "location": "DE",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Zurich"
    },
    "europe/chisinau": {
        "name": "Europe/Chisinau",
        "description": "",
        "location": "MD",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/copenhagen": {
        "name": "Europe/Copenhagen",
        "description": "",
        "location": "DK",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/dublin": {
        "name": "Europe/Dublin",
        "description": "",
        "location": "IE",
        "offset": 60,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/gibraltar": {
        "name": "Europe/Gibraltar",
        "description": "",
        "location": "GI",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/guernsey": {
        "name": "Europe/Guernsey",
        "description": "",
        "location": "GG",
        "offset": 0,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/London"
    },
    "europe/helsinki": {
        "name": "Europe/Helsinki",
        "description": "",
        "location": "FI",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/isle_of_man": {
        "name": "Europe/Isle_of_Man",
        "description": "",
        "location": "IM",
        "offset": 0,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/London"
    },
    "europe/istanbul": {
        "name": "Europe/Istanbul",
        "description": "",
        "location": "TR",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/jersey": {
        "name": "Europe/Jersey",
        "description": "",
        "location": "JE",
        "offset": 0,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/London"
    },
    "europe/kaliningrad": {
        "name": "Europe/Kaliningrad",
        "description": "MSK-01 - Kaliningrad",
        "location": "RU",
        "offset": 120,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/kiev": {
        "name": "Europe/Kiev",
        "description": "Ukraine (most areas)",
        "location": "UA",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/kirov": {
        "name": "Europe/Kirov",
        "description": "MSK+00 - Kirov",
        "location": "RU",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/lisbon": {
        "name": "Europe/Lisbon",
        "description": "Portugal (mainland)",
        "location": "PT",
        "offset": 0,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/ljubljana": {
        "name": "Europe/Ljubljana",
        "description": "",
        "location": "SI",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Belgrade"
    },
    "europe/london": {
        "name": "Europe/London",
        "description": "",
        "location": "GB",
        "offset": 0,
        "dstOffset": 60,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/luxembourg": {
        "name": "Europe/Luxembourg",
        "description": "",
        "location": "LU",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/madrid": {
        "name": "Europe/Madrid",
        "description": "Spain (mainland)",
        "location": "ES",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/malta": {
        "name": "Europe/Malta",
        "description": "",
        "location": "MT",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/mariehamn": {
        "name": "Europe/Mariehamn",
        "description": "",
        "location": "AX",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Helsinki"
    },
    "europe/minsk": {
        "name": "Europe/Minsk",
        "description": "",
        "location": "BY",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/monaco": {
        "name": "Europe/Monaco",
        "description": "",
        "location": "MC",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/moscow": {
        "name": "Europe/Moscow",
        "description": "MSK+00 - Moscow area",
        "location": "RU",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/nicosia": {
        "name": "Europe/Nicosia",
        "description": "",
        "location": "CY",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Asia/Nicosia"
    },
    "europe/oslo": {
        "name": "Europe/Oslo",
        "description": "",
        "location": "NO",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/paris": {
        "name": "Europe/Paris",
        "description": "",
        "location": "FR",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/podgorica": {
        "name": "Europe/Podgorica",
        "description": "",
        "location": "ME",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Belgrade"
    },
    "europe/prague": {
        "name": "Europe/Prague",
        "description": "",
        "location": "CZ",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/riga": {
        "name": "Europe/Riga",
        "description": "",
        "location": "LV",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/rome": {
        "name": "Europe/Rome",
        "description": "",
        "location": "IT",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/samara": {
        "name": "Europe/Samara",
        "description": "MSK+01 - Samara, Udmurtia",
        "location": "RU",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/san_marino": {
        "name": "Europe/San_Marino",
        "description": "",
        "location": "SM",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Rome"
    },
    "europe/sarajevo": {
        "name": "Europe/Sarajevo",
        "description": "",
        "location": "BA",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Belgrade"
    },
    "europe/saratov": {
        "name": "Europe/Saratov",
        "description": "MSK+01 - Saratov",
        "location": "RU",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/simferopol": {
        "name": "Europe/Simferopol",
        "description": "Crimea",
        "location": "UA",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/skopje": {
        "name": "Europe/Skopje",
        "description": "",
        "location": "MK",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Belgrade"
    },
    "europe/sofia": {
        "name": "Europe/Sofia",
        "description": "",
        "location": "BG",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/stockholm": {
        "name": "Europe/Stockholm",
        "description": "",
        "location": "SE",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/tallinn": {
        "name": "Europe/Tallinn",
        "description": "",
        "location": "EE",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/tirane": {
        "name": "Europe/Tirane",
        "description": "",
        "location": "AL",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/tiraspol": {
        "name": "Europe/Tiraspol",
        "description": "",
        "location": null,
        "offset": 120,
        "dstOffset": 180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/Chisinau"
    },
    "europe/ulyanovsk": {
        "name": "Europe/Ulyanovsk",
        "description": "MSK+01 - Ulyanovsk",
        "location": "RU",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/uzhgorod": {
        "name": "Europe/Uzhgorod",
        "description": "Transcarpathia",
        "location": "UA",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/vaduz": {
        "name": "Europe/Vaduz",
        "description": "",
        "location": "LI",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Zurich"
    },
    "europe/vatican": {
        "name": "Europe/Vatican",
        "description": "",
        "location": "VA",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Rome"
    },
    "europe/vienna": {
        "name": "Europe/Vienna",
        "description": "",
        "location": "AT",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/vilnius": {
        "name": "Europe/Vilnius",
        "description": "",
        "location": "LT",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/volgograd": {
        "name": "Europe/Volgograd",
        "description": "MSK+01 - Volgograd",
        "location": "RU",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/warsaw": {
        "name": "Europe/Warsaw",
        "description": "",
        "location": "PL",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/zagreb": {
        "name": "Europe/Zagreb",
        "description": "",
        "location": "HR",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Europe/Belgrade"
    },
    "europe/zaporozhye": {
        "name": "Europe/Zaporozhye",
        "description": "Zaporozhye and east Lugansk",
        "location": "UA",
        "offset": 120,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "europe/zurich": {
        "name": "Europe/Zurich",
        "description": "Swiss time",
        "location": "CH",
        "offset": 60,
        "dstOffset": 120,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "factory": {
        "name": "Factory",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "gb": {
        "name": "GB",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 60,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/London"
    },
    "gb-eire": {
        "name": "GB-Eire",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 60,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/London"
    },
    "gmt": {
        "name": "GMT",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Etc/GMT"
    },
    "gmt+0": {
        "name": "GMT+0",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/GMT"
    },
    "gmt-0": {
        "name": "GMT-0",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/GMT"
    },
    "gmt0": {
        "name": "GMT0",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/GMT"
    },
    "greenwich": {
        "name": "Greenwich",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/GMT"
    },
    "hongkong": {
        "name": "Hongkong",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Hong_Kong"
    },
    "hst": {
        "name": "HST",
        "description": "",
        "location": null,
        "offset": -600,
        "dstOffset": -600,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "iceland": {
        "name": "Iceland",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Atlantic/Reykjavik"
    },
    "indian/antananarivo": {
        "name": "Indian/Antananarivo",
        "description": "",
        "location": "MG",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "indian/chagos": {
        "name": "Indian/Chagos",
        "description": "",
        "location": "IO",
        "offset": 360,
        "dstOffset": 360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "indian/christmas": {
        "name": "Indian/Christmas",
        "description": "",
        "location": "CX",
        "offset": 420,
        "dstOffset": 420,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "indian/cocos": {
        "name": "Indian/Cocos",
        "description": "",
        "location": "CC",
        "offset": 390,
        "dstOffset": 390,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "indian/comoro": {
        "name": "Indian/Comoro",
        "description": "",
        "location": "KM",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "indian/kerguelen": {
        "name": "Indian/Kerguelen",
        "description": "Kerguelen, St Paul Island, Amsterdam Island",
        "location": "TF",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "indian/mahe": {
        "name": "Indian/Mahe",
        "description": "",
        "location": "SC",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "indian/maldives": {
        "name": "Indian/Maldives",
        "description": "",
        "location": "MV",
        "offset": 300,
        "dstOffset": 300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "indian/mauritius": {
        "name": "Indian/Mauritius",
        "description": "",
        "location": "MU",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "indian/mayotte": {
        "name": "Indian/Mayotte",
        "description": "",
        "location": "YT",
        "offset": 180,
        "dstOffset": 180,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Africa/Nairobi"
    },
    "indian/reunion": {
        "name": "Indian/Reunion",
        "description": "Réunion, Crozet, Scattered Islands",
        "location": "RE",
        "offset": 240,
        "dstOffset": 240,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "iran": {
        "name": "Iran",
        "description": "",
        "location": null,
        "offset": 210,
        "dstOffset": 270,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Tehran"
    },
    "israel": {
        "name": "Israel",
        "description": "",
        "location": null,
        "offset": 120,
        "dstOffset": 180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Jerusalem"
    },
    "jamaica": {
        "name": "Jamaica",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Jamaica"
    },
    "japan": {
        "name": "Japan",
        "description": "",
        "location": null,
        "offset": 540,
        "dstOffset": 540,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Tokyo"
    },
    "kwajalein": {
        "name": "Kwajalein",
        "description": "",
        "location": null,
        "offset": 720,
        "dstOffset": 720,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Kwajalein"
    },
    "libya": {
        "name": "Libya",
        "description": "",
        "location": null,
        "offset": 120,
        "dstOffset": 120,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Africa/Tripoli"
    },
    "met": {
        "name": "MET",
        "description": "",
        "location": null,
        "offset": 60,
        "dstOffset": 120,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "mexico/bajanorte": {
        "name": "Mexico/BajaNorte",
        "description": "",
        "location": null,
        "offset": -480,
        "dstOffset": -420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Tijuana"
    },
    "mexico/bajasur": {
        "name": "Mexico/BajaSur",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Mazatlan"
    },
    "mexico/general": {
        "name": "Mexico/General",
        "description": "",
        "location": null,
        "offset": -360,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Mexico_City"
    },
    "mst": {
        "name": "MST",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "mst7mdt": {
        "name": "MST7MDT",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "navajo": {
        "name": "Navajo",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Denver"
    },
    "nz": {
        "name": "NZ",
        "description": "",
        "location": null,
        "offset": 720,
        "dstOffset": 780,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Auckland"
    },
    "nz-chat": {
        "name": "NZ-CHAT",
        "description": "",
        "location": null,
        "offset": 765,
        "dstOffset": 825,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Chatham"
    },
    "pacific/apia": {
        "name": "Pacific/Apia",
        "description": "",
        "location": "WS",
        "offset": 780,
        "dstOffset": 840,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/auckland": {
        "name": "Pacific/Auckland",
        "description": "New Zealand time",
        "location": "NZ",
        "offset": 720,
        "dstOffset": 780,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/bougainville": {
        "name": "Pacific/Bougainville",
        "description": "Bougainville",
        "location": "PG",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/chatham": {
        "name": "Pacific/Chatham",
        "description": "Chatham Islands",
        "location": "NZ",
        "offset": 765,
        "dstOffset": 825,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/chuuk": {
        "name": "Pacific/Chuuk",
        "description": "Chuuk/Truk, Yap",
        "location": "FM",
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/easter": {
        "name": "Pacific/Easter",
        "description": "Easter Island",
        "location": "CL",
        "offset": -360,
        "dstOffset": -300,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/efate": {
        "name": "Pacific/Efate",
        "description": "",
        "location": "VU",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/enderbury": {
        "name": "Pacific/Enderbury",
        "description": "Phoenix Islands",
        "location": "KI",
        "offset": 780,
        "dstOffset": 780,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/fakaofo": {
        "name": "Pacific/Fakaofo",
        "description": "",
        "location": "TK",
        "offset": 780,
        "dstOffset": 780,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/fiji": {
        "name": "Pacific/Fiji",
        "description": "",
        "location": "FJ",
        "offset": 720,
        "dstOffset": 780,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/funafuti": {
        "name": "Pacific/Funafuti",
        "description": "",
        "location": "TV",
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/galapagos": {
        "name": "Pacific/Galapagos",
        "description": "Galápagos Islands",
        "location": "EC",
        "offset": -360,
        "dstOffset": -360,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/gambier": {
        "name": "Pacific/Gambier",
        "description": "Gambier Islands",
        "location": "PF",
        "offset": -540,
        "dstOffset": -540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/guadalcanal": {
        "name": "Pacific/Guadalcanal",
        "description": "",
        "location": "SB",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/guam": {
        "name": "Pacific/Guam",
        "description": "",
        "location": "GU",
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/honolulu": {
        "name": "Pacific/Honolulu",
        "description": "Hawaii",
        "location": "US",
        "offset": -600,
        "dstOffset": -600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/johnston": {
        "name": "Pacific/Johnston",
        "description": "",
        "location": null,
        "offset": -600,
        "dstOffset": -600,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Honolulu"
    },
    "pacific/kiritimati": {
        "name": "Pacific/Kiritimati",
        "description": "Line Islands",
        "location": "KI",
        "offset": 840,
        "dstOffset": 840,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/kosrae": {
        "name": "Pacific/Kosrae",
        "description": "Kosrae",
        "location": "FM",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/kwajalein": {
        "name": "Pacific/Kwajalein",
        "description": "Kwajalein",
        "location": "MH",
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/majuro": {
        "name": "Pacific/Majuro",
        "description": "Marshall Islands (most areas)",
        "location": "MH",
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/marquesas": {
        "name": "Pacific/Marquesas",
        "description": "Marquesas Islands",
        "location": "PF",
        "offset": -570,
        "dstOffset": -570,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/midway": {
        "name": "Pacific/Midway",
        "description": "Midway Islands",
        "location": "UM",
        "offset": -660,
        "dstOffset": -660,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Pacific/Pago_Pago"
    },
    "pacific/nauru": {
        "name": "Pacific/Nauru",
        "description": "",
        "location": "NR",
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/niue": {
        "name": "Pacific/Niue",
        "description": "",
        "location": "NU",
        "offset": -660,
        "dstOffset": -660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/norfolk": {
        "name": "Pacific/Norfolk",
        "description": "",
        "location": "NF",
        "offset": 660,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/noumea": {
        "name": "Pacific/Noumea",
        "description": "",
        "location": "NC",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/pago_pago": {
        "name": "Pacific/Pago_Pago",
        "description": "Samoa, Midway",
        "location": "AS",
        "offset": -660,
        "dstOffset": -660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/palau": {
        "name": "Pacific/Palau",
        "description": "",
        "location": "PW",
        "offset": 540,
        "dstOffset": 540,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/pitcairn": {
        "name": "Pacific/Pitcairn",
        "description": "",
        "location": "PN",
        "offset": -480,
        "dstOffset": -480,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/pohnpei": {
        "name": "Pacific/Pohnpei",
        "description": "Pohnpei/Ponape",
        "location": "FM",
        "offset": 660,
        "dstOffset": 660,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/ponape": {
        "name": "Pacific/Ponape",
        "description": "",
        "location": null,
        "offset": 660,
        "dstOffset": 660,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Pohnpei"
    },
    "pacific/port_moresby": {
        "name": "Pacific/Port_Moresby",
        "description": "Papua New Guinea (most areas)",
        "location": "PG",
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/rarotonga": {
        "name": "Pacific/Rarotonga",
        "description": "",
        "location": "CK",
        "offset": -600,
        "dstOffset": -600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/saipan": {
        "name": "Pacific/Saipan",
        "description": "",
        "location": "MP",
        "offset": 600,
        "dstOffset": 600,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Pacific/Guam"
    },
    "pacific/samoa": {
        "name": "Pacific/Samoa",
        "description": "",
        "location": null,
        "offset": -660,
        "dstOffset": -660,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Pago_Pago"
    },
    "pacific/tahiti": {
        "name": "Pacific/Tahiti",
        "description": "Society Islands",
        "location": "PF",
        "offset": -600,
        "dstOffset": -600,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/tarawa": {
        "name": "Pacific/Tarawa",
        "description": "Gilbert Islands",
        "location": "KI",
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/tongatapu": {
        "name": "Pacific/Tongatapu",
        "description": "",
        "location": "TO",
        "offset": 780,
        "dstOffset": 780,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/truk": {
        "name": "Pacific/Truk",
        "description": "",
        "location": null,
        "offset": 600,
        "dstOffset": 600,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Chuuk"
    },
    "pacific/wake": {
        "name": "Pacific/Wake",
        "description": "Wake Island",
        "location": "UM",
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/wallis": {
        "name": "Pacific/Wallis",
        "description": "",
        "location": "WF",
        "offset": 720,
        "dstOffset": 720,
        "deprecated": false,
        "canonical": true,
        "aliasOf": null
    },
    "pacific/yap": {
        "name": "Pacific/Yap",
        "description": "",
        "location": null,
        "offset": 600,
        "dstOffset": 600,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Chuuk"
    },
    "poland": {
        "name": "Poland",
        "description": "",
        "location": null,
        "offset": 60,
        "dstOffset": 120,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/Warsaw"
    },
    "portugal": {
        "name": "Portugal",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 60,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/Lisbon"
    },
    "prc": {
        "name": "PRC",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Shanghai"
    },
    "pst8pdt": {
        "name": "PST8PDT",
        "description": "",
        "location": null,
        "offset": -480,
        "dstOffset": -420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "roc": {
        "name": "ROC",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Taipei"
    },
    "rok": {
        "name": "ROK",
        "description": "",
        "location": null,
        "offset": 540,
        "dstOffset": 540,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Seoul"
    },
    "singapore": {
        "name": "Singapore",
        "description": "",
        "location": null,
        "offset": 480,
        "dstOffset": 480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Asia/Singapore"
    },
    "turkey": {
        "name": "Turkey",
        "description": "",
        "location": null,
        "offset": 180,
        "dstOffset": 180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/Istanbul"
    },
    "uct": {
        "name": "UCT",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/UTC"
    },
    "universal": {
        "name": "Universal",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/UTC"
    },
    "us/alaska": {
        "name": "US/Alaska",
        "description": "",
        "location": null,
        "offset": -540,
        "dstOffset": -480,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Anchorage"
    },
    "us/aleutian": {
        "name": "US/Aleutian",
        "description": "",
        "location": null,
        "offset": -600,
        "dstOffset": -540,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Adak"
    },
    "us/arizona": {
        "name": "US/Arizona",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Phoenix"
    },
    "us/central": {
        "name": "US/Central",
        "description": "",
        "location": null,
        "offset": -360,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Chicago"
    },
    "us/east-indiana": {
        "name": "US/East-Indiana",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Indiana/Indianapolis"
    },
    "us/eastern": {
        "name": "US/Eastern",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/New_York"
    },
    "us/hawaii": {
        "name": "US/Hawaii",
        "description": "",
        "location": null,
        "offset": -600,
        "dstOffset": -600,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Honolulu"
    },
    "us/indiana-starke": {
        "name": "US/Indiana-Starke",
        "description": "",
        "location": null,
        "offset": -360,
        "dstOffset": -300,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Indiana/Knox"
    },
    "us/michigan": {
        "name": "US/Michigan",
        "description": "",
        "location": null,
        "offset": -300,
        "dstOffset": -240,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Detroit"
    },
    "us/mountain": {
        "name": "US/Mountain",
        "description": "",
        "location": null,
        "offset": -420,
        "dstOffset": -360,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Denver"
    },
    "us/pacific": {
        "name": "US/Pacific",
        "description": "",
        "location": null,
        "offset": -480,
        "dstOffset": -420,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "America/Los_Angeles"
    },
    "us/samoa": {
        "name": "US/Samoa",
        "description": "",
        "location": null,
        "offset": -660,
        "dstOffset": -660,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Pacific/Pago_Pago"
    },
    "utc": {
        "name": "UTC",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": false,
        "canonical": false,
        "aliasOf": "Etc/UTC"
    },
    "w-su": {
        "name": "W-SU",
        "description": "",
        "location": null,
        "offset": 180,
        "dstOffset": 180,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Europe/Moscow"
    },
    "wet": {
        "name": "WET",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 60,
        "deprecated": true,
        "canonical": false,
        "aliasOf": null
    },
    "zulu": {
        "name": "Zulu",
        "description": "",
        "location": null,
        "offset": 0,
        "dstOffset": 0,
        "deprecated": true,
        "canonical": false,
        "aliasOf": "Etc/UTC"
    }
};

export interface ITimeZone {

    /**
     * The name of a timezone, e.g. "Asia/Shanghai"
     */
    "name": string;

    /**
     * The name of target timezone, if this timezone is an alias of another timezone.
     *
     * Otherwise, this field must be null.
     */
    "aliasOf": string | null;

    /**
     * Tell if the timezone is deprecated.
     */
    "deprecated": boolean;

    /**
     * Tell if the timezone is a canonical timezone.
     */
    "canonical": boolean;

    /**
     * The offset from UTC in minutes. This field should be positive in eastern hemisphere,
     * while negative in western hemisphere.
     *
     * **THAT MEANS THE VALUE OF THIS FIELD IS NEGATIVE TO THE VALUE OF `Date.prototype.getTimezoneOffset`.**
     */
    "offset": number;

    /**
     * The DST offset from UTC in minutes. This field should be positive in eastern hemisphere,
     * while negative in western hemisphere.
     *
     * **THAT MEANS THE VALUE OF THIS FIELD IS NEGATIVE TO THE VALUE OF `Date.prototype.getTimezoneOffset`.**
     */
    "dstOffset": number;

    /**
     * Country/location codes using this timezone.
     */
    "location": string | null;

    /**
     * More details about this timezone.
     */
    "description": string;
}

export interface ITimeZoneManager {

    /**
     * Find a timezone by its name (case-insensitive).
     *
     * @param name  The name of timezone to be find.
     * @returns Return the detail info of the timezone if found. Otherwise, return `null`.
     */
    findByName(name: string): ITimeZone | null;

    /**
     * Find the list of timezones used by the determined location.
     *
     * @param location  The determined location to be searched by.
     * @returns Return an array of found timezone.
     */
    findByLocation(location: string): ITimeZone[];

    /**
     * Find the timezone by the offset.
     *
     * @param offset    The timezone offset from UTC in minutes
     */
    findByOffset(offset: number): ITimeZone[];

    /**
     * Find the timezone by the DST offset.
     *
     * @param offset    The timezone DST offset from UTC in minutes
     */
    findByDSTOffset(offset: number): ITimeZone[];

    /**
     * Get the list of all canonical timezones.
     */
    findCanonicalList(): ITimeZone[];

    /**
     * Get the list of all timezones, whatever alias, canonical or deprecated.
     */
    findAllList(): ITimeZone[];

    /**
     * Convert a integer offset into string.
     */
    offsetToString(offset: number): string;

    /**
     * Convert a string offset into integer.
     */
    offsetFromString(offset: string): number;
}

const LOCATION_2_TZ_MAPS: Record<string, ITimeZone[]> = {};

const CANONICAL_TZS: ITimeZone[] = [];

const OFFSET_2_TZ_MAPS: Record<string, ITimeZone[]> = {};

const DST_OFFSET_2_TZ_MAPS: Record<string, ITimeZone[]> = {};

function _buildIndex(): void {

    for (const k in TIME_ZONES) {

        const tz = TIME_ZONES[k];

        if (tz.location) {

            const loc = tz.location.toLowerCase();

            if (!LOCATION_2_TZ_MAPS[loc]) {

                LOCATION_2_TZ_MAPS[loc] = [];
            }

            LOCATION_2_TZ_MAPS[loc].push(tz);
        }

        if (tz.canonical) {

            CANONICAL_TZS.push(tz);
        }

        if (!OFFSET_2_TZ_MAPS[tz.offset]) {

            OFFSET_2_TZ_MAPS[tz.offset] = [];
        }

        OFFSET_2_TZ_MAPS[tz.offset].push(tz);

        if (!DST_OFFSET_2_TZ_MAPS[tz.dstOffset]) {

            DST_OFFSET_2_TZ_MAPS[tz.dstOffset] = [];
        }

        DST_OFFSET_2_TZ_MAPS[tz.dstOffset].push(tz);
    }
}

_buildIndex();

class TimeZoneManager implements ITimeZoneManager {

    public offsetToString(offset: number): string {

        const absOffset = Math.abs(offset);

        const m = absOffset % 60;
        const h = (absOffset - m) / 60;

        if (offset < 0) {

            return `-${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
        }

        return `+${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    }

    public offsetFromString(offset: string): number {

        let o;

        if (offset[0] === "-" || offset[0] === "+") {

            o = offset.slice(1);
        }
        else {

            o = offset;
        }

        const [h, m] = o.split(":");

        return (parseInt(h) * 60 + parseInt(m)) * (offset.startsWith("-") ? -1 : 1);
    }

    public findByName(name: string): ITimeZone | null {

        const ret = TIME_ZONES[name.toLowerCase()];

        return ret ? {...ret} : null;
    }

    public findByLocation(loc: string): ITimeZone[] {

        return (LOCATION_2_TZ_MAPS[loc.toLowerCase()] || [] as ITimeZone[]).map((v) => ({...v}));
    }

    public findByOffset(offset: number): ITimeZone[] {

        return (OFFSET_2_TZ_MAPS[offset] || [] as ITimeZone[]).map((v) => ({...v}));
    }

    public findByDSTOffset(offset: number): ITimeZone[] {

        return (DST_OFFSET_2_TZ_MAPS[offset] || [] as ITimeZone[]).map((v) => ({...v}));
    }

    public findCanonicalList(): ITimeZone[] {

        return CANONICAL_TZS.map((v) => ({...v}));
    }

    public findAllList(): ITimeZone[] {

        return Object.values(TIME_ZONES).map((v) => ({...v}));
    }
}

const THE_TZ_MGR: ITimeZoneManager = new TimeZoneManager();

export default THE_TZ_MGR;

export function getDefaultTimezoneManager(): ITimeZoneManager {

    return THE_TZ_MGR;
}

export function createTimezoneManager(): ITimeZoneManager {

    return new TimeZoneManager();
}
