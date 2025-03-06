import React from 'react';
import { ItemKeys } from '@components/icon-button';
type BoardType = {
    type: ItemKeys;
    children?: React.ReactNode;
    onClose: () => void;
};
declare const Board: (props: BoardType) => React.JSX.Element;
export default Board;
//# sourceMappingURL=../../../src/components/board.d.ts.map