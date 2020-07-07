window.addEventListener('DOMContentLoaded', () => {

// ----------------------------------------------------
// ----------------     CENNIK      -------------------    
// ----------------------------------------------------
    const prices = {
        eng: {      // ANGLIA
            base: 245,
            per_km: 0.15
        },
        bel: {      // BELGIA
            base: 150,
            per_km: 0.14
        },
        fra: {      // FRANCJA
            base: 220,
            per_km: 0.17
        }, 
        hol: {      // HOLANDIA
            base: 150,
            per_km: 0.14
        },
        irl: {      // IRLANDIA
            base: 250,
            per_km: 0.14
        },
        irl_north: {            // IRLANDIA PÓŁNOCNA
            base: 320,
            per_km: 0.15
        },
        ger_east_pol_east: {    // WSCHODNIE NIEMCY ZE WSCHODNIEJ POLSKI
            base: 120,
            per_km: 0.25
        },  
        ger_east_pol_west: {    // WSCHODNIE NIEMCY Z ZACHODNIEJ POLSKI
            base: 100,
            per_km: 0.18
        },
        ger_west_pol_east: {    // ZACHODNIE NIEMCY ZE WSCHODNIEJ POLSKI
            base: 150,
            per_km: 0.25
        },
        ger_west_pol_west: {    // ZACHODNIE NIEMCY Z ZACHODNIEJ POLSKI
            base: 120,
            per_km: 0.2
        },
        sco: {                  // SZKOCJA
            base: 280,
            per_km: 0.18
        }, 
        wal: {                  // WALIA
            base: 270,
            per_km: 0.17
        }
    };



    let km_input = document.getElementById("kilometers_input");
    let km_output = document.getElementById("km_output");

    let country_from = document.getElementById("country_from_input");
    let country_to = document.getElementById("country_to_input");

    let calc_btn = document.getElementById("calculate_price_btn");

    
    let kilometers = 0;
    let base_price = 0;
    let per_km_price = 0;

    let lower_price = 0;
    let upper_price = 0;

    let currency_multiply = 1;
    let currency_code = "EUR";

    document.getElementById("eur_currency_form").addEventListener("click", () => {
        currency_multiply = 1;
        currency_code = "EUR";
    });

    document.getElementById("gbp_currency_form").addEventListener("click", () => {
        currency_multiply = 0.9;
        currency_code = "GBP";
    });

    document.getElementById("pln_currency_form").addEventListener("click", () => {
        currency_multiply = 4.5;
        currency_code = "PLN";
    });

    calc_btn.addEventListener("click", (e) => {
        e.preventDefault();

        switch(country_to.value) {
            case "england": {
                base_price = prices.eng.base;
                per_km_price = prices.eng.per_km;
                break;
            }
            case "belgium": {
                base_price = prices.bel.base;
                per_km_price = prices.eng.per_km;
                break;
            }
            case "france": {
                base_price = prices.fra.base;
                per_km_price = prices.eng.per_km;
                break;
            }
            case "holland": {
                base_price = prices.hol.base;
                per_km_price = prices.eng.per_km;
                break;
            }
            case "ireland": {
                base_price = prices.irl.base;
                per_km_price = prices.eng.per_km;
                break;
            }
            case "ireland_north": {
                base_price = prices.irl_north.base;
                per_km_price = prices.eng.per_km;
                break;
            }
            case "germany_east": {
                if (country_from.value == "poland_east") {
                    base_price = prices.ger_east_pol_east.base;
                    per_km_price = prices.eng.per_km;
                } else if (country_from.value == "poland_west") {
                    base_price = prices.ger_east_pol_west.base;
                    per_km_price = prices.eng.per_km;
                }
                break;
            }
            case "germany_west": {
                if (country_from.value == "poland_east") {
                    base_price = prices.ger_west_pol_east.base;
                    per_km_price = prices.eng.per_km;
                } else if (country_from.value == "poland_west") {
                    base_price = prices.ger_west_pol_west.base;
                    per_km_price = prices.eng.per_km;
                }
                break;
            }
            case "scotland": {
                base_price = prices.sco.base;
                per_km_price = prices.eng.per_km;
                break;
            }
            case "wales": {
                base_price = prices.wal.base;
                per_km_price = prices.eng.per_km;
                break;
            }
            default: {
                switch(country_from.value) {
                    case "england": {
                        base_price = prices.eng.base;
                        per_km_price = prices.eng.per_km;
                        break;
                    }
                    case "belgium": {
                        base_price = prices.bel.base;
                        per_km_price = prices.eng.per_km;
                        break;
                    }
                    case "france": {
                        base_price = prices.fra.base;
                        per_km_price = prices.eng.per_km;
                        break;
                    }
                    case "holland": {
                        base_price = prices.hol.base;
                        per_km_price = prices.eng.per_km;
                        break;
                    }
                    case "ireland": {
                        base_price = prices.irl.base;
                        per_km_price = prices.eng.per_km;
                        break;
                    }
                    case "ireland_north": {
                        base_price = prices.irl_north.base;
                        per_km_price = prices.eng.per_km;
                        break;
                    }
                    case "germany_east": {
                        if (country_to.value == "poland_east") {
                            base_price = prices.ger_east_pol_east.base;
                            per_km_price = prices.eng.per_km;
                        } else if (country_to.value == "poland_west") {
                            base_price = prices.ger_east_pol_west.base;
                            per_km_price = prices.eng.per_km;
                        }
                        break;
                    }
                    case "germany_west": {
                        if (country_to.value == "poland_east") {
                            base_price = prices.ger_west_pol_east.base;
                            per_km_price = prices.eng.per_km;
                        } else if (country_to.value == "poland_west") {
                            base_price = prices.ger_west_pol_west.base;
                            per_km_price = prices.eng.per_km;
                        }
                        break;
                    }
                    case "scotland": {
                        base_price = prices.sco.base;
                        per_km_price = prices.eng.per_km;
                        break;
                    }
                    case "wales": {
                        base_price = prices.wal.base;
                        per_km_price = prices.eng.per_km;
                        break;
                    }
                }
            }
        }

        // ----------------------------------------------------
        // ----------------------------------------------------
        // ----------------------------------------------------
        kilometers = km_input.value;

        calculated_price = kilometers * per_km_price;
        calculated_price = parseFloat(calculated_price);

        if (calculated_price < parseFloat(base_price)) {
            lower_price = base_price;
            console.log("PIERWSZY: " +lower_price);
        } else {
            lower_price = calculated_price;
            console.log("DRUGI: " +calculated_price);
        }

        upper_price = 1.2 * lower_price;


        lower_price *= currency_multiply;
        upper_price *= currency_multiply;

        km_output.innerText = "Szacowana cena: " + lower_price + " - " + upper_price + " " + currency_code;
    })
})