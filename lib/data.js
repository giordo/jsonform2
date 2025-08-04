/**
 * Created by taniabernardelli on 25/05/19.
 */


var listpriceprovvisorio = {
    id: 2,
    code: "20190530_kom",
    mode: "matrix",
    currency: "euro",
    value: {
        1500: {
            1600 : 560.00,
            1700 : 570.10,
            1800 : 580.20,
            1900 : 590.30
        },
        1600: {
            1600 : 660.00,
            1700 : 670.10,
            1800 : 680.20,
            1900 : 690.30
        },
        1700: {
            1600 : 760.00,
            1700 : 770.10,
            1800 : 780.20,
            1900 : 790.30
        },
        1800: {
            1600 : 860.00,
            1700 : 870.10,
            1800 : 880.20,
            1900 : 890.30
        },
        1900: {
            1600 : 960.00,
            1700 : 970.10,
            1800 : 980.20,
            1900 : 990.30
        }

    }
};

var prodotto =
    {
        prodotto: "Finestra ad un\'anta",
        description: "KOM1 - Finestra 1 anta",
        code: 'F1',
        type: 'product',

        default_pricelist_mode:"matrix", //singlevalue/matrix/manual
        default_pricelist_currency:"euro",
        default_pricelist_view:"both",



        pricelists: [ listpriceprovvisorio,
        ],
        formule:[

            {
                ret: 'prodottoprice',
                type:"updateParametro",
                target: "prodotto.unit_price",//non modificabile
                event:"onParametriChange",
                watches: ['parametri.codicegrid'],
                functions:[
                    'setProductListPriceByCodiceGrid(parametri.codicegrid)'
                ],
                messages:''
            }

        ]
    };


