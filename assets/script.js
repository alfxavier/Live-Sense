const FROST_SERVER_URL = "http://192.168.61.250:8989/FROST-Server/v1.0";
const DATASTREAM_IDS = { "Temperatura": 9, "Umidade": 10, "Tensão": 11 };
const UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutos em milissegundos
let lastUpdateElement = document.getElementById("lastUpdate");

// Inicialização do gráfico
const ctx = document.getElementById("sensorChart").getContext("2d");
let sensorChart = new Chart(ctx, {
    type: 'line',
    data: { labels: [], datasets: [] },
    options: { scales: { x: { type: 'time', time: { unit: 'minute' } } } }
});

// Função para atualizar os dados
function updateData() {
    for (const [sensor, id] of Object.entries(DATASTREAM_IDS)) {
        fetch(`${FROST_SERVER_URL}/Datastreams(${id})/Observations?$top=1&$orderby=phenomenonTime desc`)
            .then(response => response.json())
            .then(data => {
                if (data.value && data.value.length > 0) {
                    let latestValue = data.value[0].result;
                    updateSensorDisplay(sensor, latestValue);
                    if (sensor === "Tensão") {
                        let percentage = calculateBatteryPercentage(latestValue);
                        updateBatteryBar(percentage);
                    }
                }
            })
            .catch(error => console.error(`Erro ao obter dados de ${sensor}:`, error));
    }
    lastUpdateElement.innerText = `Última atualização: ${new Date().toLocaleString()}`;
}

// Função para atualizar os elementos de exibição
function updateSensorDisplay(sensor, value) {
    if (sensor === "Temperatura") {
        document.getElementById("tempBar").style.height = `${value}%`;
        document.getElementById("tempBar").innerText = `${value}°C`;
    } else if (sensor === "Umidade") {
        document.getElementById("humBar").style.height = `${value}%`;
        document.getElementById("humBar").innerText = `${value}%`;
    }
}

// Função para calcular porcentagem da bateria
function calculateBatteryPercentage(voltage) {
    const minVoltage = 3.0;
    const maxVoltage = 4.2;
    return Math.max(0, Math.min(((voltage - minVoltage) / (maxVoltage - minVoltage)) * 100, 100));
}

function updateBatteryBar(percentage) {
    const batBar = document.getElementById("batBar");
    batBar.style.height = `${percentage}%`;
    batBar.innerText = `${percentage.toFixed(0)}%`;
}

// Função para atualizar o gráfico de histórico
function updateChart(sensor, data) {
    sensorChart.data.datasets.push({
        label: sensor,
        data: data.map((point, index) => ({ x: new Date(point.time), y: point.value })),
        borderColor: sensor === "Temperatura" ? "red" : sensor === "Umidade" ? "blue" : "green",
        fill: false
    });
    sensorChart.update();
}

// Atualiza os dados a cada 5 minutos
setInterval(updateData, UPDATE_INTERVAL);
updateData(); // Chama uma vez ao carregar
