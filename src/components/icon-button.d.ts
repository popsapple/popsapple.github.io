import { JSX } from 'react';
declare const Items: {
    DOT1: string;
    REACT: string;
    JS: string;
    VUE: string;
    ROLLUP: string;
    STAR: string;
    ABOUT: string;
    LIT: string;
    SASS: string;
    ELECTRON: string;
    SVELTE: string;
    DOT2: string;
};
export type ItemKeys = keyof typeof Items;
declare const IconButton: (props: {
    type: ItemKeys;
    children?: JSX.Element;
    onClick: (type: ItemKeys) => void;
}) => JSX.Element;
export { IconButton, Items };
//# sourceMappingURL=../../../src/components/icon-button.d.ts.map