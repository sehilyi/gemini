import { GeminiTrackModel } from '../../core/gemini-track-model';
import { drawPoint } from './point';
import { drawLine } from './line';
import { drawBar } from './bar';
import { drawArea } from './area';
import { drawRect } from './rect';
import { ChannelTypes } from '../../core/gemini.schema';
import { drawTriangle } from './triangle';
import { drawText } from './text';
import { drawRule } from './rule';
import { drawLink } from './link';
import { drawGrid } from './grid';

/**
 * Visual channels currently supported for visual encoding.
 */
export const SUPPORTED_CHANNELS: (keyof typeof ChannelTypes)[] = [
    'color',
    'x',
    'xe',
    'y',
    'ye',
    'x1',
    'x1e',
    'y1',
    'y1e',
    'size',
    'row',
    'stroke',
    'strokeWidth',
    'opacity',
    'text',
    'background'
    // ...
];

export const RESOLUTION = 4;

/**
 * Draw a track based on the track specification in a Gemini grammar.
 */
export function drawMark(HGC: any, trackInfo: any, tile: any, gm: GeminiTrackModel) {
    /**
     * TODO: Major Missing Things That We Need To Support Here
     * - Supporting vertical tracks
     * - Covering differet field type combinations, other than 1G, 1C, 1Q (e.g., multiple stacked bar charts)
     * - Draw axis for individual rows
     * - Misconnection between tiles (e.g., lines)
     * - Differentiate categorical colors from quantitative colors
     * - SVG support
     * - Genomic coordinates on both x and y axes
     * - Tooltip
     * - Legends
     * - Glyph
     * - Data aggregation
     * - If invalide spec, show message
     * - Gap between rows
     * - Incorrect scale at the end of the genomic coordinate
     * - Scaling not consistent with zoom level
     * - Occasional black screen when zoomed in
     * - Support half resolution of tiles from the server
     */
    if (!HGC || !trackInfo || !tile) {
        // we do not receive proper parameters
        return;
    }

    /* embellishment */
    drawGrid(HGC, trackInfo, tile, gm);

    /* spec */
    switch (gm.spec().mark) {
        case 'point':
            drawPoint(HGC, trackInfo, tile, gm);
            break;
        case 'bar':
            drawBar(HGC, trackInfo, tile, gm);
            break;
        case 'line':
            drawLine(HGC, trackInfo, tile, gm);
            break;
        case 'area':
            drawArea(HGC, trackInfo, tile, gm);
            break;
        case 'rect':
            drawRect(HGC, trackInfo, tile, gm);
            break;
        case 'triangle-l':
        case 'triangle-r':
        case 'triangle-d':
            drawTriangle(HGC, trackInfo, tile, gm);
            break;
        case 'text':
            drawText(HGC, trackInfo, tile, gm);
            break;
        case 'rule':
            drawRule(HGC, trackInfo, tile, gm);
            break;
        case 'link':
            drawLink(HGC, trackInfo, tile, gm);
            break;
        default:
            console.warn('Unsupported mark type');
            break;
    }

    if (!tile.rowScale || !tile.spriteInfos) {
        console.warn('Information for resaling tiles is not properly generated after drawing a track');
    }
}