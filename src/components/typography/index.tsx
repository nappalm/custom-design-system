import Origin from './typography';
import './index.less';

import Text from './text';

export type TypographyProps = typeof Origin & {
  Text: typeof Text;
}

const Typography = Origin as TypographyProps;

Typography.Text = Text;

export default Typography;
