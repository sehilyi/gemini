import { GoslingSpec } from '../../core/gosling.schema';

export const EX_SPEC_PILEUP: GoslingSpec = {
    title: 'BAM Data',
    subtitle: 'BAM Data',
    static: false,
    layout: 'linear',
    centerRadius: 0.05,
    xDomain: { chromosome: '1', interval: [137750, 138450] },
    // xDomain: { chromosome: '1', interval: [0, 200000] },
    tracks: [
        {
            data: {
                type: 'bam',
                // url: 'https://s3.amazonaws.com/gosling-lang.org/data/example_higlass.bam'
                url: 'https://aveit.s3.amazonaws.com/higlass/bam/example_higlass.bam'
            },
            mark: 'rect',
            x: { field: 'from', type: 'genomic' },
            xe: { field: 'to', type: 'genomic' },
            // opacity: { value: 0.1 },
            displacement: {
                type: 'pile'
            },
            // y: { field: 'TRAIT', type: 'nominal' },
            // row: { field: 'CATEGORY', type: 'nominal', domain: colorDomain },
            // color: { field: 'CATEGORY', type: 'nominal', domain: colorDomain, range: colorRange },
            // size: { value: 3 },
            stroke: { value: 'black' },
            strokeWidth: { value: 0.5 },
            style: { outlineWidth: 0.5 },
            width: 1050,
            height: 1050
        }
    ]
};
