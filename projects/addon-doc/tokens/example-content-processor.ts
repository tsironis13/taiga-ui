import {tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc/utils';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import {identity} from 'rxjs';

/**
 * Processes content in example
 */
export const TUI_DOC_EXAMPLE_CONTENT_PROCESSOR =
    tuiCreateToken<TuiHandler<Record<string, string>, Record<string, string>>>(identity);

/**
 * Processes markdown in code block
 */
export const TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR = tuiCreateToken<
    TuiHandler<string, readonly string[]>
>(tuiTryParseMarkdownCodeBlock);
