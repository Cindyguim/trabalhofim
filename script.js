function calculate() {
    var age = document.getElementById('age').value;
    var imc = document.getElementById('imc').value;

    // Operadora A
    var planA_basic = 100 + (age * 10 * (imc / 10));
    var planA_standard = (150 + (age * 15)) * (imc / 10);
    var planA_premium = (200 - (imc * 10) + (age * 20)) * (imc / 10);

    // Operadora B
    var comorbidityFactor = getComorbidityFactor(imc);
    var planB_basic = 100 + (comorbidityFactor * 10 * (imc / 10));
    var planB_standard = (150 + (comorbidityFactor * 15)) * (imc / 10);
    var planB_premium = (200 - (imc * 10) + (comorbidityFactor * 20)) * (imc / 10);

    // Determinação do plano mais vantajoso
    var result = "Operadora A - Básico: $" + planA_basic.toFixed(2) + "<br>" +
                 "Operadora A - Standard: $" + planA_standard.toFixed(2) + "<br>" +
                 "Operadora A - Premium: $" + planA_premium.toFixed(2) + "<br><br>" +
                 "Operadora B - Básico: $" + planB_basic.toFixed(2) + "<br>" +
                 "Operadora B - Standard: $" + planB_standard.toFixed(2) + "<br>" +
                 "Operadora B - Premium: $" + planB_premium.toFixed(2) + "<br><br>";

    if (planA_basic + planA_standard + planA_premium < planB_basic + planB_standard + planB_premium) {
        result += "Operadora A é mais vantajosa.";
    } else {
        result += "Operadora B é mais vantajosa.";
    }

    document.getElementById('result').innerHTML = result;
}

function getComorbidityFactor(imc) {
    if (imc < 18.5) {
        return 10; // abaixo do peso
    } else if (imc < 24.9) {
        return 1; // normal
    } else if (imc < 29.9) {
        return 6; // sobrepeso
    } else if (imc < 34.9) {
        return 10; // obesidade
    } else if (imc < 39.9) {
        return 20; // obesidade mórbida grave
    } else {
        return 30; // obesidade mórbida muito grave
    }
}