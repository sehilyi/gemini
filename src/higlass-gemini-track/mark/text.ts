import { GeminiTrackModel } from '../../core/gemini-track-model';
import { IsChannelDeep, getValueUsingChannel, Channel } from '../../core/gemini.schema';
// import { RESOLUTION } from '.';

export function drawText(HGC: any, trackInfo: any, tile: any, tm: GeminiTrackModel) {
    /* track spec */
    const spec = tm.spec();

    /* helper */
    const { colorToHex } = HGC.utils;

    /* data */
    const data = tm.data();

    /* track size */
    // const trackHeight = trackInfo.dimensions[1];
    // const tileSize = trackInfo.tilesetInfo.tile_size;
    // const { tileX, tileWidth } = trackInfo.getTilePosAndDimensions(
    //     tile.tileData.zoomLevel,
    //     tile.tileData.tilePos,
    //     tileSize
    // );

    /* genomic scale */
    const xScale = trackInfo._xScale;
    // const barWidth = xScale(tileX + tileWidth / tileSize) - xScale(tileX);

    /* row separation */
    const rowCategories =
        IsChannelDeep(spec.row) && spec.row.field
            ? Array.from(new Set(data.map(d => getValueUsingChannel(d, spec.row as Channel) as string)))
            : ['___SINGLE_ROW___']; // if `row` is undefined, use only one row internally

    // const rowHeight = trackHeight / rowCategories.length;

    /* information for rescaling tiles */
    tile.rowScale = tm.getChannelScale('row');
    tile.spriteInfos = []; // sprites for individual rows or columns

    // TODO: what is quantitative Y field is used for heatmap?
    // const yCategories =
    //     IsChannelDeep(spec.y) && spec.y.field
    //         ? Array.from(new Set(data.map(d => getValueUsingChannel(d, spec.y as Channel) as string)))
    //         : ['___SINGLE_Y_POSITION___']; // if `y` is undefined, use only one row internally
    // const cellHeight = rowHeight / yCategories.length;

    /* render */
    rowCategories.forEach(rowCategory => {
        // we are separately drawing each row so that y scale can be more effectively shared across tiles without rerendering from the bottom
        const rowGraphics = tile.graphics; // new HGC.libraries.PIXI.Graphics();
        const rowPosition = tm.encodedValue('row', rowCategory);

        // stroke
        rowGraphics.lineStyle(
            tm.encodedValue('strokeWidth'),
            colorToHex(tm.encodedValue('stroke')),
            1, // alpha
            0 // alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
        );

        data.filter(
            d =>
                !getValueUsingChannel(d, spec.row as Channel) ||
                (getValueUsingChannel(d, spec.row as Channel) as string) === rowCategory
        ).forEach(d => {
            const xValue = getValueUsingChannel(d, spec.x as Channel) as number;
            const xeValue = getValueUsingChannel(d, spec.xe as Channel) as number;
            const yValue = getValueUsingChannel(d, spec.y as Channel) as string | number;
            // const colorValue = getValueUsingChannel(d, spec.color as Channel) as string;
            const textValue = getValueUsingChannel(d, spec.text as Channel) as string;

            const x = xScale(xValue);
            const xe = xScale(xeValue);
            const y = tm.encodedValue('y', yValue);
            // const color = tm.encodedValue('color', colorValue);
            // const opacity = tm.encodedValue('opacity');

            // rowGraphics.beginFill(colorToHex(color), opacity);
            // rowGraphics.drawRect(x, rowPosition + y - cellHeight / 2.0, xe ? xe - x : barWidth, cellHeight);

            const text = new HGC.libraries.PIXI.Text(textValue, {
                fontSize: '12px',
                fontFamily: 'Arial',
                fill: 'black'
                // fontWeight: 'bold'
            });

            if (!textValue || xe - x < text.width) {
                return;
            }

            text.position.x = (x + xe - text.width) / 2.0;
            text.position.y = rowPosition + y - text.height / 2.0;

            // pixi
            rowGraphics.addChild(text);
        });

        // add graphics of this row
        // const texture = HGC.services.pixiRenderer.generateTexture(
        //     rowGraphics,
        //     HGC.libraries.PIXI.SCALE_MODES.NEAREST,
        //     RESOLUTION
        // );
        // const sprite = new HGC.libraries.PIXI.Sprite(texture);

        // sprite.width = xScale(tileX + tileWidth) - xScale(tileX);
        // sprite.x = xScale(tileX);
        // sprite.y = rowPosition;
        // sprite.height = rowHeight;

        // tile.spriteInfos.push({ sprite: sprite, scaleKey: rowCategory });
        // tile.graphics.addChild(sprite);
    });
}