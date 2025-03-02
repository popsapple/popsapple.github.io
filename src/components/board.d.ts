import React from 'react';
import { Items } from '@components/skill-button';
type BoardType = {
    type: keyof typeof Items;
    children?: React.ReactNode;
    onClose: () => void;
};
declare const Board: (props: BoardType) => React.JSX.Element;
export default Board;
//# sourceMappingURL=../../../src/components/board.d.ts.map