document.addEventListener('DOMContentLoaded', () => {

    const questionsData = [
        // EJE X (PRECIO VS VALOR AGREGADO)
        { axis: 'X', text: 'Lo más importante es encontrar una propuesta que sea eficiente en costos sin comprometer lo básico.', orientation: 'Precio' },
        { axis: 'X', text: 'Buscamos una agencia que cumpla bien, sin sobredimensionar estructuras o equipos que encarezcan la propuesta.', orientation: 'Precio' },
        { axis: 'X', text: 'Nos interesa entender qué parte del costo está directamente vinculada a entregables tangibles.', orientation: 'Precio' },
        { axis: 'X', text: 'Las diferencias estarán más en el precio que en las herramientas que se usen o desarrollen.', orientation: 'Precio' },
        { axis: 'X', text: 'Hay que priorizar lo que sea estrictamente necesario para ejecutar bien.', orientation: 'Precio' },
        { axis: 'X', text: 'Estamos buscando un equipo que aporte valor más allá de la pauta: que nos ofrezca herramientas que complementen el negocio.', orientation: 'Valor agregado' },
        { axis: 'X', text: 'Nos interesa ver propuestas que expliquen cómo la agencia puede impactar directamente en nuestros resultados, más allá del plan de medios.', orientation: 'Valor agregado' },
        { axis: 'X', text: 'Es necesario contar con capacidad de generar ventaja competitiva desde la estrategia de medios.', orientation: 'Valor agregado' },
        { axis: 'X', text: 'Estamos dispuestos a considerar propuestas con un costo superior si hay una lógica clara de valor y diferenciación.', orientation: 'Valor agregado' },
        { axis: 'X', text: 'Más que una agencia operativa, buscamos un partner que nos ofrezca soluciones diferentes.', orientation: 'Valor agregado' },
        { axis: 'X', text: 'Buscamos equilibrio entre una propuesta competitiva en precio pero con visión estratégica.', orientation: 'Intermedia' },
        { axis: 'X', text: 'Insistimos que justificar internamente cualquier costo, así que esperamos que ese valor extra esté bien argumentado.', orientation: 'Intermedia' },
        { axis: 'X', text: 'Estamos abiertos a propuestas diferenciadas, pero es clave que muestren retorno concreto desde el inicio.', orientation: 'Intermedia' },
        { axis: 'X', text: 'Nos interesa ver qué aspectos del servicio son opcionales y cuáles son imprescindibles dentro del costo.', orientation: 'Intermedia' },
        { axis: 'X', text: 'Esperamos que las agencias sean claras en qué parte de su propuesta realmente marca diferencia.', orientation: 'Intermedia' },

        // EJE Y (PRACTICIDAD VS ESTRATEGIA)
        { axis: 'Y', text: 'Lo que más valoramos es la capacidad de conseguir mejores tarifas y condiciones en medios.', orientation: 'Practicidad' },
        { axis: 'Y', text: 'Buscamos una agencia que optimice rápido y ejecute sin hacernos perder tiempo en reuniones o análisis complejos.', orientation: 'Practicidad' },
        { axis: 'Y', text: 'Preferimos que la agencia se concentre en alcanzar KPIs como alcance y frecuencia, sin complicarse con demasiadas capas estratégicas.', orientation: 'Practicidad' },
        { axis: 'Y', text: 'Lo importante en la estrategia es asegurar volumen y eficiencia de inversión, no necesariamente repensar el modelo.', orientation: 'Practicidad' },
        { axis: 'Y', text: 'La prioridad es contar con una agencia que se encargue bien de la operación para que nosotros podamos centrarnos en lo interno.', orientation: 'Practicidad' },
        { axis: 'Y', text: 'Nos interesa una agencia que desafíe nuestras suposiciones y proponga nuevas formas de abordar la planificación.', orientation: 'Estrategia' },
        { axis: 'Y', text: 'Para esta licitación, buscamos un socio que combine datos de múltiples fuentes y nos ayude a generar insights accionables.', orientation: 'Estrategia' },
        { axis: 'Y', text: 'Queremos ver propuestas que integren creatividad, estrategia de medios y análisis del consumidor de forma articulada.', orientation: 'Estrategia' },
        { axis: 'Y', text: 'Buscamos replantear cómo medimos y optimizamos nuestras inversiones.', orientation: 'Estrategia' },
        { axis: 'Y', text: 'Más que solo comprar medios, queremos una agencia que piense en cómo potenciar el crecimiento del negocio.', orientation: 'Estrategia' },
        { axis: 'Y', text: 'Buscamos un equilibrio entre eficiencia operativa y pensamiento estratégico.', orientation: 'Intermedia' },
        { axis: 'Y', text: 'Estamos abiertos a nuevas ideas, pero también necesitamos que la agencia sea ágil en la ejecución.', orientation: 'Intermedia' },
        { axis: 'Y', text: 'Valoramos propuestas analíticas, siempre que vengan acompañadas de recomendaciones simples y claras.', orientation: 'Intermedia' },
        { axis: 'Y', text: 'El enfoque estratégico es importante, pero no puede ir en contra de la simplicidad operativa.', orientation: 'Intermedia' },
        { axis: 'Y', text: 'Queremos una agencia que nos ayude a avanzar sin hacernos perder velocidad por exceso de análisis.', orientation: 'Intermedia' }
    ];

    const axisXContainer = document.getElementById('axis-x-container');
    const axisYContainer = document.getElementById('axis-y-container');
    const summaryText = document.getElementById('summary-text');
    const exportPdfBtn = document.getElementById('export-pdf-btn');
    
    // Canvases
    const orientationChartCanvas = document.getElementById('orientationChart');
    const axisXChartCanvas = document.getElementById('axisXChart');
    const axisYChartCanvas = document.getElementById('axisYChart');
    const positioningMatrixChartCanvas = document.getElementById('positioningMatrixChart');
    const ctxOrientation = document.getElementById('orientationChart').getContext('2d');
    const ctxPositioning = document.getElementById('positioningMatrixChart').getContext('2d');
    let orientationChart, axisXChart, axisYChart, positioningChart;

    function renderQuestions() {
        const axisXQuestions = questionsData.filter(q => q.axis === 'X');
        const axisYQuestions = questionsData.filter(q => q.axis === 'Y');

        axisXContainer.innerHTML = '<h2 class="axis-title">EJE X (PRECIO VS VALOR AGREGADO)</h2>';
        axisYContainer.innerHTML = '<h2 class="axis-title">EJE Y (PRACTICIDAD VS ESTRATEGIA)</h2>';

        axisXQuestions.forEach((q, index) => {
            axisXContainer.innerHTML += createQuestionHTML(q, index);
        });

        axisYQuestions.forEach((q, index) => {
            // Continue index from axisX length
            axisYContainer.innerHTML += createQuestionHTML(q, axisXQuestions.length + index);
        });

        document.querySelectorAll('.slider').forEach(slider => {
            slider.addEventListener('input', handleSliderChange);
        });

        document.querySelectorAll('.slider-value-input').forEach(input => {
            input.addEventListener('input', handleNumberInputChange);
            input.addEventListener('blur', handleNumberInputBlur); // Handle empty input on leaving the field
        });
    }

    function createQuestionHTML(question, index) {
        const tickmarks = Array.from({ length: 11 }, (_, i) => `<span>${i}</span>`).join('');

        return `
            <div class="question-item">
                <p>${question.text}</p>
                <div class="slider-wrapper">
                    <div class="slider-container">
                        <input type="range" min="0" max="10" value="5" class="slider" data-index="${index}">
                        <div class="slider-tickmarks">${tickmarks}</div>
                    </div>
                    <input type="number" min="0" max="10" value="5" class="slider-value-input" id="slider-value-input-${index}" data-index="${index}">
                </div>
            </div>
        `;
    }

    function updateAllSliderVisuals() {
        document.querySelectorAll('.slider').forEach(slider => {
            const value = slider.value;
            const min = slider.min ? slider.min : 0;
            const max = slider.max ? slider.max : 10;
            const percentage = (value - min) / (max - min);

            // This formula calculates the exact position of the thumb's center
            const thumbWidth = 20; // From CSS
            const trackWidth = slider.offsetWidth;
            const fillOffset = thumbWidth * (0.5 - percentage);
            const fill = (percentage * trackWidth) + fillOffset;
            const fillPercent = (fill / trackWidth) * 100;

            slider.style.setProperty('--track-fill-percent', `${fillPercent}%`);
        });
    }

    function handleSliderChange(event) {
        const index = event.target.dataset.index;
        const value = event.target.value;
        document.getElementById(`slider-value-input-${index}`).value = value;
        updateAllSliderVisuals(); // Update all sliders visuals
        updateResults();
    }

    function handleNumberInputChange(event) {
        const index = event.target.dataset.index;
        const slider = document.querySelector(`.slider[data-index='${index}']`);
        let value = parseInt(event.target.value, 10);

        if (isNaN(value)) return; // Do nothing if input is not a number yet

        if (value > 10) {
            value = 10;
            event.target.value = 10;
        }
        if (value < 0) {
            value = 0;
            event.target.value = 0;
        }

        slider.value = value;
        updateAllSliderVisuals(); // Update all sliders visuals
        updateResults();
    }

    function handleNumberInputBlur(event) {
        // If the user leaves the input empty, set it to the slider's current value
        if (event.target.value === '') {
            const index = event.target.dataset.index;
            const slider = document.querySelector(`.slider[data-index='${index}']`);
            event.target.value = slider.value;
        }
    }

    function calculateAxisScores(axis) {
        const relevantOrientations = axis === 'X' 
            ? ['Precio', 'Valor agregado', 'Intermedia'] 
            : ['Practicidad', 'Estrategia', 'Intermedia'];

        const scores = {};
        relevantOrientations.forEach(o => scores[o] = 0);
        const totals = { ...scores };

        document.querySelectorAll('.slider').forEach(slider => {
            const index = slider.dataset.index;
            const question = questionsData[index];
            if (question.axis === axis && relevantOrientations.includes(question.orientation)) {
                const value = parseInt(slider.value, 10);
                scores[question.orientation] += value;
                totals[question.orientation] += 10; // Max possible value
            }
        });

        for (const key in scores) {
            if (totals[key] > 0) {
                scores[key] = Math.round((scores[key] / totals[key]) * 100);
            }
        }
        return scores;
    }

    function createOrUpdateRadarChart(canvas, chartInstance, scores, label) {
        const data = {
            labels: Object.keys(scores),
            datasets: [{
                label: label,
                data: Object.values(scores),
                fill: true,
                backgroundColor: 'rgba(233, 164, 13, 0.6)', // Brand color with more opacity
                borderColor: 'rgba(233, 164, 13, 1)',     // Solid brand color
                pointBackgroundColor: 'rgba(233, 164, 13, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(233, 164, 13, 1)'
            }]
        };

        if (chartInstance) {
            chartInstance.data = data;
            chartInstance.update();
            return chartInstance;
        } else {
            return new Chart(canvas, {
                type: 'radar',
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false, // Set to false to allow CSS to control the size
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        r: {
                            angleLines: { display: false },
                            suggestedMin: 0,
                            suggestedMax: 100,
                            ticks: { backdropColor: 'transparent' }
                        }
                    }
                }
            });
        }
    }

    function createPositioningChart() {
        positioningChart = new Chart(ctxPositioning, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Posición del Proyecto',
                    data: [{ x: 0, y: 0 }],
                    backgroundColor: '#ff6384',
                    pointRadius: 10,
                    pointHoverRadius: 12
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        min: -100,
                        max: 100,
                        grid: {
                            color: '#e0e0e0',
                            zeroLineColor: '#3f51b5', // Emphasize the zero line
                            zeroLineWidth: 2
                        },
                        ticks: { display: false },
                        title: {
                            display: true,
                            text: '← Precio vs. Valor Agregado →'
                        }
                    },
                    y: {
                        min: -100,
                        max: 100,
                        grid: {
                            color: '#e0e0e0',
                            zeroLineColor: '#3f51b5',
                            zeroLineWidth: 2
                        },
                        ticks: { display: false },
                        title: {
                            display: true,
                            text: '← Practicidad vs. Estrategia →'
                        }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Posición: (X: ${context.parsed.x.toFixed(2)}, Y: ${context.parsed.y.toFixed(2)})`;
                            }
                        }
                    }
                }
            }
        });
    }

    function updateResults() {
        // Update Axis X Chart
        const scoresX = calculateAxisScores('X');
        axisXChart = createOrUpdateRadarChart(axisXChartCanvas, axisXChart, scoresX, 'Resumen Eje X (%)');

        // Update Axis Y Chart
        const scoresY = calculateAxisScores('Y');
        axisYChart = createOrUpdateRadarChart(axisYChartCanvas, axisYChart, scoresY, 'Resumen Eje Y (%)');

        // Update Overall Chart and Summary
        const combinedScores = { ...scoresX, ...scoresY }; // Simple combination for overall view
        const allOrientations = {
            'Precio': combinedScores.Precio,
            'Valor agregado': combinedScores['Valor agregado'],
            'Practicidad': combinedScores.Practicidad,
            'Estrategia': combinedScores.Estrategia,
            'Intermedia': combinedScores.Intermedia
        };

        orientationChart = createOrUpdateRadarChart(orientationChartCanvas, orientationChart, allOrientations, 'Orientación General (%)');

        // Update positioning chart
        if (positioningChart) {
            // The X coordinate is the difference between 'Valor Agregado' and 'Precio'
            const totalX = scoresX['Valor agregado'] - scoresX['Precio'];
            // The Y coordinate is the difference between 'Estrategia' and 'Practicidad'
            const totalY = scoresY['Estrategia'] - scoresY['Practicidad'];
            
            positioningChart.data.datasets[0].data[0] = { x: totalX, y: totalY };
            positioningChart.update();
        }

        updateSummary(allOrientations);
    }

    function updateSummary(scores) {
        const mainOrientation = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

        let summary = `El enfoque principal del proyecto se orienta hacia **${mainOrientation}**.\n\n`;

        if (scores['Precio'] > 70) {
            summary += '• Se priorizará la eficiencia en costos, buscando una propuesta económica y centrada en los entregables básicos.\n';
        }
        if (scores['Valor agregado'] > 70) {
            summary += '• Se buscará un socio estratégico que aporte valor más allá de la pauta, con un enfoque en la diferenciación y el impacto en resultados.\n';
        }
        if (scores['Practicidad'] > 70) {
            summary += '• La prioridad será la agilidad y la optimización de la operación, con un enfoque en la ejecución rápida y eficiente de KPIs.\n';
        }
        if (scores['Estrategia'] > 70) {
            summary += '• Se valorará una visión estratégica profunda, con propuestas que integren datos, creatividad y análisis para potenciar el negocio.\n';
        }
        if (scores['Intermedia'] > 60) {
            summary += '• Se busca un equilibrio. La estrategia es importante, pero debe ir de la mano con una ejecución ágil y justificaciones claras de costo-beneficio.\n';
        }

        if (summary.split('•').length - 1 === 0) {
            summary += 'El enfoque es balanceado, sin una inclinación dominante. Se busca un equilibrio entre costo, valor, agilidad y estrategia.'
        }

        summaryText.innerHTML = summary.replace(/\n/g, '<br>');
    }

    // --- Navigation Logic ---
    const toStep2Btn = document.getElementById('to-step-2-btn');
    const toStep3Btn = document.getElementById('to-step-3-btn');
    const tabNav = document.querySelector('.tab-nav');

    function switchToTab(tabId) {
        // Deactivate all tabs and content
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Activate the target tab and content
        document.querySelector(`.tab-btn[data-tab='${tabId}']`).classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }

    // Listener for top tab navigation
    tabNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            const tabId = e.target.dataset.tab;
            switchToTab(tabId);
        }
    });

    // Listeners for step-by-step buttons
    toStep2Btn.addEventListener('click', () => {
        switchToTab('tab-y');
    });

    toStep3Btn.addEventListener('click', () => {
        switchToTab('tab-results');
    });

    exportPdfBtn.addEventListener('click', () => {
        const element = document.getElementById('tab-results');
        const opt = {
            margin:       [0.5, 0.5, 0.5, 0.5], // Margins: top, left, bottom, right in inches
            filename:     'mapa_de_expectativas.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 3, useCORS: true }, // Increased scale for better quality
            pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }, // Avoid breaking elements across pages
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
        };

        // Add class to apply print styles
        document.body.classList.add('exporting-pdf');

        html2pdf().from(element).set(opt).save().then(() => {
            // Remove class after PDF is generated
            document.body.classList.remove('exporting-pdf');
        });
    });

    // Initial setup
    renderQuestions();
    createPositioningChart(); // Create the new chart on load
    updateResults();
    updateAllSliderVisuals(); // Set initial colors for sliders
});
