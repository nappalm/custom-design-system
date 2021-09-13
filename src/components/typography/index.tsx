import Origin from './typography';
import './index.less';

import Text from './text';
import Title from './title';
import Link from './link';

export type TypographyProps = typeof Origin & {
  Text: typeof Text;
  Title: typeof Title;
  Link: typeof Link;
}

const Typography = Origin as TypographyProps;

Typography.Text = Text;
Typography.Title = Title;
Typography.Link = Link;

export default Typography;
