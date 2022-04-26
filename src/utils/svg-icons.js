const sourceSvgIcons = import.meta.globEager('../icons/svg/*.svg')
const svgIcons = Object.keys(sourceSvgIcons).map(key => key.replace("../icons/svg/", "").replace(".svg", ""))

export default svgIcons
