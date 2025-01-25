export function externalTooltip(context) {
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
    const bodyLines = tooltip.body.map(bodyItem => bodyItem.lines)

    // Start Building Tooltip Content
    let innerHtml = '<div class="flex px-3 py-2 text-2 backdrop-blur-md items-center bg-b1/80 border border-b3 gap-1 rounded-lg font-medium text-bc">'

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
  }

  // Adjust for Overflow on the Bottom
  if (posY + tooltipHeight > chartTop + chartHeight) {
    posY = chartTop + caretY - tooltipHeight - 10 // Flip above
  }

  // Ensure Tooltip Stays in Viewport
  const viewportWidth = document.documentElement.clientWidth
  const viewportHeight = document.documentElement.clientHeight

  if (posX < 0)
    posX = 10 // Prevent left overflow
  if (posX + tooltipWidth > viewportWidth)
    posX = viewportWidth - tooltipWidth - 20 // Prevent right overflow
  if (posY < 0)
    posY = 10 // Prevent top overflow
  if (posY + tooltipHeight > viewportHeight)
    posY = viewportHeight - tooltipHeight - 10 // Prevent bottom overflow

  // Apply Styles
  tooltipEl.style.left = `${posX}px`
  tooltipEl.style.top = `${posY}px`
  tooltipEl.style.opacity = '1'
  tooltipEl.style.display = 'block'
}
