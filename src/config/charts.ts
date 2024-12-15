import { Chart } from 'chart.js'

Chart.defaults.datasets.doughnut.borderRadius = 100
Chart.defaults.datasets.doughnut.borderJoinStyle = 'round'
Chart.defaults.datasets.doughnut.hoverBorderWidth = 1

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/config/charts.ts
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
<<<<<<< HEAD:src/config/charts.ts
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
<<<<<<< HEAD:src/config/charts.ts
>>>>>>> 2c930845 (update 38 files and delete 54 files)
export const externalTooltip = (context) => {
    // Tooltip Element
    let tooltipEl = document.getElementById('chartjs-tooltip')

    // Create Tooltip if Not Exists
    if (!tooltipEl) {
        tooltipEl = document.createElement('div')
        tooltipEl.id = 'chartjs-tooltip'
        tooltipEl.style.position = 'absolute'
        tooltipEl.style.pointerEvents = 'none'
        tooltipEl.style.transition = 'opacity 0.2s ease'
        tooltipEl.style.opacity = '0' // Start hidden
        document.body.appendChild(tooltipEl)
    }

    const tooltip = context.tooltip

    // Hide Tooltip if Not Active
    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = '0'
        tooltipEl.style.display = 'none'
        return
    }

    // Set Content
    const { caretX, caretY, body } = tooltip

    // Set Content
    if (body) {
        const titleLines = tooltip.title || []
        const bodyLines = tooltip.body.map((bodyItem) => bodyItem.lines)

        // Start Building Tooltip Content
        let innerHtml =
            '<div class="flex px-3 py-2 text-2 backdrop-blur-md items-center bg-b1/80 border border-b3 gap-1 rounded-lg font-medium text-bc">'

        // Add Body Lines (e.g., Percentages)
        bodyLines.forEach((body) => {
            body.forEach((line) => {
                innerHtml += `<span>${line}%</span>`
            })
        })

        // Add Title Lines (e.g., Role)
        titleLines.forEach((title) => {
            console.log('💠 - titleLines.forEach - title:', title)
            innerHtml += `<span>${title}</span>`
        })
        innerHtml += '</div>'

        // Update Tooltip Inner HTML
        tooltipEl.innerHTML = innerHtml
    }

    // Tooltip Dimensions
    const tooltipWidth = tooltipEl.offsetWidth
    const tooltipHeight = tooltipEl.offsetHeight

    // Chart Dimensions
    const chartPosition = context.chart.canvas.getBoundingClientRect()
    const chartLeft = chartPosition.left + window.pageXOffset
    const chartTop = chartPosition.top + window.pageYOffset
    const chartWidth = chartPosition.width
    const chartHeight = chartPosition.height

    // Calculate Initial Tooltip Position
    let posX = chartLeft + caretX - 30 // Add 10px offset from caret
    let posY = chartTop + caretY + 10 // Add 10px offset from caret

    // Adjust for Overflow on the Right
    if (posX + tooltipWidth > chartLeft + chartWidth) {
        posX = chartLeft + caretX - tooltipWidth - 10 // Flip to the left
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======


export const externalTooltip = (context) => {
    // Tooltip Element
    let tooltipEl = document.getElementById('chartjs-tooltip');

    // Create Tooltip if Not Exists
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.transition = 'opacity 0.2s ease';
        tooltipEl.style.opacity = '0'; // Start hidden
        document.body.appendChild(tooltipEl);
    }

    const tooltip = context.tooltip;

    // Hide Tooltip if Not Active
    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = '0';
        tooltipEl.style.display = 'none';
        return;
    }

    // Set Content
    const { caretX, caretY, body } = tooltip;

