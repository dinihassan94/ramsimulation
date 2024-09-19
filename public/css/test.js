{{sc12FactureSimuler.data.custom[4].mtn_reel.toNumber()>sc12FactureSimuler.data.custom[4].simule.toNumber()
    ?((sc12FactureSimuler.data.custom[4].mtn_reel.toNumber()-sc12FactureSimuler.data.custom[4].simule.toNumber() ).formatNumber(0, ' ', ' '))
    :((sc12FactureSimuler.data.custom[4].mtn_reel.toNumber()-sc12FactureSimuler.data.custom[4].simule.toNumber())*(-1)).formatNumber(0, ' ', ' ')}}