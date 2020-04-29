import { GroupedRadarInterface, TimeInterval } from './CrowTypes';

const globalChartMarginLeft = 65; // In-SVG margin used for axis and legend
const globalChartMarginRight = 60; // In-SVG margin used for axis and legend
const svgWidth = 72 * (60 / 5) + globalChartMarginLeft + globalChartMarginRight; // 72 = max number of visible hours (see availableTimeIntervals). 5 = duration in minutes of a period (=vtpsData.temporalResolution)


export default {
    dataServerUrl: 'https://crow.weernet.be',
    availableRadars: [
        {
            label: 'Belgium',
            options: [
                { value: "behel", text: "Helchteren", latitude: 51.069199, longitude: 5.406138, timezone: 'Europe/Brussels' },
                { value: "bejab", text: "Jabbeke", latitude: 51.1919, longitude: 3.0641, timezone: 'Europe/Brussels' },
                { value: "bewid", text: "Wideumont", latitude: 49.9135, longitude: 5.5044, timezone: 'Europe/Brussels' },
                { value: "bezav", text: "Zaventem", latitude: 50.9054, longitude: 4.4579, timezone: 'Europe/Brussels' },
            ]
        },
        {
            label: 'Germany',
            options: [
                { value: "deess", text: "Essen", latitude: 51.4055, longitude: 6.9669, timezone: 'Europe/Berlin' },
                { value: "denhb", text: "Neuheilenbach", latitude: 50.1097, longitude: 6.5483, timezone: 'Europe/Berlin' }
            ]
        },
        {
            label: 'Netherlands',
            options: [
                { value: "nlhrw", text: "Herwijnen", latitude: 51.83708, longitude: 5.13797, timezone: 'Europe/Amsterdam' },
            ]
        }
    ] as GroupedRadarInterface[],

    initialRadarValue: 'behel',

    availableTimeIntervals: [
        { text: '1d', value: 24 },
        { text: '3d', value: 72 },
        { text: '1h', value: 1 } // Only for debugging: intervals that are not multiple of 24h won't work properly with the time navigation logic
    ] as TimeInterval[],

    initialTimeInterval: 24,

    vtpsFormat: {
        availableHeights: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800],
        temporalResolution: 5 * 60, // seconds
        numHeaderLines: 4
    },

    VPChartStyle: {
        margin: { top: 20, right: globalChartMarginRight, bottom: 30, left: globalChartMarginLeft },
        width: svgWidth,
        height: 300,

        showTooltip: false, // BEWARE: useful for debugging, but performance is horrible

        minDensityColor: '#f0f0f0',
        maxDensityColor: '#dc3545',
        noDataColor: 'white',

        axisTimeFormat: " HH:mm z",
        tooltipTimeFormat: "MMM D - HH:mm z",

        yAxisLeftTicks: [0, 1000, 2000, 3000, 4000] // Let's not show all altitudes (too crowded)
    },
    VPIChartStyle: {
        margin: { top: 15, right: globalChartMarginRight, bottom: 30, left: globalChartMarginLeft },
        width: svgWidth,
        height: 300,

        axisTimeFormat: " HH:mm z",
        tooltipTimeFormat: "MMM D - HH:mm z",

        lineColor: 'steelblue',

        showTooltip: true,
    },

    TimelineChartStyle: {
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        width: svgWidth - globalChartMarginLeft - globalChartMarginRight, // This chart is embedded into the main charts, and should be as long as the X axis
        height: 10,

        tooltipTimeFormat: "MMM D - HH:mm z",

        showTooltip: true,
    }
}