var parametri = [
    {
        type: "parametro",
        pid:"121",
        id:"124",
        parametro:"larghezza",
        number:"N1",
        active:"1",
        required: true,
        formule:[
/*
            {
                type:"alert",
                event:"fieldValidator",
                action:' >= parametri.kom_fn1_lmin',
                message:"Il valore deve essere superiore a [[parametri.kom_fn1_lmin.value]]"
            }
*/
        ],
        ret:"number",
        udm:"mm",
        typeif:"input_lh",
        pos:"2",
        _ordine:"2",
        code:"larghezza",
        value:0
    }
    ,
    {
        type: "parametro",
        pid:"121",
        id:"139",
        parametro:"Altezza",
        number:"N2",
        active:"1",
        required: true,
        formule:[
            /*
            {
                type:"message",
                event:"fieldValidator",
                action:' >= parametri.kom_fn1_hmin',
                message:"Il valore deve essere superiore a [[parametri.kom_fn1_hmin.value]]"
            }
*/
        ],
        ret:"number",
        udm:"mm",
        typeif:"input_lh",
        pos:"3",
        _ordine:"3",
        code:"altezza",
        value:0
    },
    {
        type: "parametro",
        pid:"121",
        id:"142",
        parametro:"Larghezza minima",
        number:"N5",
        active:"0",
        formule:[
            {
                ret: 'number',
                type:"setParametro",
                target: "parametri.larghezza",
                event:"afterInit",
                watches: [],
                functions:[],
                messages:''
            }
        ],
        ret:"number",
        udm:"mm",
        typeif:"valore",
        pos:"0",
        _ordine:"0",
        code:"kom_fn1_lmin",
        value:1200
    },

    {
        type: "parametro",
        pid:"121",
        id:"143",
        parametro:"Altezza minima",
        number:"N6",
        active:"1",
        formule:[
            {
                ret: 'number',
                type:"setParametro",
                target: "parametri.altezza",
                event:"afterInit",
                watches: [],
                functions:[],
                messages:''
            }
        ],
        ret:"number",
        udm:"mm",
        typeif:"Valore",
        pos:"1",
        _ordine:"1",
        code:"kom_fn1_hmin",
        value:1000
    },



    {
        type: "parametro",
        pid:"121",
        id:"140",
        parametro:"Area",
        number:"N3",
        active:"1",
        formule:[
            {
                ret: 'number',
                type:"setParametro",
                target: "this",//non modificabile
                event:"onParametriChange",
                watches: ['parametri.larghezza', 'parametri.altezza'],
                functions:['parametri.larghezza*parametri.altezza/1000000'],
                messages:''
            }
        ],
        ret:"number",
        udm:"mq",
        typeif:"formula",
        pos:"4",
        _ordine:"4",
        code:"area",
        value:0//parametri.larghezza * parametri.altezza"
    },
    {
        type: "parametro",
        pid:"121",
        id:"140",
        parametro:"Area Tapparella",
        number:"N3",
        active:"1",
        formule:[
            {
                ret: 'number',
                type:"updateParametro",
                target: "this",//non modificabile
                event:"onParametriChange",
                watches: ['parametri.larghezza', 'parametri.altezza'],
                functions:['(parametri.larghezza + 50)*(parametri.altezza+200)/1000000'],
                messages:''
            }
        ],
        ret:"number",
        udm:"mq",
        typeif:"formula",
        pos:"4",
        _ordine:"4",
        code:"areatapparella",
        value:0//parametri.larghezza * parametri.altezza"
    },
    {
        type: "parametro",
        pid:"121",
        id:"141",
        parametro:"Perimetro 3 Lati",
        number:"N4",
        active:"1",
        formule:[
            {
                ret: 'number',
                type:"updateParametro",
                target: "this",//non modificabile
                event:"onParametriChange",
                watches: ['parametri.larghezza', 'parametri.altezza'],
                functions:['(parametri.larghezza + (parametri.altezza * 2))/1000'],
                messages:''
            }
        ],
        ret:"number",
        udm:"ml",
        typeif:"formula",
        pos:"5",
        _ordine:"5",
        code:"perimetro3L",
        value:0
    },
    {
        type: "parametro",
        pid:"121",
        id:"141",
        parametro:"Codice griglia",
        number:"N4",
        active:"1",
        formule:[
            {
                ret: 'string',
                type:"updateParametro",
                target: "this",//non modificabile
                event:"onParametriChange",
                watches: ['parametri.larghezza', 'parametri.altezza'],
                functions:[
                    'concatenate(["step(parametri.larghezza, 100, \'<\')","step(parametri.altezza, 100, \'<\')"])'
                ],
                messages:''
            }
        ],
        ret:"string",
        udm:"",
        typeif:"formula",
        pos:"5",
        _ordine:"5",
        code:"codicegrid",
        value:""
    },
    /*
    {
        type: "parametro",
        pid:"151",
        id:"191",
        parametro:"Somma prodotto+profilo",
        number:"N4",
        active:"1",
        formule:[
            {
                ret: 'number',
                type:"updateParametro",
                target: "this",//non modificabile
                event:"onParametriChange",
                watches: ['product.unit_price', 'config.kom_profilo'],
                functions:['(config.kom_profilo + product.unit_price)'],
                messages:''
            }
        ],
        ret:"number",
        udm:"",
        typeif:"formula",
        pos:"5",
        _ordine:"5",
        code:"provasum",
        value:""
    }
    */
];

/*
var parametri = [

    {
        type: "parametro",
        pid: "121",
        id: "124",
        parametro: "larghezza",
        number: "N1",
        active: "1",
        required: true,
        formule: [],
        ret: "string",
        typeif: "input"
    }
];
*/

