import Origin from './typography';
import './index.less';

import Text from './text';
import Link from './link';

export type TypographyProps = typeof Origin & {
  Text: typeof Text;
  Link: typeof Link;
}

const Typography = Origin as TypographyProps;

Typography.Text = Text;
Typography.Link = Link;

export default Typography;
