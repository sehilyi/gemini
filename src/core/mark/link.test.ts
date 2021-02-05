import * as PIXI from 'pixi.js';
import { GoslingTrackModel } from '../gosling-track-model';
import { BasicSingleTrack } from '../gosling.schema';
import { drawLink } from './link';

describe('Rendering link', () => {
    const g = new PIXI.Graphics();
    it('Linear Band', () => {
        const t: BasicSingleTrack = {
            data: { type: 'csv', url: '' },
            mark: 'link',
            x: { field: 'x', type: 'genomic' },
            xe: { field: 'xe', type: 'genomic' },
            x1: { field: 'x1', type: 'genomic' },
            x1e: { field: 'x1e', type: 'genomic' },
            width: 100,
            height: 100
        };
        const d = [
            { x: 1, x1: 2, xe: 3, x1e: 4 },
            { x: 11, x1: 22, xe: 33, x1e: 44 },
            { x: 111, x1: 222, xe: 333, x1e: 444 }
        ];
        const model = new GoslingTrackModel(t, d);
        drawLink(g, model);
    });
    it('Circular Band', () => {
        const t: BasicSingleTrack = {
            layout: 'circular',
            data: { type: 'csv', url: '' },
            mark: 'link',
            x: { field: 'x', type: 'genomic' },
            xe: { field: 'xe', type: 'genomic' },
            x1: { field: 'x1', type: 'genomic' },
            x1e: { field: 'x1e', type: 'genomic' },
            width: 100,
            height: 100
        };
        const d = [
            { x: 1, x1: 2, xe: 3, x1e: 4 },
            { x: 11, x1: 22, xe: 33, x1e: 44 },
            { x: 111, x1: 222, xe: 333, x1e: 444 }
        ];
        const model = new GoslingTrackModel(t, d);
        drawLink(g, model);
    });
    it('Linear line', () => {
        const t: BasicSingleTrack = {
            layout: 'linear',
            data: { type: 'csv', url: '' },
            mark: 'link',
            x: { field: 'x', type: 'genomic' },
            xe: { field: 'xe', type: 'genomic' },
            width: 100,
            height: 100
        };
        const d = [
            { x: 1, x1: 2, xe: 3, x1e: 4 },
            { x: 11, x1: 22, xe: 33, x1e: 44 },
            { x: 111, x1: 222, xe: 333, x1e: 444 }
        ];
        const model = new GoslingTrackModel(t, d);
        drawLink(g, model);
    });
    it('Circular line', () => {
        const t: BasicSingleTrack = {
            layout: 'circular',
            data: { type: 'csv', url: '' },
            mark: 'link',
            x: { field: 'x', type: 'genomic' },
            xe: { field: 'xe', type: 'genomic' },
            width: 100,
            height: 100
        };
        const d = [
            { x: 1, x1: 2, xe: 3, x1e: 4 },
            { x: 11, x1: 22, xe: 33, x1e: 44 },
            { x: 111, x1: 222, xe: 333, x1e: 444 }
        ];
        const model = new GoslingTrackModel(t, d);
        drawLink(g, model);
    });
});
