import Origin from './radio';
import './index.less';
import Group from './group';

export type RadioProps = typeof Origin & {
  Group: typeof Group;
}

const Radio = Origin as RadioProps;
Radio.Group = Group;

export default Radio;