// Set Content
if (body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map((bodyItem) => bodyItem.lines);

    // Start Building Tooltip Content
    let innerHtml =
        '<div class="flex px-3 py-2 text-2 backdrop-blur-md items-center bg-b1/80 border border-b3 gap-1 rounded-lg font-medium text-bc">';


    // Add Body Lines (e.g., Percentages)
    bodyLines.forEach((body) => {
        body.forEach((line) => {
            innerHtml += `<span>${line}%</span>`;
        });
    });

    // Add Title Lines (e.g., Role)
    titleLines.forEach((title) => {
        console.log("💠 - titleLines.forEach - title:", title)
        innerHtml += `<span>${title}</span>`;
    });
    innerHtml += '</div>';

    // Update Tooltip Inner HTML
    tooltipEl.innerHTML = innerHtml;

}


    // Tooltip Dimensions
    const tooltipWidth = tooltipEl.offsetWidth;
    const tooltipHeight = tooltipEl.offsetHeight;

    // Chart Dimensions
    const chartPosition = context.chart.canvas.getBoundingClientRect();
    const chartLeft = chartPosition.left + window.pageXOffset;
    const chartTop = chartPosition.top + window.pageYOffset;
    const chartWidth = chartPosition.width;
    const chartHeight = chartPosition.height;

    // Calculate Initial Tooltip Position
    let posX = chartLeft + caretX - 30; // Add 10px offset from caret
    let posY = chartTop + caretY + 10; // Add 10px offset from caret

    // Adjust for Overflow on the Right
    if (posX + tooltipWidth > chartLeft + chartWidth) {
        posX = chartLeft + caretX - tooltipWidth - 10; // Flip to the left
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/config/charts.ts
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/config/charts.ts
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/config/charts.ts
>>>>>>> 2c930845 (update 38 files and delete 54 files)
    }

    // Adjust for Overflow on the Bottom
    if (posY + tooltipHeight > chartTop + chartHeight) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/config/charts.ts
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
<<<<<<< HEAD:src/config/charts.ts
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
<<<<<<< HEAD:src/config/charts.ts
>>>>>>> 2c930845 (update 38 files and delete 54 files)
        posY = chartTop + caretY - tooltipHeight - 10 // Flip above
    }

    // Ensure Tooltip Stays in Viewport
    const viewportWidth = document.documentElement.clientWidth
    const viewportHeight = document.documentElement.clientHeight

    if (posX < 0) posX = 10 // Prevent left overflow
    if (posX + tooltipWidth > viewportWidth)
        posX = viewportWidth - tooltipWidth - 20 // Prevent right overflow
    if (posY < 0) posY = 10 // Prevent top overflow
    if (posY + tooltipHeight > viewportHeight)
        posY = viewportHeight - tooltipHeight - 10 // Prevent bottom overflow

    // Apply Styles
    tooltipEl.style.left = `${posX}px`
    tooltipEl.style.top = `${posY}px`
    tooltipEl.style.opacity = '1'
    tooltipEl.style.display = 'block'
}

let width, height, gradient
function getGradient(ctx, chartArea, colors) {
    const chartWidth = chartArea.right - chartArea.left
    const chartHeight = chartArea.bottom - chartArea.top
    if (!gradient || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth
        height = chartHeight
        gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
        )
        /*     gradient.addColorStop(0, Utils.CHART_COLORS.blue);
    gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);
    gradient.addColorStop(1, Utils.CHART_COLORS.red); */
    }

    return gradient
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
        posY = chartTop + caretY - tooltipHeight - 10; // Flip above
    }

    // Ensure Tooltip Stays in Viewport
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    if (posX < 0) posX = 10; // Prevent left overflow
    if (posX + tooltipWidth > viewportWidth) posX = viewportWidth - tooltipWidth - 20; // Prevent right overflow
    if (posY < 0) posY = 10; // Prevent top overflow
    if (posY + tooltipHeight > viewportHeight) posY = viewportHeight - tooltipHeight - 10; // Prevent bottom overflow

    // Apply Styles
    tooltipEl.style.left = `${posX}px`;
    tooltipEl.style.top = `${posY}px`;
    tooltipEl.style.opacity = '1';
    tooltipEl.style.display = 'block';

};


let width, height, gradient;
function getGradient(ctx, chartArea, colors) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
/*     gradient.addColorStop(0, Utils.CHART_COLORS.blue);
    gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);
    gradient.addColorStop(1, Utils.CHART_COLORS.red); */
  }

  return gradient;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/config/charts.ts
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/config/charts.ts
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/config/charts.ts
>>>>>>> 2c930845 (update 38 files and delete 54 files)