var configs =[
    {
        type: "config",
        factor: 1,
        pid:"121",
        id:"125",
        conf_prodotto:"Vetri",
        number:"N1",
        active:"1",
        minimo:1.0,
        concatenate:"0",
        view_price:"1",
        default:"kom_vetri_pfstd",
        pos:"0",
        monitor: 'parametri.area',
        mode: "multiple",
        formule:[],
        code:"kom_vetri",
        vistariga:"1",
        variabili: [
            {
                type: "variabile",
                pid:"125",
                id:"122",
                variabile:" vetro di sicurezza 33.1\/...\/44.2 BE WE ug 1.1",
                number:"N1",
                active:"1",

                default_pricelist_mode:"singlevalue", //singlevalue/matrix/manual
                default_pricelist_currency:"euro",
                default_pricelist_view:"description",

                pos:"0",
                code:"kom_vetri_442",
                pricelists: [
                    {
                        id: 5,
                        code: "20190530_kom",
                        mode: "singlevalue",
                        value: 25.60, // double | object
                        currency: "euro",
                    },
                    {
                        id: 2,
                        code: "20200120_kom",
                        mode: "singlevalue",
                        value: 26.20, // double | object
                        currency: "euro",
                    }
                ],
            },
            {
                type: "variabile",
                pid:"125",
                id:"126",
                variabile:" vetro 33.1\/...\/33.1 ug.1.0 BE WE",
                number:"N2",
                active:"1",

                default_pricelist_mode:"singlevalue", //singlevalue/matrix/manual
                default_pricelist_currency:"euro",
                default_pricelist_view:"description",


                pos:"2",
                code:"kom_vetri_pfstd",
                pricelists: [
                    {
                        id: 2,
                        code: "20190530_kom",
                        mode: "singlevalue",
                        value: 11.8, // double | object
                        currency: "euro",
                    }
                ],
            },
            {type: "variabile",
                pid:"125",
                pricelist:'20190425',
                id:"132",
                variabile:"vetro satinato 33.1\/...\/33.1 ug.1.1",
                number:"N3",
                active:"1",

                default_pricelist_mode:"singlevalue", //singlevalue/matrix/manual
                default_pricelist_currency:"euro",
                default_pricelist_view:"description",

                pos:"0",
                code:"kom_vetri_33sat",
                pricelists: [
                    {
                        id: 2,
                        code: "20190530_kom",
                        mode: "singlevalue",
                        value: 0, // double | object
                        currency: "euro",
                    }
                ],
            },
        ]
    },
    {type: "config",
        factor: 1,
        pid:"121",
        id:"133",
        conf_prodotto:"Maniglietta + snapper",
        number:"N2",
        active:"1",
        minimo:0,
        concatenate:"0",
        view_price:"1",
        default:"kom_snap_no",
        pos:"1",
        mode: "multiple",
        formule:[],
        code:"kom_snap",
        vistariga:"0",
        monitor: '',
        variabili: [
            {type: "variabile",
                pid:"133",
                pricelist:'20190425',
                id:"134",
                variabile:"Mniglietta del fumatore esclusa",
                number:"N4",

                default_pricelist_mode:"singlevalue", //singlevalue/matrix/manual
                default_pricelist_currency:"euro",
                default_pricelist_view:"both",


                pos:"0",
                code:"kom_snap_no",
                pricelists: [
                    {
                    id: 2,
                    code: "20190530_kom",
                    mode: "singlevalue",
                    value: 0, // double | object
                    currency: "euro",
                    }
                ],
            },
            {type: "variabile",
                pid:"133",
                pricelist:'20190425',
                id:"135",
                variabile:"Maniglietta + snapper",
                number:"N5",
                active:"1",

                default_pricelist_mode:"singlevalue", //singlevalue/matrix/manual
                default_pricelist_currency:"euro",
                default_pricelist_view:"both",

                pos:"2",
                code:"kom_snap_si",
                pricelists: [
                    {
                        id: 2,
                        code: "20190530_kom",
                        mode: "singlevalue",
                        value: 12, // double | object
                        currency: "euro",
                    }
                ],
            },
        ]
    },
    {
        type: "config",
        factor: 1,
        pid:"121",
        id:"136",
        conf_prodotto:"Profilo L Z35 ecc",
        number:"N3",
        active:"1",
        minimo:0,
        concatenate:"0",
        view_price:"1",
        default:"kom_profilo_l",
        pos:"1",
        mode: "percentage",
        formule:[],
        code:"kom_profilo",
        vistariga:"1",
        monitor: 'product.unit_price',//['parametri.listprice'],
        variabili: [
            {type: "variabile",
                pid:"136",
                pricelist:'20190425',
                id:"137",
                variabile:"Profilo a L (anche per ristrutturazione)",
                number:"N6",
                active:"1",

                default_pricelist_mode:"singlevalue", //singlevalue/matrix/manual
                default_pricelist_currency:"euro",
                default_pricelist_view:"both", //both, description, none

                pos:"0",
                code:"kom_profilo_l",
                pricelists: [{
                    id: 2,
                    code: "20190530_kom",
                    mode: "singlevalue",
                    value: 0.04, // double | object
                    currency: "euro",
                }],
            },
            {type: "variabile",
                pid:"136",
                pricelist:'20190425',
                id:"138",
                variabile:"Profilo Z35 per ristrutturazione",
                number:"N7",
                active:"1",

                default_pricelist_mode:"singlevalue", //singlevalue/matrix/manual
                default_pricelist_currency:"euro",
                default_pricelist_view:"both",

                pos:"1",
                code:"kom_profilo_z35",
                pricelists: [{
                    id: 2,
                    code: "20190530_kom",
                    mode: "singlevalue",
                    value: 0.08, // double | object
                    currency: "euro",
                }],
            }
        ]
    }

];
