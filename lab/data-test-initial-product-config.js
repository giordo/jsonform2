 var initial_config =  {
        "uid": "abcdef",
        "configurable": true,
        "width": true,
        "height": true,
        "depth": false, //to-do depth
        "default": {
          "title": "Write something",
          "width": 0 ,
          "height": 0,
          "depth": 0,
          "currency": "euro", //to-do other currency
          "components": [
            {
              "uid": false,
              "title": "Insert Title",
              "type": "text", /// text | select //to-do select
              "rules": {
                "dimension": {
                  "min": 0,
                  "add-w": 0,
                  "add-h": 0,
                  "add-d": 0,
                },
                "price": {
                  "mode": "manual", // manual || fixed || to-do pricelist
                  "pricelist": false,
                },
                "pricelists": []
              },
            }
          ],
        },
        "updated": false, // true | false
        "current": {
          "width": 1000,
          "height": 1550,
          "depth": 0,
          "currency": "euro", //to-do other currency
          "components": [
            {
              "uid": 'asdfasdfadsfadsf',
              "title": "Finestra un\'anta custom",
              "type": "text", /// text | select //to-do select
              "rules": {
                "dimension": {
                  "min": 1,
                  "add-w": 100,
                  "add-h": 40,
                  "add-d": 0,
                },
                "price": {
                  "mode": "manual", // pricelist | manual | fixed
                  "pricelist": false, //false | dev_202504
                },
                "pricelists": [
                  {
                    "id": 1,
                    "code": "dev_202403",
                    "value": 0.8, // double | object (matrix)
                    "currency": "euro",
                  },
                  {
                    "id": 2,
                    "code": "dev_202504",
                    "value": 1.2, // double | object (matrix)
                    "currency": "euro",
                  },
                ],
                "visibility": {
                  "description": true,
                  "price": true
                }
              },
            },
          ]          
        }        
      };