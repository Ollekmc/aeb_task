To-Do:

Setup an endpoint (node.js) that is receiving body data as json via postman and validates mandatory fields.
The response should be a json object with a status code of 200(ok) or 400(error) and message body.
If there is an error the json object should contain which fields are missing.

Mandatory fields:
- msgId
- sender
- boxNumber
- senderInfo.plant
- senderInfo.shippingPoint
- soldTo.SoldToCode
- shipTo.shipToCode
- intermediate.intermediateCode

Json-Object to post:

{
  "boxPackingRequest": {
    "messageHeader": {
      "msgId": "MID001BP",
      "msgType": "001",
      "msgTime": "2022-01-05T15:05:01+04:00",
      "sender": "AT1",
      "receiver": "AEB",
      "version": "1.0",
      "orderType": "RTN",
      "boxData": {
        "boxNumber": "54736236",
        "cartonID": "C001XXF",
        "orderPriority": "RTN",
        "UNCode": "1234",
        "route": "003RTN",
        "customsIndicator": "F.",
        "incoterm": "FCA",
        "createdOn": "2022-01-05",
        "time": "15:00:00",
        "boxType": "C01",
        "grossWeight": "1111.000",
        "uomWeight": "KG",
        "length": "1111.100",
        "width": "1111.000",
        "height": "1111.000",
        "uomSize": "MM",
        "metricVolume": "1111.000",
        "uomMetric": "CCM"
      },
      "routingInstruction": {
        "line1": "texts retrieved from ZVRI transaction",
        "line2": "retrieved from ZVRI transaction 2",
        "line3": "retrieved from ZVRI transaction 2",
        "line4": "retrieved from ZVRI transaction 2",
        "line5": "retrieved from ZVRI transaction 2",
        "line6": "retrieved from ZVRI transaction 2"
      },
      "senderInfo": {
        "plant": "1100",
        "shippingPoint": "1111",
        "shippingPointName": "HH norm",
        "name1": "Bob",
        "street": "Sigmaringer Strasse 109",
        "country": "DE",
        "region": "Baden-Wuerttemberg",
        "postalCode": "70567",
        "city": "Stuttgart",
        "VATNumber": "DE999999999",
        "EORINumber": "DEoutofscopewave1"
      },
      "soldTo": {
        "soldToCode": "121069",
        "searchTerm": "S7B",
        "name1": "Alice",
        "name2": "Alice 2",
        "name3": "Alice 3",
        "name4": "Alice 4",
        "street": "Arbetargatan 25A",
        "addStreet": "Arbetargatan 23A",
        "country": "SE",
        "region": "Uppland",
        "postalCode": "112 45",
        "city": "Stockholm",
        "VATNumber": "SE999999999999",
        "EORINumber": "SEoutofscopewave1",
        "embargo": "Out of scope wave 1"
      },
      "shipTo": {
        "shipToCode": "B46",
        "searchTerm": "S7B-AB",
        "name1": "Name1 of customer",
        "name2": "Name2 of customer",
        "name3": "Name3 of customer",
        "name4": "Name4 of customer",
        "street": "Lingonrisgraend 4A",
        "addStreet": "Lingonrisgraend 4B",
        "country": "SE",
        "region": "Uppland",
        "postalCode": "165 76",
        "city": "Haesselby",
        "VATNumber": "SE123123123123",
        "EORINumber": "SEoutofscopewave1",
        "embargo": "Out of scope wave 1",
        "phoneNumber": "01239645",
        "email": "test@testemail.de"
      },
      "intermediate": {
        "intermediateCode": "stc001225",
        "searchTerm": "Intercode",
        "name1": "Name1 of customer",
        "name2": "Name2 of customer",
        "name3": "Name3 of customer",
        "name4": "Name4 of customer",
        "street": "Ralambsvaegen 18",
        "addStreet": "Ralambsvaegen 17",
        "country": "SE",
        "region": "Uppland",
        "postalCode": "146 38",
        "city": "Tullinge",
        "VATNumber": "SE678678678678",
        "EORINumber": "SEoutofscopewave1",
        "embargo": "Out of scope wave 1"
      }
    }
  },
}