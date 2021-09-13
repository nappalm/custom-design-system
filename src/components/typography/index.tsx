import Origin from './typography';
import './index.less';

import Text from './text';
import Title from './title';
import Paragraph from './paragraph';
import Link from './link';

export type TypographyProps = typeof Origin & {
  Text: typeof Text;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
  Link: typeof Link;
}

const Typography = Origin as TypographyProps;

Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Link = Link;

export default Typography;
