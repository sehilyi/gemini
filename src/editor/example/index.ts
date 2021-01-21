import { GeminidSpec } from '../../core/geminid.schema';

// Real-world examples
import { CORCES_2020_NATURE_GENETICS } from './corces-2020-nature-genetics';

// Basic examples
import { EXMAPLE_BASIC_MARKS } from './basic/basic-marks';
import { EXAMPLE_SUPERPOSE } from './basic/superpose';
import { EXAMPLE_IDEOGRAM } from './basic/ideogram';
import { EXAMPLE_GENE_ANNOTATION } from './basic/gene-annotation';
import { EXAMPLE_LINKS } from './basic/links';
import { EXAMPLE_OVERVIEW_DEATIL } from './basic/overview-plus-detail-views';
import { EXAMPLE_PERIPHERAL_PLOT } from './basic/peripheral-plot';
import { EXAMPLE_SEMANTIC_ZOOMING } from './basic/semantic-zoom';
import { EXMAPLE_BASIC_LINKING } from './basic/basic-linking';
import { EXAMPLE_UPSET } from './basic/upset';
import { EXAMPLE_LOGO_LIKE } from './basic/text-stretch';
import { EXAMPLE_CIRCOS } from './basic/circos';
import { EXAMPLE_CIRCOS_MANY } from './basic/circos-many-rows';
import { EXAMPLE_CIRCOS_STACKING } from './basic/circos-stacking';
import { EXAMPLE_SUPERPOSED_CIRCULAR_TRACKS } from './basic/superposed-circular';
import { EXAMPLE_OF_EXPERIMENT } from './experimental';
import { EXAMPLE_CYTOAND_HG38 } from './cytoband-hg38';
import { EXAMPLE_2019_WENGER } from './wenger-2019';
import { GENOCAT_CIRCOS } from './genocat-circos';
import { GENOCAT_CNVKIT } from './genocat-cnvkit';
import { GENOCAT_SWAV } from './genocat-swav';
import { GENOCAT_GIVE } from './genocat-give';
import { GENOCAT_GREMLIN } from './genocat-gremlin';
import { GENOCAT_MIZBEE } from './genocat-mizbee';
import { EXAMPLE_SIMPLEST } from './basic/simplest-spec';

export const examples: ReadonlyArray<{
    name: string;
    spec: GeminidSpec;
    description?: string;
    underDevelopment?: boolean;
    hidden?: boolean;
    forceShow?: boolean;
}> = [
    {
        name: 'Experimental',
        spec: EXAMPLE_OF_EXPERIMENT,
        underDevelopment: true,
        hidden: true,
        forceShow: false
    },
    {
        name: '[GenoCAT] Circos',
        spec: GENOCAT_CIRCOS,
        underDevelopment: true,
        forceShow: true
    },
    {
        name: '[GenoCAT] GIVE',
        spec: GENOCAT_GIVE,
        underDevelopment: true
    },
    {
        name: '[GenoCAT] Gremlin',
        spec: GENOCAT_GREMLIN,
        underDevelopment: true
    },
    {
        name: '[GenoCAT] MizBee',
        spec: GENOCAT_MIZBEE,
        underDevelopment: true
    },
    {
        name: '[GenoCAT] CNVkit',
        spec: GENOCAT_CNVKIT,
        underDevelopment: true
    },
    {
        name: '[GenoCAT] SWAV',
        spec: GENOCAT_SWAV,
        underDevelopment: true
    },
    {
        name: 'UCSC Cyto band (hg38)',
        spec: EXAMPLE_CYTOAND_HG38
    },
    {
        name: 'Wenger et al. 2019 (SV)',
        spec: EXAMPLE_2019_WENGER
    },
    {
        name: 'Corces et al. 2020 (Nature Genetics)',
        spec: CORCES_2020_NATURE_GENETICS
    },
    {
        name: 'Simplest Spec',
        spec: EXAMPLE_SIMPLEST
    },
    {
        name: 'Basic Marks',
        spec: EXMAPLE_BASIC_MARKS
    },
    {
        name: 'Text Marks',
        spec: EXAMPLE_LOGO_LIKE
    },
    {
        name: 'Superposed Tracks',
        spec: EXAMPLE_SUPERPOSE
    },
    {
        name: 'Ideograms (Static)',
        spec: EXAMPLE_IDEOGRAM
    },
    {
        name: 'Custom Gene Annotation Tracks',
        spec: EXAMPLE_GENE_ANNOTATION
    },
    {
        name: 'Band and Line Connections',
        spec: EXAMPLE_LINKS
    },
    {
        name: 'Semantic Zooming',
        spec: EXAMPLE_SEMANTIC_ZOOMING
    },
    {
        name: 'Basic Linking Views',
        spec: EXMAPLE_BASIC_LINKING
    },
    {
        name: 'Overview + Detail views',
        spec: EXAMPLE_OVERVIEW_DEATIL
    },
    {
        name: 'Peripheral Plot',
        spec: EXAMPLE_PERIPHERAL_PLOT,
        underDevelopment: true
    },
    {
        name: 'Basic Circular Marks',
        spec: EXAMPLE_CIRCOS,
        underDevelopment: true
    },
    {
        name: 'Basic Circular Marks 2',
        spec: EXAMPLE_CIRCOS_MANY,
        underDevelopment: true
    },
    {
        name: 'Superposed Circular Tracks',
        spec: EXAMPLE_SUPERPOSED_CIRCULAR_TRACKS,
        underDevelopment: true
    },
    {
        name: 'Stacking Circular Tracks',
        spec: EXAMPLE_CIRCOS_STACKING,
        underDevelopment: true
    },
    {
        name: 'UpSet-like Plot',
        spec: EXAMPLE_UPSET,
        hidden: true
    }
].filter(d => !d.hidden);
