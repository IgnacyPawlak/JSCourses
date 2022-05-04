import React from 'react';
/**
 * @param htmlTag: html tag like div, td, span
 * @param htmlString: string with html
 * @param rest: other html attributes of [htmlTag]
 * @returns {*|Element} JSX
 * @constructor
 */
declare const Markup: ({ htmlTag, htmlString, ...rest }: {
    [x: string]: any;
    htmlTag?: string | undefined;
    htmlString?: string | undefined;
}) => React.DOMElement<{
    [x: string]: any;
}, Element>;
export default Markup;