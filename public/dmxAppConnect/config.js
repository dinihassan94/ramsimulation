dmx.config({
  "test": {
    "api1": [
      {
        "type": "object",
        "name": "data",
        "sub": [
          {
            "type": "array",
            "name": "Facture ",
            "sub": [
              {
                "type": "number",
                "name": "Montant"
              },
              {
                "type": "number",
                "name": "Prix_Unitaire"
              },
              {
                "type": "number",
                "name": "Quantite"
              },
              {
                "type": "text",
                "name": "libelle"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "connection"
          },
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ]
  },
  "index": {
    "mt_djibouti": [
      {
        "type": "object",
        "name": "data",
        "sub": [
          {
            "type": "array",
            "name": "Facture",
            "sub": [
              {
                "type": "number",
                "name": "Montant"
              },
              {
                "type": "number",
                "name": "Prix_Unitaire"
              },
              {
                "type": "number",
                "name": "Quantite"
              },
              {
                "type": "text",
                "name": "libelle"
              }
            ]
          },
          {
            "type": "array",
            "name": "Montant_total",
            "sub": [
              {
                "type": "number",
                "name": "Total_a_payer"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "access-control-allow-origin"
          },
          {
            "type": "text",
            "name": "connection"
          },
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "data_viewPeriode": {
      "meta": [
        {
          "name": "id_periode",
          "type": "number"
        },
        {
          "name": "nom_periode",
          "type": "text"
        },
        {
          "name": "annee",
          "type": "number"
        }
      ],
      "outputType": "text"
    }
  }
});
